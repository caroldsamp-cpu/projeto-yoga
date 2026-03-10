# Revisar Light Copy

> Task do comando `*revisar` do @lc-rewriter
> Revisa copy existente aplicando diagnostico Light Copy (M1-M4)

---

## Task Metadata

```yaml
task_name: "Revisar Light Copy"
status: active
responsible_executor: "@lc-rewriter"
execution_type: Agent
estimated_time: "30min-1h"
input:
  - "Copy original (texto completo)"
  - "Formato da peca (email, reels, ad, carousel, etc.)"
  - "Objetivo de marketing (se conhecido)"
  - "Publico-alvo e temperatura (se conhecido)"
output:
  - "Diagnostico com score 0-10 por dimensao"
  - "Lista de problemas priorizados (CRITICAL > HIGH > MEDIUM)"
  - "Copy revisada com marcacoes de alteracao"
  - "Diff resumido (antes/depois por secao)"
acceptance_criteria:
  - "Todas as 10 heuristicas (LC_RW_H001-H010) aplicadas"
  - "Score por dimensao: briefing, big_idea, premissas, elementos, estrutura, headline, edicao"
  - "Problemas CRITICAL resolvidos na versao revisada"
  - "Edicao 30% aplicada se copy original nao tinha"
  - "Copy revisada mantém intencao original do autor"
```

---

## Veto Conditions

| Condition | Action |
|-----------|--------|
| Copy original nao fornecida | BLOQUEAR — nao ha o que revisar |
| Copy com menos de 20 palavras | REJEITAR — muito curta para diagnostico completo |
| Copy em idioma nao-portugues sem aviso | ALERTAR — confirmar se deve revisar em outro idioma |
| Usuario pediu "so corrigir portugues" | REDIRECIONAR — nao e funcao de Light Copy, sugerir corretor |

---

## Steps

### Step 1: Receber Copy + Contexto

```yaml
description: "Receber a copy original e coletar contexto minimo"
cognitive_type: "elicitation"
automation_potential: 0.3
executor: "@lc-rewriter"
precondition: "Usuario forneceu texto para revisao"
output: "Copy + contexto (objetivo, publico, formato)"
guardrails:
  - "Se contexto nao fornecido, INFERIR do texto e confirmar com usuario"
  - "Nao alterar copy antes de diagnosticar"
decision_rule: "IF copy recebida THEN diagnosticar ELSE pedir copy"
```

**Perguntas (so se nao inferivel do texto):**
1. Qual o objetivo desta peca? (vender, captar, engajar, autoridade)
2. Pra quem e? (avatar + temperatura)
3. Onde vai ser publicada? (formato)

---

### Step 2: Executar Diagnostico (10 Heuristicas)

```yaml
description: "Aplicar todas as 10 heuristicas do lc-rewriter como scanner"
cognitive_type: "analysis"
automation_potential: 0.7
executor: "@lc-rewriter"
precondition: "Copy + contexto recebidos"
output: "Relatorio diagnostico com score por dimensao"
guardrails:
  - "Aplicar TODAS as 10 heuristicas, nao pular nenhuma"
  - "Score de 0-10 por dimensao"
  - "Classificar cada problema: CRITICAL / HIGH / MEDIUM / LOW"
decision_rule: "IF diagnostico completo THEN apresentar ELSE completar heuristicas faltantes"
```

**Heuristicas aplicadas como scanner:**

| ID | Heuristica | O que verifica | Severidade se falhar |
|----|-----------|----------------|---------------------|
| H001 | Briefing Ausente | Existe briefing ou contexto claro? | CRITICAL |
| H002 | Big Idea Ausente | Copy tem UMA ideia central? | CRITICAL |
| H003 | Copy de Promessa | Usa promessas vs premissas logicas? | HIGH |
| H004 | Elemento Literario Ausente | Tem min 3 elementos literarios? | MEDIUM |
| H005 | Estrutura Quebrada | Segue 3Cs (Contexto+Conteudo+CTA)? | CRITICAL |
| H006 | Temperatura Errada | Tom combina com temperatura do publico? | HIGH |
| H007 | Headline Fraca | Headline gera curiosidade + especificidade? | HIGH |
| H008 | Formato Errado | Peca respeita limites do formato? | MEDIUM |
| H009 | Objecao Nao Matada | Objecoes obvias sao tratadas? | MEDIUM |
| H010 | Edicao 30% | Texto parece inchado/nao editado? | HIGH |

**Formato do diagnostico:**
```
## Diagnostico Light Copy

| Dimensao | Score | Severidade | Observacao |
|----------|-------|-----------|------------|
| Briefing/Contexto | X/10 | — | ... |
| Big Idea | X/10 | CRITICAL | ... |
| Premissas | X/10 | HIGH | ... |
| Elementos Literarios | X/10 | MEDIUM | ... |
| Estrutura 3Cs | X/10 | — | ... |
| Headline | X/10 | HIGH | ... |
| Edicao | X/10 | HIGH | ... |

**Score Geral: X/10**

### Problemas Priorizados:
1. [CRITICAL] ...
2. [HIGH] ...
3. [MEDIUM] ...
```

