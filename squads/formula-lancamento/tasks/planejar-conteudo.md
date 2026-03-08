# Task: Planejar Conteudo - formula-lancamento

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | `planejar-conteudo` |
| **status** | Active |
| **responsible_executor** | @fl-conteudo |
| **execution_type** | Agent (interactive com checkpoints) |
| **input** | Documento de alicerce completo (Roma, Avatar, Metodo obrigatorios) |
| **output** | Plano de conteudo com conteudo raiz, linhas editoriais, calendario e aquecimento |
| **action_items** | Definir conteudo raiz, filtrar linhas editoriais pela Roma, montar calendario, planejar aquecimento |
| **acceptance_criteria** | Conteudo raiz definido, 3 linhas editoriais filtradas, calendario editorial montado, plano de aquecimento pronto |

**Task ID**: planejar-conteudo
**Agent**: @fl-conteudo
**Version**: 1.0.0
**Mode**: Interactive (checkpoints por entregavel)
**Squad**: formula-lancamento

---

## Purpose

Planejar a estrategia de conteudo que antecede e sustenta o lancamento. Conteudo sem estrategia e barulho. Conteudo filtrado pela Roma atrai o avatar certo, educa para a oferta e aquece para o lancamento. Tudo comeca pelo conteudo raiz.

---

## Pre-requisites

| Requisito | Verificacao | Bloqueante? |
|-----------|------------|-------------|
| Alicerce completo | Documento de alicerce com 5/5 pilares | **SIM** |
| Roma definida | Pilar 3 do alicerce | **SIM — bloqueio critico** |
| Avatar definido | Pilar 2 do alicerce (dores e desejos) | **SIM** |
| Metodo definido | Pilar 5 do alicerce (etapas) | **SIM** |
| Oferta montada | Documento de oferta (desejavel, nao obrigatorio) | NAO (mas recomendado) |

**Se Roma nao definida:** REJEITAR execucao. Sem Roma nao ha filtro para conteudo.

---

## Inputs

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `alicerce` | document | Yes | Documento de alicerce (pilares 2, 3, 5 minimo) |
| `oferta` | document | No | Documento de oferta (se ja existir) |
| `canais` | list | No | Canais de distribuicao (Instagram, YouTube, etc.) |
| `frequencia` | string | No | Frequencia desejada de publicacao |
| `data_lancamento` | date | No | Data prevista do lancamento (para plano de aquecimento) |

---

## Workflow

### Step 1: Leitura do Alicerce e Contexto

1. Carregar documento de alicerce
2. Extrair: Roma, Avatar (dores/desejos), Metodo (etapas/nome), Objecoes
3. Se oferta existir, carregar tambem (para alinhar conteudo com produto)
4. Confirmar canais de distribuicao com usuario
5. Se `data_lancamento` informada, calcular janela de aquecimento

---

### Step 2: Conteudo Raiz

**Conceito:** O conteudo raiz e a tese central que sustenta toda a comunicacao do expert. E a grande crenca que o expert defende e que conecta sua Roma ao avatar.

**Elicitacao:**
1. "Qual e a sua grande tese? A crenca #1 que sustenta tudo que voce ensina?"
2. "Se voce pudesse convencer o mundo de UMA coisa sobre sua area, o que seria?"
3. "O que a maioria das pessoas acredita que esta ERRADO na sua area?"

**Processamento:**
1. Formular conteudo raiz em 1-2 frases
2. Validar: conteudo raiz conecta Roma com Avatar?
3. Validar: conteudo raiz desafia crenca comum (gera engajamento)?
4. Derivar 3-5 sub-teses do conteudo raiz

**Checkpoint 1:**
```
Conteudo Raiz: "{tese_central}"

Sub-teses derivadas:
1. {sub_tese_1}
2. {sub_tese_2}
3. {sub_tese_3}

Essa e a sua bandeira? [Sim / Ajustar]
```

---

### Step 3: Linhas Editoriais (3 filtradas pela Roma)

**Conceito:** Linhas editoriais sao os temas recorrentes do conteudo. Na Formula de Lancamento, TODA linha editorial deve passar pelo filtro da Roma — se nao aproxima o avatar da Terra Prometida, nao entra.

**Processamento:**
1. Gerar 5-7 linhas editoriais candidatas baseadas em:
   - Etapas do Metodo (cada etapa pode virar linha)
   - Dores do Avatar (conteudo que enderea dores)
   - Objecoes (conteudo que quebra objecoes)
   - Bastidores/autoridade (prova social, cases)
2. Aplicar filtro da Roma a cada linha:
   - "Esse conteudo aproxima o avatar da Roma?" → SIM/NAO
3. Selecionar top 3 linhas que passam no filtro

**Elicitacao:**
1. Apresentar as linhas candidatas ao usuario
2. "Dessas linhas, quais combinam mais com voce e seu publico?"
3. "Tem algum tema que voce adora falar e nao esta aqui?"

**Checkpoint 2:**
```
Linhas Editoriais (filtradas pela Roma):

1. {linha_1} — Conexao com Roma: {como_conecta}
   Formatos sugeridos: {formatos}
2. {linha_2} — Conexao com Roma: {como_conecta}
   Formatos sugeridos: {formatos}
3. {linha_3} — Conexao com Roma: {como_conecta}
   Formatos sugeridos: {formatos}

Linhas REJEITADAS (nao passaram no filtro da Roma):
- {linha_rejeitada_1}: {motivo}

Aprova essas 3 linhas? [Sim / Ajustar]
```

