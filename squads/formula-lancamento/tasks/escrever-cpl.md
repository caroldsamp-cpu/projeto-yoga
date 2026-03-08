# Task: Escrever CPL - formula-lancamento

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | `escrever-cpl` |
| **status** | Active |
| **responsible_executor** | @fl-copy + @fl-lancamento-classico |
| **execution_type** | Agent (interactive com checkpoints) |
| **input** | Alicerce completo + Oferta completa + Numero do CPL (1, 2 ou 3) |
| **output** | Roteiro de CPL pronto para gravacao |
| **action_items** | Elicitar numero do CPL, estruturar roteiro conforme framework, validar com usuario |
| **acceptance_criteria** | Roteiro completo com todas as secoes do CPL, alinhado com alicerce e oferta, pronto para gravar |

**Task ID**: escrever-cpl
**Agent**: @fl-copy (escrita) + @fl-lancamento-classico (estrategia de lancamento)
**Version**: 1.0.0
**Mode**: Interactive (elicitacao inicial + checkpoints por secao)
**Squad**: formula-lancamento

---

## Purpose

Escrever o roteiro de um CPL (Conteudo Pre-Lancamento) para lancamento classico. Os CPLs sao os 3 videos que antecedem a abertura de carrinho e sao o coracao do lancamento classico. Cada CPL tem um objetivo estrategico especifico e uma estrutura propria.

---

## Pre-requisites

| Requisito | Verificacao | Bloqueante? |
|-----------|------------|-------------|
| Alicerce completo (5/5 pilares) | Documento de alicerce validado | **SIM — BLOQUEIO ABSOLUTO** |
| Oferta completa | Documento de oferta com 5 componentes | **SIM — BLOQUEIO ABSOLUTO** |
| Roma definida | Pilar 3 do alicerce | SIM |
| Arvore de objecoes | Pilar 4 do alicerce | SIM |
| Metodo estruturado | Pilar 5 do alicerce | SIM |
| Plano de conteudo | Desejavel (conteudo raiz ajuda no CPL) | NAO (mas recomendado) |

**Se alicerce OU oferta incompletos:** REJEITAR execucao. CPLs sem fundacao vendem ar.

---

## Inputs

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `alicerce` | document | Yes | Documento de alicerce completo |
| `oferta` | document | Yes | Documento de oferta completo |
| `cpl_numero` | number (1, 2, 3) | **Elicitar** | Qual CPL escrever |
| `plano_conteudo` | document | No | Plano de conteudo (se existir) |
| `duracao_alvo` | string | No | Duracao alvo do video (padrao: 30-60 min) |
| `estilo_gravacao` | string | No | Slides, camera, misto |

---

## Framework dos 3 CPLs

| CPL | Titulo | Objetivo Estrategico | Emocao Central |
|-----|--------|---------------------|----------------|
| 1 | **Oportunidade** | Mostrar que existe uma oportunidade real e acessivel | Esperanca + Curiosidade |
| 2 | **Transformacao** | Provar que a transformacao e possivel (metodo + prova) | Crenca + Desejo |
| 3 | **Experiencia do Dono** | Fazer o avatar se sentir dono da decisao | Urgencia + Empoderamento |

---

## Workflow

### Step 0: Elicitacao do CPL

**Pergunta obrigatoria:**
> "Qual CPL voce quer escrever? (1) Oportunidade, (2) Transformacao, ou (3) Experiencia do Dono?"

- Se usuario nao sabe: explicar brevemente cada um e recomendar comecar pelo CPL 1
- Se usuario quer todos: executar um por vez, nesta ordem: 1 → 2 → 3

---

### Step 1: Carga de Contexto

1. Carregar alicerce e oferta
2. Extrair dados relevantes para o CPL escolhido:
   - **CPL 1:** Roma, dores do avatar, conteudo raiz
   - **CPL 2:** Metodo (etapas), cases/provas, objecoes de confianca
   - **CPL 3:** Oferta completa, objecoes de preco/tempo, garantia, bonus
3. Se plano de conteudo existir, usar conteudo raiz como base do CPL 1

---

