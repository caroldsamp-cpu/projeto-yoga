#!/usr/bin/env node
'use strict';

/**
 * enrich-techniques.js
 * LLM-based enrichment of techniques, literary_elements and persuasion_drivers
 * for normalized Light Copy KB chunks.
 *
 * Usage:
 *   node scripts/enrich-techniques.js           # full run
 *   node scripts/enrich-techniques.js --dry-run # test without API calls (shows 5 sample outputs)
 *   node scripts/enrich-techniques.js --resume  # resume from checkpoint
 *   node scripts/enrich-techniques.js --limit 50 # process only N chunks
 *
 * ADR: squads/light-copy-kb/docs/decision-logs/ADR-001-llm-enrichment-strategy.md
 */

try { require('dotenv').config({ path: require('path').resolve(__dirname, '../../../.env') }); } catch {}

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const Anthropic = require('@anthropic-ai/sdk');

// ─── Paths ───────────────────────────────────────────────────────────────────
const ROOT_DIR       = path.resolve(__dirname, '..');
const DATA_DIR       = path.join(ROOT_DIR, 'data');
const JSONL_PATH     = path.join(DATA_DIR, 'normalized-chunks.jsonl');
const CHECKPOINT_PATH = path.join(DATA_DIR, 'enrich-checkpoint.json');
const TAXONOMY_PATH  = path.join(DATA_DIR, 'metadata-taxonomy.yaml');

// ─── CLI Args ─────────────────────────────────────────────────────────────────
const args     = process.argv.slice(2);
const DRY_RUN  = args.includes('--dry-run');
const RESUME   = args.includes('--resume');
const limitIdx = args.indexOf('--limit');
const LIMIT    = limitIdx >= 0 ? parseInt(args[limitIdx + 1], 10) : null;

// ─── Rate limiting (ADR-001: 10 req/s) ───────────────────────────────────────
const RATE_DELAY_MS = 100; // 10 req/s

// ─── Taxonomy (controlled vocabulary) ────────────────────────────────────────
const TAXONOMY = yaml.load(fs.readFileSync(TAXONOMY_PATH, 'utf8'));

const VALID_TECHNIQUES        = new Set(TAXONOMY.techniques.map(t => t.name));
const VALID_LITERARY_ELEMENTS = new Set(TAXONOMY.literary_elements);
const VALID_PERSUASION_DRIVERS = new Set(TAXONOMY.persuasion_drivers);

// ─── Few-shot examples (ADR-001: 3 exemplos por categoria) ───────────────────
const FEW_SHOT_EXAMPLES = `
--- EXEMPLOS ---

Exemplo 1:
intent: attention
chunk_type: concept
text: "A maioria das pessoas acha que copy é saber escrever bem. Mas copy de verdade começa antes de escrever. Começa numa premissa. Uma premissa irrefutável que o leitor vai aceitar antes mesmo de perceber que está sendo persuadido."
→ {"techniques": ["logic_of_premises"], "literary_elements": [], "persuasion_drivers": [], "confidence_score": 0.72}

Exemplo 2:
intent: engagement
chunk_type: story
text: "Você já parou pra pensar por que algumas histórias ficam na sua cabeça por anos? Não é acidente. Tem uma estrutura. Tem um setup. Tem uma virada. E no final, tem um punchline que cristaliza tudo em uma única frase que você vai lembrar amanhã."
→ {"techniques": ["curiosity_hook"], "literary_elements": ["setup_punchline"], "persuasion_drivers": ["anticipation"], "confidence_score": 0.78}

Exemplo 3:
intent: conversion
chunk_type: tactic
text: "O erro que 90% dos copywriters cometem é começar pelo benefício. O cliente não quer o benefício. Ele quer evitar a dor. Então antes de falar o que ele ganha, fale o que ele está perdendo agora. Crie o contraste. Antes e depois."
→ {"techniques": ["contrast_positioning", "objection_killing"], "literary_elements": ["antitese"], "persuasion_drivers": ["urgency"], "confidence_score": 0.82}

Exemplo 4:
intent: authority
chunk_type: framework
text: "Depois de analisar mais de 500 cartas de vendas que geraram milhões, cheguei a uma conclusão: toda abertura que funciona tem três elementos. Ela surpreende. Ela provoca. Ela promete. Sem esses três, você perde o leitor nos primeiros três segundos."
→ {"techniques": ["authority_building", "magnetic_opening"], "literary_elements": ["triade_comica"], "persuasion_drivers": ["authority", "social_proof"], "confidence_score": 0.85}

Exemplo 5:
intent: attention
chunk_type: example
text: "Pensa no Seu Madruga. Pensa no Chapolin. São personagens que a gente ama porque eles são piores do que a gente. E isso cria uma identificação imediata. É o inimigo em comum: o fracasso. Você usa isso no copy pra criar identificação antes da solução."
→ {"techniques": ["contrast_positioning"], "literary_elements": ["analogia", "personificacao"], "persuasion_drivers": ["enemy_in_common", "community"], "confidence_score": 0.79}

--- FIM DOS EXEMPLOS ---
`;

