# Workflow: Daily Content Pipeline - marketing-yog

**Workflow ID**: daily-content-pipeline
**Version**: 1.1.0
**Trigger**: `/daily-content` ou manual
**Cadence**: diario

---

## Flow

1. `@marketing-ideation-ig` gera Big Idea e angulos.
2. `@marketing-cmo` valida qualidade estrategica.
3. `@marketing-production` escreve copy final na voz da Gaby.
4. `@marketing-designer` define direcao visual.
5. `@marketing-distribution` adapta por canal.
6. Salvar em `outputs/hubs/marketing/YYYY-MM-DD.md`.
7. Publicacao manual pelo time.

---

## Gates

- Gate estrategia: CMO
- Gate voz: alinhamento com fontes da Gaby
- Gate etica: sem manipulacao ou promessas irreais

---

## Dependencias

- `data/content-map.yaml`
- `data/platform-specs.yaml`
- `data/brand-guide.yaml`

---

## Restricoes

Sem automacao de postagem e sem uso obrigatorio de token/API.
