# Jarvis RAG Framework (How He Built It)

## Scope
- Author: Thiago Finch
- Topic: "How he built this RAG"
- Source status: validated (real transcript: `Hi_a9G3YrW0.whisper.small.txt`)
- Citation ledger: `docs/sops/jarvis-citation-ledger-v2.md` (306 citations)

## Core Formula
`RAG de alta qualidade = (Contexto proprietario + Ingestao multi-fonte com labels + Pipeline de processamento + Recuperacao por fonte) x Orquestracao por agentes em camadas`

Base literal:
- "ela nao tera contexto o suficiente"
- "tenho que criar uma tecnologia ... um mecanismo, um workflow"
- "conhecimento organizado por fonte"
- "conclave ... alta cupula de agentes"
- [SOURCE: C:/Users/carol/code/apps/apify-hotmart-transcriber-mvp/outputs/transcripts/jarvis finch/Hi_a9G3YrW0.whisper.small.txt]
- [CITATIONS: C0034, C0036, C0264, C0268]

## 6 Pillars of the RAG

1. Problem Definition: default LLM context is insufficient.
- [CITATIONS: C0034, C0035]

2. Context-first Retrieval: answers must be filtered to user's business reality.
- [CITATIONS: C0041, C0096, C0103, C0106]

3. Ingestion Fabric: connect many source types continuously.
- Calls/WhatsApp/Slack/YouTube/PDF/Docs/Drive. [CITATIONS: C0262, C0263, C0264, C0279, C0282]

4. Entity/Labeling Layer: attach identity/voice labels when possible.
- [CITATIONS: C0076, C0264]

5. Processing Pipeline: transform raw data into structured searchable assets.
- [CITATIONS: C0277, C0290, C0211, C0213, C0214]

6. Orchestration Layer (Conclave): multi-agent decision and execution topology.
- [CITATIONS: C0056, C0057, C0061, C0268, C0269, C0272]

## Principles Extracted

1. Raw dump is not RAG.
- "nao e assim que voce vai conseguir absorver os conteudos" [CITATIONS: C0068, C0036]

2. Retrieval must preserve source traceability.
- "atribuir a fonte" [CITATIONS: C0264]

3. Scale requires automation and recurring sync.
- "vai rodar ... uma vez por dia ... vai ler tudo" [CITATIONS: C0069, C0264]

4. Personal/business context outranks generic internet patterns.
- [CITATIONS: C0041, C0096, C0103]

5. RAG output quality is strongly tied to curation quality.
- [CITATIONS: C0036, C0106, C0211, C0213]

## Minimal Architecture (inferred from source statements)

1. Connectors: cloud/local/document channels.
2. Ingestion jobs: capture and schedule.
3. Parsing + labeling: transcript/voice/entity attribution.
4. Storage: organized by source + topic + context segment.
5. Retrieval: context-grounded fetch.
6. Agent layer: conclave routes questions and actions.

## Gate
- FRAMEWORK_QUALITY: PASS (validated on real transcript, focused on RAG build method)
