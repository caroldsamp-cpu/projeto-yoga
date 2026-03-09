# SOP: Aplicacao Pratica — Light Copy em Todos os Formatos

**Autor:** Leandro Ladeira
**Curso:** Light Copy — Modulo 04 + Modulo Analises
**Dominio:** Aplicacao de copy em paginas de vendas, VSL, anuncios, emails, newsletters, upsell, downsell, order bump, reels
**Extrator:** @squad-chief via *extract-knowledge
**Data:** 2026-03-09
**Framework base:** `frameworks/aplicacao-formatos-framework.md`

---

## Visao Geral do Processo

Este SOP descreve como aplicar tudo que foi aprendido nos modulos M1-M3 (fundamentos criativos, gatilhos mentais, elementos literarios) em formatos reais de copy: paginas de vendas, VSL, anuncios, emails, upsell, downsell, order bump e reels.

**Fluxo:**

```
Briefing (M2) + Premissas (M3) →
  1. Escolher Formato Adequado →
  2. Montar Estrutura do Formato →
  3. Escrever Copy com Light Copy →
  4. Aplicar Regras Especificas do Formato →
  5. Analisar Criticamente →
  6. Complementar com Upsell/Downsell/Order Bump
```

---

## Parte 1: Escolha e Estrutura do Formato

### Step 1.1: Definir Formato Adequado ao Objetivo

```yaml
step_name: "Escolher o formato de copy adequado ao objetivo e ticket"
description: "Selecionar entre pagina de vendas, VSL, anuncio, email, reel, etc."
cognitive_type: Judgment
automation_potential: Low
executor: Human
precondition: "Briefing de copy preenchido (M2 Step 1.1)"
output: "Formato definido com justificativa"
guardrails: "O formato deve ser adequado ao ticket, temperatura do publico e objetivo"
decision_rule: "IF ticket baixo (<R$200) AND publico frio THEN pagina de vendas sem VSL pode bastar. IF ticket alto (>R$500) THEN VSL + pagina completa. IF engajamento/viralidade THEN reel/stories. IF remarketing THEN email/mensageria."
source: "[SOURCE: M04 > Pagina de Vendas] + [SOURCE: M04 > VSL]"
```

**Tabela de selecao:**

| Objetivo | Ticket | Formato Primario | Complementos |
|----------|--------|-----------------|-------------|
| Venda direta, frio | Baixo (<R$200) | Pagina de vendas | Anuncio de conversao |
| Venda direta, frio | Alto (>R$500) | VSL + Pagina | Anuncio + Email sequence |
| Venda direta, quente | Qualquer | Email/WhatsApp direto | Remarketing |
| Engajamento | N/A | Reel/Stories | Newsletter |
| Lancamento | Medio-Alto | Email sequence + VSL + Pagina | Upsell + Downsell |
| Relacionamento | N/A | Newsletter / Conteudo | Reel |

### Step 1.2: Montar Estrutura de Sessoes (Pagina de Vendas)

```yaml
step_name: "Definir e ordenar sessoes da pagina de vendas"
description: "Selecionar quais sessoes usar e em qual ordem"
cognitive_type: Analysis + Judgment
automation_potential: Medium
executor: Human
precondition: "Formato = pagina de vendas"
output: "Lista ordenada de sessoes com headlines rascunhadas"
guardrails: "Toda sessao PRECISA de headline. Nunca dois conteudos na mesma sessao."
decision_rule: "IF pouca autoridade THEN priorize argumento logico e metodo antes de prova. IF muita autoridade THEN prova social logo apos CTA. IF ticket baixo THEN menos sessoes. IF ticket alto THEN mais sessoes com mais educacao."
source: "[SOURCE: M04 > Pagina de Vendas]"
```

**Processo:**
1. Abra um documento Word/Google Docs (NAO um template visual)
2. Liste as sessoes que fazem sentido para seu produto
3. Ordene: Cabecalho → CTA → (depois depende do produto)
4. Rascunhe headline de cada sessao
5. Verifique: cada headline cria curiosidade E e entendida?

> "Nao comece escrevendo copy atraves de um template. Comece no Word." [SOURCE: M04 > Pagina de Vendas]

### Step 1.3: Montar Estrutura de VSL