// ─── Anthropic client ─────────────────────────────────────────────────────────
let anthropic;
if (!DRY_RUN) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('❌ ANTHROPIC_API_KEY não definida. Configure no .env ou exporte antes de rodar.');
    process.exit(1);
  }
  anthropic = new Anthropic({ apiKey });
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Exponential backoff retry (ADR-001: delays 1s→2s→4s, max 3 attempts)
 */
async function withRetry(fn, chunkId) {
  const delays = [1000, 2000, 4000];
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      return await fn();
    } catch (err) {
      const isRetryable = err.status === 429 || err.status === 500 || err.status === 503;
      if (isRetryable && attempt < 2) {
        console.warn(`  ⚠️  ${chunkId}: erro ${err.status}, retry ${attempt + 1}/3 em ${delays[attempt]}ms`);
        await sleep(delays[attempt]);
      } else {
        throw err;
      }
    }
  }
}

/**
 * Validate LLM output — only accept terms in controlled vocabulary (AC7)
 */
function validateTerms(field, values, validSet, chunkId) {
  const invalid = values.filter(v => !validSet.has(v));
  if (invalid.length > 0) {
    console.warn(`  ⚠️  ${chunkId}: termos fora da taxonomia em '${field}' removidos: [${invalid.join(', ')}]`);
  }
  return values.filter(v => validSet.has(v));
}

/**
 * Compute updated confidence_score (ADR-001 formula)
 * base 0.44 + techniques bonus + literary bonus + drivers bonus, capped at 0.95
 */
function computeConfidence(metadata) {
  let score = 0.44;
  score += Math.min(metadata.techniques.length * 0.07, 0.21);
  score += Math.min(metadata.literary_elements.length * 0.05, 0.15);
  score += Math.min(metadata.persuasion_drivers.length * 0.04, 0.12);
  if (metadata.content_types && metadata.content_types.length > 0) score += 0.05;
  if (metadata.content_types && !metadata.content_types.includes('longform')) score += 0.02;
  return Math.min(0.95, Number(score.toFixed(2)));
}

/**
 * Build classification prompt for a single chunk (ADR-001: few-shot)
 */
function buildPrompt(chunk) {
  const taxonomyRef = `
Vocabulário controlado (use EXATAMENTE esses termos, nunca invente outros):
- techniques: logic_of_premises | magnetic_opening | objection_killing | curiosity_hook | authority_building | contrast_positioning
- literary_elements: aforismo | antitese | anafora | hiperbole | ironia | paradoxo | personificacao | jogo_de_palavras | setup_punchline | triade_comica | neologismo | analogia
- persuasion_drivers: novelty | social_proof | urgency | scarcity | anticipation | reciprocity | authority | community | recognition | enemy_in_common
`;

  return `Você é um classificador especialista em técnicas de copywriting Light Copy.
Sua tarefa: identificar quais técnicas, elementos literários e drivers de persuasão estão PRESENTES no texto abaixo.

REGRAS CRÍTICAS:
1. Use APENAS termos do vocabulário controlado fornecido
2. Retorne APENAS o JSON, sem texto adicional, sem markdown, sem explicação
3. Deixe o array vazio [] se nenhum elemento daquela categoria estiver presente
4. confidence_score: valor entre 0.45 e 0.95 refletindo sua certeza na classificação

${taxonomyRef}

${FEW_SHOT_EXAMPLES}

Agora classifique este chunk:
intent: ${chunk.metadata.intent}
chunk_type: ${chunk.chunk_type}
text: "${(chunk.clean_text || chunk.raw_text || '').replace(/"/g, "'").slice(0, 900)}"

Retorne APENAS JSON no formato:
{"techniques": [], "literary_elements": [], "persuasion_drivers": [], "confidence_score": 0.0}`;
}

/**
 * Call Claude API for a single chunk
 */