### Step 2: Estrutura do Roteiro (varia por CPL)

#### Se CPL 1 — Oportunidade

**Secoes obrigatorias:**

1. **Abertura / Hook (2-3 min)**
   - Pergunta poderosa ou afirmacao provocativa
   - Conectar com a dor principal do avatar
   - Prometer o que ele vai aprender neste video

2. **A Oportunidade (8-12 min)**
   - Apresentar a oportunidade (Roma) como algo real e acessivel
   - Mostrar por que AGORA e o momento
   - Evidencias: dados, tendencias, casos reais
   - Quebrar a crenca de que "nao e pra mim"

3. **O Inimigo Comum (5-8 min)**
   - Identificar o que IMPEDE o avatar de chegar la
   - Nao e culpa dele — e o metodo errado / informacao errada / falta de guia
   - Gerar empatia: "eu tambem passei por isso"

4. **A Virada (5-8 min)**
   - Como voce descobriu o caminho
   - Sua historia de transformacao (brevemente)
   - Apresentar o Metodo (sem detalhes — so o nome e a promessa)

5. **Encerramento + CTA (2-3 min)**
   - Resumir a oportunidade
   - Gerar antecipacao para o CPL 2
   - CTA: "No proximo video vou te mostrar exatamente COMO..."

#### Se CPL 2 — Transformacao

**Secoes obrigatorias:**

1. **Abertura / Recapitulacao (2-3 min)**
   - Relembrar a oportunidade do CPL 1
   - "Voce viu que existe uma oportunidade. Agora vou te mostrar O COMO."

2. **O Metodo (12-18 min)**
   - Apresentar as etapas do Metodo (do alicerce)
   - Para cada etapa: o que e, por que funciona, resultado esperado
   - Dar conteudo REAL — ensinar algo aplicavel
   - Equilibrar: dar o suficiente para gerar valor, sem entregar o curso inteiro

3. **Prova Social (8-12 min)**
   - Cases de alunos/clientes (se houver)
   - Depoimentos em texto ou video
   - Se nao houver cases: usar sua propria historia como prova
   - Quebrar objecao: "Funciona para pessoas como EU?"

4. **Quebra de Objecoes (5-8 min)**
   - Enderegar top 3 objecoes da arvore (categoria confianca e metodo)
   - "Voce pode estar pensando que..."
   - Responder cada objecao com logica + emocao

5. **Encerramento + CTA (2-3 min)**
   - "Agora voce sabe O QUE e COMO. Falta uma coisa..."
   - Gerar antecipacao para CPL 3
   - CTA: "No proximo video vou te mostrar como ter acesso a tudo isso..."

#### Se CPL 3 — Experiencia do Dono

**Secoes obrigatorias:**

1. **Abertura / Recapitulacao (2-3 min)**
   - Resumir CPL 1 (oportunidade) e CPL 2 (metodo)
   - "Voce viu a oportunidade, conheceu o caminho. Agora a decisao e sua."

2. **A Visao do Futuro (5-8 min)**
   - Pintar a Roma em detalhes vividos
   - "Imagina daqui a {tempo}..."
   - Usar linguagem sensorial e emocional
   - Fazer o avatar SE VER na transformacao

3. **Apresentacao da Oferta (10-15 min)**
   - Revelar o produto/programa
   - Apresentar cada entregavel com valor percebido
   - Stack de valor: somar todos os valores
   - Apresentar bonus (conectar cada um com objecao)
   - Revelar o preco (ancorar com o stack de valor)
   - Apresentar a garantia

4. **Quebra de Objecoes Finais (5-8 min)**
   - Enderegar objecoes de preco e tempo
   - "E caro? Vamos fazer a conta..."
   - "Nao tem tempo? Quanto tempo voce ja perdeu tentando sozinho?"
   - Inversao de risco: garantia + custo de nao agir

5. **CTA Final (3-5 min)**
   - Instrucoes claras: como comprar, onde clicar, prazo
   - Urgencia real (vagas, bonus por tempo, data de fechamento)
   - Encerramento emocional: "Eu te vejo do outro lado"

