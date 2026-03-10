# Escrever Light Copy

> Task do comando `*escrever` do @lc-rewriter
> Cria copy do zero usando metodologia Light Copy (M1-M4)

---

## Task Metadata

```yaml
task_name: "Escrever Light Copy"
status: active
responsible_executor: "@lc-rewriter"
execution_type: Agent
estimated_time: "1-2h"
input:
  - "Objetivo de marketing (venda, captacao, engajamento, autoridade)"
  - "Publico-alvo (avatar + temperatura: frio/morno/quente/cliente)"
  - "Formato desejado (reels, email, landing_page, ad, carousel, vsl, etc.)"
  - "Contexto do produto/servico"
output:
  - "Briefing completo (10 campos)"
  - "Cadeia de premissas (min 3 premissas)"
  - "Copy finalizada com elementos literarios aplicados"
  - "Metadata YAML (tecnicas, elementos, audience_stage, intent)"
acceptance_criteria:
  - "Briefing preenchido com 10/10 campos"
  - "Big Idea unica e clara"
  - "Min 3 premissas na cadeia (cada uma: curiosa, factual, aferivel, especifica)"
  - "Min 3 elementos literarios aplicados (EL01-EL25)"
  - "Estrutura 3Cs presente (Contexto + Conteudo + CTA)"
  - "Copy editada com corte de 30%"
  - "Temperatura do publico refletida no tom"
```

---

## Veto Conditions

| Condition | Action |
|-----------|--------|
| Sem objetivo de marketing definido | BLOQUEAR — voltar a Step 1 |
| Sem avatar/temperatura definidos | BLOQUEAR — nao escrever sem saber pra quem |
| Big Idea ausente apos briefing | BLOQUEAR — copy sem Big Idea e copy sem direcao |
| Premissa baseada em promessa ("voce vai ficar rico") | REJEITAR — reformular como premissa logica |
| Copy sem CTA | BLOQUEAR — toda peca precisa de CTA |
| Copy nao editada (sem corte 30%) | BLOQUEAR — edicao e obrigatoria |

---

## Steps

### Step 1: Elicitar Contexto

```yaml
description: "Coletar informacoes minimas para iniciar o briefing"
cognitive_type: "elicitation"
automation_potential: 0.2
executor: "@lc-rewriter"
precondition: "Usuario solicitou *escrever"
output: "Respostas para campos 1-8 do briefing"
guardrails:
  - "Nao iniciar escrita sem objetivo + avatar + formato"
  - "Se temperatura nao informada, assumir FRIO (mais seguro)"
decision_rule: "IF 3 campos criticos preenchidos (objetivo, avatar, formato) THEN prosseguir ELSE pedir o que falta"
```

**Perguntas obrigatorias:**
1. Qual o objetivo? (vender, captar lead, engajar, construir autoridade)
2. Pra quem? (descreva o avatar — ou escolha: frio/morno/quente/cliente)
3. Qual formato? (email, reels, landing page, ad, carousel, VSL, etc.)
4. Qual produto/servico? (1 frase)

**Perguntas opcionais (se usuario nao informar, preencher com inferencia):**
5. Data de entrega?
6. Referencias ou inspiracoes?
7. Restricoes de tom? (ex: nao usar humor, evitar palavras X)

---

### Step 2: Montar Briefing (10 Campos)

```yaml
description: "Preencher briefing completo usando Framework 2 do lc-rewriter"
cognitive_type: "synthesis"
automation_potential: 0.6
executor: "@lc-rewriter"
precondition: "Step 1 completo com min 3 campos criticos"
output: "Briefing formatado com 10 campos"
guardrails:
  - "Campo 9 (Big Idea) DEVE ser preenchido — nao deixar vazio"
  - "Big Idea = 1 frase que resume toda a peca"
  - "Se usuario quer falar de tudo, VETAR — Big Idea e UMA so"
decision_rule: "IF Big Idea definida THEN prosseguir ELSE iterar ate definir"
```

