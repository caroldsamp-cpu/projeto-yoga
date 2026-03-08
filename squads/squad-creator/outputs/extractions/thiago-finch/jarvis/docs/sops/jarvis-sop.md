# SOP: Build Jarvis-like RAG (Primary) + System Layers (Secondary)

## Metadata
- Author: Thiago Finch
- Topic: Jarvis
- Objective: Extract how he built the RAG
- Source status: validated (real transcript: Hi_a9G3YrW0.whisper.small.txt)

## Part A: Primary Flow (RAG Core)

### Step 1 - Define failure mode of default prompting
- Description: Establish that raw prompting on long transcripts fails from context limits.
- Cognitive type: Analysis
- Automation potential: Medium
- Executor: Human
- Precondition: Access to transcript evidence
- Output: Problem statement and target quality bar
- Guardrails: No architecture before failure mode is explicit
- Decision rule: IF context-limit problem is confirmed THEN continue
- Source: [CITATIONS: C0034, C0035]

### Step 2 - Define context objective
- Description: Require responses grounded in personal/business context.
- Cognitive type: Judgment
- Automation potential: Low
- Executor: Human
- Precondition: Step 1 done
- Output: Context criteria list
- Guardrails: Avoid generic internet-only retrieval
- Decision rule: IF context criteria accepted THEN continue
- Source: [CITATIONS: C0041, C0096, C0103, C0106]

### Step 3 - Connect multi-source ingestion
- Description: Connect channels (calls, WhatsApp, Slack, YouTube, PDF, Docs, Drive).
- Cognitive type: Synthesis
- Automation potential: High
- Executor: Hybrid
- Precondition: Context criteria defined
- Output: Source connectors active
- Guardrails: Keep raw archive of originals
- Decision rule: IF connectors active for all critical channels THEN continue
- Source: [CITATIONS: C0262, C0263, C0264, C0279, C0282]

### Step 4 - Apply labeling and identity signals
- Description: Add labels/names/voice differentiation where possible.
- Cognitive type: Analysis
- Automation potential: Medium
- Executor: Hybrid
- Precondition: Ingestion active
- Output: Labeled transcript/index units
- Guardrails: If unknown speaker, keep unresolved label for later reconciliation
- Decision rule: IF labels >= minimum acceptable coverage THEN continue
- Source: [CITATIONS: C0076, C0068]

### Step 5 - Run processing pipeline
- Description: Process ingested files into structured searchable knowledge.
- Cognitive type: Synthesis
- Automation potential: High
- Executor: Worker
- Precondition: Labeled data available
- Output: Indexed knowledge artifacts
- Guardrails: Track processing health and backlogs
- Decision rule: IF processing health passes THEN continue
- Source: [CITATIONS: C0277, C0290, C0211, C0213, C0214]

### Step 6 - Enforce source attribution in retrieval
- Description: Retrieval must return source-grounded output and references.
- Cognitive type: Accountability
- Automation potential: Medium
- Executor: Hybrid
- Precondition: Pipeline output ready
- Output: Source-attributed responses
- Guardrails: Reject unsourced claims
- Decision rule: IF source traceability is preserved THEN continue
- Source: [CITATIONS: C0264, C0285]

### Step 7 - Configure recurring synchronization
- Description: Schedule repeated updates (ex.: daily read/sync).
- Cognitive type: Accountability
- Automation potential: High
- Executor: Worker
- Precondition: Retrieval operating
- Output: Sync schedule and incremental updates
- Guardrails: Prevent duplicate reprocessing loops
- Decision rule: IF recurring sync stable THEN continue
- Source: [CITATIONS: C0296, C0298]

### Step 8 - Validate with contextual benchmark queries
- Description: Ask domain/business questions and verify context-aware output quality.
- Cognitive type: Judgment
- Automation potential: Medium
- Executor: Human
- Precondition: Sync running
- Output: Quality verdict
- Guardrails: Compare against generic baseline answer
- Decision rule: IF contextual delta is strong THEN mark core RAG as validated
- Source: [CITATIONS: C0096, C0103, C0106]

## Part B: Secondary Flow (Do Not Drop)

### Step 9 - Introduce orchestration layer (Conclave)
- Description: Add multi-agent routing and high-council decision layer.
- Cognitive type: Synthesis
- Automation potential: Medium
- Executor: Hybrid
- Precondition: Core RAG validated
- Output: Conclave orchestration enabled
- Guardrails: Keep retrieval grounding beneath orchestration
- Decision rule: IF agent routing improves execution quality THEN keep
- Source: [CITATIONS: C0056, C0061, C0268, C0269, C0272]

### Step 10 - Extend to clone/DNA operating layers
- Description: Move from retrieval toward behavior cloning and operational agents.
- Cognitive type: Creativity
- Automation potential: Medium
- Executor: Hybrid
- Precondition: Conclave active
- Output: Layered agent behaviors and operating roles
- Guardrails: Keep distinction between source-derived and inferred behavior
- Decision rule: IF outcomes improve without source drift THEN keep
- Source: [CITATIONS: C0121, C0126, C0138, C0168, C0169, C0170]

## Appendix D (Strict Citation Ledger)

- Full ledger: [jarvis-citation-ledger-v2.md](C:\Users\carol\code\projetos\projeto-yoga\squads\squad-creator\outputs\extractions\thiago-finch\jarvis\docs\sops\jarvis-citation-ledger-v2.md)
- Total technical citations: 306
- Minimum required (50+) for strict extraction: satisfied
- Citation format: `Citation ID` + `Sentence ID` + literal excerpt

## Quality Gates

- SOURCE_COVERAGE: PASS
- FRAMEWORK_QUALITY: PASS (focused on RAG build path)
- SOP_QUALITY: PASS (validated with real transcript)
- ANTI-INVENTION: PASS (all steps trace to explicit ledger IDs)


