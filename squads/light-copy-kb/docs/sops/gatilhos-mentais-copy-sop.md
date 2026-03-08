# SOP: Gatilhos Mentais & Copy — Processo Completo de Escrita Persuasiva

**Autor:** Leandro Ladeira
**Curso:** Light Copy — Modulo 02
**Dominio:** Escrita persuasiva com gatilhos mentais, estrutura e revisao
**Extrator:** @squad-chief via *extract-knowledge
**Data:** 2026-03-08
**Framework base:** `gatilhos-mentais-copy-framework.md`

---

## Visao Geral do Processo

Este SOP descreve o processo completo de escrita persuasiva conforme M02: desde o planejamento (briefing) ate a revisao final, passando pela selecao de gatilhos mentais, construcao de headlines, matanca de objecoes e montagem de oferta.

**Fluxo principal:**

```
Briefing → Estudo Avatar → Emocao (Medo/Ganancia) → Temperatura →
Headlines → Estrutura → Gatilhos → Objecoes → Oferta → Revisao → Publicar (Volume)
```

---

## Parte 1: Preparacao — Briefing e Avatar

### Step 1.1: Preencher Briefing de Copy

```yaml
step_name: "Preencher briefing de copy antes de escrever"
description: "Documento de planejamento com 10 campos obrigatorios"
cognitive_type: Planning
automation_potential: Low
executor: Human (copywriter)
precondition: "Ter demanda de criacao (email, anuncio, VSL, pagina, etc.)"
output: "Briefing preenchido com objetivo, avatar, formato, big idea"
guardrails: "PROIBIDO escrever sem briefing. Excecao: criacoes rotineiras ja dominadas (RD-01)"
decision_rule: "IF criacao nova ou complexa THEN preencha briefing completo. IF rotina diaria ja dominada THEN pode pular."
source: "[SOURCE: M02 > Briefing de Copy]"
```

**Campos:** Nome, Codigo, Data entrega, Objetivo marketing, Objetivo comunicacao, Publico, Formato, Pesquisa/Referencias, Big Idea (Bigadia), Texto.

**Big Idea:** O fio unico que segura o texto. "Se voce quer falar de tudo, nao fala de nada." [SOURCE: M02 > Briefing de Copy]

### Step 1.2: Mapear Avatar

```yaml
step_name: "Mapear avatar/persona do publico-alvo"
description: "Criar ficha demografica + mapa de empatia do cliente ideal"
cognitive_type: Analysis + Empathy
automation_potential: Medium
executor: Human (pode usar pesquisa + formularios)
precondition: "Ter publico definido (ou hipotese inicial)"
output: "Ficha demografica + Mapa de empatia (VE, OUVE, SENTE, FAZ, DORES, GANHOS)"
guardrails: "Se dor aparece de 1 so respondente, ignore — nao molde comunicacao por outlier"
decision_rule: "IF ja tem audiencia THEN envie formulario de pesquisa. IF nao tem THEN comece com hipotese e refine."
source: "[SOURCE: M02 > Estudo do Avatar]"
```

**Regra de linguagem:** Fale a linguagem do avatar — jargao, formalidade, emojis, tudo deve corresponder. [SOURCE: M02 > Estudo do Avatar]

### Step 1.3: Definir Emocao Dominante

```yaml
step_name: "Escolher entre MEDO ou GANANCIA para esta peca"
description: "Decidir se a copy vai operar no sistema de recompensa ou no sistema de medo"
cognitive_type: Judgment
automation_potential: Low
executor: Human
precondition: "Briefing + Avatar preenchidos"
output: "Decisao: esta peca usa MEDO ou GANANCIA (nunca ambos)"
guardrails: "PROIBIDO misturar medo e ganancia na mesma copy — efeito neutro"
decision_rule: "IF objetivo e fugir de dor/perda THEN use MEDO. IF objetivo e buscar prazer/ganho THEN use GANANCIA."
source: "[SOURCE: M02 > Emocoes da Persuasao]"
```

**Pesquisa de medos/desejos (Maslow):** Use Answer the Public, YouTube autocomplete, comentarios de videos virais, TikTok, Instagram, Google autocomplete. [SOURCE: M02 > Emocoes da Persuasao]

### Step 1.4: Identificar Temperatura do Publico

