# Fluxo Board Multi-Mente com Handoff Gaby

## Objetivo

Usar as lentes estrategicas de `tay + ogilvy + malika + rubin` sem perder o tom acolhedor da Gaby no output final.

## Quando usar

- planejamento semanal de conteudo
- revisao de posicionamento
- campanhas de stories/carrossel
- ajuste de copy e direcao visual

## Sequencia operacional (padrao)

1. `@board-orchestrator`
2. `@marketing-cmo`
3. `@marketing-production`
4. `@marketing-designer`
5. `@marketing-distribution`

## Lentes ativas por etapa

### 1) Board (decisao estrategica)

- Tay: branding, narrativa e posicionamento
- Ogilvy: clareza de mensagem e headline
- Rubin: profundidade criativa e ritmo da narrativa
- Malika: foco visual e simplicidade (apenas direcao)

Output esperado:
- `decision_type`
- `strategic_lenses_used`
- `recommended_action`
- `risks`
- `translation_to_gaby_tone`
- `next_owner`

### 2) CMO (quality gate)

Valida:
- utilidade pratica
- coerencia etica
- fit com audiencia
- risco de tom comercial agressivo

Se aprovado:
- handoff para `@marketing-production`

### 3) Production (voz final)

Traduz tudo para `voice-dna-gaby`:
- linguagem simples
- acolhimento sem julgamento
- convite leve
- bloco de opcao (`se der... se nao...`)

### 4) Designer (execucao visual)

Aplica lens Malika sem perder identidade Gaby:
- hierarquia clara
- menos ruido
- legibilidade acima de estetica

### 5) Distribution (adaptacao por canal)

Adapta para formato e canal sem distorcer:
- mensagem central
- tom da Gaby
- CTA leve

## Guardrails obrigatorios

1. Estrategia pode vir das mentes; tom final sempre da Gaby.
2. Sem promessas milagrosas, sem escassez artificial, sem hard-sell.
3. Se houver conflito entre lente estrategica e voz: Gaby vence.

## Prompt pronto (copiar e usar)

```
@board-orchestrator
Rodar board multi-mente para este tema: {tema}.
Usar lentes: tay-dantas, david-ogilvy, rick-rubin, malika-favre.
Entregar decisao estruturada + translation_to_gaby_tone + next_owner.
Contexto: projeto-yoga, tom acolhedor, sem pressao comercial.
```

## Prompt de fechamento (copy final)

```
@marketing-production
Receber handoff do board/cmo e transformar em copy final na voz da Gaby.
Obrigatorio: acolhedor, humano, sem julgamento, com bloco "se der... se nao...".
```
