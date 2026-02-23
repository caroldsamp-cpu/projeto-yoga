# Light Copy Knowledge Base Squad

Status: em desenvolvimento

Squad especializado em aplicar tecnicas de Light Copy de Leandro Ladeira a todo conteudo escrito do projeto-yoga.

## Objetivo

- Reescrever textos com tecnicas de Light Copy.
- Explicar cada mudanca com base em aulas e chunks recuperados.
- Suportar todos os formatos: reels, stories, carrossel, email, landing, VSL, anuncios e longform.

## Arquitetura de dados (definida)

- `data/schema-light-copy.json`: contrato do registro estruturado por chunk.
- `data/metadata-taxonomy.yaml`: vocabulario controlado de tecnicas, elementos e intencoes.
- `data/indexing-strategy.md`: pipeline raw -> structured -> retrieval.
- `data/chroma-config.yaml`: colecoes, metadados e regra de ranking no Chroma.

## Pipeline alvo

1. `transcripts/*.txt` -> normalizacao e chunking semantico.
2. Saida canonica em `data/normalized-chunks.jsonl`.
3. Ingestao no Chroma em `light-copy-chunks`.
4. Recuperacao hibrida (semantica + metadados) para o agente de rewrite.

## Proximas etapas

- [x] Definir schema estruturado e metadados
- [x] Definir estrategia de indexacao
- [ ] Implementar `scripts/normalize-transcripts.js`
- [ ] Implementar `scripts/ingest-transcripts.js`
- [ ] Criar agente `marketing-copy-light-copy.md`
- [ ] Criar task `rewrite-by-light-copy.md`

## Handoff

`@marketing-copy-light-copy` -> reescreve + explica -> `@marketing-production`
