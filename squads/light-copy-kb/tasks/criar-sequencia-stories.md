# Criar Sequencia de Stories

> Task do comando `*criar-sequencia` do @lc-stories
> Cria sequencia completa de Instagram Stories usando dispositivos S10X

---

## Task Metadata

```yaml
task_name: "Criar Sequencia de Stories"
status: active
responsible_executor: "@lc-stories"
execution_type: Agent
estimated_time: "1-2h"
input:
  - "Tipo de sequencia (SEQ01-SEQ12)"
  - "Objetivo (engajamento, consciencia, venda, aquecimento, etc.)"
  - "Tema ou produto"
  - "Avatar/publico"
output:
  - "Sequencia completa de stories (texto + dispositivos por story)"
  - "Mapa de dispositivos utilizados"
  - "Indicacao de cadencia (alta/baixa)"
  - "Metadata YAML"
acceptance_criteria:
  - "Min 5 dispositivos diferentes (D01-D39) aplicados"
  - "CTA no primeiro story (enquete, caixinha, inbox) — OBRIGATORIO"
  - "Regra 90/10 respeitada (se nao e venda, 0% venda)"
  - "Min stories conforme tipo: Aquecimento=15, Engajamento=10, Caixinha=8, Divulgacao=6"
  - "Cada story com texto + dispositivo identificado"
  - "Cadencia correta para o tipo de sequencia"
```

---

## Veto Conditions

| Condition | Action |
|-----------|--------|
| Sem tema definido | BLOQUEAR — nao criar stories sem tema |
| CTA ausente no primeiro story | BLOQUEAR — regra S10X inviolavel |
| Menos de 5 dispositivos | BLOQUEAR — sequencia pobre demais |
| Sequencia 90% com CTA de venda | REJEITAR — viola regra 90/10 |
| Debriefing da sequencia anterior nao feito | ALERTAR — recomendado antes de criar nova |
| Tipo de sequencia nao especificado | INFERIR do objetivo e confirmar |

---

## Steps

### Step 1: Elicitar Tipo + Tema

```yaml
description: "Identificar tipo de sequencia e tema principal"
cognitive_type: "elicitation"
automation_potential: 0.3
executor: "@lc-stories"
precondition: "Usuario solicitou *criar-sequencia"
output: "Tipo (SEQ01-12) + tema + avatar"
guardrails:
  - "Se tipo nao informado, inferir do objetivo"
  - "Se tema vago, usar Framework 4 (4 fontes de temas) para refinar"
decision_rule: "IF tipo + tema definidos THEN prosseguir ELSE elicitar"
```

**Perguntas:**
1. Qual o objetivo? (engajar, vender, aquecer, divulgar conteudo, etc.)
2. Sobre o que? (tema, produto, evento)
3. Pra quem? (avatar — se nao souber, inferir do tema)

**Mapeamento objetivo → tipo:**
| Objetivo | Tipo provavel |
|----------|--------------|
| Engajar | SEQ01 (Engajamento Puro) |
| Vender digital | SEQ05 (Venda Digital) |
| Aquecer pre-lancamento | SEQ07 (Aquecimento Pico) |
| Divulgar conteudo | SEQ12 (Divulgacao Conteudo) |
| Caixinha tematica | SEQ03 (Caixinha por Tema) |

---

### Step 2: Selecionar Dispositivos

```yaml
description: "Escolher dispositivos S10X adequados ao tipo e tema"
cognitive_type: "selection"
automation_potential: 0.6
executor: "@lc-stories"
precondition: "Tipo e tema definidos"
output: "Lista de 5-10 dispositivos selecionados com justificativa"
guardrails:
  - "Min 5 dispositivos diferentes"
  - "Min 2 grupos diferentes (A-J)"
  - "D01 (combustivel extra) e D04 (engajamento puro) presentes em sequencias 90%"
  - "D10b-D11 (lancamento) APENAS em sequencias 10%"
decision_rule: "IF >= 5 dispositivos de >= 2 grupos THEN prosseguir ELSE adicionar dispositivos"
```

**Regras de selecao por tipo:**
- SEQ01-04 (90%): Priorizar Grupos A, B, E, F, G, I
- SEQ05-08 (10%): Priorizar Grupos C, D, G, H
- SEQ09-12 (variavel): Mix conforme objetivo especifico

**Formato de selecao:**
```
Dispositivos selecionados:
1. D04 (engajamento_puro) — abrir com enquete
2. D01 (combustivel_extra) — tema do dia
3. D16 (antes_depois) — prova de transformacao
4. D23 (voce_sabia) — curiosidade
5. D12 (desafio_gincana) — interacao
```

---

### Step 3: Definir CTA do Primeiro Story

```yaml
description: "Criar CTA obrigatorio para o primeiro story da sequencia"
cognitive_type: "creative_generation"
automation_potential: 0.4
executor: "@lc-stories"
precondition: "Dispositivos selecionados"
output: "Primeiro story com CTA definido"
guardrails:
  - "OBRIGATORIO: CTA no primeiro story — regra S10X inviolavel"
  - "CTA deve ser: enquete OU caixinha OU inbox"
  - "CTA deve ser facil de responder (baixa barreira)"
  - "CTA deve gerar dado util (qualifica lead)"
decision_rule: "IF CTA presente e tipo valido THEN prosseguir ELSE criar CTA"
```