```yaml
step_name: "Definir estrutura do video de vendas"
description: "Escolher framework de VSL e montar roteiro"
cognitive_type: Analysis + Creativity
automation_potential: Medium
executor: Human
precondition: "Formato = VSL"
output: "Roteiro de VSL com blocos definidos"
guardrails: "Comece com Big Idea (tese a defender). Passe o video inteiro defendendo."
decision_rule: "IF historia real disponivel THEN estilo documentario (Mindvalley). IF sem historia THEN framework PASTOR ou John Benson. IF produto fisico THEN VSL demonstracao."
source: "[SOURCE: M04 > VSL] + [SOURCE: M04 > Analise VSL 02]"
```

---

## Parte 2: Escrever Copy por Formato

### Step 2.1: Escrever Headlines/Redlines

```yaml
step_name: "Escrever headlines para cada sessao da pagina"
description: "Criar headlines que sejam interessantes E entendidas"
cognitive_type: Creativity
automation_potential: Medium
executor: Human (agente LC pode sugerir)
precondition: "Sessoes definidas (Step 1.2)"
output: "Headlines escritas para cada sessao"
guardrails: "Headline NUNCA pode ser desconectada do conteudo. Nao pode ser literal demais nem poetica demais."
decision_rule: "IF headline literal (ex: 'Depoimentos de aluno') THEN adicione curiosidade. IF headline poetica demais e ninguem entende THEN simplifique. SEMPRE pergunte: e interessante E entendida?"
source: "[SOURCE: M04 > Pagina de Vendas]"
```

**Regra de ouro:** Interessante E entendido. Nao pode ser so um.

> "Cuidado com essa balanca. Sempre se pergunte: eu to sendo interessante e entendido." [SOURCE: M04 > Pagina de Vendas]

### Step 2.2: Escrever Preco/CTA

```yaml
step_name: "Definir como apresentar preco e CTA"
description: "Decidir se mostra preco, omite, ou mostra parcela"
cognitive_type: Judgment
automation_potential: High
executor: Human
precondition: "Ticket definido, nivel de autoridade conhecido"
output: "Sessao de CTA com preco/formulario"
guardrails: "Preco barato = mostra. Preco alto = omite ou mostra parcela."
decision_rule: "IF preco < R$200 THEN mostra valor cheio. IF preco > R$500 AND sem marca forte THEN omite ou parcela. IF marca forte THEN pode mostrar."
source: "[SOURCE: M04 > Pagina de Vendas]"
```

### Step 2.3: Escrever Email de Lancamento/Venda

```yaml
step_name: "Escrever email seguindo estrutura Big Idea + Frases Curtas"
description: "Criar email com introducao atrativa, desenvolvimento logico, conclusao inesperada"
cognitive_type: Creativity + Analysis
automation_potential: Medium
executor: Human (agente LC pode sugerir)
precondition: "Objetivo do email definido, dia do lancamento identificado"
output: "Email completo com assunto + preview + corpo + CTA"
guardrails: "UMA Big Idea por email. Universo cognitivo coerente. Argumento OU emocao em cada paragrafo."
decision_rule: "IF ultimo dia de lancamento / publico ultra-quente THEN frases curtas, ultra-direto. IF inicio de lancamento / publico morno THEN argumentos, premissas, Light Copy completo. IF sem argumento E sem emocao THEN esta enrolando — corte."
source: "[SOURCE: Analises > Email 01] + [SOURCE: Analises > Email 02]"
```

**Checklist do email:**
- [ ] Assunto gera curiosidade?
- [ ] Preview COMPLEMENTA o assunto (nao repete)?
- [ ] Big Idea UNICA no email inteiro?
- [ ] Universo cognitivo coerente (metaforas do mesmo campo)?
- [ ] Introducao-Desenvolvimento-Conclusao conectados?
- [ ] Cada paragrafo tem substancia (argumento ou emocao)?
- [ ] CTA coerente com a narrativa construida?
- [ ] Prova especifica (nome, numero, print) — nao "resultados reais"?

### Step 2.4: Escrever Reel/Video Curto

