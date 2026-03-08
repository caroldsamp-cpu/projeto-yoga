# Checklist: Jarvis RAG Extraction

## Preconditions
- [ ] Source file available (`Hi_a9G3YrW0.whisper.small.txt`)
- [ ] Topic fixed as "jarvis"
- [ ] Extraction path confirmed as neutral output path

## Step 1 - Context failure definition
- [ ] Context-limit failure captured from source
- [ ] Generic answer risk documented

## Step 2 - Context objective
- [ ] Business-context constraints listed
- [ ] "Context-first retrieval" rule defined

## Step 3 - Multi-source ingestion
- [ ] Calls/WhatsApp/Slack mapped
- [ ] YouTube/PDF/Docs mapped
- [ ] Google Drive mapping present

## Step 4 - Labeling/entity handling
- [ ] Labeling strategy described
- [ ] Unknown speaker fallback documented

## Step 5 - Pipeline processing
- [ ] Processing pipeline defined
- [ ] Health/briefing checkpoint defined

## Step 6 - Retrieval/source attribution
- [ ] Source-attributed output rule enforced
- [ ] Unsourced claims are rejected

## Step 7 - Sync cadence
- [ ] Recurring sync schedule defined
- [ ] Duplicate/loop guardrails defined

## Step 8 - RAG quality benchmark
- [ ] Benchmark question(s) defined
- [ ] Contextual response quality compared vs generic baseline

## Step 9 - Conclave extension
- [ ] Conclave routing documented
- [ ] Dependency on grounded retrieval explicit

## Step 10 - Clone/DNA extension
- [ ] Clone/DNA layer documented as secondary
- [ ] Boundary between source-derived and inferred behavior explicit

## Quality Gates
- [ ] `SOURCE_COVERAGE` pass
- [ ] `FRAMEWORK_QUALITY` pass
- [ ] `SOP_QUALITY` pass (validated with real transcript)
- [ ] Anti-invention checks pass

## Final Validation
- [ ] `jarvis-source-inventory.yaml` exists
- [ ] `jarvis-framework.md` exists
- [ ] `jarvis-sop.md` exists
- [ ] `jarvis-squad-blueprint.yaml` exists
- [ ] `jarvis-sop-checklist.md` exists
- [ ] `jarvis-citation-ledger-v2.md` exists
- [ ] Citation ledger has 50+ entries (strict mode)