**10 Campos do Briefing:**
1. Nome descritivo da peca
2. Codigo interno (auto-gerado: LC-{FORMATO}-{SEQ})
3. Data de entrega
4. Objetivo de marketing
5. Objetivo de comunicacao
6. Publico (demografia + temperatura)
7. Formato
8. Pesquisa & Referencias
9. **Big Idea** (OBRIGATORIO — "Se voce quer falar de tudo, nao fala de nada")
10. Texto completo (preenchido no Step 4)

**Checkpoint:** Apresentar briefing ao usuario para validacao antes de prosseguir.

---

### Step 3: Construir Cadeia de Premissas

```yaml
description: "Montar cadeia de premissas logicas que sustentam a Big Idea"
cognitive_type: "reasoning"
automation_potential: 0.5
executor: "@lc-rewriter"
precondition: "Briefing validado com Big Idea definida"
output: "Cadeia de 3-5 premissas + conclusao logica"
guardrails:
  - "Cada premissa DEVE passar no checklist: Curiosa, Factual, Aferivel, Especifica"
  - "Premissa != Promessa — se parece promessa, reformular"
  - "Min 3 premissas, max 5 por cadeia"
  - "Conclusao deve ser consequencia logica das premissas"
decision_rule: "IF todas premissas passam checklist AND conclusao e logica THEN prosseguir ELSE reformular premissa fraca"
```

**Formato:**
```
Premissa 1: [fato curiosa e especifico]
Premissa 2: [fato que conecta ao anterior]
Premissa 3: [fato que direciona a conclusao]
= Conclusao: [consequencia logica inevitavel]
```

**Checklist por premissa:**
- [ ] Curiosa? (desperta vontade de saber mais)
- [ ] Factual? (baseada em fato verificavel)
- [ ] Aferivel? (pessoa consegue validar sozinha)
- [ ] Especifica? (numeros, nomes, dados concretos)
- [ ] Irrefutavel? (dificil de contra-argumentar)

---

### Step 4: Escrever Copy com Elementos Literarios

```yaml
description: "Escrever a copy aplicando processo criativo de 8 etapas + elementos literarios"
cognitive_type: "creative_generation"
automation_potential: 0.4
executor: "@lc-rewriter"
precondition: "Cadeia de premissas validada"
output: "Copy completa no formato escolhido"
guardrails:
  - "Min 3 elementos literarios (EL01-EL25) aplicados"
  - "Estrutura 3Cs obrigatoria: Contexto → Conteudo → CTA"
  - "Headline DEVE usar formula Light Copy (curiosidade + especificidade)"
  - "Tom alinhado com temperatura do publico"
  - "Premissas tecidas no corpo, nao listadas"
decision_rule: "IF copy tem 3Cs + min 3 EL + premissas integradas THEN prosseguir para edicao ELSE reescrever secao fraca"
```

**Processo Criativo (8 Etapas):**
1. Definir Objetivo (ja feito no briefing)
2. Repertorio (consultar referencias)
3. Referencia (identificar copys similares bem-sucedidas)
4. Brainstorm Divergente (gerar 5+ versoes de headline/abertura)
5. Brainstorm Convergente (selecionar melhor versao)
6. Maturar (pausar se possivel)
7. Executar (escrever copy completa)
8. Editar (Step 5)

**Elementos literarios a considerar:** EL01 Linguagem Fantasiosa, EL02 Narrativa Real, EL03 Pergunta Retorica, EL04 Metafora, EL05 Contraste, EL07 Ritmo, EL08 Inversao de Expectativa, EL12 Repeticao Anafora, EL13 Hiperbole Controlada, EL15 Cliffhanger, EL17 Confissao

---

### Step 5: Editar (Corte de 30%)

```yaml
description: "Aplicar edicao obrigatoria cortando pelo menos 30% do texto"
cognitive_type: "editing"
automation_potential: 0.5
executor: "@lc-rewriter"
precondition: "Copy completa escrita no Step 4"
output: "Copy editada + diff mostrando cortes"
guardrails:
  - "Corte MINIMO de 30% — se copy tem 1000 palavras, versao final <= 700"
  - "Cortar adjetivos desnecessarios primeiro"
  - "Cortar frases que nao avancem a Big Idea"
  - "Manter premissas intactas"
  - "Manter CTA intacto"
decision_rule: "IF word_count_final <= word_count_original * 0.7 THEN prosseguir ELSE continuar cortando"
```

