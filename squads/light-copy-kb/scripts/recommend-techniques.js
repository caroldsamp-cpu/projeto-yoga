#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");
const REPORT_PATH = path.join(ROOT_DIR, "data", "kb-quality-report.json");
const PROFILE_PATH = path.join(ROOT_DIR, "data", "retrieval-profile.json");

const args = process.argv.slice(2);

function arg(name, fallback = "") {
  const flag = `--${name}`;
  const idx = args.indexOf(flag);
  if (idx < 0 || idx + 1 >= args.length) return fallback;
  return args[idx + 1];
}

function normalize(text) {
  return String(text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function inferIntent(text) {
  const t = normalize(text);
  if (/(comprar|venda|conversao|oferta|cta)/.test(t)) return "conversion";
  if (/(engajar|comentario|curiosidade|gancho|reter atencao)/.test(t)) return "engagement";
  if (/(autoridade|credibilidade|prova|especialista)/.test(t)) return "authority";
  if (/(reativar|retencao|fidelizar)/.test(t)) return "retention";
  return "attention";
}

function inferType(text) {
  const t = normalize(text);
  if (/(reel|reels)/.test(t)) return "reels";
  if (/(carrossel|carousel|slide)/.test(t)) return "carousel";
  if (/(email|newsletter)/.test(t)) return "email";
  if (/(landing|pagina de vendas|pagina)/.test(t)) return "landing_page";
  if (/(vsl|video de vendas)/.test(t)) return "vsl";
  if (/(anuncio|ad|trafego)/.test(t)) return "ad";
  return "reels";
}

function main() {
  const profile = JSON.parse(fs.readFileSync(PROFILE_PATH, "utf8"));
  const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));

  const text = arg("text", "");
  const contentType = arg("type", "") || inferType(text);
  const intent = arg("intent", "") || inferIntent(text);

  const perIntent = report.top_techniques_per_intent?.[intent] || [];
  const preferred = new Set(profile.profiles?.[contentType]?.preferred_techniques || []);

  const scored = perIntent.map((row) => ({
    technique: row.key,
    score: row.count + (preferred.has(row.key) ? 5 : 0),
    base_count: row.count,
    preferred: preferred.has(row.key)
  }));

  const max = profile.recommendation?.max_techniques || 5;
  let selected = scored.sort((a, b) => b.score - a.score).slice(0, max);

  if (!selected.length) {
    selected = (profile.recommendation?.fallback_techniques || []).slice(0, max).map((t) => ({
      technique: t,
      score: 0,
      base_count: 0,
      preferred: true
    }));
  }

  const output = {
    content_type: contentType,
    intent,
    recommendations: selected
  };

  console.log(JSON.stringify(output, null, 2));
}

main();