```yaml
step_name: "Escrever roteiro de reel com estrutura vencedora"
description: "Criar reel com introducao forte, desenvolvimento logico, conclusao inesperada"
cognitive_type: Creativity
automation_potential: Medium
executor: Human
precondition: "Tema definido, objetivo (engajamento/viralidade/conversao)"
output: "Roteiro de reel com gancho, desenvolvimento e virada"
guardrails: "Comece pelo gancho (2-3 seg). Conclusao NUNCA previsivel. Use pelo menos 1 elemento literario (M3)."
decision_rule: "IF humor THEN setup/punchline + triade comica. IF autoridade THEN matematica inusitada + antitese. IF emocao THEN apelo cotidiano + desfecho inesperado."
source: "[SOURCE: Analises > Reels] + [SOURCE: Analises > Email 04]"
```

### Step 2.5: Escrever Anuncio

```yaml
step_name: "Escrever anuncio adequado ao tipo e temperatura"
description: "Criar anuncio de descoberta, relacionamento, conversao ou remarketing"
cognitive_type: Creativity + Analysis
automation_potential: Medium
executor: Human
precondition: "Tipo de anuncio definido, publico definido"
output: "Anuncio com gancho + promessa/problema + desenvolvimento + CTA"
guardrails: "Nao faca anuncio de conversao para publico frio. Tipo do anuncio deve casar com temperatura."
decision_rule: "IF frio THEN descoberta (curiosidade, noticia). IF morno THEN relacionamento (conteudo, bastidores). IF quente THEN conversao (oferta direta). IF abandonou THEN remarketing."
source: "[SOURCE: M04 > Anuncios]"
```

---

## Parte 3: Complementos de Venda

### Step 3.1: Criar Upsell

```yaml
step_name: "Criar oferta de upsell pos-compra"
description: "Oferecer produto complementar apos a compra"
cognitive_type: Analysis + Creativity
automation_potential: Medium
executor: Human
precondition: "Produto principal vendido, produto complementar definido"
output: "Pagina/email de upsell com copy"
guardrails: "Produto complementar ao principal. Estrutura: confirmacao + alerta + reforco positivo + nova oferta."
decision_rule: "IF produto complementa o principal THEN upsell na pagina de obrigado. IF produto e de outro nivel THEN upsell por email/WhatsApp."
source: "[SOURCE: M04 > Upsell]"
```

### Step 3.2: Criar Order Bump

```yaml
step_name: "Criar order bump no checkout"
description: "Adicionar produto adicional no checkout com copy"
cognitive_type: Analysis + Creativity
automation_potential: High
executor: Human
precondition: "Produto principal no checkout"
output: "Order bump com copy de beneficio"
guardrails: "Proporcionalidade de preco — order bump MUITO mais barato que principal. Cada bump tem copy com beneficio, nao so nome do produto."
decision_rule: "IF entregavel e forte e complementar THEN order bump com copy elaborada. IF entregavel e acessorio THEN copy curta e funcional."
source: "[SOURCE: M04 > Orderbump] + [SOURCE: M04 > Pagina de Vendas — Apple]"
```

### Step 3.3: Criar Downsell

```yaml
step_name: "Criar oferta de downsell para quem nao comprou"
description: "Oferecer alternativa para quem recusou a oferta principal"
cognitive_type: Analysis + Creativity
automation_potential: Medium
executor: Human
precondition: "Lista de nao-compradores disponivel"
output: "Copy de downsell (email, popup, ou mensageria)"
guardrails: "NAO faca downsell imediatamente apos lancamento. Justifique por que e mais barato. Transforme limitacao em beneficio."
decision_rule: "IF lancamento THEN espere carrinho fechar + 1 semana. IF perpetuo THEN espere 20 dias apos sequencia. IF exit popup THEN pode ser imediato com desconto ou produto diferente."
source: "[SOURCE: M04 > Downsell]"
```

**Regra do downsell:**
- NAO use "so" ou "apenas" — nao faca parecer versao inferior
- Exemplo ruim: "E so as aulas gravadas"
- Exemplo bom: "Exige menos do seu tempo. Voce pode fazer no transito, na academia."

> "Em vez de transformar o ruim em ruim, voce transforma o ruim em bom." [SOURCE: M04 > Downsell]

---

## Parte 4: Analise Critica e Finalizacao

### Step 4.1: Analisar Criticamente a Copy

