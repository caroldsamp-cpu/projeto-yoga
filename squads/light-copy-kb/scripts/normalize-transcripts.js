#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const ROOT_DIR = path.resolve(__dirname, "..");
const TRANSCRIPTS_DIR = path.join(ROOT_DIR, "transcripts");
const DATA_DIR = path.join(ROOT_DIR, "data");
const TAXONOMY_PATH = path.join(DATA_DIR, "metadata-taxonomy.yaml");
const OUTPUT_JSONL = path.join(DATA_DIR, "normalized-chunks.jsonl");
const OUTPUT_SUMMARY = path.join(DATA_DIR, "normalized-summary.json");

const TARGET_CHARS = 850;
const MIN_CHARS = 320;
const OVERLAP_CHARS = 140;
const MAX_SENTENCE_CHARS = 320;

function slugify(input) {
  return normalizeBase(input)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function normalizeBase(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function normalizeComparable(value) {
  return normalizeBase(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function readTranscript(filePath) {
  const buffer = fs.readFileSync(filePath);
  const utf8 = buffer.toString("utf8");
  const mojibakeHits = (utf8.match(/[ÃÂ]/g) || []).length;
  if (mojibakeHits > 16) {
    return buffer.toString("latin1");
  }
  return utf8;
}

function compactStutter(text) {
  return text
    .replace(/\b(\w+)\s+\1\s+\1\b/gi, "$1 $1")
    .replace(/\b(\w+)\s+\1\s+\1\s+\1\b/gi, "$1 $1");
}

function stripNoiseArtifacts(text) {
  return text
    .replace(/\b(ah|ahn|hum|uh|hmm|tipo|ne|né)\b(\s+\1\b){2,}/gi, "$1")
    .replace(/\b(pra|para)\s+\1\b/gi, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function cleanText(raw) {
  return stripNoiseArtifacts(
    compactStutter(
      String(raw || "")
        .replace(/\uFEFF/g, "")
        .replace(/\r\n/g, "\n")
        .replace(/\r/g, "\n")
        .replace(/[\t ]+/g, " ")
        .replace(/\n{3,}/g, "\n\n")
        .trim()
    )
  );
}

function splitLongSentence(sentence, maxChars = MAX_SENTENCE_CHARS) {
  if (sentence.length <= maxChars) return [sentence];
  const parts = [];
  const tokens = sentence.split(/\s+/).filter(Boolean);
  let current = "";
  for (const token of tokens) {
    if (!current) {
      current = token;
      continue;
    }
    if ((current.length + 1 + token.length) <= maxChars) {
      current += " " + token;
    } else {
      parts.push(current);
      current = token;
    }
  }
  if (current) parts.push(current);
  return parts;
}

function isLowSignalSentence(sentence) {
  const s = normalizeComparable(sentence);
  if (!s) return true;
  const tokens = s.split(" ").filter(Boolean);
  if (tokens.length < 4) return true;

  const filler = new Set(["tipo", "ne", "né", "ah", "ahn", "hum", "uh", "hmm", "ta", "tá"]);
  const fillerCount = tokens.filter((t) => filler.has(t)).length;
  if (fillerCount / tokens.length >= 0.5) return true;

  const uniqueRatio = new Set(tokens).size / tokens.length;
  if (tokens.length >= 8 && uniqueRatio < 0.35) return true;

  return false;
}

function splitSentences(text) {
  const normalized = text.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
  if (!normalized) return [];

  const rawParts = normalized.split(/(?<=[.!?])\s+/u).filter(Boolean);
  const parts = [];
  for (const p of rawParts) {
    splitLongSentence(p).forEach((s) => {
      const cleaned = stripNoiseArtifacts(s.trim());
      if (!isLowSignalSentence(cleaned)) parts.push(cleaned);
    });
  }
  return parts.filter(Boolean);
}

function chunkSentences(sentences) {
  const chunks = [];
  let current = "";

  for (const sentence of sentences) {
    if (!current) {
      current = sentence;
      continue;
    }

    if ((current.length + 1 + sentence.length) <= TARGET_CHARS) {
      current += " " + sentence;
      continue;
    }

    if (current.length < MIN_CHARS) {
      current += " " + sentence;
      continue;
    }

    chunks.push(current.trim());
    const overlap = current.slice(Math.max(0, current.length - OVERLAP_CHARS)).trim();
    current = overlap ? `${overlap} ${sentence}` : sentence;
  }

  if (current.trim()) chunks.push(current.trim());

  if (chunks.length >= 2 && chunks[chunks.length - 1].length < 180) {
    chunks[chunks.length - 2] = `${chunks[chunks.length - 2]} ${chunks[chunks.length - 1]}`.trim();
    chunks.pop();
  }

  return chunks;
}

function parseFilename(fileName) {
  const base = fileName.replace(/\.txt$/i, "").trim();
  const normalized = normalizeComparable(base);
  const match = normalized.match(/^modulo\s+(\d+)\s+-\s+(.+)$/i);

  if (!match) {
    return { moduleNumber: 0, lessonTitle: base };
  }

  const titleOriginal = base.replace(/^M[oó]dulo\s+\d+\s+-\s+/i, "").trim();
  return { moduleNumber: Number(match[1]), lessonTitle: titleOriginal || match[2] };
}

function loadTaxonomy() {
  const raw = fs.readFileSync(TAXONOMY_PATH, "utf8");
  return yaml.load(raw);
}

function containsAny(text, terms) {
  return terms.some((term) => text.includes(term));
}

function detectTechniques(normalizedText, taxonomy) {
  const found = [];

  for (const item of taxonomy.techniques || []) {
    const aliases = [item.name, ...(item.aliases || [])].map((v) => normalizeComparable(v));
    if (containsAny(normalizedText, aliases)) found.push(item.name);
  }

  return [...new Set(found)];
}

function detectLiteraryElements(normalizedText, taxonomy) {
  const values = (taxonomy.literary_elements || []).filter((x) => normalizedText.includes(normalizeComparable(x)));
  return [...new Set(values)];
}

function detectPersuasionDrivers(normalizedText) {
  const map = {
    novelty: ["novidade", "novo", "nova"],
    social_proof: ["prova", "depoimento", "resultado", "cases"],
    urgency: ["urgencia", "agora", "ultimo dia"],
    scarcity: ["escassez", "vagas", "limitado"],
    anticipation: ["antecipacao", "amanha", "em breve"],
    reciprocity: ["reciprocidade", "retribuir", "devolver"],
    authority: ["autoridade", "especialista", "expert"],
    community: ["comunidade", "tribo", "grupo"],
    recognition: ["reconhecimento", "status", "prestigio"],
    enemy_in_common: ["inimigo em comum", "inimigo"]
  };

  return Object.keys(map).filter((driver) => containsAny(normalizedText, map[driver]));
}

function inferContentTypes(normalizedCombined) {
  const score = new Map();

  function add(type, points) {
    score.set(type, (score.get(type) || 0) + points);
  }

  const rules = [
    ["newsletter", "newsletter", 4],
    ["vsl", "vsl", 4],
    ["video de vendas", "vsl", 3],
    ["pagina de vendas", "landing_page", 4],
    ["orderbump", "landing_page", 3],
    ["upsell", "landing_page", 3],
    ["downsell", "landing_page", 3],
    ["anuncio", "ad", 3],
    ["trafego", "ad", 2],
    ["mensageria", "whatsapp", 4],
    ["whatsapp", "whatsapp", 3],
    ["stories", "stories", 4],
    ["story", "stories", 2],
    ["reels", "reels", 4],
    ["reel", "reels", 3],
    ["video curto", "reels", 2],
    ["gancho", "reels", 1],
    ["carrossel", "carousel", 4],
    ["carousel", "carousel", 4],
    ["slide", "carousel", 2],
    ["email", "email", 4],
    ["assunto do email", "email", 2]
  ];

  for (const [needle, type, points] of rules) {
    if (normalizedCombined.includes(needle)) add(type, points);
  }

  const ranked = [...score.entries()].sort((a, b) => b[1] - a[1]);
  const selected = ranked.filter(([, pts]) => pts >= 3).slice(0, 3).map(([type]) => type);

  if (selected.length === 0) return ["longform"];
  if (!selected.includes("longform") && ranked.every(([, pts]) => pts <= 4)) selected.push("longform");
  return [...new Set(selected)];
}

function inferChunkType(normalizedText) {
  if (containsAny(normalizedText, ["exercicio", "pratica", "treine"])) return "exercise";
  if (containsAny(normalizedText, ["historia", "conto", "parabola"])) return "story";
  if (containsAny(normalizedText, ["cuidado", "erro", "evite", "nao faca"])) return "warning";
  if (containsAny(normalizedText, ["passo", "metodo", "framework", "estrutura"])) return "framework";
  if (containsAny(normalizedText, ["oferta", "cta", "compre", "clique", "inscreva"])) return "cta";
  if (containsAny(normalizedText, ["exemplo", "case", "caso", "analise"])) return "example";
  if (containsAny(normalizedText, ["tecnica", "aplique", "faca assim", "use"])) return "tactic";
  return "concept";
}

function inferIntent(chunkType, normalizedText) {
  if (chunkType === "cta" || containsAny(normalizedText, ["venda", "comprar", "conversao"])) return "conversion";
  if (chunkType === "story" || containsAny(normalizedText, ["atencao", "curiosidade", "gancho"])) return "engagement";
  if (containsAny(normalizedText, ["autoridade", "especialista", "prova"])) return "authority";
  if (containsAny(normalizedText, ["retencao", "recorrencia", "continuar", "lealdade"])) return "retention";
  return "attention";
}

function inferAudienceStage(normalizedText) {
  if (containsAny(normalizedText, ["cliente", "aluno", "comprou", "pos-venda"])) return "customer";
  if (containsAny(normalizedText, ["pronto para comprar", "quente", "hot"])) return "hot";
  if (containsAny(normalizedText, ["frio", "nao conhece"])) return "cold";
  return "warm";
}

function confidenceScore(meta) {
  let score = 0.44;
  score += Math.min(meta.techniques.length * 0.07, 0.21);
  score += Math.min(meta.literary_elements.length * 0.05, 0.15);
  score += Math.min(meta.persuasion_drivers.length * 0.04, 0.12);
  if (meta.content_types.length > 0) score += 0.05;
  if (!meta.content_types.includes("longform")) score += 0.02;
  return Math.min(0.95, Number(score.toFixed(2)));
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function main() {
  ensureDir(DATA_DIR);

  if (!fs.existsSync(TRANSCRIPTS_DIR)) {
    throw new Error("transcripts/ directory not found");
  }

  const taxonomy = loadTaxonomy();
  const files = fs.readdirSync(TRANSCRIPTS_DIR)
    .filter((f) => f.toLowerCase().endsWith(".txt"))
    .sort((a, b) => a.localeCompare(b, "pt-BR"));

  if (files.length === 0) {
    throw new Error("No .txt files found in transcripts/");
  }

  const records = [];
  const lessonStats = [];

  for (const fileName of files) {
    const filePath = path.join(TRANSCRIPTS_DIR, fileName);
    const rawText = cleanText(readTranscript(filePath));
    if (!rawText) continue;

    const { moduleNumber, lessonTitle } = parseFilename(fileName);
    const sentences = splitSentences(rawText);
    const chunks = chunkSentences(sentences);

    let localCount = 0;

    for (let i = 0; i < chunks.length; i += 1) {
      const clean = chunks[i];
      const normalized = normalizeComparable(clean);
      const combined = `${normalizeComparable(lessonTitle)} ${normalized}`;
      const chunkType = inferChunkType(normalized);

      const metadata = {
        techniques: detectTechniques(normalized, taxonomy),
        literary_elements: detectLiteraryElements(normalized, taxonomy),
        persuasion_drivers: detectPersuasionDrivers(normalized),
        content_types: inferContentTypes(combined),
        audience_stage: inferAudienceStage(normalized),
        intent: inferIntent(chunkType, normalized),
        confidence_score: 0,
        notes: ""
      };

      metadata.confidence_score = confidenceScore(metadata);

      const chunkId = `m${String(moduleNumber).padStart(2, "0")}-${slugify(lessonTitle)}-${String(i + 1).padStart(4, "0")}`;

      const record = {
        chunk_id: chunkId,
        source_file: fileName,
        module_number: moduleNumber,
        lesson_title: lessonTitle,
        raw_text: clean,
        clean_text: clean,
        chunk_type: chunkType,
        position: {
          chunk_index: i,
          start_char: 0,
          end_char: clean.length
        },
        metadata
      };

      records.push(record);
      localCount += 1;
    }

    lessonStats.push({
      file: fileName,
      chunks: localCount,
      module_number: moduleNumber,
      lesson_title: lessonTitle
    });
  }

  const jsonl = records.map((r) => JSON.stringify(r)).join("\n") + "\n";
  fs.writeFileSync(OUTPUT_JSONL, jsonl, "utf8");

  const summary = {
    generated_at: new Date().toISOString(),
    transcripts_count: lessonStats.length,
    chunk_count: records.length,
    avg_chunk_chars: Number((records.reduce((acc, r) => acc + r.clean_text.length, 0) / Math.max(records.length, 1)).toFixed(1)),
    output_jsonl: path.relative(ROOT_DIR, OUTPUT_JSONL),
    lessons: lessonStats
  };

  fs.writeFileSync(OUTPUT_SUMMARY, JSON.stringify(summary, null, 2), "utf8");

  console.log("Normalization completed");
  console.log(`Transcripts: ${summary.transcripts_count}`);
  console.log(`Chunks: ${summary.chunk_count}`);
  console.log(`Avg chunk chars: ${summary.avg_chunk_chars}`);
  console.log(`JSONL: ${summary.output_jsonl}`);
}

try {
  main();
} catch (error) {
  console.error("Normalization failed");
  console.error(error.message || error);
  process.exit(1);
}