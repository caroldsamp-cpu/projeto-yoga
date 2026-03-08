# Task: Montar Oferta - formula-lancamento

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | `montar-oferta` |
| **status** | Active |
| **responsible_executor** | @fl-oferta |
| **execution_type** | Agent (interactive com checkpoints) |
| **input** | Documento de alicerce completo (5 pilares validados) |
| **output** | Documento de oferta com todos os componentes (entregaveis, preco, garantia, bonus, escada de valor) |
| **action_items** | Definir entregaveis, calcular preco (P=O-R), criar garantia, montar bonus, desenhar escada de valor |
| **acceptance_criteria** | Oferta completa com todos os 5 componentes, preco justificado pela formula, escada de valor coerente |

**Task ID**: montar-oferta
**Agent**: @fl-oferta
**Version**: 1.0.0
**Mode**: Interactive (checkpoints por componente)
**Squad**: formula-lancamento

---

## Purpose

Construir a oferta irresistivel do expert. Uma oferta nao e so um preco — e a engenharia completa de valor percebido que faz o avatar sentir que seria burrice nao comprar. A formula P=O-R (Preco = Oferta - Risco) guia toda a construcao.

---

## Pre-requisites

| Requisito | Verificacao | Bloqueante? |
|-----------|------------|-------------|
| Alicerce completo (5/5 pilares) | Documento de alicerce existe e validado | **SIM — BLOQUEIO ABSOLUTO** |
| Nicho definido | Pilar 1 do alicerce | SIM |
| Avatar com dores e desejos | Pilar 2 do alicerce | SIM |
| Roma clara | Pilar 3 do alicerce | SIM |
| Metodo estruturado | Pilar 5 do alicerce | SIM |

**Se alicerce incompleto:** REJEITAR execucao. Rotear de volta para `construir-alicerce` via @fl-chief.

---

## Inputs

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `alicerce` | document | Yes | Documento de alicerce completo |
| `faixa_preco_referencia` | string | No | Faixa de preco do mercado (se conhecida) |
| `tipo_produto` | string | No | Curso online, mentoria, consultoria, etc. |

---

## Workflow

### Step 1: Leitura do Alicerce

1. Carregar documento de alicerce
2. Extrair: Roma, Avatar (dores/desejos), Metodo (etapas), Objecoes
3. Confirmar com usuario: "Vou montar sua oferta com base no alicerce. Tudo atualizado?"
4. Se NAO → pausar e direcionar para atualizar alicerce

---

### Step 2: Componente 1 — Entregaveis

**Elicitacao:**
1. "O que exatamente seu cliente recebe ao comprar? (modulos, aulas, templates, etc.)"
2. "Qual formato de entrega? (video, ao vivo, plataforma, presencial)"
3. "Quanto tempo de acesso?"
4. "Tem acompanhamento individual ou em grupo?"

**Processamento:**
1. Mapear cada etapa do Metodo → entregavel correspondente
2. Listar entregaveis em formato de stack:
   - Entregavel principal (core)
   - Entregaveis complementares
   - Formato e duracao de cada um
3. Calcular valor percebido de cada entregavel

**Checkpoint 1:**
```
Entregaveis:
1. {entregavel_1} — Formato: {formato} — Valor percebido: R$ {valor}
2. {entregavel_2} — Formato: {formato} — Valor percebido: R$ {valor}
...
Total valor percebido: R$ {total}
Correto? [Sim / Ajustar]
```

---

### Step 3: Componente 2 — Preco (Formula P=O-R)

**Conceito:**
```
P (Preco justo) = O (Valor da Oferta) - R (Risco percebido)
```
- **O** = soma do valor percebido de todos os entregaveis + bonus
- **R** = risco percebido pelo avatar (reduzido pela garantia)
- **P** = preco que o avatar paga com sensacao de barganha

**Elicitacao:**
1. "Quanto voce imagina cobrar? (chute inicial)"
2. "Quanto seu concorrente cobra por algo similar?"
3. "Qual o ticket medio do seu avatar? Quanto ele ja gastou tentando resolver isso?"

**Processamento:**
1. Calcular O (soma dos valores percebidos)
2. Estimar R (baseado na arvore de objecoes — categoria confianca)
3. Aplicar formula: P = O - R
4. Comparar com chute do expert e preco de mercado
5. Sugerir faixa de preco com justificativa

**Checkpoint 2:**
```
Valor total da oferta (O): R$ {valor_oferta}
Risco percebido (R): R$ {risco} (reduzido pela garantia)
Preco sugerido (P): R$ {preco}
Comparacao mercado: {posicao — abaixo/na media/premium}
Faz sentido? [Sim / Ajustar]
```

---

### Step 4: Componente 3 — Garantia

**Elicitacao:**
1. "Voce esta disposto a oferecer garantia? Que tipo?"
2. "Condicional (se fizer X e nao conseguir Y) ou incondicional (7 dias sem perguntas)?"
3. "Qual prazo de garantia?"

**Processamento:**
1. Classificar tipo de garantia:
   - **Incondicional:** 7 ou 30 dias, sem perguntas
   - **Condicional:** "Faca as X aulas e se nao tiver resultado Y, devolvemos"
   - **Hibrida:** Incondicional 7 dias + Condicional 30 dias