**O que cortar (prioridade):**
1. Adjetivos genericos ("incrivel", "maravilhoso", "unico")
2. Frases de aquecimento que nao agregam
3. Repeticoes nao-intencionais
4. Paragrafos que reprovam o teste "e se eu tirasse isso, a copy perde algo?"
5. Transicoes obvias ("alem disso", "por outro lado")

---

### Step 6: Gerar Metadata + Entrega

```yaml
description: "Gerar metadata YAML da peca e entregar ao usuario"
cognitive_type: "classification"
automation_potential: 0.9
executor: "@lc-rewriter"
precondition: "Copy editada e finalizada"
output: "Copy final + metadata YAML + briefing completo"
guardrails:
  - "Metadata deve seguir taxonomy do metadata-taxonomy.yaml"
  - "Todos os campos obrigatorios preenchidos"
decision_rule: "IF metadata valida THEN entregar ELSE corrigir campos faltantes"
```

**Formato de entrega:**
```yaml
# --- metadata ---
content_type: "{formato}"
audience_stage: "{cold|warm|hot|customer}"
intent: "{attention|engagement|authority|conversion|retention}"
techniques: ["{tecnicas usadas}"]
literary_elements: ["{EL_IDs usados}"]
big_idea: "{Big Idea em 1 frase}"
premises_count: {N}
word_count_original: {N}
word_count_final: {N}
cut_percentage: "{N}%"
# --- /metadata ---

{COPY FINAL}

# --- briefing ---
{BRIEFING COMPLETO 10 CAMPOS}
# --- /briefing ---
```

---

## Output Example

**Input:** "Escreve um email de carrinho aberto pro meu curso de yoga online, publico morno"

**Output:**
```yaml
# --- metadata ---
content_type: email
audience_stage: warm
intent: conversion
techniques: [logic_of_premises, magnetic_opening, objection_killing]
literary_elements: [EL02, EL05, EL08, EL12]
big_idea: "Yoga nao e sobre flexibilidade — e sobre o que voce descobre quando para de forcar"
premises_count: 3
word_count_original: 420
word_count_final: 285
cut_percentage: "32%"
# --- /metadata ---

Subject: Voce esta forcando demais (e isso explica tudo)

Ontem uma aluna me mandou: "Prof, tentei 3 anos e nao consigo nem tocar os pes."

Respondi: "Otimo. Voce esta no lugar certo."

[Premissa 1] Pesquisadores de Harvard mediram a flexibilidade de 200 praticantes...
[Premissa 2] Os que progrediam mais rapido tinham algo em comum...
[Premissa 3] Nao era talento, idade ou genetica...
= Os que paravam de forcar progrediam 3x mais rapido.

[CTA] O Metodo Yoga Sem Forca abre hoje. 47 vagas.
→ [LINK]

# --- briefing ---
1. Email Carrinho Aberto - Yoga Sem Forca
2. LC-EMAIL-001
3. 2026-03-10
4. Conversao — abertura de carrinho
5. Quebrar objecao "nao sou flexivel"
6. Mulheres 30-50, morno (ja seguem no Instagram)
7. Email
8. Ref: sequencia Stories ultima semana
9. Big Idea: Yoga nao e sobre flexibilidade
10. [copy acima]
# --- /briefing ---
```

---

## Completion Criteria

- [ ] Briefing 10/10 campos preenchidos
- [ ] Big Idea unica definida
- [ ] Cadeia de premissas validada (min 3, cada com 4+ criterios)
- [ ] Copy com estrutura 3Cs
- [ ] Min 3 elementos literarios aplicados
- [ ] Edicao 30% aplicada
- [ ] Metadata YAML gerada
- [ ] Entrega formatada ao usuario

## Handoff

| Direction | Agent | When |
|-----------|-------|------|
| FROM | @lc-chief | Quando lc-chief roteia pedido de escrita |
| FROM | @fl-copy (cross-squad) | Quando FL precisa de copy com Light Copy avancado |
| TO | @lc-chief | Quando copy pronta precisa de review estrategico |
| TO | @lc-stories | Quando copy precisa ser adaptada para stories |
