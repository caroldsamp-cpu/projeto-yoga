# SOP: Elementos Literarios — Aplicacao de Light Copy em Textos

**Autor:** Leandro Ladeira
**Curso:** Light Copy — Modulo 03
**Dominio:** Aplicacao de elementos literarios e logica de premissas em copy
**Extrator:** @squad-chief via *extract-knowledge
**Data:** 2026-03-09
**Framework base:** `elementos-literarios-framework.md`

---

## Visao Geral do Processo

Este SOP descreve como aplicar a metodologia Light Copy: transformar textos de copy genericos em pecas com personalidade, memorabilidade e marca usando logica de premissas + 25 elementos literarios.

**Fluxo:**

```
Texto Base (briefing/copy bruta do M2) →
  1. Construir Narrativa de Premissas →
  2. Selecionar Elementos Literarios →
  3. Aplicar Elementos ao Texto →
  4. Verificar Combinacao →
  5. Revisar e Polir
```

---

## Parte 1: Narrativa de Premissas

### Step 1.1: Definir a Conclusao Desejada

```yaml
step_name: "Definir qual conclusao o leitor deve chegar sozinho"
description: "Identificar a conclusao de venda SEM escreve-la explicitamente"
cognitive_type: Judgment
automation_potential: Low
executor: Human (ou agente LC com orientacao)
precondition: "Briefing de copy preenchido (M2 Step 1.1)"
output: "Conclusao desejada documentada (1 frase)"
guardrails: "A conclusao NUNCA e dita diretamente. O leitor chega nela por logica."
decision_rule: "IF conclusao parece 'compre meu produto' THEN reescreva como transformacao que o leitor deduz"
source: "[SOURCE: M03 > Fundamentos da Logica das Premissas]"
```

### Step 1.2: Construir Cadeia de Premissas

```yaml
step_name: "Montar 3-5 premissas despretensiosas que levam a conclusao"
description: "Criar premissas verdadeiras, verificaveis, curiosas e irrefutaveis"
cognitive_type: Analysis + Creativity
automation_potential: Medium
executor: Human (pode usar ChatGPT como pesquisa)
precondition: "Conclusao definida (Step 1.1)"
output: "3-5 premissas com fontes de verificacao"
guardrails: "Premissas devem ser DESPRETENSIOSAS — nao revelar intencao de venda"
decision_rule: "IF premissa revela o produto diretamente THEN e pretensiosa → reescreva"
source: "[SOURCE: M03 > Encontrando Premissas]"
```

**Checklist da premissa forte:**
- [ ] Curiosa?
- [ ] Factual?
- [ ] Aferivel (verificavel com dados)?
- [ ] Especifica (numeros, nomes)?
- [ ] Irrefutavel?
- [ ] Polemica? (opcional)

**Teste:** Leia para alguem. Se refutou, refine. [SOURCE: M03 > Encontrando Premissas]

### Step 1.3: Sequenciar Premissas

```yaml
step_name: "Ordenar premissas em sequencia logica progressiva"
description: "Cada premissa deve construir sobre a anterior ate a conclusao ser inevitavel"
cognitive_type: Logic
automation_potential: Medium
executor: Human
precondition: "Premissas individuais criadas (Step 1.2)"
output: "Cadeia narrativa completa: P1 → P2 → P3 → Conclusao"
guardrails: "NAO pule para a conclusao cedo demais. Construa passo a passo."
decision_rule: "IF leitor chega na conclusao antes de voce dizer THEN a cadeia funciona"
source: "[SOURCE: M03 > Analisando narrativas reais]"
```

---

## Parte 2: Selecao de Elementos Literarios

### Step 2.1: Identificar Contexto e Objetivo

```yaml
step_name: "Definir qual efeito principal a peca precisa"
description: "Escolher o objetivo principal para selecionar elementos adequados"
cognitive_type: Judgment
automation_potential: Low
executor: Human
precondition: "Cadeia de premissas pronta (ou texto base de M2)"
output: "Objetivo definido: viralidade / vendas / comunidade / humor / anuncio de conversao"
guardrails: "Cada contexto tem elementos mais poderosos — consulte a tabela de rankings"
decision_rule: "IF conversao THEN Gancho Visual + Confianca Extrema. IF viralidade THEN Antitese + Desfecho Inesperado. IF vendas THEN Confianca Extrema + Premissas."
source: "[SOURCE: M03 > Gancho visual] + [SOURCE: M03 > Antitese] + [SOURCE: M03 > Confianca extrema]"
```

**Tabela de selecao rapida:**

