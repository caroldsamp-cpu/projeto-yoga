#!/usr/bin/env node

const { ChromaClient, DefaultEmbeddingFunction } = require("chromadb");

const CHROMA_URL = process.env.CHROMA_URL || "http://localhost:8000";
const CHUNK_COLLECTION = process.env.CHROMA_CHUNKS_COLLECTION || "light-copy-chunks";
const QUERY = process.argv.slice(2).join(" ") || "como aplicar urgencia em copy de vendas";

async function main() {
  const client = new ChromaClient({ path: CHROMA_URL });
  const embeddingFunction = new DefaultEmbeddingFunction();
  const collection = await client.getCollection({ name: CHUNK_COLLECTION, embeddingFunction });

  const result = await collection.query({
    queryTexts: [QUERY],
    nResults: 5
  });

  console.log("Query:", QUERY);
  console.log("Matches:", (result.ids && result.ids[0] ? result.ids[0].length : 0));

  const ids = result.ids?.[0] || [];
  const docs = result.documents?.[0] || [];
  const metas = result.metadatas?.[0] || [];

  for (let i = 0; i < ids.length; i += 1) {
    const m = metas[i] || {};
    console.log(`\n#${i + 1} ${ids[i]}`);
    console.log(`module=${m.module_number} lesson=${m.lesson_title} intent=${m.intent}`);
    console.log((docs[i] || "").slice(0, 260));
  }
}

main().catch((error) => {
  console.error("Query test failed");
  console.error(error.message || error);
  process.exit(1);
});