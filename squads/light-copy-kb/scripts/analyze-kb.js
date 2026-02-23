#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT_DIR, "data");
const INPUT = path.join(DATA_DIR, "normalized-chunks.jsonl");
const OUT_JSON = path.join(DATA_DIR, "kb-quality-report.json");
const OUT_MD = path.join(DATA_DIR, "kb-quality-report.md");

function loadJsonl(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

function inc(map, key, amount = 1) {
  map.set(key, (map.get(key) || 0) + amount);
}

function topEntries(map, topN = 12) {
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([key, count]) => ({ key, count }));
}

function analyze(records) {
  const byIntent = new Map();
  const byContentType = new Map();
  const byChunkType = new Map();
  const techniqueByIntent = new Map();
  const lowConfidenceByLesson = new Map();

  let sumConfidence = 0;

  for (const r of records) {
    const m = r.metadata || {};
    const intent = m.intent || "unknown";
    const chunkType = r.chunk_type || "unknown";
    const confidence = Number(m.confidence_score || 0);

    sumConfidence += confidence;
    inc(byIntent, intent);
    inc(byChunkType, chunkType);

    for (const ct of (m.content_types || [])) inc(byContentType, ct);

    for (const t of (m.techniques || [])) {
      const k = `${intent}::${t}`;
      inc(techniqueByIntent, k);
    }

    if (confidence < 0.55) {
      const lessonKey = `M${r.module_number} - ${r.lesson_title}`;
      inc(lowConfidenceByLesson, lessonKey);
    }
  }

  const avgConfidence = Number((sumConfidence / Math.max(records.length, 1)).toFixed(3));

  const topTechniquesPerIntent = {};
  const intents = [...byIntent.keys()];
  for (const intent of intents) {
    const local = new Map();
    for (const [k, count] of techniqueByIntent.entries()) {
      const [i, t] = k.split("::");
      if (i === intent) local.set(t, count);
    }
    topTechniquesPerIntent[intent] = topEntries(local, 8);
  }

  return {
    generated_at: new Date().toISOString(),
    total_chunks: records.length,
    avg_confidence: avgConfidence,
    distributions: {
      intent: topEntries(byIntent, 20),
      content_type: topEntries(byContentType, 20),
      chunk_type: topEntries(byChunkType, 20)
    },
    top_techniques_per_intent: topTechniquesPerIntent,
    lessons_with_most_low_confidence_chunks: topEntries(lowConfidenceByLesson, 15)
  };
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Light Copy KB Quality Report");
  lines.push("");
  lines.push(`- Generated at: ${report.generated_at}`);
  lines.push(`- Total chunks: ${report.total_chunks}`);
  lines.push(`- Avg confidence: ${report.avg_confidence}`);
  lines.push("");

  lines.push("## Distribution by Intent");
  for (const x of report.distributions.intent) lines.push(`- ${x.key}: ${x.count}`);
  lines.push("");

  lines.push("## Distribution by Content Type");
  for (const x of report.distributions.content_type) lines.push(`- ${x.key}: ${x.count}`);
  lines.push("");

  lines.push("## Top Techniques by Intent");
  for (const intent of Object.keys(report.top_techniques_per_intent)) {
    lines.push(`### ${intent}`);
    const rows = report.top_techniques_per_intent[intent];
    if (!rows || rows.length === 0) {
      lines.push("- no mapped techniques");
      continue;
    }
    for (const r of rows) lines.push(`- ${r.key}: ${r.count}`);
  }
  lines.push("");

  lines.push("## Lessons with Most Low-Confidence Chunks (< 0.55)");
  for (const x of report.lessons_with_most_low_confidence_chunks) lines.push(`- ${x.key}: ${x.count}`);
  lines.push("");

  return lines.join("\n");
}

function main() {
  if (!fs.existsSync(INPUT)) {
    throw new Error("normalized-chunks.jsonl not found. Run npm run normalize first.");
  }

  const records = loadJsonl(INPUT);
  const report = analyze(records);

  fs.writeFileSync(OUT_JSON, JSON.stringify(report, null, 2), "utf8");
  fs.writeFileSync(OUT_MD, toMarkdown(report), "utf8");

  console.log("KB analysis completed");
  console.log(`Chunks: ${report.total_chunks}`);
  console.log(`Avg confidence: ${report.avg_confidence}`);
  console.log(`JSON report: data\\kb-quality-report.json`);
  console.log(`Markdown report: data\\kb-quality-report.md`);
}

try {
  main();
} catch (error) {
  console.error("KB analysis failed");
  console.error(error.message || error);
  process.exit(1);
}