**Checkpoint:** Apresentar diagnostico ao usuario antes de reescrever.

---

### Step 3: Reescrever Copy

```yaml
description: "Reescrever a copy corrigindo problemas identificados"
cognitive_type: "creative_generation"
automation_potential: 0.4
executor: "@lc-rewriter"
precondition: "Diagnostico apresentado e usuario aprovou reescrita"
output: "Copy revisada com problemas CRITICAL e HIGH resolvidos"
guardrails:
  - "Manter intencao original do autor"
  - "Nao mudar Big Idea se era boa — apenas reforcar"
  - "Se Big Idea era ruim, propor alternativa e confirmar"
  - "Aplicar premissas onde havia promessas"
  - "Adicionar elementos literarios faltantes"
  - "Garantir estrutura 3Cs"
decision_rule: "IF score_geral >= 7 apos reescrita THEN prosseguir ELSE iterar na secao mais fraca"
```

**Prioridade de correcao:**
1. CRITICAL primeiro (briefing, big idea, estrutura)
2. HIGH depois (premissas, headline, edicao, temperatura)
3. MEDIUM se tempo permitir (elementos, formato, objecoes)

---

### Step 4: Aplicar Edicao 30%

```yaml
description: "Cortar minimo 30% do texto revisado"
cognitive_type: "editing"
automation_potential: 0.5
executor: "@lc-rewriter"
precondition: "Copy reescrita no Step 3"
output: "Copy final editada"
guardrails:
  - "Corte minimo 30% da versao reescrita"
  - "Se copy original ja era enxuta, corte pode ser 15-20% com justificativa"
  - "Premissas e CTA sao intocaveis"
decision_rule: "IF corte >= 30% OR justificativa_valida THEN prosseguir ELSE continuar cortando"
```

---

### Step 5: Entregar Diff + Versao Final

```yaml
description: "Apresentar comparativo antes/depois + versao final"
cognitive_type: "formatting"
automation_potential: 0.8
executor: "@lc-rewriter"
precondition: "Copy editada e finalizada"
output: "Diff + copy final + metadata"
guardrails:
  - "Mostrar antes/depois por secao (nao so texto final)"
  - "Destacar o que mudou e POR QUE"
decision_rule: "IF diff claro THEN entregar ELSE reformatar"
```

**Formato de entrega:**
```
## Revisao Light Copy

### Score: ANTES X/10 → DEPOIS Y/10

### Alteracoes Principais:
1. **Headline:** "titulo antigo" → "titulo novo" (motivo: H007)
2. **Big Idea:** adicionada/refinada — "nova big idea"
3. **Premissas:** 0 → 3 premissas (substituiram promessas)
4. **Elementos:** +3 EL aplicados (EL02, EL05, EL08)
5. **Edicao:** cortadas X palavras (Y%)

### Copy Final:
{COPY REVISADA}

### Metadata:
{YAML metadata}
```

---

## Output Example

**Input:** "Revisa isso: 'Quer mudar de vida? Nosso curso de yoga vai transformar voce! Compre agora com 50% de desconto. Vagas limitadas!'"

**Output:**
```
## Diagnostico Light Copy

| Dimensao | Score | Severidade | Observacao |
|----------|-------|-----------|------------|
| Briefing | 2/10 | CRITICAL | Sem contexto, objetivo vago |
| Big Idea | 1/10 | CRITICAL | "Mudar de vida" nao e Big Idea |
| Premissas | 0/10 | HIGH | Zero premissas — so promessas |
| Elementos | 1/10 | MEDIUM | Apenas pergunta retorica generica |
| Estrutura | 3/10 | HIGH | CTA presente mas sem Contexto |
| Headline | 2/10 | HIGH | "Quer mudar de vida" — headline mais generica do mundo |
| Edicao | 5/10 | MEDIUM | Texto curto mas inchado de cliches |

**Score Geral: 2/10**

### Copy Revisada (7.5/10):

"73% das pessoas que comecam yoga desistem em 30 dias. [P1]
O motivo nao e preguica — e dor. [P2]
Metodos tradicionais ignoram que seu corpo tem memoria de 10+ anos sentado. [P3]
= Yoga Sem Forca foi desenhado pra quem ja tentou e achou que nao era pra si.

47 vagas. Garantia de 30 dias.
→ [LINK]"
```

---

## Completion Criteria

- [ ] 10 heuristicas aplicadas no diagnostico
- [ ] Score por dimensao calculado
- [ ] Problemas CRITICAL resolvidos
- [ ] Copy reescrita mantendo intencao original
- [ ] Edicao 30% aplicada
- [ ] Diff antes/depois apresentado
- [ ] Metadata gerada

## Handoff

| Direction | Agent | When |
|-----------|-------|------|
| FROM | @lc-chief | Quando lc-chief roteia pedido de revisao |
| FROM | @fl-copy (cross-squad) | Quando copy de lancamento precisa revisao LC |
| TO | @lc-chief | Quando revisao indica problema estrategico |
| TO | @lc-stories | Quando copy revisada precisa adaptacao para stories |
