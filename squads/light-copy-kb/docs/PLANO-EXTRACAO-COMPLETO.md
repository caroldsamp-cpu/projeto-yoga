# Plano de Extracao — Light Copy KB + Stories 10x + Integracao FL

**Criado em:** 2026-03-08
**Atualizado em:** 2026-03-08 (v2 — revisao devil's advocate)
**Status:** Em Planejamento
**Responsavel:** @squad-chief (Squad Architect)

---

## Contexto

O squad `light-copy-kb` teve uma primeira extracao via pipeline RAG (normalize → enrich → vectorize → retrieve), resultando em 3,581 chunks semanticos. Porem, **nao foram extraidos os triplets classicos** (Framework + SOP + Checklist) que sao o padrao AIOS para squads operacionais.

Alem disso, existe um curso separado — **Stories 10x** — do mesmo autor (Leandro Ladeira) que ensina estrategia de Instagram Stories com 37 dispositivos de engenharia social. Esse conhecimento precisa ser extraido e conectado tanto ao squad Light Copy quanto ao squad Formula de Lancamento.

---

## O Gap Identificado

```
Formula de Lancamento sabe QUANDO postar stories
  → calendario, fases de aquecimento, warming period
  → @fl-conteudo gerencia o calendario editorial
  → @fl-copy escreve scripts de vendas

Mas NINGUEM sabe COMO fazer stories que convertem
  → Stories 10x preenche esse gap (37 dispositivos, sequencias, engenharia social)

E NINGUEM aplica Light Copy nos textos dos stories
  → Light Copy preenche o gap de COMO escrever copy com elementos literarios
```

---

## Fontes Disponíveis

### Light Copy (101 transcricoes, 2.9 MB)

**Localizacao:** `C:\Users\carol\code\apps\apify-hotmart-transcriber-mvp\outputs\transcripts\Light Copy`

| Modulo | Qtd Arquivos | Temas Principais |
|--------|-------------|-----------------|
| M1 — Fundamentos Criativos | 4 | Processo criativo, bloqueio criativo, observacao ativa, associacao criativa |
| M2 — Gatilhos Mentais & Copy | 30 | Briefing, emocoes de persuasao, estrutura de texto, avatar, 15 gatilhos mentais, headlines, objecoes, oferta, reuniao de criacao, leis do copy |
| M3 — Elementos Literarios | 31 | Aforismo, antitese, anafora, ironia, trocadilho, hiperbole, metafora, sarcasmo, paradoxo, personificacao, neologismo, premissas |
| M4 — Aplicacao & Analise | 15+8 | Sales pages (5), VSL (4), ads, messaging, newsletter, order bump, upsell, downsell + analises de emails (4) e reels |
| ~~M5 — Mercado & Profissional~~ | ~~5~~ | ~~Encontrar clientes, precificacao, portfolio~~ — **CORTADO (DA-004)** |

### Stories 10x (32 transcricoes, 1 MB)

**Localizacao:** `C:\Users\carol\code\apps\apify-hotmart-transcriber-mvp\outputs\transcripts\Stories 10x`

| Modulo | Qtd Arquivos | Temas Principais |
|--------|-------------|-----------------|
| **S10X-Core** (Metodo + Dispositivos) | ~14 | Metodo S10X, logica das sequencias, criacao de sequencias, 37 dispositivos de engenharia social (4 partes), ideias fortes |
| **S10X-Operacional** (Estrategia + Execucao) | ~18 | Instagram, copy para stories, inbox lucrativo, crescimento, perpetuo, automacoes, produtos/servicos, parceiros, debriefing, Q&A |

---

## Estado Atual do Squad Light Copy KB

| Componente | Estado |
|-----------|--------|
| Transcricoes brutas copiadas | ✅ 93 arquivos em `transcripts/` |
| Normalizacao (3,581 chunks) | ✅ Completo (`normalized-chunks.jsonl`) |
| ChromaDB indexado | ✅ 2 colecoes configuradas |
| Schema + Taxonomia | ✅ Definidos |
| Enrichment LLM | ⏳ Script pronto, nao executado |
| **Framework/SOP/Checklist (triplets)** | ❌ NAO EXISTE |
| **Agentes** | ❌ ZERO (pasta vazia) |
| **Tasks** | ❌ ZERO (pasta vazia) |
| **Workflows** | ❌ ZERO (pasta vazia) |

### Relacao Triplets ↔ RAG Pipeline (DA-005)

Os dois sistemas sao **complementares**, nao concorrentes:

```
TRIPLETS (Framework/SOP/Checklist)          RAG PIPELINE (ChromaDB)
┌──────────────────────────┐               ┌──────────────────────────┐
│ O agente usa para:       │               │ O agente consulta para:  │
│ • Decisoes operacionais  │               │ • Citacoes literais      │
│ • Fluxo de trabalho      │               │ • Exemplos reais         │
│ • Regras e heuristicas   │               │ • Tecnicas especificas   │
│ • COMO fazer             │               │ • EVIDENCIA de fonte     │
│                          │               │                          │
│ = CEREBRO do agente      │               │ = MEMORIA do agente      │
└──────────────────────────┘               └──────────────────────────┘
```

- **Triplets** definem o comportamento e processo operacional
- **RAG** fornece citacoes exatas e exemplos sob demanda
- Agentes usam ambos: triplet para decidir O QUE fazer, RAG para buscar COMO o autor disse

---

## Arquitetura Alvo

```
FORMULA DE LANCAMENTO                    LIGHT COPY KB
┌─────────────────────┐                 ┌──────────────────────────┐
│ @fl-conteudo        │                 │ @lc-chief                │
│  "QUANDO postar"    │ ──handoff──→    │  (orquestrador)          │
│  "calendario"       │                 │                          │
│  "warming period"   │                 │ @lc-rewriter             │
│                     │                 │  "COMO reescrever"       │
│ @fl-lancamento-*    │                 │  "elementos literarios"  │
│  "fase do lancamento"│ ──handoff──→   │  "gatilhos mentais"      │
│                     │                 │                          │
│ @fl-copy            │                 │ @lc-stories              │
│  "scripts de vendas"│ ──handoff──→    │  "COMO fazer stories"    │
│                     │                 │  "37 dispositivos"       │
│                     │                 │  "sequencias S10X"       │
│                     │                 │         │                │
│                     │                 │         ↓ RAG            │
│                     │                 │  [ChromaDB: 3,581 chunks]│
└─────────────────────┘                 └──────────────────────────┘
```

### Handoffs Bilaterais Planejados

| De | Para | Quando |
|----|------|--------|
| `@fl-conteudo` | `@lc-stories` | Precisa criar stories para aquecimento/lancamento |
| `@fl-copy` | `@lc-rewriter` | Precisa aplicar Light Copy em scripts/textos |
| `@lc-stories` | `@fl-conteudo` | Precisa saber em qual fase do lancamento estamos |
| `@lc-stories` | `@fl-lancamento-semente` | Precisa contexto do lancamento semente ativo |
| `@lc-stories` | `@fl-lancamento-classico` | Precisa contexto do lancamento classico ativo |
| `@lc-rewriter` | `@fl-copy` | Precisa script de vendas para aplicar Light Copy |

### Workflow Cross-Squad: `wf-stories-para-lancamento`

Workflow concreto para quando FL precisa de stories durante lancamento:

```
Fase 1: @fl-conteudo → define calendario e fase atual do lancamento
         ↓ (passa: fase, objetivo, avatar, dias)
Fase 2: @lc-stories → cria sequencia de stories com dispositivos S10X
         ↓ (passa: sequencia bruta com dispositivos)
Fase 3: @lc-rewriter → aplica Light Copy no copy de cada story
         ↓ (passa: stories finalizados com tecnicas anotadas)
Fase 4: @fl-conteudo → valida alinhamento com calendario e publica
```

---

## Plano de Execucao

### Fase 1: Extrair Knowledge do Light Copy (4 triplets)

**Comando:** `*extract-knowledge` por modulo
**Fonte:** 101 transcricoes brutas (exceto M5)
**Output:** `squads/light-copy-kb/docs/frameworks/`, `docs/sops/`, `checklists/`

| # | Modulo | Arquivos Fonte | Output Esperado | Status |
|---|--------|---------------|----------------|--------|
| 1.1 | M1 — Fundamentos Criativos | 4 transcricoes | framework + SOP + checklist | [x] |
| 1.2 | M2 — Gatilhos Mentais & Copy | 32 transcricoes | framework + SOP + checklist | [x] |
| 1.3 | M3 — Elementos Literarios (Light Copy) | 31 transcricoes | framework + SOP + checklist | [ ] |
| 1.4 | M4 — Aplicacao & Analises Praticas | 23 transcricoes (15 M4 + 8 analises) | framework + SOP + checklist | [ ] |

**Regra:** Zero invencao — tudo rastreavel com `[SOURCE: Modulo > Aula]`

> **NOTA:** M5 (Mercado & Profissional) foi cortado — ver DA-004.

### Fase 2: Extrair Knowledge do Stories 10x (2 triplets)

**Comando:** `*extract-knowledge`
**Fonte:** 32 transcricoes brutas
**Output:** Dentro de `squads/light-copy-kb/` (sub-dominio stories)

| # | Modulo | Arquivos Fonte | Output Esperado | Status |
|---|--------|---------------|----------------|--------|
| 2.1 | S10X-Core — Metodo + 37 Dispositivos | ~14 transcricoes | framework + SOP + checklist | [ ] |
| 2.2 | S10X-Operacional — Estrategia + Execucao | ~18 transcricoes | framework + SOP + checklist | [ ] |

### Fase 3: Criar Agentes do Squad Light Copy

**Comando:** `*create-agent` para cada agente
**Base:** Frameworks extraidos nas Fases 1-2

| # | Agente | Tier | Base | Status |
|---|--------|------|------|--------|
| 3.1 | `@lc-chief` | orchestrator | Diagnostica e roteia entre agentes LC | [ ] |
| 3.2 | `@lc-rewriter` | 1 | Frameworks M1-M4 — reescreve textos aplicando tecnicas LC | [ ] |
| 3.3 | `@lc-stories` | 1 | Frameworks S10X-Core + S10X-Operacional — cria stories de alta conversao | [ ] |

### Fase 4: Wiring — Conectar FL ↔ Light Copy

| # | Acao | Arquivo | Status |
|---|------|---------|--------|
| 4.1 | Declarar handoff_to `@lc-stories` em `@fl-conteudo` | `fl-conteudo.md` | [ ] |
| 4.2 | Declarar handoff_to `@lc-rewriter` em `@fl-copy` | `fl-copy.md` | [ ] |
| 4.3 | Declarar handoff_from FL em `@lc-stories` | `lc-stories.md` | [ ] |
| 4.4 | Declarar handoff_from FL em `@lc-rewriter` | `lc-rewriter.md` | [ ] |
| 4.5 | Atualizar `@fl-chief` routing para incluir LC | `fl-chief.md` | [ ] |
| 4.6 | Atualizar `config.yaml` e `README.md` do LC | squad config | [ ] |
| 4.7 | Criar workflow `wf-stories-para-lancamento` | `workflows/` | [ ] |

### Fase 5: Validacao

| # | Acao | Comando | Status |
|---|------|---------|--------|
| 5.1 | Validar squad Light Copy completo | `*validate-squad light-copy-kb` | [ ] |
| 5.2 | Validar handoffs bilaterais FL ↔ LC | Revisao manual | [ ] |
| 5.3 | Smoke tests dos 3 agentes | Quality gate SC_AGT_001 | [ ] |
| 5.4 | Testar workflow cross-squad end-to-end | Cenario: "5 stories para aquecimento classico" | [ ] |

---

## Decisoes Arquiteturais

### DA-001: Stories 10x dentro do Light Copy (nao como squad separado)

**Decisao:** Stories 10x sera um agente dentro do squad `light-copy-kb`, nao um squad independente.

**Justificativa:**
- Mesmo autor (Leandro Ladeira) = mesma escola de pensamento
- DNA de voz compartilhado
- Stories 10x usa tecnicas de Light Copy nos textos dos stories
- Evita proliferacao de squads pequenos

### DA-002: Handoff cross-squad FL ↔ LC (nao merge)

**Decisao:** Os squads permanecem independentes com handoffs bilaterais declarados.

**Justificativa:**
- FL e baseado em Erico Rocha, LC em Leandro Ladeira — autores diferentes
- Regra zero-invencao impede misturar fontes
- Handoffs permitem colaboracao sem poluir as fontes
- Cada squad mantem rastreabilidade propria

### DA-003: Extracao por modulo (nao monolitica)

**Decisao:** Extrair 1 triplet por modulo do Light Copy (4 total) + 2 do Stories 10x.

**Justificativa:**
- Modulos cobrem dominios distintos (criatividade vs gatilhos vs elementos literarios)
- Facilita manutencao e atualizacao isolada
- Permite qualidade mais alta por triplet
- Segue o padrao ja estabelecido no FL (8 modulos = 8 triplets)

### DA-004: Cortar M5 (Mercado & Profissional)

**Decisao:** Nao extrair triplet do Modulo 5.

**Justificativa:**
- M5 ensina o NEGOCIO de copywriting (encontrar clientes, precificar, portfolio)
- Nenhum agente operacional precisa desse conhecimento para ESCREVER copy
- Economia de tempo sem perda de qualidade operacional
- Se necessario no futuro, pode ser extraido depois como modulo avulso

### DA-005: Triplets e RAG Pipeline sao complementares

**Decisao:** Manter ambos os sistemas (triplets AIOS + RAG ChromaDB) como camadas complementares.

**Justificativa:**
- Triplets = cerebro (decisoes, fluxo, heuristicas) — COMO fazer
- RAG = memoria (citacoes, exemplos, tecnicas) — EVIDENCIA de fonte
- Agentes consultam triplets para processo e RAG para citacoes especificas
- Nao ha redundancia — cada sistema serve um proposito diferente

### DA-006: Dividir Stories 10x em 2 triplets

**Decisao:** Extrair 2 triplets separados do Stories 10x ao inves de 1 monolitico.

**Justificativa:**
- S10X-Core (metodo + 37 dispositivos) = nucleo tatico denso
- S10X-Operacional (instagram, automacoes, crescimento) = execucao pratica
- Framework unico ficaria superficial tentando cobrir ambos
- Permite que `@lc-stories` tenha profundidade nos dispositivos

### DA-007: Renomear agentes para clareza

**Decisao:** Usar naming que reflete a funcao, nao o curso.

| Original | Renomeado | Motivo |
|----------|-----------|--------|
| `@lc-copy` | `@lc-rewriter` | "Light Copy Copy" e redundante; "rewriter" reflete a funcao real |
| `@lc-stories-10x` | `@lc-stories` | Mais limpo, sem referencia ao nome do curso |
| `@lc-chief` | `@lc-chief` | Mantem — padrao AIOS para orquestradores |

---

## Riscos

| Risco | Impacto | Mitigacao |
|-------|---------|-----------|
| Transcricoes brutas com ruido (stuttering, encoding) | Baixa qualidade dos triplets | Pipeline de normalizacao ja existente limpa ruido |
| Sobreposicao M2 (gatilhos) com S10X (dispositivos) | Confusao de escopo entre agentes | Scope claro: M2 = gatilhos de copy escrito, S10X = dispositivos de engajamento Instagram |
| Handoffs cross-squad complexos demais | Agentes nao sabem quando chamar outro squad | Heuristicas claras com QUANDO/ACAO + workflow concreto (wf-stories-para-lancamento) |
| Volume grande de transcricoes (101+32) | Tempo de extracao longo | Processar modulo a modulo, checkpoint entre cada |
| M4 + Analises juntos ficam grandes demais | Triplet superficial | Se necessario, separar Analises em mini-triplet proprio durante execucao |

---

## Metricas de Sucesso

- [ ] 6 triplets extraidos (4 LC + 2 S10X) com 50+ citacoes cada
- [ ] 3 agentes criados passando quality gate SC_AGT_001 (3/3 smoke tests)
- [ ] Handoffs bilaterais declarados em ambos os lados (FL e LC)
- [ ] Workflow `wf-stories-para-lancamento` funcional end-to-end
- [ ] Score geral do squad >= 8.0/10
- [ ] Zero invencao — 100% rastreavel a transcricoes fonte
- [ ] RAG pipeline integrado como camada de evidencia dos agentes

---

## Changelog

| Data | Versao | Mudanca |
|------|--------|---------|
| 2026-03-08 | v1 | Plano inicial criado |
| 2026-03-08 | v2 | Revisao devil's advocate: cortou M5, incluiu Analises no M4, dividiu S10X em 2, definiu relacao Triplets↔RAG, renomeou agentes, adicionou workflow cross-squad, DAs 004-007 |

---

**Proximo passo:** Iniciar Fase 1.1 — `*extract-knowledge` do Modulo 1 (Fundamentos Criativos)