---

### Step 3: Escrita do Roteiro

**Processo do @fl-copy:**

1. Escrever cada secao seguindo a estrutura acima
2. Usar tom de voz do expert (se voice guide existir, consultar)
3. Incluir marcacoes no roteiro:
   - `[SLIDE]` — indica momento de trocar slide
   - `[HISTORIA]` — indica momento de contar historia pessoal
   - `[PAUSA]` — indica pausa dramatica
   - `[DEPOIMENTO]` — indica momento de mostrar depoimento
   - `[CTA]` — indica call to action
4. Estimar duracao de cada secao

**Checkpoint por secao:**
Apresentar cada secao ao usuario para validacao antes de prosseguir.

---

### Step 4: Revisao Estrategica

**Processo do @fl-lancamento-classico:**

1. Revisar roteiro completo sob otica de lancamento:
   - Conexao com o CPL anterior e posterior esta clara?
   - Nivel de revelacao esta correto (nao revela demais, nao revela pouco)?
   - Objecoes corretas estao sendo enderecadas neste CPL?
   - Tom emocional e apropriado para este estagio?
2. Sugerir ajustes estrategicos

---

### Step 5: Finalizacao

1. Aplicar ajustes da revisao estrategica
2. Gerar versao final do roteiro com:
   - Titulo do CPL
   - Duracao estimada total
   - Secoes com timestamps estimados
   - Marcacoes de producao
3. Salvar documento em `docs/lancamento/cpl{numero}-roteiro-{expert_name}.md`

**Checkpoint Final:**
```
CPL {numero} — {titulo}
Duracao estimada: {duracao} minutos
Secoes: {quantidade}

Roteiro completo entregue.
Pronto para gravacao? [Sim / Revisar secao especifica]
```

---

## Veto Conditions

| Condicao | Acao |
|----------|------|
| Alicerce incompleto | **BLOQUEIO ABSOLUTO** — retornar para construir-alicerce |
| Oferta incompleta | **BLOQUEIO ABSOLUTO** — retornar para montar-oferta |
| CPL 3 sem oferta com preco definido | VETAR — nao ha como apresentar oferta sem preco |
| Roteiro sem hook nos primeiros 30 segundos | VETAR — reescrever abertura |
| CPL 2 sem conteudo ensinavel (so vendeu) | VETAR — CPL 2 DEVE ensinar algo real |
| CPL 1 que ja revela o metodo completo | VETAR — CPL 1 so apresenta a oportunidade |
| Roteiro com mais de 90 minutos estimados | ALERTAR — recomendar cortar para max 60 min |
| Roteiro sem CTA claro | VETAR — todo CPL termina com CTA |

---

## Acceptance Criteria

- [ ] CPL numero (1, 2 ou 3) elicitado e confirmado
- [ ] Todas as secoes obrigatorias do CPL escolhido presentes
- [ ] Roteiro alinhado com alicerce (Roma, avatar, objecoes, metodo)
- [ ] Roteiro alinhado com oferta (se CPL 3)
- [ ] Marcacoes de producao incluidas ([SLIDE], [HISTORIA], etc.)
- [ ] Duracao estimada entre 30-60 minutos
- [ ] Hook forte nos primeiros 30 segundos
- [ ] CTA claro no encerramento
- [ ] Conexao com CPL anterior/posterior indicada
- [ ] Revisao estrategica do @fl-lancamento-classico aplicada
- [ ] Documento salvo e pronto para gravacao
- [ ] Usuario validou o roteiro final

---

## Handoff

| Destino | Task | Agente | Dados Transferidos |
|---------|------|--------|--------------------|
| Proximo CPL | `escrever-cpl` (proximo numero) | @fl-copy + @fl-lancamento-classico | Roteiro do CPL atual (para manter continuidade) |
| Producao do video | Task de producao | Squad de producao | Roteiro finalizado com marcacoes |
| Lancamento classico | Task de lancamento | @fl-lancamento-classico | Roteiros dos 3 CPLs completos |

**Condicao de handoff:** Roteiro completo, validado pelo usuario e revisado estrategicamente.
