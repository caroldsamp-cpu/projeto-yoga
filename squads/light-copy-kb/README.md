# Light Copy Knowledge Base Squad

**Status:** Operacional (Fase 3 completa — agentes criados)
**Autor base:** Leandro Ladeira (Light Copy + Stories 10x)
**Squads relacionados:** Formula de Lancamento (handoffs bilaterais)

## Objetivo

Squad especializado em aplicar tecnicas de Light Copy e Stories 10x a conteudo escrito e Instagram Stories. Combina:
- **Light Copy** (M1-M4): premissas, elementos literarios, gatilhos mentais, processo criativo
- **Stories 10x**: 37 dispositivos de engenharia social, 12 tipos de sequencia, SPIN inbox

## Agentes

| Agente | Tier | Funcao |
|--------|------|--------|
| `@lc-chief` | Orchestrator | Diagnostica necessidade e roteia para agente correto |
| `@lc-rewriter` | Tier 1 | Escreve/reescreve textos aplicando Light Copy (M1-M4) |
| `@lc-stories` | Tier 1 | Cria sequencias de Instagram Stories com dispositivos S10X |

## Knowledge Base (Triplets Extraidos)

### Light Copy (4 modulos)

| Modulo | Framework | SOP | Checklist |
|--------|-----------|-----|-----------|
| M1 — Fundamentos Criativos | fundamentos-criativos-framework.md | light-copy-m1-fundamentos-sop.md | light-copy-m1-fundamentos-checklist.md |
| M2 — Gatilhos Mentais & Copy | gatilhos-mentais-copy-framework.md | light-copy-m2-gatilhos-sop.md | light-copy-m2-gatilhos-checklist.md |
| M3 — Elementos Literarios | elementos-literarios-framework.md | light-copy-m3-premissas-sop.md | light-copy-m3-premissas-checklist.md |
| M4 — Aplicacao & Formatos | aplicacao-formatos-framework.md | light-copy-m4-formatos-sop.md | light-copy-m4-formatos-checklist.md |

### Stories 10x (2 modulos)

| Modulo | Framework | SOP | Checklist |
|--------|-----------|-----|-----------|
| S10X-Core (Metodo + 37 Dispositivos) | stories-10x-core-framework.md | stories-10x-core-sop.md | stories-10x-core-checklist.md |
| S10X-Operacional (Estrategia + Execucao) | stories-10x-operacional-framework.md | stories-10x-operacional-sop.md | stories-10x-operacional-checklist.md |

## Cross-Squad Integration (FL ↔ LC)

```
FORMULA DE LANCAMENTO                    LIGHT COPY KB
┌─────────────────────┐                 ┌──────────────────────────┐
│ @fl-conteudo        │                 │ @lc-chief                │
│  "QUANDO postar"    │ ──handoff──→    │  (orquestrador)          │
│                     │                 │                          │
│ @fl-copy            │                 │ @lc-rewriter             │
│  "scripts de vendas"│ ←─handoff──→    │  "COMO reescrever"       │
│                     │                 │                          │
│ @fl-chief           │                 │ @lc-stories              │
│  "diagnostico FL"   │ ←─handoff──→    │  "COMO fazer stories"    │
└─────────────────────┘                 └──────────────────────────┘
```

| De | Para | Quando |
|----|------|--------|
| `@fl-conteudo` | `@lc-stories` | Precisa criar stories para aquecimento/lancamento |
| `@fl-copy` | `@lc-rewriter` | Precisa aplicar Light Copy avancado em scripts |
| `@lc-stories` | `@fl-conteudo` | Precisa saber fase do lancamento |
| `@lc-rewriter` | `@fl-copy` | Precisa script de vendas para aplicar Light Copy |
| `@fl-chief` | `@lc-chief` | Precisa diagnostico de tecnica LC |

## RAG Pipeline (complementar)

| Componente | Estado |
|-----------|--------|
| Transcricoes brutas | 93 arquivos em `transcripts/` |
| Normalizacao (3,581 chunks) | `normalized-chunks.jsonl` |
| ChromaDB indexado | 2 colecoes |
| Schema + Taxonomia | Definidos |

Os triplets (Framework/SOP/Checklist) e o RAG pipeline sao complementares:
- **Triplets** = regras do jogo (heuristicas, processos, checklists)
- **RAG** = evidencia e exemplos (citacoes, contexto, nuances)

## Plano de Extracao

Documentado em `docs/PLANO-EXTRACAO-COMPLETO.md`.
