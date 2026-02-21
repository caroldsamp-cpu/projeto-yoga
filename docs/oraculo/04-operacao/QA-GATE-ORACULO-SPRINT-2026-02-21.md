# QA Gate da Sprint - Oraculo do Sadhana

**Data:** 2026-02-21  
**Agente:** `aios-qa`  
**Escopo:** conteudo editorial e dados da sprint atual

## Gate status atual
**Decisao:** `AMBER` (seguir com ressalvas)

## Principais riscos
1. Risco de generalidade no texto das cartas.
2. Risco de repeticao semantica em lotes grandes.
3. Risco de tom prescritivo em frases de fechamento.

## Controles obrigatorios
1. Aplicar checklist editorial em 100% das cartas.
2. Rodar revisao de duplicidade por lote antes de exportar JSON.
3. Exigir fechamento coerente em todas as cartas (pergunta opcional).

## Criticidade e acao
1. Criticidade alta: copia textual de referencia externa.
Acao: bloqueio imediato da carta.
2. Criticidade alta: promessa de cura/diagnostico.
Acao: reescrita obrigatoria antes de aprovar.
3. Criticidade media: linguagem vaga/generica.
Acao: reescrita com situacao concreta.

## Evidencias minimas para mudar gate para GREEN
1. 40 cartas do lote A revisadas e aprovadas.
2. 0 incidentes de copia textual.
3. relatorio de deduplicacao anexado.
4. checklist de qualidade preenchido por carta.
