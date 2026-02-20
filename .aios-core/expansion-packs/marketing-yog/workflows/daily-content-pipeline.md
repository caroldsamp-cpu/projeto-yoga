# Workflow: Daily Content Pipeline - marketing-yog

**Workflow ID**: daily-content-pipeline
**Version**: 1.0.0
**Trigger**: `/daily-content` ou manual
**Cadence**: diario (seg-sex)

---

## Overview

Pipeline que transforma Big Idea em conteudo pronto para publicacao manual.

---

## Flow

1. @marketing-ideation -> Big Idea + angulos
2. Gate 2.5 @marketing-cmo -> aprova ou devolve
3. @marketing-production -> copy em voz Gaby
4. @marketing-designer -> visual brief
5. @marketing-distribution -> versoes por canal
6. Salvar output em `outputs/hubs/marketing/YYYY-MM-DD.md`
7. Publicacao manual pelo time

---

## QA Gates

- Gate 2.5 CMO: qualidade estrategica e permission check
- Gate Voz: autenticidade da voz da Gaby
- Gate Light Copy: sem pressao/manipulacao

---

## Data Dependencies

- `data/content-map.yaml`
- `data/platform-specs.yaml`
- `data/brand-guide.yaml`

---

## Importante

Este workflow NAO executa publicacao automatica e NAO depende de integracoes externas.

---

*Workflow v1.0.0 - marketing-yog (manual publishing)*

