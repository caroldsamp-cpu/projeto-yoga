# Task: Construir Alicerce - formula-lancamento

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | `construir-alicerce` |
| **status** | Active |
| **responsible_executor** | @fl-alicerce |
| **execution_type** | Agent (interactive com checkpoints) |
| **input** | Diagnostico do @fl-chief (Marco 1 confirmado) |
| **output** | Documento de alicerce com os 5 pilares definidos |
| **action_items** | Definir nicho, avatar, roma, arvore de objecoes, formalizar metodo |
| **acceptance_criteria** | 5 pilares completos e validados, documento salvo, pronto para montar-oferta |

**Task ID**: construir-alicerce
**Agent**: @fl-alicerce
**Version**: 1.0.0
**Mode**: Interactive (checkpoints por pilar)
**Squad**: formula-lancamento

---

## Purpose

Construir o alicerce completo do expert antes de qualquer lancamento. Sem alicerce, nao existe oferta solida, copy que converte, nem lancamento que escale. Os 5 pilares sao interdependentes e obrigatorios.

---

## Pre-requisites

| Requisito | Verificacao |
|-----------|------------|
| Diagnostico realizado | Marco 1 ou 2 identificado pelo @fl-chief |
| Usuario disponivel para sessao interativa | Elicitacao necessaria em cada pilar |

---

## Os 5 Pilares do Alicerce

| # | Pilar | Descricao | Entregavel |
|---|-------|-----------|------------|
| 1 | Nicho | Mercado especifico onde o expert atua | Declaracao de nicho em 1 frase |
| 2 | Avatar | Pessoa especifica que o expert transforma | Ficha do avatar (dores, desejos, objecoes) |
| 3 | Roma (Terra Prometida) | Transformacao prometida — de onde para onde | Declaracao de Roma em formato "De X para Y" |
| 4 | Arvore de Objecoes | Todas as razoes pelas quais o avatar NAO compraria | Lista categorizada (preco, tempo, confianca, metodo) |
| 5 | Metodo | Framework proprietario do expert | Nome do metodo + etapas (3-7 passos) |

---

## Inputs

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `diagnostico` | object | Yes | Output do diagnosticar-marco (marco + contexto) |
| `area_atuacao` | string | No | Area de atuacao do expert (se ja conhecida) |
| `experiencia` | string | No | Nivel de experiencia do expert |

---

## Workflow

### Step 1: Contexto e Preparacao

1. Receber dados do diagnostico (@fl-chief)
2. Identificar quais pilares ja tem informacao parcial
3. Explicar ao usuario o processo: "Vamos construir seu alicerce em 5 etapas. Cada etapa precisa ser validada antes de seguir."

---

### Step 2: Pilar 1 — Nicho

**Elicitacao:**
1. "Qual e sua area de atuacao principal?"
2. "Dentro dessa area, qual problema especifico voce resolve?"
3. "Quem mais resolve esse problema? O que te diferencia?"

**Processamento:**
1. Avaliar se o nicho e especifico o suficiente (nao generico)
2. Testar: "Se alguem perguntar o que voce faz, a resposta cabe em 1 frase?"
3. Formular declaracao de nicho

**Checkpoint 1:**
```
Nicho definido: "{declaracao}"
Voce se ve nessa definicao? [Sim / Ajustar]
```

- Se Ajustar → refinar com mais perguntas (max 2 iteracoes)
- Se Sim → marcar Pilar 1 como COMPLETO

---

### Step 3: Pilar 2 — Avatar

**Elicitacao:**
1. "Descreva seu cliente ideal — quem e essa pessoa?"
2. "Quais sao as 3 maiores dores que essa pessoa sente?"
3. "O que essa pessoa ja tentou e nao funcionou?"
4. "Qual o desejo mais profundo dessa pessoa?"

**Processamento:**
1. Montar ficha do avatar:
   - Nome ficticio
   - Idade/fase da vida
   - 3 dores principais
   - 3 desejos principais
   - Tentativas frustradas
   - Crencas limitantes
2. Validar coerencia avatar <-> nicho

**Checkpoint 2:**
```
Avatar: {nome_ficticio}
Dores: {lista}
Desejos: {lista}
Esse e seu cliente ideal? [Sim / Ajustar]
```

- Se Ajustar → refinar (max 2 iteracoes)
- Se Sim → marcar Pilar 2 como COMPLETO

---

### Step 4: Pilar 3 — Roma (Terra Prometida)

**Elicitacao:**
1. "De onde seu cliente sai? Qual o ponto A?"
2. "Para onde ele chega depois de trabalhar com voce? Qual o ponto B?"
3. "Em quanto tempo essa transformacao acontece?"
4. "Voce consegue descrever essa jornada em uma frase: 'Eu ajudo [avatar] a sair de [ponto A] e chegar em [ponto B] em [tempo]'?"

**Processamento:**
1. Formular a Roma no formato padrao
2. Validar: Roma e tangivel e mensuravel?
3. Validar: Roma conecta com as dores do avatar?