---

### Step 4: Calendario Editorial

**Elicitacao:**
1. "Quantas vezes por semana voce consegue postar?"
2. "Quais dias e horarios funcionam melhor pro seu publico?"
3. "Voce prefere temas fixos por dia ou rotacao livre?"

**Processamento:**
1. Distribuir as 3 linhas editoriais na semana
2. Definir formato por dia (se temas fixos):
   - Ex: Segunda = Linha 1 (educativo), Quarta = Linha 2 (quebra de objecao), Sexta = Linha 3 (bastidores)
3. Montar grade semanal modelo
4. Gerar 4 semanas de pautas concretas (titulos/temas)

**Checkpoint 3:**
```
Calendario Semanal:

| Dia | Linha Editorial | Formato | Tema Exemplo |
|-----|----------------|---------|--------------|
| {dia_1} | {linha} | {formato} | "{tema}" |
| {dia_2} | {linha} | {formato} | "{tema}" |
| ...

Frequencia: {X} posts/semana
Funciona pra voce? [Sim / Ajustar]
```

---

### Step 5: Plano de Aquecimento de Lancamento

**Conceito:** O aquecimento e o periodo antes do lancamento (14-30 dias) onde o conteudo muda de educativo para pre-lancamento, aumentando antecipacao e desejo.

**Processamento:**
1. Se `data_lancamento` definida, calcular fases:
   - **Fase 1 — Educacao (D-30 a D-15):** Conteudo raiz forte, autoridade
   - **Fase 2 — Antecipacao (D-14 a D-7):** Teasers, bastidores, contagem regressiva
   - **Fase 3 — Intensificacao (D-6 a D-1):** Depoimentos, urgencia, convite para evento
2. Se `data_lancamento` NAO definida, criar modelo generico
3. Para cada fase, listar:
   - Objetivo da fase
   - Tipos de conteudo
   - Tom e intensidade
   - 3-5 pautas especificas

**Elicitacao:**
1. "Voce ja tem data de lancamento definida?"
2. "Seu lancamento tera CPLs (videos pre-lancamento)?"
3. "Voce tem depoimentos ou cases de alunos para usar no aquecimento?"

**Checkpoint 4:**
```
Plano de Aquecimento:

Fase 1 — Educacao ({periodo}):
- Objetivo: {objetivo}
- Pautas: {lista_pautas}

Fase 2 — Antecipacao ({periodo}):
- Objetivo: {objetivo}
- Pautas: {lista_pautas}

Fase 3 — Intensificacao ({periodo}):
- Objetivo: {objetivo}
- Pautas: {lista_pautas}

Aprovado? [Sim / Ajustar]
```

---

### Step 6: Consolidacao do Plano de Conteudo

1. Compilar todos os componentes:
   - Conteudo raiz + sub-teses
   - 3 linhas editoriais com filtro da Roma
   - Calendario editorial semanal + 4 semanas de pautas
   - Plano de aquecimento (se aplicavel)
2. Validar coerencia:
   - Todo conteudo conecta com a Roma?
   - Linhas editoriais cobrem dores, objecoes e metodo?
   - Aquecimento tem progressao de intensidade?
3. Salvar documento em `docs/conteudo/plano-conteudo-{expert_name}.md`

---

## Veto Conditions

| Condicao | Acao |
|----------|------|
| Roma nao definida | **BLOQUEIO ABSOLUTO** — sem Roma nao ha filtro de conteudo |
| Alicerce incompleto | VETAR — retornar para construir-alicerce |
| Linha editorial que nao passa no filtro da Roma | REJEITAR a linha — nao incluir no plano |
| Conteudo raiz generico (sem tese clara) | VETAR — refinar ate ter posicionamento forte |
| Calendario com frequencia > capacidade do expert | ALERTAR — reduzir para frequencia sustentavel |
| Aquecimento < 7 dias antes do lancamento | ALERTAR — recomendar minimo 14 dias |

---

## Acceptance Criteria

- [ ] Conteudo raiz definido em 1-2 frases com tese clara
- [ ] 3-5 sub-teses derivadas do conteudo raiz
- [ ] 3 linhas editoriais definidas e filtradas pela Roma
- [ ] Linhas rejeitadas documentadas com motivo
- [ ] Calendario editorial semanal montado
- [ ] 4 semanas de pautas concretas geradas
- [ ] Plano de aquecimento com 3 fases (se data de lancamento definida)
- [ ] Coerencia cruzada: todo conteudo conecta com a Roma
- [ ] Documento consolidado salvo
- [ ] Usuario validou cada componente (4 checkpoints passados)

---

## Handoff

| Destino | Task | Agente | Dados Transferidos |
|---------|------|--------|--------------------|
| Escrever CPL | `escrever-cpl` | @fl-copy + @fl-lancamento-classico | Conteudo raiz + linhas editoriais + plano de aquecimento |
| Lancamento Semente | Task de lancamento semente | @fl-lancamento-semente | Plano de conteudo + pautas de aquecimento |
| Producao de conteudo | Task de producao | Squad de conteudo | Calendario + pautas prontas |

**Condicao de handoff:** Plano de conteudo completo com todos os 4 componentes validados.