```yaml
step_name: "Fazer analise critica da copy produzida"
description: "Questionar cada parte da copy como se fosse um leitor cetico"
cognitive_type: Analysis
automation_potential: Medium
executor: Human (agente LC pode auxiliar)
precondition: "Copy completa em qualquer formato"
output: "Copy revisada com problemas corrigidos"
guardrails: "Pergunte-se: sera que e verdade? Sera que o leitor desconfia?"
decision_rule: "IF Big Idea nao e unica THEN reescreva com foco. IF universo cognitivo misturado THEN unifique metaforas. IF enrolacao sem substancia THEN corte ou adicione argumento. IF CTA desconectado da narrativa THEN reescreva CTA."
source: "[SOURCE: Analises > Email 03]"
```

**7 perguntas da analise critica:**
1. Big Idea unica? (email/texto fala de UMA coisa so?)
2. Universo cognitivo coerente? (metaforas do mesmo campo?)
3. Introducao-Desenvolvimento-Conclusao conectados?
4. Argumentos presentes? (substancia alem de emocao?)
5. Prova especifica? (nomes, numeros, prints — nao "resultados reais")
6. CTA coerente com narrativa?
7. Enxuto? (reescreva como se coubesse num tweet)

### Step 4.2: Verificar Regras Especificas do Formato

```yaml
step_name: "Verificar regras especificas do formato escolhido"
description: "Checar que o formato esta completo e correto"
cognitive_type: Analysis
automation_potential: High
executor: Human (agente LC pode fazer)
precondition: "Copy revisada"
output: "Copy final aprovada para publicacao"
guardrails: "Cada formato tem regras proprias — consulte a tabela do framework"
decision_rule: "IF pagina de vendas THEN toda sessao tem headline? Dois conteudos na mesma sessao? IF email THEN assunto gera curiosidade? Preview complementa? IF reel THEN gancho nos 2-3 seg? Conclusao inesperada?"
source: "[SOURCE: M04 > Pagina de Vendas] + [SOURCE: Analises > Reels]"
```

---

## Regras de Decisao

| ID | Regra | Condicao | Acao | Fonte |
|----|-------|----------|------|-------|
| RD-01 | Formato por ticket | IF <R$200 THEN pagina sem VSL pode bastar. IF >R$500 THEN VSL + pagina completa | Selecione formato adequado | [SOURCE: M04 > PV] |
| RD-02 | Preco na CTA | IF barato THEN mostra. IF caro THEN omite ou parcela | Configure CTA | [SOURCE: M04 > PV] |
| RD-03 | Ordem de sessoes | IF pouca autoridade THEN argumento antes de prova. IF muita THEN prova cedo | Ordene sessoes | [SOURCE: M04 > PV] |
| RD-04 | Headline poetica vs literal | IF nao entende THEN simplifica. IF nao interessa THEN adiciona curiosidade | Balanceie | [SOURCE: M04 > PV] |
| RD-05 | Temperatura do email | IF ultimo dia THEN ultra-direto. IF inicio THEN premissas + Light Copy | Ajuste tom | [SOURCE: Analises > Email 01] |
| RD-06 | Enrolacao vs climax | IF nao gera climax THEN esta enrolando — corte | Edite impiedosamente | [SOURCE: Analises > Email 03] |
| RD-07 | Tipo de anuncio | IF frio THEN descoberta. IF morno THEN relacionamento. IF quente THEN conversao | Adeque tipo | [SOURCE: M04 > Anuncios] |
| RD-08 | Timing do downsell | IF lancamento THEN espere fechar + 1 semana. IF perpetuo THEN apos 20 dias | Programe timing | [SOURCE: M04 > Downsell] |
| RD-09 | Quantidade de sessoes | IF autoridade alta + ticket baixo THEN menos sessoes. IF autoridade baixa + ticket alto THEN mais sessoes | Dimensione | [SOURCE: M04 > PV] |
| RD-10 | Argumento vs emocao | IF so emocao sem argumento THEN leitor sai anestesiado. IF so argumento sem emocao THEN leitor sai entediado | Balanceie ambos | [SOURCE: Analises > Email 02] |

---

## Outputs por Fase

| Fase | Entregavel | Formato |
|------|-----------|---------|
| 1. Escolha | Formato definido + sessoes listadas | Documento/outline |
| 2. Copy | Texto completo por formato | Word/Docs (depois template) |
| 3. Complementos | Upsell + order bump + downsell | Copy formatada |
| 4. Analise | Copy revisada e aprovada | Peca final |

---