**Checkpoint 3:**
```
Roma: "Eu ajudo {avatar} a sair de {ponto_a} e chegar em {ponto_b} em {tempo}"
Essa e sua promessa? [Sim / Ajustar]
```

- Se Ajustar → refinar (max 2 iteracoes)
- Se Sim → marcar Pilar 3 como COMPLETO

---

### Step 5: Pilar 4 — Arvore de Objecoes

**Elicitacao:**
1. "Quais desculpas seu cliente da para NAO comecar?"
2. "O que ele pensa quando ve o preco?"
3. "Ele duvida que funciona pra ele? Por que?"
4. "Ele acha que nao tem tempo/dinheiro/capacidade?"

**Processamento:**
1. Categorizar objecoes:
   - **Preco:** "E caro", "Nao tenho dinheiro agora"
   - **Tempo:** "Nao tenho tempo", "Agora nao e o momento"
   - **Confianca:** "Sera que funciona?", "Ja tentei e nao deu"
   - **Metodo:** "Meu caso e diferente", "Isso nao serve pra mim"
2. Para cada objecao, criar contra-argumento baseado na Roma
3. Montar arvore estruturada

**Checkpoint 4:**
```
Objecoes mapeadas: {quantidade} em {categorias} categorias
Top 3 objecoes:
1. {objecao_1} → Contra-argumento: {resposta_1}
2. {objecao_2} → Contra-argumento: {resposta_2}
3. {objecao_3} → Contra-argumento: {resposta_3}
Faz sentido? [Sim / Ajustar]
```

- Se Ajustar → complementar (max 2 iteracoes)
- Se Sim → marcar Pilar 4 como COMPLETO

---

### Step 6: Pilar 5 — Metodo

**Elicitacao:**
1. "Como voce leva seu cliente do ponto A ao ponto B? Quais etapas?"
2. "Esse processo tem um nome? Se nao, vamos criar um."
3. "Quantas etapas tem? (ideal: 3 a 7)"
4. "Cada etapa tem um entregavel claro?"

**Processamento:**
1. Estruturar metodo:
   - Nome do metodo (proprietario)
   - Etapas numeradas (3-7)
   - Entregavel de cada etapa
   - Conexao etapa <-> pilar da Roma
2. Validar: metodo e ensinavel e replicavel?
3. Validar: metodo tem nome memoravel?

**Checkpoint 5:**
```
Metodo: "{nome_do_metodo}"
Etapas:
1. {etapa_1} → Entrega: {entregavel_1}
2. {etapa_2} → Entrega: {entregavel_2}
...
Esse e seu metodo? [Sim / Ajustar]
```

- Se Ajustar → refinar (max 2 iteracoes)
- Se Sim → marcar Pilar 5 como COMPLETO

---

### Step 7: Consolidacao e Documento Final

1. Compilar todos os 5 pilares em documento unico
2. Validar coerencia cruzada:
   - Nicho alinha com Avatar?
   - Avatar conecta com Roma?
   - Objecoes refletem o Avatar?
   - Metodo entrega a Roma?
3. Salvar documento em `docs/alicerce/alicerce-{expert_name}.md`
4. Apresentar resumo ao usuario

---

## Veto Conditions

| Condicao | Acao |
|----------|------|
| Pilar incompleto apos 3 iteracoes de refinamento | PAUSAR — agendar retorno ao pilar |
| Usuario quer pular pilar | VETAR — todos os 5 sao obrigatorios |
| Nicho generico demais (ex: "ajudo pessoas") | VETAR — refinar ate especificidade minima |
| Roma nao mensuravel (ex: "ser mais feliz") | VETAR — exigir resultado tangivel |
| Metodo com mais de 7 etapas | VETAR — simplificar ate max 7 |
| Tentar prosseguir para montar-oferta sem 5/5 | **BLOQUEIO ABSOLUTO** — nao ha handoff sem alicerce completo |

---

## Acceptance Criteria

- [ ] Pilar 1 (Nicho) definido e validado pelo usuario
- [ ] Pilar 2 (Avatar) definido com ficha completa (dores, desejos, crencas)
- [ ] Pilar 3 (Roma) definida no formato "De X para Y em Z"
- [ ] Pilar 4 (Arvore de Objecoes) com minimo 6 objecoes categorizadas
- [ ] Pilar 5 (Metodo) com nome, 3-7 etapas e entregaveis
- [ ] Coerencia cruzada entre os 5 pilares validada
- [ ] Documento consolidado salvo
- [ ] Usuario validou cada pilar individualmente (5 checkpoints passados)

---

## Handoff

| Destino | Task | Agente | Dados Transferidos |
|---------|------|--------|--------------------|
| Montar oferta | `montar-oferta` | @fl-oferta | Documento de alicerce completo (5 pilares) |
| Planejar conteudo | `planejar-conteudo` | @fl-conteudo | Roma + Avatar + Metodo (pilares 2, 3, 5) |

**Condicao de handoff:** Todos os 5 pilares COMPLETOS. Nenhuma excecao.