| Objetivo | Elementos Prioritarios |
|----------|----------------------|
| Anuncio de conversao | Gancho Visual, Confianca Extrema, Premissas |
| Viralidade/views | Antitese, Desfecho Inesperado, Hiperbole |
| Vendas/pitch | Confianca Extrema, Logica de Premissas, Historia |
| Ideias originais | Ponto de Vista, Linguagem Fantasiosa |
| Comunidade/tribo | Easter Egg, Neologismo, Apelo ao Cotidiano |
| Humor | Setup/Punchline, Triade Comica, Sarcasmo |

### Step 2.2: Selecionar 3-5 Elementos Complementares

```yaml
step_name: "Escolher 3-5 elementos que se combinam para esta peca"
description: "Selecionar elementos que se potencializam mutuamente"
cognitive_type: Creativity
automation_potential: Medium
executor: Human (ou agente LC)
precondition: "Objetivo definido (Step 2.1)"
output: "Lista de 3-5 elementos selecionados com justificativa"
guardrails: "Mais elementos = mais poderoso, mas mantenha coerencia"
decision_rule: "IF duvida entre 2 elementos THEN use ambos — eles se combinam"
source: "[SOURCE: M03 > Ponto de vista]"
```

**Combinacoes classicas:**
- Antitese + Anafora + Lista (manifesto/reels)
- Gancho Visual + Desfecho Inesperado (ads de conversao)
- Easter Egg + Neologismo + Parodia (conteudo tribal)
- Setup/Punchline + Hiperbole + Triade Comica (humor)
- Personificacao + Ponto de Vista + Linguagem Sensorial (storytelling emocional)
- Premissas + Raciocinio Logico Improvavel + Antitese (conteudo de autoridade)

---

## Parte 3: Aplicacao dos Elementos

### Step 3.1: Aplicar Elementos ao Texto

```yaml
step_name: "Inserir elementos literarios na copy existente"
description: "Reescrever ou temperar o texto base com os elementos selecionados"
cognitive_type: Creativity + Synthesis
automation_potential: Medium
executor: Human (agente LC pode sugerir)
precondition: "Texto base + elementos selecionados"
output: "Texto reescrito com elementos literarios aplicados"
guardrails: "Esqueca a venda primeiro — crie a situacao, depois conecte a venda"
decision_rule: "IF texto esta muito 'vendedor' THEN remova pressao e adicione mais elementos literarios"
source: "[SOURCE: M03 > Linguagem fantasiosa]"
```

**Como aplicar cada elemento (guia rapido):**

| Elemento | Tecnica de Aplicacao |
|----------|---------------------|
| Aforismo | Crie 1 frase-resumo universal no final ou abertura |
| Antitese | Encontre o oposto exato de cada afirmacao e justaponha |
| Anafora | Repita 3-5x a mesma estrutura no inicio das frases; ultimo item quebra padrao |
| Apelo Cotidiano | Pegue objeto do dia-a-dia e crie analogia com seu produto |
| Autodepreciacao | Apos mostrar autoridade, conte algo ridiculo sobre voce |
| Confianca Extrema | Remova "eu acho", "talvez", "quem sabe" — use "E", "Ponto" |
| Desfecho Inesperado | Conduza numa direcao logica, vire 180° no final |
| Easter Egg | Insira referencia que so insider entende — nao explique |
| Gancho Visual | Primeiros 2-4 seg: mostre IMAGEM/OBJETO que represente o conceito |
| Hiperbole | Exagere de forma OBVIA — o leitor deve saber que e recurso |
| Jogo de Palavras | Encontre palavra com duplo sentido no seu nicho e explore |
| Linguagem Sensorial | Descreva cenas com texturas, sons, cheiros, sabores, cores |
| Linguagem Fantasiosa | Pergunte "como seria se..." e crie o cenario impossivel |
| Lista | Monte sequencia de 5-10 itens relacionados, use como abertura |
| Mundo ao Contrario | Inverta papeis: beneficios → maleficios, sucesso → fracasso |
| Neologismo | Invente 1 termo que so voce usa e repita ate virar marca |
| Nonsense | Insira 1 elemento completamente absurdo no meio do serio |
| Onomatopeia | Adicione sons nas historias: BOOM, PLOC, SHHH, CACHING |
| Parodia | Escolha referencia cultural conhecida e substitua elementos |
| Personificacao | De voz ao objeto/produto e conte a historia do POV dele |
| Ponto de Vista | Liste 10+ POVs e escolha o mais EXTRAORDINARIO |
| Raciocinio Improvavel | Faca uma conta mirabolante que prova seu ponto |
| Sarcasmo/Ironia | Diga o oposto do que quer dizer — o tom revela a verdade |
| Setup/Punchline | Escreva serio, depois encontre onde inserir a quebra |
| Triade Comica | Em qualquer sequencia de 3: 2 previsiveis + 1 surpresa |