```yaml
step_name: "Classificar temperatura do publico (frio/morno/quente)"
description: "Determinar nivel de consciencia da audiencia para escolher tipo de lead"
cognitive_type: Analysis
automation_potential: Medium
executor: Human
precondition: "Avatar definido"
output: "Classificacao: FRIO, MORNO ou QUENTE + tipo de lead adequado"
guardrails: "NUNCA use lead direto para publico frio. NUNCA re-eduque publico quente."
decision_rule: "IF frio THEN leads indiretos/noticia/pergunta. IF morno THEN pergunta/indireto. IF quente THEN direto/empatia/promessa."
source: "[SOURCE: M02 > Termometro de Aquecimento]"
```

---

## Parte 2: Construcao — Headlines, Estrutura, Gatilhos

### Step 2.1: Criar Headline

```yaml
step_name: "Escrever headline usando tipo adequado a temperatura"
description: "Escolher entre 12 tipos de headline e escrever com especificidade maxima"
cognitive_type: Creativity + Analysis
automation_potential: Medium
executor: Human (ou agente LC como suporte)
precondition: "Temperatura e emocao definidas (Steps 1.3-1.4)"
output: "3-5 opcoes de headline para teste"
guardrails: "Quanto mais especifico, melhor. Adjetivos aumentam CTR. Templates copiados funcionam cada vez menos."
decision_rule: "IF publico frio THEN curiosidade/noticia/historia. IF quente THEN direto/beneficio."
source: "[SOURCE: M02 > Headlines e Subheadlines]"
```

**12 Tipos:** Noticia, Curiosidade, Lista, Como, Prova/Depoimento, Clickbait, Direto, Beneficio, Medo, Historia (in medias res), Comparacao, Problema-Solucao.

**Regra-chave:** "A frase mais importante e a primeira. A segunda mais importante e a segunda." [SOURCE: M02 > Headlines e Subheadlines]

### Step 2.2: Estruturar Texto (3 Partes)

```yaml
step_name: "Construir estrutura: introducao, desenvolvimento, conclusao"
description: "Organizar o texto nos 3 blocos fundamentais com universo cognitivo unico"
cognitive_type: Synthesis
automation_potential: Medium
executor: Human (ou agente LC)
precondition: "Headline definida, briefing preenchido"
output: "Texto estruturado com inicio (3 C's), meio (climax), fim (virada)"
guardrails: "UMA ideia por texto. Mantenha universo cognitivo. Coesao + Coerencia."
decision_rule: "IF texto parece ter 2 ideias THEN separe em 2 textos"
source: "[SOURCE: M02 > Estrutura de Texto]"
```

**Introducao:** 3 C's — Curiosidade, Conflito, Contexto.
**Desenvolvimento:** Alterna sumario (cronologico) + cenico (detalhado). Cria climax.
**Conclusao:** Sintetiza, reflete, surpreende.

### Step 2.3: Selecionar e Aplicar Gatilhos Mentais

```yaml
step_name: "Escolher gatilhos mentais adequados e aplicar com sutileza"
description: "Selecionar 2-4 gatilhos complementares e empilhar na copy"
cognitive_type: Analysis + Creativity
automation_potential: Low
executor: Human (ou agente LC com orientacao)
precondition: "Estrutura montada"
output: "Copy com gatilhos aplicados sutilmente"
guardrails: "Sutileza e TUDO. Gatilho descarado causa efeito contrario. Max 3-4 por peca."
decision_rule: "IF vendendo THEN priorize novidade + porque + urgencia (top 3). IF engajando THEN priorize comunidade + curiosidade + historia."
source: "[SOURCE: M02 > Afeicao] + [SOURCE: M02 > Novidade]"
```

**Combinacoes classicas:**
- Afeicao + Autoridade (para nao parecer arrogante)
- Ancoragem + Escassez (para precificacao)
- Antecipacao + Curiosidade (para teasers)
- FOMO + Exclusividade + Comunidade (para eventos)
- Historia + Compromisso (para VSL)
- Novidade + Porque + Urgencia (para lancamentos)

**Como aplicar cada gatilho — referencia rapida:**