async function classifyChunk(chunk) {
  const response = await withRetry(async () => {
    return await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 256,
      messages: [{ role: 'user', content: buildPrompt(chunk) }]
    });
  }, chunk.chunk_id);

  const raw = response.content[0].text.trim();

  // Parse JSON — strip any accidental markdown fences
  const cleaned = raw.replace(/^```json?\s*/i, '').replace(/\s*```$/i, '').trim();
  let parsed;
  try {
    parsed = JSON.parse(cleaned);
  } catch {
    console.warn(`  ⚠️  ${chunk.chunk_id}: JSON inválido do LLM, usando arrays vazios`);
    parsed = { techniques: [], literary_elements: [], persuasion_drivers: [], confidence_score: 0.50 };
  }

  return {
    techniques:         validateTerms('techniques',         Array.isArray(parsed.techniques)         ? parsed.techniques         : [], VALID_TECHNIQUES,         chunk.chunk_id),
    literary_elements:  validateTerms('literary_elements',  Array.isArray(parsed.literary_elements)  ? parsed.literary_elements  : [], VALID_LITERARY_ELEMENTS,  chunk.chunk_id),
    persuasion_drivers: validateTerms('persuasion_drivers', Array.isArray(parsed.persuasion_drivers) ? parsed.persuasion_drivers : [], VALID_PERSUASION_DRIVERS, chunk.chunk_id),
    confidence_score:   typeof parsed.confidence_score === 'number' ? parsed.confidence_score : 0.50,
    input_tokens:       response.usage?.input_tokens  || 0,
    output_tokens:      response.usage?.output_tokens || 0
  };
}

// ─── Checkpoint ───────────────────────────────────────────────────────────────
function loadCheckpoint() {
  if (!fs.existsSync(CHECKPOINT_PATH)) return null;
  try {
    return JSON.parse(fs.readFileSync(CHECKPOINT_PATH, 'utf8'));
  } catch {
    return null;
  }
}

function saveCheckpoint(data) {
  fs.writeFileSync(CHECKPOINT_PATH, JSON.stringify(data, null, 2), 'utf8');
}

