# Debriefing de Stories

> Task do comando `*debriefing` do @lc-stories
> Analisa resultados de sequencia publicada e decide: repetir / ajustar / descartar

---

## Task Metadata

```yaml
task_name: "Debriefing de Stories"
status: active
responsible_executor: "@lc-stories"
execution_type: Agent
estimated_time: "30min-1h"
input:
  - "Sequencia publicada (referencia ou ID)"
  - "Metricas basicas: views, respostas, cliques no link, DMs recebidos"
  - "Tempo medio de visualizacao (se disponivel)"
  - "Interacoes por story (enquete, caixinha, reacoes)"
output:
  - "Relatorio de debriefing com analise por story"
  - "Decisao por story: REPETIR / AJUSTAR / DESCARTAR"
  - "Lista de hot leads identificados"
  - "Recomendacoes para proxima sequencia"
acceptance_criteria:
  - "Cada story avaliado individualmente"
  - "Metricas comparadas com media do perfil"
  - "Hot leads listados com nivel de qualificacao"
  - "Decisao REPETIR/AJUSTAR/DESCARTAR fundamentada"
  - "Proxima sequencia recomendada com base nos dados"
```

---

## Veto Conditions

| Condition | Action |
|-----------|--------|
| Sequencia nao foi publicada | BLOQUEAR — nao ha dados para debriefing |
| Menos de 24h desde publicacao | ALERTAR — metricas podem estar incompletas |
| Zero metricas fornecidas | BLOQUEAR — debriefing sem dados e achismo |
| Metricas de apenas 1 story (de 10+) | ALERTAR — amostra insuficiente, pedir mais |

---

## Steps

### Step 1: Coletar Metricas

```yaml
description: "Receber metricas da sequencia publicada"
cognitive_type: "elicitation"
automation_potential: 0.3
executor: "@lc-stories"
precondition: "Sequencia publicada ha pelo menos 24h"
output: "Tabela de metricas por story"
guardrails:
  - "Min metricas: views + respostas por story"
  - "Se usuario so tem views, aceitar e trabalhar com o que tem"
  - "Nao inventar metricas — trabalhar apenas com dados reais"
decision_rule: "IF metricas recebidas >= views por story THEN analisar ELSE pedir minimo"
```

**Dados solicitados:**

| Metrica | Obrigatoria? | Onde encontrar |
|---------|-------------|----------------|
| Views por story | SIM | Instagram Insights |
| Respostas (DMs) | SIM | Inbox |
| Cliques no link | NAO | Instagram Insights |
| Reacoes (emoji) | NAO | Instagram Insights |
| Enquete respostas | NAO | Story insights |
| Compartilhamentos | NAO | Instagram Insights |
| Saidas por story | DESEJAVEL | Instagram Insights |

---

### Step 2: Calcular Retention + Engagement

```yaml
description: "Analisar retencao entre stories e taxa de engajamento"
cognitive_type: "analysis"
automation_potential: 0.8
executor: "@lc-stories"
precondition: "Metricas coletadas"
output: "Analise de retencao + engagement rate"
guardrails:
  - "Retencao = views story N / views story 1 * 100"
  - "Engagement = (respostas + cliques + reacoes) / views * 100"
  - "Drop-off aceitavel: 30-50% entre story 1 e ultimo"
  - "Drop-off > 50% entre 2 stories consecutivos = problema (investigar causa)"
decision_rule: "IF dados suficientes THEN calcular ELSE estimar com o disponivel"
```

**Metricas calculadas:**
```
Retencao geral: {views_ultimo / views_primeiro * 100}%
Drop medio entre stories: {media de perda entre consecutivos}%
Engagement rate: {(respostas + cliques) / views * 100}%
Melhor story: Story {N} ({motivo})
Pior story: Story {N} ({motivo})
Drop critico: entre Story {N} e Story {N+1} ({X}% perda)
```

---

### Step 3: Analisar Cada Story

```yaml
description: "Avaliar cada story individualmente e decidir REPETIR/AJUSTAR/DESCARTAR"
cognitive_type: "evaluation"
automation_potential: 0.5
executor: "@lc-stories"
precondition: "Retencao e engagement calculados"
output: "Decisao por story com justificativa"
guardrails:
  - "REPETIR: story com engagement acima da media e retencao estavel"
  - "AJUSTAR: story com boa retencao mas baixo engagement (ou vice-versa)"
  - "DESCARTAR: story com drop critico E baixo engagement"
  - "Story 1 (CTA) tem analise especial — taxa de resposta e o KPI"
decision_rule: "IF cada story classificado THEN prosseguir ELSE revisar stories ambiguos"
```

**Criterios de decisao:**

| Decisao | Retencao | Engagement | Acao |
|---------|----------|-----------|------|
| REPETIR | >= media | >= media | Usar novamente em proximas sequencias |
| AJUSTAR | >= media | < media | Manter posicao, melhorar texto/CTA |
| AJUSTAR | < media | >= media | Mudar posicao na sequencia |
| DESCARTAR | < media | < media | Nao reutilizar |