### Step 3.2: Verificar Equilibrio

```yaml
step_name: "Verificar que nao perdeu a venda no excesso de arte"
description: "Garantir que a peca mantém objetivo comercial apesar dos elementos"
cognitive_type: Analysis
automation_potential: Medium
executor: Human
precondition: "Texto com elementos aplicados"
output: "Texto verificado: mantém objetivo + tem elementos"
guardrails: "Light Copy = performance COM arte. NAO e so arte."
decision_rule: "IF texto esta puro entretenimento sem CTA/objetivo THEN adicione conexao com venda no final. IF texto esta puro venda sem arte THEN adicione elementos."
source: "[SOURCE: M03 > A base do Light Copy]"
```

---

## Parte 4: Finalizacao

### Step 4.1: Revisar Elementos Aplicados

```yaml
step_name: "Verificar que cada elemento foi aplicado corretamente"
description: "Checar anti-patterns de cada elemento usado"
cognitive_type: Analysis
automation_potential: Medium
executor: Human (ou agente LC)
precondition: "Texto finalizado com elementos"
output: "Texto revisado sem anti-patterns"
guardrails: "Cada elemento tem um erro fatal — verifique na tabela do framework"
decision_rule: "IF hiperbole nao parece intencional THEN ajuste — deve ser ESCARRADO. IF autodepreciacao sem autoridade THEN adicione momento de confianca."
source: "[SOURCE: M03 > Hiperbole] + [SOURCE: M03 > Autodepreciacao]"
```

### Step 4.2: Ler em Voz Alta e Testar

```yaml
step_name: "Ler em voz alta e testar com 1 pessoa"
description: "Verificar ritmo, fluidez e impacto emocional"
cognitive_type: Perception
automation_potential: Low
executor: Human
precondition: "Texto revisado"
output: "Texto final aprovado"
guardrails: "Se nao flui ao ler em voz alta, reescreva"
decision_rule: "IF ouvinte ri, se emociona ou diz 'como voce pensou nisso?' THEN funciona. IF ouvinte nao reage THEN faltam elementos ou estao fracos."
source: "[SOURCE: M03 > Setup e Punchline] + [SOURCE: M02 > Revisao de Copy]"
```

---

## Regras de Decisao

| ID | Regra | Condicao | Acao | Fonte |
|----|-------|----------|------|-------|
| RD-01 | Premissa despretensiosa? | IF revela intencao de venda THEN e pretensiosa | Reescreva sem revelar o produto | [SOURCE: M03 > Encontrando Premissas] |
| RD-02 | Contexto de uso | IF conversao THEN gancho visual. IF viralidade THEN antitese. IF venda THEN confianca. | Selecione elementos por contexto | [SOURCE: M03 > multiplas] |
| RD-03 | Texto muito vendedor | IF copy esta agressiva demais | Adicione elementos literarios para suavizar | [SOURCE: M03 > A base LC] |
| RD-04 | Texto muito artistico | IF perdeu conexao com venda | Adicione CTA ou premissa final que conecta | [SOURCE: M03 > A base LC] |
| RD-05 | Hiperbole ou mentira? | IF exagero nao e obvio THEN vira mentira | Torne o exagero ESCARRADO | [SOURCE: M03 > Hiperbole] |
| RD-06 | Autoridade vs empatia | IF so autoridade THEN parece arrogante | Balanceie com autodepreciacao | [SOURCE: M03 > Autodepreciacao] |
| RD-07 | POV ordinario? | IF perspectiva e a obvvia | Busque POV extraordinario (objeto, animal, inimigo) | [SOURCE: M03 > Ponto de vista] |
| RD-08 | Humor sem base | IF tentando ser engracado sem observacao | Escreva serio primeiro, ache o humor depois | [SOURCE: M03 > Setup e Punchline] |

---

## Outputs por Fase

| Fase | Entregavel | Formato |
|------|-----------|---------|
| 1. Premissas | Cadeia de 3-5 premissas + conclusao | Documento ou outline |
| 2. Selecao | Lista de 3-5 elementos + justificativa | Lista com combinacoes |
| 3. Aplicacao | Texto reescrito com elementos | Copy formatada para canal |
| 4. Finalizacao | Texto revisado e testado | Peca final pronta |

---