// ─── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log('🔧 enrich-techniques.js');
  console.log(`   Mode: ${DRY_RUN ? 'DRY-RUN (sem API calls)' : 'LIVE'} | resume: ${RESUME} | limit: ${LIMIT ?? 'all'}`);
  console.log('');

  // Load all chunks
  const rawLines = fs.readFileSync(JSONL_PATH, 'utf8').split('\n').filter(Boolean);
  const allChunks = rawLines.map(line => JSON.parse(line));
  const totalChunks = allChunks.length;
  console.log(`📦 Total chunks: ${totalChunks}`);

  // Resume logic — find start index from checkpoint
  let startIndex = 0;
  if (RESUME) {
    const checkpoint = loadCheckpoint();
    if (checkpoint && checkpoint.last_chunk_id) {
      const idx = allChunks.findIndex(c => c.chunk_id === checkpoint.last_chunk_id);
      if (idx >= 0) {
        startIndex = idx + 1;
        console.log(`⏭️  Resumindo do checkpoint: ${checkpoint.last_chunk_id} (índice ${startIndex})`);
        console.log(`   Já processados: ${checkpoint.processed_count}/${totalChunks}`);
      }
    } else {
      console.log('⚠️  Checkpoint não encontrado, iniciando do zero.');
    }
  }

  const chunksToProcess = allChunks.slice(startIndex, LIMIT ? startIndex + LIMIT : undefined);
  console.log(`🎯 Chunks a processar: ${chunksToProcess.length}`);
  console.log('');

  // Dry-run: show 5 sample prompts and mock outputs
  if (DRY_RUN) {
    console.log('─── DRY-RUN: exibindo 5 amostras de prompt/output ───\n');
    const samples = chunksToProcess.slice(0, 5);
    for (const chunk of samples) {
      console.log(`chunk_id: ${chunk.chunk_id}`);
      console.log(`text (300 chars): ${(chunk.clean_text || chunk.raw_text || '').slice(0, 300)}`);
      console.log(`→ [MOCK] {"techniques": ["curiosity_hook"], "literary_elements": [], "persuasion_drivers": ["anticipation"], "confidence_score": 0.68}`);
      console.log('');
    }
    console.log('✅ Dry-run concluído. Nenhuma API call feita, nenhum arquivo modificado.');
    return;
  }

  // Stats
  const stats = {
    started_at: new Date().toISOString(),
    processed: 0,
    enriched: 0,
    errors: 0,
    total_input_tokens: 0,
    total_output_tokens: 0,
    skipped: startIndex
  };

  const enrichedChunks = allChunks.slice(0, startIndex); // already-processed chunks (not re-touched)

  const checkpoint = {
    last_chunk_id: startIndex > 0 ? allChunks[startIndex - 1].chunk_id : null,
    processed_count: startIndex,
    total_count: totalChunks,
    started_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  for (let i = 0; i < chunksToProcess.length; i++) {
    const chunk = chunksToProcess[i];
    const globalIdx = startIndex + i + 1;

    // Progress every 50 chunks
    if (i % 50 === 0) {
      const pct = ((globalIdx / totalChunks) * 100).toFixed(1);
      const estimatedCostUSD = ((stats.total_input_tokens / 1_000_000) * 0.80 + (stats.total_output_tokens / 1_000_000) * 4.00).toFixed(4);
      console.log(`[${globalIdx}/${totalChunks}] ${pct}% | erros: ${stats.errors} | custo est.: $${estimatedCostUSD}`);
    }

    try {
      const result = await classifyChunk(chunk);

      // Update chunk metadata (T2.3 — validated terms, T2.4 — confidence)
      const updatedChunk = { ...chunk };
      updatedChunk.metadata = {
        ...chunk.metadata,
        techniques:         result.techniques,
        literary_elements:  result.literary_elements,
        persuasion_drivers: result.persuasion_drivers,
        confidence_score:   computeConfidence({
          ...chunk.metadata,
          techniques:         result.techniques,
          literary_elements:  result.literary_elements,
          persuasion_drivers: result.persuasion_drivers
        })
      };

      enrichedChunks.push(updatedChunk);
      stats.processed++;
      if (result.techniques.length > 0 || result.literary_elements.length > 0 || result.persuasion_drivers.length > 0) {
        stats.enriched++;
      }
      stats.total_input_tokens  += result.input_tokens;
      stats.total_output_tokens += result.output_tokens;

      // Save checkpoint every 100 chunks
      if (stats.processed % 100 === 0) {
        checkpoint.last_chunk_id   = chunk.chunk_id;
        checkpoint.processed_count = startIndex + stats.processed;
        checkpoint.updated_at      = new Date().toISOString();
        saveCheckpoint(checkpoint);
      }

    } catch (err) {
      console.error(`  ❌ ${chunk.chunk_id}: falha após 3 tentativas — ${err.message}`);
      enrichedChunks.push(chunk); // keep original chunk on error
      stats.errors++;
    }

    // Rate limiting: 10 req/s (ADR-001)
    await sleep(RATE_DELAY_MS);
  }

  // T2.5 — Save enriched JSONL (only if no --limit, or if explicitly running full)
  console.log('\n💾 Salvando JSONL enriquecido...');
  const jsonlOut = enrichedChunks.map(c => JSON.stringify(c)).join('\n') + '\n';
  fs.writeFileSync(JSONL_PATH, jsonlOut, 'utf8');

  // Final checkpoint
  checkpoint.last_chunk_id   = chunksToProcess[chunksToProcess.length - 1]?.chunk_id || checkpoint.last_chunk_id;
  checkpoint.processed_count = startIndex + stats.processed;
  checkpoint.updated_at      = new Date().toISOString();
  saveCheckpoint(checkpoint);

  // Summary
  const estimatedCostUSD = ((stats.total_input_tokens / 1_000_000) * 0.80 + (stats.total_output_tokens / 1_000_000) * 4.00).toFixed(4);
  console.log('\n─── RESUMO ───────────────────────────────────────');
  console.log(`Total chunks:       ${totalChunks}`);
  console.log(`Processados:        ${stats.processed}`);
  console.log(`Enriquecidos:       ${stats.enriched} (${((stats.enriched / Math.max(stats.processed, 1)) * 100).toFixed(1)}%)`);
  console.log(`Erros:              ${stats.errors}`);
  console.log(`Tokens (input):     ${stats.total_input_tokens.toLocaleString()}`);
  console.log(`Tokens (output):    ${stats.total_output_tokens.toLocaleString()}`);
  console.log(`Custo estimado:     $${estimatedCostUSD}`);
  console.log(`Iniciado em:        ${stats.started_at}`);
  console.log(`Concluído em:       ${new Date().toISOString()}`);
  console.log('──────────────────────────────────────────────────');

  if (stats.errors > 0) {
    console.log(`\n⚠️  ${stats.errors} chunks com erro mantiveram metadados originais.`);
  }
  console.log('\n✅ Enriquecimento concluído. Execute npm run analyze para gerar o relatório de qualidade.');
}

main().catch(err => {
  console.error('❌ Falha fatal:', err.message || err);
  process.exit(1);
});