**Tipos de CTA para primeiro story:**
- **Enquete:** 2 opcoes polarizadas (ex: "Voce pratica yoga? Sim / Quero comecar")
- **Caixinha:** Pergunta aberta geradora (ex: "Qual sua maior dificuldade no yoga?")
- **Inbox:** Palavra-gatilho (ex: "Manda YOGA no DM que te explico")

---

### Step 4: Escrever Sequencia Completa

```yaml
description: "Escrever texto de cada story com dispositivo aplicado"
cognitive_type: "creative_generation"
automation_potential: 0.3
executor: "@lc-stories"
precondition: "CTA do primeiro story definido + dispositivos selecionados"
output: "Sequencia completa de stories (texto + dispositivo + visual hint)"
guardrails:
  - "Cada story deve ter: texto + dispositivo identificado + visual hint"
  - "Copy primeiro, dispositivo depois (nao forcar dispositivo no texto)"
  - "Min stories por tipo: Aquecimento=15, Engajamento=10, Caixinha=8, Divulgacao=6"
  - "Ultimo story deve ter CTA final (link, inbox, ou reminder)"
decision_rule: "IF min_stories atingido AND dispositivos >= 5 AND CTA_first AND CTA_last THEN prosseguir ELSE completar"
```

**Formato por story:**
```
### Story {N}
**Dispositivo:** D{XX} ({nome})
**Tipo visual:** texto / foto+texto / video / enquete / caixinha
**Texto:** "..."
**Visual hint:** [descricao do visual sugerido]
```

**Checkpoint:** Apresentar sequencia completa ao usuario para validacao.

---

### Step 5: Definir Cadencia + Entrega

```yaml
description: "Definir cadencia de publicacao e entregar sequencia formatada"
cognitive_type: "planning"
automation_potential: 0.7
executor: "@lc-stories"
precondition: "Sequencia validada pelo usuario"
output: "Sequencia final + cronograma + metadata"
guardrails:
  - "Cadencia alta (1-3 sequencias/dia) APENAS para SEQ07, SEQ08, SEQ11"
  - "Cadencia baixa (1-3 sequencias/semana) para demais tipos"
  - "Nao publicar sequencia de venda 2 dias seguidos"
decision_rule: "IF cadencia alinhada com tipo THEN entregar ELSE ajustar"
```

**Formato de entrega:**
```yaml
# --- metadata ---
sequence_type: "SEQ{XX}"
theme: "{tema}"
audience_stage: "{cold|warm|hot|customer}"
device_count: {N}
devices_used: [D{XX}, D{YY}, ...]
device_groups: [A, B, E, ...]
story_count: {N}
cadence: "{alta|baixa}"
cta_first_story: "{tipo_cta}"
cta_last_story: "{tipo_cta}"
estimated_publish: "{YYYY-MM-DD}"
# --- /metadata ---

{SEQUENCIA COMPLETA DE STORIES}
```

---

## Output Example

**Input:** "Cria uma sequencia de stories de engajamento sobre yoga para iniciantes"

**Output:**
```yaml
# --- metadata ---
sequence_type: "SEQ01"
theme: "Yoga para iniciantes — mitos e verdades"
audience_stage: "warm"
device_count: 6
devices_used: [D04, D01, D23, D05, D36, D12]
device_groups: [A, B, E, H, I]
story_count: 10
cadence: "baixa"
cta_first_story: "enquete"
cta_last_story: "inbox"
# --- /metadata ---

### Story 1
**Dispositivo:** D04 (engajamento_puro)
**Tipo visual:** enquete
**Texto:** "Voce ja tentou yoga e desistiu?"
**Enquete:** Sim, mais de 1x / Nunca tentei
**Visual hint:** fundo clean, emoji de yoga

### Story 2
**Dispositivo:** D23 (voce_sabia)
**Tipo visual:** texto
**Texto:** "73% das pessoas desistem de yoga nos primeiros 30 dias. O motivo NAO e preguica."
**Visual hint:** numero grande, fonte bold

### Story 3
**Dispositivo:** D01 (combustivel_extra)
**Tipo visual:** texto
**Texto:** "O motivo e: todo metodo tradicional assume que voce ja e flexivel. Spoiler: voce nao e. E tudo bem."
**Visual hint:** foto praticando, texto sobreposto

[... stories 4-9 ...]

### Story 10
**Dispositivo:** D12 (desafio_gincana)
**Tipo visual:** texto
**Texto:** "Desafio: faz 5 minutos de yoga amanha de manha e me manda no DM como foi. Vou responder todo mundo."
**Visual hint:** timer, call to action bold
```

---

## Completion Criteria

- [ ] Tipo de sequencia definido (SEQ01-12)
- [ ] Min 5 dispositivos de min 2 grupos
- [ ] CTA no primeiro story
- [ ] Min stories atingido (conforme tipo)
- [ ] Cada story com texto + dispositivo + visual hint
- [ ] Cadencia alinhada com tipo
- [ ] Metadata YAML gerada
- [ ] Sequencia entregue formatada

## Handoff

| Direction | Agent | When |
|-----------|-------|------|
| FROM | @lc-chief | Quando lc-chief roteia pedido de stories |
| FROM | @fl-conteudo (cross-squad) | Via wf-stories-para-lancamento Phase 2 |
| TO | @lc-rewriter | Quando stories precisam de Light Copy aplicado |
| TO | @lc-stories (*debriefing) | 24h apos publicacao, para analisar resultados |
| TO | @fl-conteudo (cross-squad) | Via wf-stories-para-lancamento Phase 4 |