| Gatilho | Tecnica principal | Erro fatal |
|---------|------------------|-----------|
| Afeicao | Autodepreciacao antes de autoridade | Listar conquistas 6 min seguidos |
| Ancoragem | Mostrar preco maior primeiro | Ancora falsa ("poderia cobrar R$780") |
| Antecipacao | Loop de curiosidade, teasers, contagem regressiva | Over-promising (setup > punchline) |
| Compromisso | Premissas sequenciais ("sim, sim, sim") | Mantras obvios ("eu posso, eu consigo") |
| Comunidade | Bordoes, rituais, dar voz ao publico | Sem nome/ritual unico |
| Curiosidade | Lista de perguntas especificas, clickbait | Revelar o final cedo |
| Escassez | Vagas REAIS + verificaveis | "10 vagas" para curso online |
| Exclusividade | Nota de corte, intimidade real | "Exclusivo" para todo mundo |
| FOMO | Mostrar o que os outros estao ganhando | Prometer exclusividade e nao entregar |
| Historia | Detalhes cenicos: dialogos, sentimentos, sons | So sumario sem cena = chata |
| Jornada do Heroi | 3 atos: partida, treta, retorno transformado | Forcar 12 passos na forca |
| Novidade | COMPARAR com o velho primeiro | Reembalagem sem melhoria real |
| Porque | Dar razao (mesmo simples) — 60%→93% aceitacao | Nenhum "porque" = posicao mais fraca |
| Prova | Resultado verificavel (aferivel), NAO elogio | Elogio como prova |
| Simplicidade | Analogias + acronimos + max 3-4 steps | Jargao tecnico para leigos |
| Reciprocidade | Atencao individual (audio, video, DM) | Conteudo "gratis" que e 90% pitch |
| Reconhecimento | Elogio especifico e sincero + gamificacao | Elogio generico pre-favor |
| Urgencia | "Hoje e o ultimo dia" (direto funciona melhor) | Falsa urgencia permanente |
| Surpresa | Overdelivery sem anunciar | Anunciar que vai ter surpresa |
| Inimigo Comum | Posicionar contra sistema/cultura, nao pessoas | Nomear concorrentes sem proposito |

---

## Parte 3: Refinamento — Objecoes e Oferta

### Step 3.1: Mapear e Matar Objecoes

```yaml
step_name: "Identificar objecoes do avatar e preparar narrativas de matanca"
description: "Criar banco de objecoes com 3-5 narrativas para cada"
cognitive_type: Analysis + Creativity
automation_potential: Medium
executor: Human
precondition: "Avatar definido, copy estruturada"
output: "Banco de objecoes com narrativas de matanca por canal"
guardrails: "CUIDADO: nao LEVANTE objecoes que a pessoa nao tem. Mate APENAS as que ja existem."
decision_rule: "IF objecao aparece em venda 1-a-1 repetidamente THEN crie narrativa. IF aparece 1 vez THEN ignore."
source: "[SOURCE: M02 > Objecoes]"
```

**8 objecoes universais:** Funciona pra mim? / Muito caro / Sem dinheiro agora / Sem tempo / Proxima vez / Nao consigo / Basico/avancado demais / Medo

**9 tecnicas:** Logica, Analogias, Historias, Prova, Psicologia reversa, Reforcar objetivo, Ancoragem, Futuro com problema, Ancoragem mental (PNL)

**Onde matar objecoes (NAO tudo no VSL):** Remarketing emails, Instagram DMs, WhatsApp, ads de remarketing (6-8 min), lives de conteudo, Zoom de duvidas, venda 1-a-1. [SOURCE: M02 > Objecoes]

### Step 3.2: Montar Oferta

```yaml
step_name: "Construir oferta com anatomia completa"
description: "Montar entregaveis + bonus + UVP + garantia + preco + escassez"
cognitive_type: Synthesis + Judgment
automation_potential: Low
executor: Human
precondition: "Copy estruturada com gatilhos aplicados"
output: "Oferta completa com todos os 7 componentes"
guardrails: "3 entregaveis incriveis > 18 mediocres. Bonus NAO sao coisas que ja deveriam estar no produto."
decision_rule: "IF oferta tem mais de 5 entregaveis THEN corte — excesso cria objecao 'nao vou usar tudo'"
source: "[SOURCE: M02 > Oferta]"
```

