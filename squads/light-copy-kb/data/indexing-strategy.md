# Indexing strategy: raw -> structured -> retrieval

## 1) Normalization pipeline

1. Ingest each `.txt` file as source lesson.
2. Parse module number + lesson title from filename.
3. Clean transcription noise (encoding artifacts, duplicated fillers).
4. Split into semantic chunks (target 700-1200 chars, overlap 120-180 chars).
5. Classify chunk_type and metadata using controlled taxonomy.
6. Persist normalized records to `data/normalized-chunks.jsonl`.

## 2) Storage model

- Canonical source: JSONL rows using `schema-light-copy.json`.
- Vector store: Chroma `light-copy-chunks` collection.
- Optional relational mirror (SQLite/Postgres): for analytics and audits.

## 3) Chroma document payload

- `id`: `chunk_id`
- `document`: `clean_text`
- `metadata`:
  - source_file
  - module_number
  - lesson_title
  - chunk_type
  - techniques (array)
  - literary_elements (array)
  - persuasion_drivers (array)
  - content_types (array)
  - audience_stage
  - intent
  - confidence_score

## 4) Retrieval strategy for rewrite agent

Query plan:
1. Classify input text intent + content_type.
2. Run semantic search (`top_k=12`) in `light-copy-chunks`.
3. Apply metadata filters:
   - content_types includes requested type
   - intent matches target intent
   - confidence_score >= 0.45
4. Re-rank by weighted score:
   - semantic similarity: 0.75
   - metadata match: 0.25
5. Keep top 5 chunks as grounding context.

## 5) Why this beats raw TXT indexing

- Better precision: chunks are typed and tagged.
- Better explainability: each rewrite can cite exact chunk_id + lesson_title.
- Better control: avoids generic retrieval drift.
- Better evolution: taxonomy can grow without reauthoring all lessons.