## Appendix D: Rastreabilidade de Fontes (55+)

| ID | Referencia | Fonte | Secao SOP |
|----|-----------|-------|-----------|
| 001 | "A base desse cara e promessa. A base desse aqui e premissa." | [SOURCE: M03 > A base do Light Copy] | Parte 1 |
| 002 | "A inteligencia artificial vai roubar o emprego de quem nao tem marca." | [SOURCE: M03 > A base do Light Copy] | Parte 1 |
| 003 | "O que vamos aprender e como deixar a copia mais temperada." | [SOURCE: M03 > Introducao elementos] | Parte 2 |
| 004 | "Varias verdades com uma mentirinha nos convencem que mentira e verdade." | [SOURCE: M03 > Fundamentos Premissas] | Step 1.2 |
| 005 | "O marketing de promessas mostra as garrinhas cedo demais." | [SOURCE: M03 > Encontrando Premissas] | Step 1.2 |
| 006 | "Eu nao estou ensinando a prometer. A promessa e consequencia da linha logica." | [SOURCE: M03 > Analisando narrativas] | Step 1.3 |
| 007 | "Coisas boas acontecem no caminho de quem esta no caminho." | [SOURCE: M03 > Aforismo] | Step 3.1 |
| 008 | "Isso aqui e o que mais da view. Impressionante como antitese." | [SOURCE: M03 > Antitese] | Step 2.1 |
| 009 | "Anafora e muito facil. Qualquer besta faz." | [SOURCE: M03 > Anafora] | Step 3.1 |
| 010 | "Todo mundo que fala 'todo santo dia' lembra de mim." | [SOURCE: M03 > Apelo ao cotidiano] | Step 3.1 |
| 011 | "O genio faz associacao entre abacaxi e carro." | [SOURCE: M03 > Apelo ao cotidiano] | Step 3.1 |
| 012 | "Se so se auto-deprecia, autoridade vai pro saco." | [SOURCE: M03 > Autodepreciacao] | Step 3.1 |
| 013 | "O maior matador de vendas e a inseguranca." | [SOURCE: M03 > Confianca extrema] | Step 3.1 |
| 014 | "Esse e o elemento mais poderoso pra vendas." | [SOURCE: M03 > Confianca extrema] | Step 2.1 |
| 015 | "A genialidade do LightCop e usar isso pra chamar atencao e conectar a venda." | [SOURCE: M03 > Desfecho inesperado] | Step 3.2 |
| 016 | "A ideia do easter egg e ser bem escondido." | [SOURCE: M03 > Easter Egg] | Step 3.1 |
| 017 | "Talvez o mais poderoso para anuncios de conversao." | [SOURCE: M03 > Gancho visual] | Step 2.1 |
| 018 | "Quando exagera, deixa o exagero escarrado." | [SOURCE: M03 > Hiperbole] | Step 3.1 |
| 019 | "O trocadilho e como um pug. De tao feio fica bonitinho." | [SOURCE: M03 > Jogo de palavras] | Step 3.1 |
| 020 | "Eu sou tao sinestesico que sinto sintomas so de ver gente falar de doenca." | [SOURCE: M03 > Linguagem Sensorial] | Step 3.1 |
| 021 | "No marketing e o fantastico mundo de Bob. Pode tudo." | [SOURCE: M03 > Linguagem fantasiosa] | Step 3.1 |
| 022 | "Esquece a venda e so cria a situacao, depois ponha a venda." | [SOURCE: M03 > Linguagem fantasiosa] | Step 3.1 |
| 023 | "Se nao escrever, voce e um abobado, um pateta, um bobalhao." | [SOURCE: M03 > Lista] | Step 3.1 |
| 024 | "100% dos nichos da pra fazer isso." | [SOURCE: M03 > Lista] | Step 3.1 |
| 025 | "O Brasil e o pais em que o poste mija no cachorro." | [SOURCE: M03 > Mundo ao contrario] | Step 3.1 |
| 026 | "Quando inventa uma palavra, voce e dono dela — slot mental unico." | [SOURCE: M03 > Neologismo] | Step 3.1 |
| 027 | "Escrever e um ato de coragem. De se expor ao ridiculo." | [SOURCE: M03 > Nonsense] | Step 3.1 |
| 028 | "Ela fica cenica. Lembra da historia sumaria e cenica?" | [SOURCE: M03 > Onomatopeia] | Step 3.1 |
| 029 | "E muito facil fazer parodia. Associacoes criativas quase infantis." | [SOURCE: M03 > Parodia] | Step 3.1 |
| 030 | "Nao acredito que to chorando com pena de um apartamento." | [SOURCE: M03 > Personificacao] | Step 3.1 |
| 031 | "Tudo pode ser feito light cop. Basta voce querer." | [SOURCE: M03 > Personificacao] | Step 3.1 |
| 032 | "Ele busca pontos de vista extraordinarios, fugindo do padrao." | [SOURCE: M03 > Ponto de vista] | Step 2.2 |
| 033 | "Uma bobagemzinha faz voce parecer um grande genio." | [SOURCE: M03 > Raciocinio logico] | Step 3.1 |
| 034 | "Quase tudo que faco, mesmo serio, coloco ironia e sarcasmo." | [SOURCE: M03 > Sarcasmo ironia deboche] | Step 3.1 |
| 035 | "O riso e quando o cerebro nao processa a quebra de raciocinio." | [SOURCE: M03 > Setup e Punchline] | Step 3.1 |
| 036 | "Comece escrevendo serio e depois veja o que e engracado no serio." | [SOURCE: M03 > Setup e Punchline] | Step 3.1 |
| 037 | "Isso vai tornar voce um escritor extremamente habilidoso." | [SOURCE: M03 > Setup e Punchline] | Step 3.1 |
| 038 | "So de trazer um elemento fora ja traz possibilidade de graca." | [SOURCE: M03 > Triade comica] | Step 3.1 |
| 039 | "Tecnica, treino, tempo, talento." | [SOURCE: M03 > Parodia] | Parte 2 |
| 040 | "Simpatia exagerada gera desconfianca." | [SOURCE: M03 > Confianca extrema] | Step 3.1 |
| 041 | "Confundir parodia com plagio: parodia revela fonte, plagio esconde." | [SOURCE: M03 > Parodia] | Step 3.1 |
| 042 | "Toda vez que cria objecao 'nao da pro meu nicho', voce e tonto." | [SOURCE: M03 > Personificacao] | Step 3.1 |
| 043 | "Lembre-se, quanto mais tentar vender desde o inicio, mais dificil criar." | [SOURCE: M03 > Mundo ao contrario] | Step 3.2 |
| 044 | "Preciencia: a arte de unir pressa para agir e paciencia para colher." | [SOURCE: M03 > Neologismo] | Step 3.1 |
| 045 | "Voce pode ter texto inteiro em nonsense ou so uma pitadinha." | [SOURCE: M03 > Nonsense] | Step 3.1 |
| 046 | "Nao seja preconceituoso. Se permita ser um pouco idiota." | [SOURCE: M03 > Nonsense] | Step 3.1 |
| 047 | "O pior jeito de fazer surpresa e falar que vai ter." | [SOURCE: M03 > Desfecho inesperado] | Step 3.1 |
| 048 | "Plagio e esconder fonte. Parodia e revelar fonte o tempo todo." | [SOURCE: M03 > Parodia] | Step 3.1 |
| 049 | "Busque perspectivas completamente extraordinarias." | [SOURCE: M03 > Ponto de vista] | Step 2.2 |
| 050 | "Ai e genio, nao cara, ficou muito tempo pensando." | [SOURCE: M03 > Linguagem fantasiosa] | Step 3.1 |
| 051 | "Quanto mais voce tentar vender desde o inicio, mais dificil criar." | [SOURCE: M03 > Linguagem fantasiosa] | Step 3.1 |
| 052 | "As marcas que nao se tornarem creators serao substituidas por creators que virarem marcas." | [SOURCE: M03 > Aforismo] | Step 3.1 |
| 053 | "A simplicidade e o ultimo grau de sofisticacao." (Da Vinci via LC) | [SOURCE: M03 > Aforismo] | Step 3.1 |
| 054 | "Meus copias e canetinhas, eu nao faco isso com voces, me agradecam." | [SOURCE: M03 > Neologismo] | Step 3.1 |
| 055 | "Quem sabe faz ao vivo, isso e dificil que eu estou fazendo." | [SOURCE: M03 > Setup e Punchline] | Step 4.2 |

---

**Quality Gate: SOP_QUALITY**

| Criterio | Requisito | Status |
|----------|-----------|--------|
| Steps documentados | 8+ steps (8 steps) | [x] |
| Task Anatomy | 8 campos por step | [x] |
| Regras de decisao | Todas as bifurcacoes cobertas (8 regras) | [x] |
| Appendix D | 50+ referencias (55 referencias) | [x] |
| Zero invencao | Todos os steps com fonte | [x] |
| Fluxo logico | Inicio ao fim sequencial | [x] |

**Resultado: 6/6 PASS**