**7 componentes:** Entregaveis (curiosidade + beneficio + vantagem + formato), Bonus, UVP, Garantia, Preco (com ancoragem), Disponibilidade, Escassez.

**Cada entregavel e vendido individualmente** com sua propria copy — curiosidade + beneficio + vantagem. [SOURCE: M02 > Oferta]

---

## Parte 4: Finalizacao — Revisao e Volume

### Step 4.1: Revisar Copy (7 Checkpoints)

```yaml
step_name: "Revisar copy com checklist sequencial de 7 pontos"
description: "Verificar objetivos, audiencia, 3 C's, texto, alinhamento"
cognitive_type: Analysis
automation_potential: Medium
executor: Human (ou agente LC)
precondition: "Copy finalizada"
output: "Copy revisada e aprovada"
guardrails: "Leia em voz alta. Leia para alguem. Peca para outra pessoa revisar."
decision_rule: "IF repetiu mesma palavra 3x em trecho curto THEN reescreva — sinal de que nao leu em voz alta"
source: "[SOURCE: M02 > Revisao de Copy]"
```

**7 Checkpoints:**
1. Objetivo marketing atingido?
2. Objetivo comunicacao atingido?
3. Audiencia correta? (linguagem adequada ao estagio)
4. Objetivo de trafego correto? (relacionamento/descoberta/conversao/remarketing)
5. 3 C's presentes? (Clareza, Coesao, Consistencia)
6. Texto demais? Corte. "Eu sou um matador de frases." [SOURCE: M02 > Revisao]
7. Alinhado com audiencia?

### Step 4.2: Publicar em Volume

```yaml
step_name: "Publicar e manter volume consistente"
description: "Aplicar Lei dos Grandes Numeros — volume gera exponencialidade"
cognitive_type: Execution
automation_potential: Medium
executor: Human
precondition: "Copy revisada e aprovada"
output: "Peca publicada no mundo real"
guardrails: "NAO criar sem publicar. Publicar e obrigatorio."
decision_rule: "IF 1 peca nao performou THEN crie mais — volume resolve. IF nenhuma performa THEN revise briefing/avatar."
source: "[SOURCE: M02 > Lei dos Grandes Numeros]"
```

**Matematica:**
- 1/semana = ~1 bom/ano
- 3/semana = ~20 bons/ano
- 1/dia = ~50 bons/ano [SOURCE: M02 > Lei dos Grandes Numeros]

---

## Parte 5: Ferramentas de Suporte

### Step 5.1: Reuniao de Criacao (quando aplicavel)

```yaml
step_name: "Conduzir reuniao de criacao com 10 tecnicas"
description: "Brainstorming estruturado com papeis definidos e tecnicas diversas"
cognitive_type: Creativity
automation_potential: Low
executor: Human (grupo 4-8 pessoas)
precondition: "Briefing preenchido, pesquisa feita"
output: "Lista de ideias, pontos de vista, dialogos, universos cognitivos"
guardrails: "10-30 min MAX. Lider nao julga DURANTE. Proibido 'essa ideia nao vai dar.'"
decision_rule: "IF complexidade alta (campanha, lancamento) THEN faca reuniao. IF peca simples THEN pode pular."
source: "[SOURCE: M02 > Reuniao de Criacao]"
```

**10 tecnicas/comandos:** Escrita livre, Ideias livres com restricao, POV inusitado, Dialogos, Universo cognitivo, Correlacao, Oposto/Negativo, Listas, Argumentos vs promessas, Sinonimos/Antonimos.

### Step 5.2: Usar Inimigo Comum (quando estrategico)

```yaml
step_name: "Posicionar contra inimigo comum (se fizer sentido estrategico)"
description: "Escolher tipo de inimigo adequado e usar para engajamento/polarizacao"
cognitive_type: Judgment
automation_potential: Low
executor: Human
precondition: "Ter clareza do posicionamento de marca"
output: "Copy com inimigo comum posicionado"
guardrails: "Quanto mais forte o inimigo, mais polarizado o publico: pessoas vao AMAR ou ODIAR"
decision_rule: "IF quer views maximos THEN inimigo aberto + especifico. IF quer preservar branding THEN inimigo disfarçado + humor."
source: "[SOURCE: M02 > Inimigo Comum]"
```

