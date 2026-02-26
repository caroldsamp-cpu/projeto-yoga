# ADR-001 — LLM Enrichment Strategy for Light Copy KB

**Date:** 2026-02-26
**Status:** Accepted
**Story:** S-09.1 — Enriquecer KB com Extração de Técnicas via LLM
**Decided by:** @architect (Aria)
**Implemented by:** @dev (Dex)

---

## Context

The Light Copy KB normalized pipeline produced 3.581 chunks with 82% missing `techniques`, 100% missing `literary_elements` and `persuasion_drivers`. A classification script using the Anthropic Claude API is needed to enrich these fields using the controlled vocabulary in `metadata-taxonomy.yaml`.

Three decisions were required before implementation:
1. Prompt strategy (zero-shot vs. few-shot)
2. Model selection (claude-haiku-4-5 vs. claude-sonnet-4-6)
3. Batching strategy (single vs. multi-chunk per request)

---

## Decision 1: Prompt Strategy

**Decision: Few-Shot with 3 examples per taxonomy category**

### Options Considered

| Option | Pros | Cons |
|--------|------|------|
| Zero-shot | Simpler prompt, cheaper | Ambiguous aliases, invents terms outside taxonomy |
| Few-shot (3 examples/category) | Anchors model on real patterns, reduces hallucination | Larger prompt (~1.100 extra tokens) |
| Chain-of-thought | Better reasoning | Much larger cost, unnecessary for structured classification |

### Rationale

The taxonomy has 28 terms across 3 dimensions with Portuguese aliases that are ambiguous in isolation (e.g., `"premissa"` could be a logic structure or a storytelling element). The source text is informal spoken Portuguese — zero-shot LLMs tend to apply general NLP labels rather than specific taxonomy terms.

Few-shot examples grounded in real chunk excerpts reduce out-of-vocabulary classifications. 3 examples per category is the minimum effective threshold for structured classification tasks.

### Prompt Structure

```
System: Você é um classificador de técnicas de copywriting. Use EXCLUSIVAMENTE os termos da taxonomia fornecida.

Taxonomia:
- techniques: [logic_of_premises, magnetic_opening, objection_killing, curiosity_hook, authority_building, contrast_positioning]
- literary_elements: [aforismo, antitese, anafora, hiperbole, ironia, paradoxo, personificacao, jogo_de_palavras, setup_punchline, triade_comica, neologismo, analogia]
- persuasion_drivers: [novelty, social_proof, urgency, scarcity, anticipation, reciprocity, authority, community, recognition, enemy_in_common]

Exemplos:
[3 examples per category showing text → classification mapping]

User: Classifique o chunk:
intent: {intent}
chunk_type: {chunk_type}
text: {clean_text}

Retorne JSON: {"techniques": [], "literary_elements": [], "persuasion_drivers": [], "confidence_score": 0.0}
```

---

## Decision 2: Model Selection

**Decision: claude-haiku-4-5 with progressive validation gate**

### Options Considered

| Model | Cost (3.581 chunks) | Speed | Suitability for structured classification |
|-------|---------------------|-------|------------------------------------------|
| claude-haiku-4-5 | ~$0.80 | ~50 req/s | Adequate with few-shot |
| claude-sonnet-4-6 | ~$8.70 | ~15 req/s | Excellent |

### Rationale

This is a structured classification task (not creative generation) with:
- Controlled vocabulary (28 terms)
- Few-shot examples for anchoring
- JSON output format

Haiku is well-suited for structured classification with few-shot prompting. The 10× cost difference ($0.80 vs $8.70) is not justified without validating necessity.

### Validation Gate (MANDATORY before full run)

```bash
node scripts/enrich-techniques.js --limit 50 --dry-run
```

**Decision rule:**
- If manual inspection of 50 samples shows accuracy ≥ 75% → proceed with Haiku for all 3.581 chunks
- If accuracy < 75% → escalate to Sonnet **only** for chunks where `confidence_score < 0.60` (estimated ~30% of corpus = ~1.100 chunks at ~$2.60 additional cost)

### Escalation Path

```
Haiku full run → if quality insufficient →
  Re-run low-confidence chunks with claude-sonnet-4-6
  (targeted escalation, not full re-run)
```

---

## Decision 3: Batching Strategy

**Decision: 1 chunk per API request, 10 req/s with exponential backoff**

### Options Considered

| Option | Pros | Cons |
|--------|------|------|
| 1 chunk/request | Simple checkpoint, isolated errors, clean attribution | More API calls (3.581) |
| N chunks/request (5-10) | Fewer calls, lower latency | Classification bleeding between chunks, complex checkpoint |

### Rationale

Multi-chunk prompts risk "classification bleeding" — the model may attribute techniques from chunk A to chunk B when processing them in the same context window. Given the checkpoint/resume requirement (AC6), single-chunk granularity makes `enrich-checkpoint.json` trivial: just store the last `chunk_id`.

**Rate limiting:** 10 requests/second = ~6 minutes total for 3.581 chunks. Well within acceptable bounds.

**Retry strategy:**
```javascript
// Exponential backoff
const delays = [1000, 2000, 4000]; // ms
for (let attempt = 0; attempt < 3; attempt++) {
  try {
    return await callAPI(chunk);
  } catch (err) {
    if (err.status === 429 || err.status === 500) {
      await sleep(delays[attempt]);
    } else throw err;
  }
}
throw new Error(`Failed after 3 attempts: ${chunk.chunk_id}`);
```

---

## Implementation Notes for @dev

1. **Token budget per request:** ~2.400 tokens input (800 text + 500 taxonomy + 1.100 few-shot examples)
2. **Output format:** Strict JSON with `techniques[]`, `literary_elements[]`, `persuasion_drivers[]`, `confidence_score`
3. **Validation:** Before writing to JSONL, verify all returned terms are in the taxonomy (reject + log any hallucinated terms)
4. **Confidence update formula:** `base_score + 0.05 * len(techniques) + 0.03 * len(literary_elements)` (capped at 0.95)
5. **Backup:** `data/normalized-chunks.backup.jsonl` must exist before T2.5 (backup created in T2.0)

---

## Consequences

### Positive
- Low cost (~$0.80 base case)
- Fast execution (~6 minutes)
- Simple checkpoint/resume
- Controlled vocabulary enforcement prevents hallucination drift
- Escalation path available if quality is insufficient

### Negative / Risks
- Haiku may misclassify nuanced literary elements (e.g., `paradoxo` vs `antitese`)
- Cost estimates can vary ±30% depending on actual token counts
- Requires manual validation of 50-sample gate before full run

### Mitigations
- Few-shot grounding reduces misclassification
- Validation gate catches quality issues before committing to full run
- Taxonomy validation in script rejects out-of-vocabulary terms

---

## Change Log

| Date | Author | Change |
|------|--------|--------|
| 2026-02-26 | @architect (Aria) | Initial ADR created |