**Formato por story:**
```
Story {N} - D{XX} ({dispositivo}):
  Views: {N} | Retencao: {X}% | Engagement: {Y}%
  Decisao: REPETIR / AJUSTAR / DESCARTAR
  Motivo: "..."
  Acao: "..." (se AJUSTAR)
```

---

### Step 4: Identificar Hot Leads

```yaml
description: "Listar leads que interagiram e classificar por qualidade"
cognitive_type: "classification"
automation_potential: 0.6
executor: "@lc-stories"
precondition: "Analise por story completa"
output: "Lista de hot leads com classificacao"
guardrails:
  - "Prioridade (LC_ST_H009): texto longo > objecoes > perguntas > emojis"
  - "Lead que respondeu + clicou = HOT"
  - "Lead que so reagiu com emoji = WARM"
  - "Recomendar SPIN inbox para leads HOT"
decision_rule: "IF leads identificados THEN classificar ELSE reportar 'nenhum lead qualificado'"
```

**Classificacao de leads:**
| Nivel | Comportamento | Acao recomendada |
|-------|--------------|-----------------|
| HOT | Respondeu DM com texto + fez pergunta sobre produto | SPIN inbox imediato |
| WARM | Respondeu enquete + reagiu | Nutrir com proxima sequencia |
| COLD | Apenas viu | Manter no funil |

---

### Step 5: Gerar Relatorio + Recomendacoes

```yaml
description: "Compilar relatorio final com recomendacoes"
cognitive_type: "synthesis"
automation_potential: 0.7
executor: "@lc-stories"
precondition: "Analise completa + leads classificados"
output: "Relatorio de debriefing formatado"
guardrails:
  - "Recomendar proxima sequencia com base nos dados"
  - "Se engajamento alto, recomendar repetir formato 30-40x/ano"
  - "Se engajamento baixo, diagnosticar causa raiz"
  - "Sempre incluir 3 aprendizados concretos"
decision_rule: "IF relatorio completo THEN entregar ELSE completar secoes faltantes"
```

---

## Output Example

**Input:** "Debriefing da sequencia de yoga pra iniciantes publicada ontem"

**Output:**
```
## Debriefing — Sequencia SEQ01: Yoga para Iniciantes

**Publicacao:** 2026-03-09
**Stories:** 10 | **Dispositivos:** 6

### Retencao Geral
- Views Story 1: 847 | Views Story 10: 412
- Retencao: 48.6% (OK — media do perfil: 45%)
- Drop critico: Story 5→6 (-18%) — texto longo demais

### Analise por Story

| Story | Dispositivo | Views | Retencao | Engagement | Decisao |
|-------|-----------|-------|----------|-----------|---------|
| 1 | D04 (enquete) | 847 | 100% | 34% | REPETIR |
| 2 | D23 (voce sabia) | 723 | 85% | 8% | REPETIR |
| 3 | D01 (combustivel) | 689 | 81% | 5% | AJUSTAR |
| 5 | D05 (identidade) | 602 | 71% | 12% | REPETIR |
| 6 | D16 (antes/depois) | 493 | 58% | 15% | REPETIR |
| 10 | D12 (desafio) | 412 | 49% | 22% | REPETIR |

### Hot Leads (7 identificados)
1. @maria_yoga — respondeu DM: "Quanto custa?" → HOT → SPIN inbox
2. @lucas_fit — "Tenho hérnia, posso fazer?" → HOT → SPIN inbox
3. @ana_bem — reagiu + respondeu enquete → WARM → nutrir

### 3 Aprendizados
1. Enquete no Story 1 com 34% engagement — manter formula
2. Drop no Story 5→6 indica stories longos perdem atencao
3. Desafio no ultimo story gerou 22% engagement + 5 DMs

### Recomendacao
- Repetir formato SEQ01 com mesmo tema (max 40x/ano)
- Encurtar Story 3 (combustivel ficou generico)
- Aplicar SPIN nos 2 hot leads identificados
- Proxima sequencia sugerida: SEQ03 (Caixinha por Tema) sobre "duvidas de yoga"
```

---

## Completion Criteria

- [ ] Metricas coletadas (min views por story)
- [ ] Retencao e engagement calculados
- [ ] Cada story classificado: REPETIR / AJUSTAR / DESCARTAR
- [ ] Hot leads listados e classificados
- [ ] 3 aprendizados documentados
- [ ] Recomendacao para proxima sequencia
- [ ] Relatorio formatado e entregue

## Handoff

| Direction | Agent | When |
|-----------|-------|------|
| FROM | @lc-chief | Quando usuario pede analise de resultados |
| FROM | @lc-stories (auto) | 24h apos publicacao de sequencia |
| FROM | @fl-conteudo (cross-squad) | Via wf-stories-para-lancamento Phase 5 |
| TO | @lc-stories (*criar-sequencia) | Quando recomendacao e criar nova sequencia |
| TO | @lc-stories (*spin-inbox) | Quando hot leads identificados |
| TO | @lc-chief | Quando debriefing indica problema estrategico |