**5 tipos:** Concorrente direto, Aberto especifico, Aberto amplo/sistemico, Disfarçado com humor, Cultura vs contra-cultura.

> "Eu particularmente prefiro menos view e mais vida." [SOURCE: M02 > Inimigo Comum]

---

## Regras de Decisao

| ID | Regra | Condicao | Acao | Fonte |
|----|-------|----------|------|-------|
| RD-01 | Briefing necessario? | IF criacao nova/complexa THEN sim. IF rotina ja dominada THEN opcional | Preencher ou pular briefing | [SOURCE: M02 > Briefing] |
| RD-02 | Emocao da peca | IF fuga de dor THEN MEDO. IF busca de prazer THEN GANANCIA. NUNCA misture. | Escolher uma emocao e manter | [SOURCE: M02 > Emocoes] |
| RD-03 | Tipo de headline | IF frio THEN curiosidade/noticia. IF quente THEN direto/beneficio | Selecionar tipo adequado | [SOURCE: M02 > Headlines] |
| RD-04 | Nivel de gatilhos | IF vendendo THEN novidade+porque+urgencia. IF engajando THEN comunidade+curiosidade+historia | Empilhar 2-4 gatilhos | [SOURCE: M02 > Novidade] |
| RD-05 | Objecao nova? | IF aparece em multiplas vendas 1-a-1 THEN crie narrativa. IF 1 vez THEN ignore | Matar ou ignorar objecao | [SOURCE: M02 > Objecoes] |
| RD-06 | Tamanho da oferta | IF mais de 5 entregaveis THEN corte. 3 incriveis > 18 mediocres | Simplificar oferta | [SOURCE: M02 > Oferta] |
| RD-07 | Escassez real? | IF fisicamente verificavel THEN use escassez. IF digital ilimitado THEN use urgencia (tempo) | Escolher escassez ou urgencia | [SOURCE: M02 > Escassez] |
| RD-08 | Volume insuficiente? | IF 1 peca nao performou THEN crie mais — volume resolve. IF nenhuma THEN revise avatar | Aumentar volume ou pivotar | [SOURCE: M02 > Lei Grandes Numeros] |
| RD-09 | Reuniao necessaria? | IF campanha/lancamento THEN faca reuniao. IF peca simples THEN pule | Convocar ou nao reuniao | [SOURCE: M02 > Reuniao] |
| RD-10 | Usar inimigo? | IF quer polarizacao controlada THEN sim, com humor. IF quer preservar relacoes THEN evite | Posicionar ou nao contra inimigo | [SOURCE: M02 > Inimigo Comum] |

---

## Outputs por Fase

| Fase | Entregavel | Formato |
|------|-----------|---------|
| 1. Preparacao | Briefing preenchido + Avatar + Emocao + Temperatura | Documento estruturado |
| 2. Construcao | Headline(s) + Texto estruturado + Gatilhos aplicados | Copy formatada para canal |
| 3. Refinamento | Banco de objecoes + Oferta completa | Documento + modulos de oferta |
| 4. Finalizacao | Copy revisada + publicada | Peca final no canal escolhido |
| 5. Suporte | Ideias de reuniao + posicionamento de inimigo | Listas de ideias + copy de posicionamento |

---

## Appendix D: Rastreabilidade de Fontes (55+)

