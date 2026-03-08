# Task: Diagnosticar Marco - formula-lancamento

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | `diagnosticar-marco` |
| **status** | Active |
| **responsible_executor** | @fl-chief |
| **execution_type** | Agent (elicitation-based) |
| **input** | Contexto do usuario (respostas a perguntas diagnosticas) |
| **output** | Marco identificado (1-5) + rota de execucao recomendada |
| **action_items** | Diagnosticar fase atual, recomendar proximo passo, rotear para agente correto |
| **acceptance_criteria** | Marco identificado com confianca >= 80%, rota validada pelo usuario |

**Task ID**: diagnosticar-marco
**Agent**: @fl-chief
**Version**: 1.0.0
**Mode**: Elicitation (max 5 perguntas)
**Squad**: formula-lancamento

---

## Purpose

Diagnosticar em qual marco da jornada de lancamento o usuario se encontra, para que o @fl-chief possa rotea-lo ao agente e task corretos. Sem diagnostico preciso, o usuario pode receber orientacao fora de ordem, comprometendo todo o processo.

---

## Marcos (Fases da Jornada)

| Marco | Nome | Descricao | Proximo Passo |
|-------|------|-----------|---------------|
| 1 | Sem alicerce | Nao tem nicho, avatar ou promessa definidos | `construir-alicerce` via @fl-alicerce |
| 2 | Alicerce pronto, sem oferta | Tem nicho/avatar/roma, mas nao tem oferta estruturada | `montar-oferta` via @fl-oferta |
| 3 | Oferta pronta, sem lancamento | Tem oferta, nunca lancou | Lancamento Semente via @fl-lancamento-semente |
| 4 | Ja fez semente, quer escalar | Fez lancamento semente, quer ir para classico | Lancamento Classico via @fl-lancamento-classico |
| 5 | Ja fez classico, quer otimizar | Ja fez classico, quer melhorar metricas | Otimizacao via @fl-lancamento-classico |

---

## Inputs

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contexto_inicial` | string | No | Descricao livre do usuario sobre onde esta |
| `historico_lancamentos` | number | No | Quantidade de lancamentos ja realizados |

---

## Workflow

### Step 1: Abertura e Contexto Inicial

1. Cumprimentar o usuario no tom do @fl-chief (direto, estrategico, sem enrolacao)
2. Se `contexto_inicial` fornecido, analisar e pular perguntas ja respondidas
3. Se nao, iniciar elicitacao

### Step 2: Elicitacao Diagnostica (max 5 perguntas)

Perguntas obrigatorias (adaptar conforme respostas anteriores):

**Pergunta 1 — Nicho e Avatar**
> "Voce ja tem nicho definido e sabe exatamente pra quem voce fala? Consegue descrever seu avatar em 2 frases?"

- Se SIM com clareza → ponto para Marco >= 2
- Se NAO ou vago → Marco 1 confirmado, encerrar diagnostico

**Pergunta 2 — Roma (Terra Prometida)**
> "Qual a transformacao que voce promete? Seu aluno/cliente sai de onde e chega onde?"

- Se SIM com Roma clara → ponto para Marco >= 2
- Se NAO → Marco 1

**Pergunta 3 — Oferta Estruturada**
> "Voce ja tem uma oferta com entregaveis, preco, garantia e bonus definidos?"

- Se SIM → ponto para Marco >= 3
- Se NAO → Marco 2

**Pergunta 4 — Historico de Lancamento**
> "Voce ja lancou alguma vez? Se sim, foi semente (para lista pequena) ou classico (com CPLs e abertura de carrinho)?"

- Nunca lancou → Marco 3
- Semente → Marco 4
- Classico → Marco 5

**Pergunta 5 — Objetivo Atual (confirmacao)**
> "O que voce quer resolver agora? (a) Definir minha base, (b) Criar minha oferta, (c) Fazer meu primeiro lancamento, (d) Escalar para classico, (e) Otimizar meu classico"

- Confirma o marco identificado nas perguntas anteriores

### Step 3: Consolidacao do Diagnostico

1. Calcular marco com base nas respostas
2. Se houver conflito entre respostas (ex: diz que tem oferta mas nao descreve Roma), priorizar o marco mais baixo
3. Apresentar resultado ao usuario:

```
## Diagnostico

**Seu Marco:** {numero} — {nome}
**Confianca:** {alta | media}
**Proximo passo recomendado:** {task_name}
**Agente responsavel:** {agent_name}

{Justificativa em 2-3 frases}
```

### Step 4: Roteamento

1. Confirmar com o usuario: "Posso te encaminhar para {proximo passo}?"
2. Se SIM → handoff para o agente/task correto
3. Se NAO → permitir override manual do marco

---

## Veto Conditions

| Condicao | Acao |
|----------|------|
| Usuario nao responde perguntas suficientes (< 3) | NAO diagnosticar — pedir mais informacao |
| Respostas contraditorias sem resolucao | Atribuir marco mais conservador (mais baixo) |
| Usuario quer pular direto para lancamento sem alicerce | VETAR — explicar risco e redirecionar para Marco 1 |

---

## Acceptance Criteria

- [ ] Diagnostico identifica corretamente 1 dos 5 marcos
- [ ] Maximo de 5 perguntas feitas ao usuario
- [ ] Nivel de confianca declarado (alta/media)
- [ ] Proximo passo e agente responsavel indicados
- [ ] Usuario confirma o roteamento antes de prosseguir
- [ ] Nenhum usuario e encaminhado para task avancada sem pre-requisitos cumpridos

---

## Handoff

| Marco Diagnosticado | Task Destino | Agente Destino |
|---------------------|-------------|----------------|
| 1 — Sem alicerce | `construir-alicerce` | @fl-alicerce |
| 2 — Alicerce pronto | `montar-oferta` | @fl-oferta |
| 3 — Oferta pronta | Lancamento Semente | @fl-lancamento-semente |
| 4 — Pos-semente | Lancamento Classico | @fl-lancamento-classico |
| 5 — Otimizar classico | Otimizacao Classico | @fl-lancamento-classico |

**Dados transferidos no handoff:**
- Marco identificado
- Respostas do diagnostico (contexto)
- Nivel de confianca
- Observacoes do @fl-chief
