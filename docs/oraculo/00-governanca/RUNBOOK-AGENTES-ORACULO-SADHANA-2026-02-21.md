# Runbook de Agentes - Oraculo do Sadhana

**Data:** 2026-02-21  
**Objetivo:** definir ordem de execucao, dono por etapa e criterio de handoff

## Ordem oficial de inicio
1. `aios-analyst` (comeca primeiro)
2. `aios-po`
3. `aios-sm`
4. `aios-architect`
5. `aios-qa`

## Etapa 1 - Descoberta e sintese
**Agente:** `aios-analyst`  
**Entrada:** resumo do NotebookLM + fontes em `docs/research` + PRD/story EP-08  
**Saidas:**
1. `docs/oraculo/03-editorial/guia-de-voz-oraculo-sadhana.md`
2. `docs/oraculo/03-editorial/taxonomia-temas-oraculo-v2.md`
3. `docs/oraculo/03-editorial/banco-sementes-reflexao-v1.md`
4. `docs/oraculo/02-pesquisa-profunda/matriz-tema-dor-acao-v2.md`

**Criterio de handoff para PO:**
1. temas priorizados por impacto e recorrencia
2. anti-padroes de linguagem definidos
3. lacunas de pesquisa explicitadas

## Etapa 2 - Priorizacao e backlog
**Agente:** `aios-po`  
**Saidas:**
1. backlog priorizado da sprint
2. criterio de aceite por story

## Etapa 3 - Story slicing
**Agente:** `aios-sm`  
**Saidas:**
1. stories quebradas em tarefas pequenas
2. definicao de DoD de cada story

## Etapa 4 - Arquitetura de dados e fluxo
**Agente:** `aios-architect`  
**Saidas:**
1. schema final de carta v2
2. fluxo de geracao e deduplicacao
3. eventos de tracking anonimo

## Etapa 5 - Quality gate
**Agente:** `aios-qa`  
**Saidas:**
1. checklist final de qualidade editorial
2. parecer de risco (tom, repeticao, seguranca)

## Regra de governanca
Nenhuma carta vai para base final sem passar nos checklists de execucao e editorial.