| ID | Referencia | Fonte | Secao SOP |
|----|-----------|-------|-----------|
| 001 | "90% de voces escrevem sem nunca ter planejado nada." | [SOURCE: M02 > Briefing de Copy] | Step 1.1 |
| 002 | "Se voce quer falar de tudo, nao fala de nada." (Big Idea) | [SOURCE: M02 > Briefing de Copy] | Step 1.1 |
| 003 | "Aumentamos o tamanho da fonte e foi de 15% para 35% conversao." | [SOURCE: M02 > Briefing de Copy] | Step 1.1 |
| 004 | "Quem fala com todo mundo nao fala com ninguem." | [SOURCE: M02 > Estudo do Avatar] | Step 1.2 |
| 005 | "Descubra a paixao das pessoas para engaja-las na sua causa." | [SOURCE: M02 > Estudo do Avatar] | Step 1.2 |
| 006 | "Positivo com positivo e positivo. Negativo com positivo e neutro." | [SOURCE: M02 > Emocoes da Persuasao] | Step 1.3 |
| 007 | "Nenhum copywriter vai ser mais criativo que a realidade." | [SOURCE: M02 > Emocoes da Persuasao] | Step 1.3 |
| 008 | "Eu prefiro que voce sinta medo agora do que fome aos 65 anos." | [SOURCE: M02 > Emocoes da Persuasao] | Step 1.3 |
| 009 | "Comece a reparar nas suas costas agora. Ta sentindo tensao?" | [SOURCE: M02 > Termometro de Aquecimento] | Step 1.4 |
| 010 | "A frase mais importante e a primeira." | [SOURCE: M02 > Headlines e Subheadlines] | Step 2.1 |
| 011 | "Quanto mais especifico, mais curiosidade e menos promessa." | [SOURCE: M02 > Headlines e Subheadlines] | Step 2.1 |
| 012 | "Eles riram quando eu sentei ao piano, mas quando comecei a tocar..." (headline classica) | [SOURCE: M02 > Headlines e Subheadlines] | Step 2.1 |
| 013 | "Se voce acertar o resto e errar estrutura vai dar ruim." | [SOURCE: M02 > Estrutura de Texto] | Step 2.2 |
| 014 | "Escreva bebado, edite sobrio." | [SOURCE: M02 > Estrutura de Texto] | Step 2.2 |
| 015 | "O gatilho mental quando usado com sutileza tem o efeito certo." | [SOURCE: M02 > Afeicao] | Step 2.3 |
| 016 | "A sombra da autoridade e a arrogancia." | [SOURCE: M02 > Afeicao] | Step 2.3 |
| 017 | "Toda vez que falar bem de voce, arrume algo ruim pra contrabalancear." | [SOURCE: M02 > Afeicao] | Step 2.3 |
| 018 | "Tudo e relativo." (ancoragem) | [SOURCE: M02 > Ancoragem] | Step 2.3 |
| 019 | "O maior erro de copy e subestimar a inteligencia de quem ouve." | [SOURCE: M02 > Ancoragem] | Step 2.3 |
| 020 | "O segredo do striptease e esconder, nao mostrar." | [SOURCE: M02 > Antecipacao] | Step 2.3 |
| 021 | "Quanto mais ansioso o publico, mais euforico pro momento de compra." | [SOURCE: M02 > Antecipacao] | Step 2.3 |
| 022 | "Antes de falar algo importante eu falo 'gente, e importante pra caramba.'" | [SOURCE: M02 > Antecipacao] | Step 2.3 |
| 023 | "Consiga 10 ou 15 sims intermediarios antes do sim final." | [SOURCE: M02 > Compromisso e Consistencia] | Step 2.3 |
| 024 | "A pessoa acha que esta sendo convencida racionalmente. Mas e emocionalmente." | [SOURCE: M02 > Compromisso e Consistencia] | Step 2.3 |
| 025 | "Quando voce acertar a copy, a pessoa fala 'eu todinha.'" | [SOURCE: M02 > Comunidade] | Step 2.3 |
| 026 | "Quanto mais aferivel, mais forte a escassez." | [SOURCE: M02 > Escassez] | Step 2.3 |
| 027 | "A pessoa que fala que curso online e limitado, ta te enganando." | [SOURCE: M02 > Escassez] | Step 2.3 |
| 028 | "O FOMO e o medo de perder algo que todo mundo esta aproveitando." | [SOURCE: M02 > FOMO] | Step 2.3 |
| 029 | "Isso e um defeito no cerebro. Voce age no inconsciente e no impulso." | [SOURCE: M02 > FOMO] | Step 2.3 |
| 030 | "Marketing e memoria. Nada faz ganhar mais espaco mental que historia." | [SOURCE: M02 > Historia] | Step 2.3 |
| 031 | "Se emocionou, anota no banco de historias." | [SOURCE: M02 > Historia] | Step 2.3 |
| 032 | "Historia sem treta nao e historia." | [SOURCE: M02 > Jornada do Heroi] | Step 2.3 |
| 033 | "As regras foram feitas para serem quebradas." | [SOURCE: M02 > Jornada do Heroi] | Step 2.3 |
| 034 | "Novidade e um dos gatilhos mais poderosos. Top 3: novidade, porque, urgencia." | [SOURCE: M02 > Novidade] | Step 2.3 |
| 035 | "Como voce descobre novidade? Comparando com o velho." | [SOURCE: M02 > Novidade] | Step 2.3 |
| 036 | "Nao adianta so ser novidade, voce tem que comunicar novidade." | [SOURCE: M02 > Novidade] | Step 2.3 |
| 037 | "Porque a solucao deveria ser prioridade? Se responder, voce vende." | [SOURCE: M02 > Porque] | Step 2.3 |
| 038 | "Sem justificativa: 60%. Com qualquer 'porque': 93%." (Langer) | [SOURCE: M02 > Porque] | Step 2.3 |
| 039 | "Prova nao e elogio. Elogio atrapalha. Prova ajuda." | [SOURCE: M02 > Prova] | Step 2.3 |
| 040 | "Quanto mais aferivel, emocionante e storytelling na prova, mais relevante." | [SOURCE: M02 > Prova] | Step 2.3 |
| 041 | "O grande trabalho do copywriter nao e vender. E educar." | [SOURCE: M02 > Simplicidade] | Step 2.3 |
| 042 | "A simplicidade e o mais alto grau da sofisticacao." | [SOURCE: M02 > Simplicidade] | Step 2.3 |
| 043 | "A maior coisa que voces podem dar e a atencao." | [SOURCE: M02 > Reciprocidade] | Step 2.3 |
| 044 | "Para escalar muito eu fiz antes coisas nao escalaveis." | [SOURCE: M02 > Reciprocidade] | Step 2.3 |
| 045 | "O pior jeito de fazer surpresa e falar que vai ter surpresa." | [SOURCE: M02 > Surpresa] | Step 2.3 |
| 046 | "Dias especiais faca coisas simples. Dias simples faca coisas especiais." | [SOURCE: M02 > Surpresa] | Step 2.3 |
| 047 | "CUIDADO pra nao ser levantada de objecao ao inves de matada." | [SOURCE: M02 > Objecoes] | Step 3.1 |
| 048 | "Nada vai te fazer melhor copywriter que vender 1-a-1." | [SOURCE: M02 > Objecoes] | Step 3.1 |
| 049 | "Mas por que voce ta interessado em comprar?" — pergunta devastadora | [SOURCE: M02 > Objecoes] | Step 3.1 |
| 050 | "A razao de nao querer comprar E a razao de comprar." | [SOURCE: M02 > Objecoes] | Step 3.1 |
| 051 | "Mentiram pra voce, nao existe oferta irresistivel." | [SOURCE: M02 > Oferta] | Step 3.2 |
| 052 | "3 entregaveis incrivelmente bons > 18 mediocres." | [SOURCE: M02 > Oferta] | Step 3.2 |
| 053 | "500 horas de conteudo como beneficio e aterrorizante." | [SOURCE: M02 > Oferta] | Step 3.2 |
| 054 | "Eu sou um matador de frases." (sobre cortar texto) | [SOURCE: M02 > Revisao de Copy] | Step 4.1 |
| 055 | "Nao adianta so criar. Tem que criar e publicar." | [SOURCE: M02 > Lei Grandes Numeros] | Step 4.2 |
| 056 | "Nao importa quao inteligente alguem e, nunca sera mais que a inteligencia coletiva." | [SOURCE: M02 > Reuniao de Criacao] | Step 5.1 |
| 057 | "As pessoas farao qualquer coisa por quem ajude a tirar pedras contra inimigos." (Blair Warren) | [SOURCE: M02 > Inimigo Comum] | Step 5.2 |
| 058 | "Eu particularmente prefiro menos view e mais vida." | [SOURCE: M02 > Inimigo Comum] | Step 5.2 |

---

**Quality Gate: SOP_QUALITY**

| Criterio | Requisito | Status |
|----------|-----------|--------|
| Steps documentados | 8+ steps (11 steps) | [x] |
| Task Anatomy | 8 campos por step | [x] |
| Regras de decisao | Todas as bifurcacoes cobertas (10 regras) | [x] |
| Appendix D | 50+ referencias (58 referencias) | [x] |
| Zero invencao | Todos os steps com fonte | [x] |
| Fluxo logico | Inicio ao fim sequencial | [x] |

**Resultado: 6/6 PASS**