2. Calcular impacto no R (risco percebido) — garantia forte reduz R
3. Recalcular P se R mudou significativamente

**Checkpoint 3:**
```
Garantia: {tipo} — {prazo}
Impacto no risco: R reduzido em {percentual}%
Preco ajustado: R$ {preco_ajustado}
Aprova? [Sim / Ajustar]
```

---

### Step 5: Componente 4 — Bonus

**Elicitacao:**
1. "Voce tem materiais extras que pode oferecer como bonus?"
2. "Tem algo que seu avatar adoraria ter mas nao esperaria receber?"
3. "Consegue oferecer uma sessao ao vivo, template, ou comunidade exclusiva?"

**Processamento:**
1. Listar potenciais bonus (3-5 ideal)
2. Para cada bonus:
   - Nome atrativo
   - Valor percebido
   - Conexao com uma dor/objecao do avatar
3. Regra: bonus devem resolver objecoes especificas da arvore
4. Recalcular O (valor da oferta) com bonus

**Checkpoint 4:**
```
Bonus:
1. {bonus_1} — Valor: R$ {valor} — Resolve objecao: "{objecao}"
2. {bonus_2} — Valor: R$ {valor} — Resolve objecao: "{objecao}"
3. {bonus_3} — Valor: R$ {valor} — Resolve objecao: "{objecao}"
Novo valor total (O): R$ {novo_total}
Preco se mantem: R$ {preco}
Aprovado? [Sim / Ajustar]
```

---

### Step 6: Componente 5 — Escada de Valor

**Elicitacao:**
1. "Voce tem ou quer ter produtos em faixas de preco diferentes?"
2. "Tem algo gratuito que serve de entrada? (ebook, aula, workshop)"
3. "Tem algo premium alem do produto principal? (mentoria, mastermind)"

**Processamento:**
1. Desenhar escada de valor com 3-5 degraus:
   - **Gratis:** Lead magnet (ebook, aula, desafio)
   - **Low-ticket:** R$ 47-197 (mini-curso, workshop)
   - **Mid-ticket:** R$ 497-1997 (curso principal — OFERTA CORE)
   - **High-ticket:** R$ 2997-9997 (mentoria, grupo VIP)
   - **Premium:** R$ 10k+ (consultoria 1:1, imersao)
2. Posicionar a oferta atual na escada
3. Identificar gaps e oportunidades futuras

**Checkpoint 5:**
```
Escada de Valor:
[Gratis] {produto_gratis} → [Low] {low_ticket} → [CORE] {oferta_principal} → [High] {high_ticket}
Posicao da oferta atual: {degrau}
Faz sentido a progressao? [Sim / Ajustar]
```

---

### Step 7: Consolidacao da Oferta

1. Compilar todos os 5 componentes em documento unico
2. Validar coerencia:
   - Entregaveis entregam a Roma?
   - Preco justificado pela formula?
   - Garantia reduz objecoes de confianca?
   - Bonus resolvem objecoes especificas?
   - Escada de valor tem progressao logica?
3. Gerar "Pitch de 1 paragrafo" da oferta
4. Salvar documento em `docs/oferta/oferta-{expert_name}.md`

---

## Veto Conditions

| Condicao | Acao |
|----------|------|
| Alicerce incompleto (< 5 pilares) | **BLOQUEIO ABSOLUTO** — retornar para construir-alicerce |
| Preco definido sem formula (chute puro) | VETAR — exigir calculo P=O-R |
| Oferta sem garantia | ALERTAR (nao bloquear, mas fortemente recomendar) |
| Bonus sem conexao com objecoes | VETAR — cada bonus deve resolver uma objecao |
| Entregaveis nao conectam com etapas do Metodo | VETAR — revisar entregaveis |
| Escada de valor com saltos de preco > 5x entre degraus | ALERTAR — sugerir degrau intermediario |

---

## Acceptance Criteria

- [ ] Componente 1 (Entregaveis) listados com formato e valor percebido
- [ ] Componente 2 (Preco) calculado usando formula P=O-R
- [ ] Componente 3 (Garantia) definida com tipo e prazo
- [ ] Componente 4 (Bonus) minimo 2, cada um conectado a uma objecao
- [ ] Componente 5 (Escada de Valor) desenhada com 3+ degraus
- [ ] Coerencia cruzada entre oferta e alicerce validada
- [ ] Pitch de 1 paragrafo gerado
- [ ] Documento consolidado salvo
- [ ] Usuario validou cada componente (5 checkpoints passados)

---

## Handoff

| Destino | Task | Agente | Dados Transferidos |
|---------|------|--------|--------------------|
| Escrever CPL | `escrever-cpl` | @fl-copy + @fl-lancamento-classico | Oferta completa + Alicerce |
| Lancamento Semente | Task de lancamento semente | @fl-lancamento-semente | Oferta completa + Alicerce |
| Lancamento Classico | Task de lancamento classico | @fl-lancamento-classico | Oferta completa + Alicerce |

**Condicao de handoff:** Todos os 5 componentes COMPLETOS e validados.
