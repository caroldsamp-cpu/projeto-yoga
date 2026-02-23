#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { ChromaClient, DefaultEmbeddingFunction } = require("chromadb");

const ROOT_DIR = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT_DIR, "data");
const NORMALIZED_PATH = path.join(DATA_DIR, "normalized-chunks.jsonl");

const CHROMA_URL = process.env.CHROMA_URL || "http://localhost:8000";
const CHUNK_COLLECTION = process.env.CHROMA_CHUNKS_COLLECTION || "light-copy-chunks";
const LESSON_COLLECTION = process.env.CHROMA_LESSONS_COLLECTION || "light-copy-lessons";

function toScalarMetadata(metadata) {
  const out = {};
  for (const [key, value] of Object.entries(metadata)) {
    if (Array.isArray(value)) {
      out[key] = value.join("|");
      out[`${key}_count`] = value.length;
    } else if (typeof value === "object" && value !== null) {
      out[key] = JSON.stringify(value);
    } else {
      out[key] = value;
    }
  }
  return out;
}

function loadJsonl(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

function batch(items, size) {
  const out = [];
  for (let i = 0; i < items.length; i += size) {
    out.push(items.slice(i, i + size));
  }
  return out;
}

function buildLessonDocs(records) {
  const map = new Map();

  for (const r of records) {
    const key = `${r.module_number}::${r.lesson_title}`;
    if (!map.has(key)) {
      map.set(key, {
        id: `lesson-${String(r.module_number).padStart(2, "0")}-${r.lesson_title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`,
        module_number: r.module_number,
        lesson_title: r.lesson_title,
        source_file: r.source_file,
        texts: [],
        intents: new Set(),
        content_types: new Set()
      });
    }

    const item = map.get(key);
    item.texts.push(r.clean_text);
    item.intents.add(r.metadata.intent);
    for (const c of r.metadata.content_types || []) item.content_types.add(c);
  }

  return [...map.values()].map((x) => ({
    id: x.id,
    document: x.texts.slice(0, 5).join(" ").slice(0, 6000),
    metadata: {
      source_file: x.source_file,
      module_number: x.module_number,
      lesson_title: x.lesson_title,
      primary_themes: "light-copy",
      audience_stage: "mixed",
      intents: [...x.intents].join("|"),
      content_types: [...x.content_types].join("|")
    }
  }));
}

async function main() {
  if (!fs.existsSync(NORMALIZED_PATH)) {
    throw new Error("normalized-chunks.jsonl not found. Run: npm run normalize");
  }

  const records = loadJsonl(NORMALIZED_PATH);
  if (records.length === 0) {
    throw new Error("normalized-chunks.jsonl is empty");
  }

  const client = new ChromaClient({ path: CHROMA_URL });
  const embeddingFunction = new DefaultEmbeddingFunction();

  const chunksCollection = await client.getOrCreateCollection({
    name: CHUNK_COLLECTION,
    metadata: { purpose: "light-copy structured chunks" },
    embeddingFunction
  });

  const lessonCollection = await client.getOrCreateCollection({
    name: LESSON_COLLECTION,
    metadata: { purpose: "light-copy lesson summaries" },
    embeddingFunction
  });

  const chunkPayload = records.map((r) => ({
    id: r.chunk_id,
    document: r.clean_text,
    metadata: toScalarMetadata({
      source_file: r.source_file,
      module_number: r.module_number,
      lesson_title: r.lesson_title,
      chunk_type: r.chunk_type,
      techniques: r.metadata.techniques,
      literary_elements: r.metadata.literary_elements,
      persuasion_drivers: r.metadata.persuasion_drivers,
      content_types: r.metadata.content_types,
      audience_stage: r.metadata.audience_stage,
      intent: r.metadata.intent,
      confidence_score: r.metadata.confidence_score
    })
  }));

  const chunkBatches = batch(chunkPayload, 100);
  for (let i = 0; i < chunkBatches.length; i += 1) {
    const group = chunkBatches[i];
    await chunksCollection.upsert({
      ids: group.map((g) => g.id),
      documents: group.map((g) => g.document),
      metadatas: group.map((g) => g.metadata)
    });
    if ((i + 1) % 5 === 0 || i === chunkBatches.length - 1) {
      console.log(`Chunk batches: ${i + 1}/${chunkBatches.length}`);
    }
  }

  const lessonDocs = buildLessonDocs(records);
  const lessonBatches = batch(lessonDocs, 100);
  for (let i = 0; i < lessonBatches.length; i += 1) {
    const group = lessonBatches[i];
    await lessonCollection.upsert({
      ids: group.map((g) => g.id),
      documents: group.map((g) => g.document),
      metadatas: group.map((g) => g.metadata)
    });
    console.log(`Lesson batches: ${i + 1}/${lessonBatches.length}`);
  }

  console.log("Ingestion completed");
  console.log(`Chroma URL: ${CHROMA_URL}`);
  console.log(`Chunk collection: ${CHUNK_COLLECTION}`);
  console.log(`Chunks upserted: ${chunkPayload.length}`);
  console.log(`Lesson collection: ${LESSON_COLLECTION}`);
  console.log(`Lessons upserted: ${lessonDocs.length}`);
}

main().catch((error) => {
  console.error("Ingestion failed");
  console.error(error.message || error);
  process.exit(1);
});