## Appendix D: Rastreabilidade de Fontes (55+)

| ID | Referencia | Fonte | Secao SOP |
|----|-----------|-------|-----------|
| 001 | "Marketing e cuidar do jardim. Venda e sair com a redinha." | [SOURCE: M04 > Pagina de Vendas] | Step 1.1 |
| 002 | "Tentar vender antes e pedir em casamento no primeiro encontro." | [SOURCE: M04 > Pagina de Vendas] | Step 1.2 |
| 003 | "A funcao da redline e loop de curiosidade." | [SOURCE: M04 > Pagina de Vendas] | Step 2.1 |
| 004 | "Nao comece escrevendo copy pelo template. Comece no Word." | [SOURCE: M04 > Pagina de Vendas] | Step 1.2 |
| 005 | "Se barato, mete o preco. Se caro, omite o preco." | [SOURCE: M04 > Pagina de Vendas] | Step 2.2 |
| 006 | "Entregaveis incriveis precisam de sessoes proprias." | [SOURCE: M04 > Pagina de Vendas] | Step 1.2 |
| 007 | "Headline: e interessante E entendido? Nao pode ser so um." | [SOURCE: M04 > Pagina de Vendas] | Step 2.1 |
| 008 | "Depoimentos de aluno — literal demais, sem curiosidade." | [SOURCE: M04 > Pagina de Vendas] | Step 2.1 |
| 009 | "Dois conteudos na mesma sessao — cagou." | [SOURCE: M04 > Pagina de Vendas] | Step 1.2 |
| 010 | "Toda sessao tem que ter redline. Pode perceber na Apple." | [SOURCE: M04 > Pagina de Vendas] | Step 1.2 |
| 011 | "O objetivo da primeira linha e fazer ler a proxima linha." | [SOURCE: M04 > Pagina de Vendas] | Step 2.1 |
| 012 | "O papel aceita tudo, a planilha aceita qualquer merda." | [SOURCE: M04 > Pagina de Vendas] | Step 4.1 |
| 013 | "Minha pagina antiga era maior porque eu era menos conhecido." | [SOURCE: M04 > Pagina de Vendas] | Step 1.2 |
| 014 | "Quantidade de sessoes depende da teoria do bom senso." | [SOURCE: M04 > Pagina de Vendas] | Step 1.2 |
| 015 | "Suporte pos-venda na pagina aumenta conversao." | [SOURCE: M04 > Pagina de Vendas] | Step 1.2 |
| 016 | "Sejam viciados em analisar paginas de vendas." | [SOURCE: M04 > Pagina de Vendas] | Step 4.1 |
| 017 | "Ninguem quer furadeira. A pessoa quer a sala decorada." (QFD) | [SOURCE: M04 > VSL] | Step 1.3 |
| 018 | "VCL que funciona parece documentario, nao propaganda." | [SOURCE: M04 > Analise VSL 02] | Step 1.3 |
| 019 | "Big Idea e uma tese. Passo o video inteiro defendendo." | [SOURCE: M04 > Analise VSL 02] | Step 1.3 |
| 020 | "Bom copywriter faz combinacao de coisas unica e nova." | [SOURCE: M04 > Analise VSL 02] | Step 1.3 |
| 021 | "Nao faca anuncio de conversao para publico frio." | [SOURCE: M04 > Anuncios] | Step 2.5 |
| 022 | "Email e o mais dificil. Mas quem le, compra." | [SOURCE: Analises > Email 01] | Step 2.3 |
| 023 | "Email tem minha maior taxa de conversao. Maior que WhatsApp." | [SOURCE: Analises > Email 01] | Step 2.3 |
| 024 | "Tecnica da frase curta: ponto. Ponto. Ponto." | [SOURCE: Analises > Email 01] | Step 2.3 |
| 025 | "Esse email fez 1 milhao em 3 horas." | [SOURCE: Analises > Email 01] | Step 2.3 |
| 026 | "Segredo do striptease e ficar de roupa." | [SOURCE: Analises > Email 01] | Step 2.3 |
| 027 | "Quando fala que alguns vao falhar, ganha confianca." | [SOURCE: Analises > Email 01] | Step 2.3 |
| 028 | "Email sem Big Idea unica — se perde entre assuntos." | [SOURCE: Analises > Email 01] | Step 4.1 |
| 029 | "Universo cognitivo misturado — remedio + explosao." | [SOURCE: Analises > Email 02] | Step 4.1 |
| 030 | "Enrolacao sem substancia — leitor sai anestesiado." | [SOURCE: Analises > Email 02] | Step 4.1 |
| 031 | "So tem um motivo pra enrolar: gerar climax." | [SOURCE: Analises > Email 03] | Step 4.1 |
| 032 | "Exingue 'resultado real' do vocabulario." | [SOURCE: Analises > Email 03] | Step 4.1 |
| 033 | "Reescreve como se coubesse num tweet." | [SOURCE: Analises > Email 03] | Step 4.1 |
| 034 | "Quanto mais promete, mais desconfia." | [SOURCE: Analises > Email 03] | Step 4.1 |
| 035 | "Quanto mais parece vendedor picareta, menos vende." | [SOURCE: Analises > Email 03] | Step 4.1 |
| 036 | "Analise critica e criticar a si mesmo." | [SOURCE: Analises > Email 03] | Step 4.1 |
| 037 | "Introducao e conclusao conectadas, meio desconectado = erro." | [SOURCE: Analises > Email 03] | Step 4.1 |
| 038 | "Identidade do comunicador — cachorro que fala Osvaldo." | [SOURCE: Analises > Email 02] | Step 2.3 |
| 039 | "Reel vencedor: intro forte + desenvolvimento + conclusao inesperada." | [SOURCE: Analises > Email 03] | Step 2.4 |
| 040 | "E dificil bater reel com essa estrutura e ter < 1M views." | [SOURCE: Analises > Email 03] | Step 2.4 |
| 041 | "Downsell e pra quem nao comprou. Pode ser mais caro." | [SOURCE: M04 > Downsell] | Step 3.3 |
| 042 | "Se lancamento, espere carrinho fechar antes de downsell." | [SOURCE: M04 > Downsell] | Step 3.3 |
| 043 | "NAO use 'so'. Transforme limitacao em beneficio." | [SOURCE: M04 > Downsell] | Step 3.3 |
| 044 | "Coisas boas acontecem no caminho de quem esta no caminho." | [SOURCE: M04 > Downsell] | Step 3.3 |
| 045 | "Apple sabe estrategia de order bump." | [SOURCE: M04 > Pagina de Vendas] | Step 3.2 |
| 046 | "Proporcionalidade de preco no order bump." | [SOURCE: M04 > Orderbump] | Step 3.2 |
| 047 | "Upsell aparece DEPOIS da compra." | [SOURCE: M04 > Upsell] | Step 3.1 |
| 048 | "Estrutura upsell: confirmacao + alerta + reforco + oferta." | [SOURCE: M04 > Upsell] | Step 3.1 |
| 049 | "Cuidado com OTO excessivo." | [SOURCE: M04 > Upsell] | Step 3.1 |
| 050 | "Inicio forte, desenvolvimento logico, conclusao inesperada." | [SOURCE: Analises > Email 03] | Step 2.4 |
| 051 | "Logica de premissas + argumentos + elementos literarios + gatilhos — tudo junto." | [SOURCE: Analises > Email 03] | Step 2.3 |
| 052 | "Queijo vegano: associacao criativa + matematica inusitada." | [SOURCE: Analises > Email 04] | Step 2.4 |
| 053 | "Essa e a prova que Light Copy funciona." | [SOURCE: Analises > Email 04] | Step 2.4 |
| 054 | "Reduccionista demais = copywriter inexperiente." | [SOURCE: M04 > Pagina de Vendas] | Step 4.2 |
| 055 | "Minha pagina antiga era maior. Os caras tentam copiar sem entender." | [SOURCE: M04 > Pagina de Vendas] | Step 1.2 |

---

**Quality Gate: SOP_QUALITY**

| Criterio | Requisito | Status |
|----------|-----------|--------|
| Steps documentados | 8+ steps (11 steps) | [x] |
| Task Anatomy | 8 campos por step | [x] |
| Regras de decisao | Todas as bifurcacoes cobertas (10 regras) | [x] |
| Appendix D | 50+ referencias (55 referencias) | [x] |
| Zero invencao | Todos os steps com fonte | [x] |
| Fluxo logico | Inicio ao fim sequencial | [x] |

**Resultado: 6/6 PASS**
