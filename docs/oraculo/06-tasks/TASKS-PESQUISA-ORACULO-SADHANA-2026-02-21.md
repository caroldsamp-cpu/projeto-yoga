# Tasks - Pesquisa Oraculo do Sadhana

**Data:** 2026-02-21  
**Formato:** backlog operacional por fase  
**Legenda status:** TODO | DOING | DONE | BLOCKED

## Fase 0 - Setup
1. [DONE] Criar estrutura de pastas de fontes em `docs/oraculo/fontes/`.
2. [DONE] Indexar docs base do projeto (PRD + EP-08 + direcao V1).
3. [DONE] Definir scorecard de qualidade textual.
4. [DONE] Definir rubricas de seguranca editorial.
Checklist de qualidade da fase:
1. [DONE] Criticidade editorial documentada.
2. [DONE] Fonte NotebookLM registrada.
3. [DONE] Governanca de agentes definida.

## Fase 1 - Pesquisa profunda
1. [DOING] Extrair padroes de linguagem de fontes internas (research + transcricoes).
Checklist de qualidade da task:
1. [ ] Minimo 3 fontes internas distintas.
2. [ ] Registro de exemplos de linguagem real.
3. [ ] Lista de anti-padroes associada.
2. [DONE] Mapear 60 temas candidatos para o oraculo (taxonomia v2).
Checklist de qualidade da task:
1. [DONE] Taxonomia v2 com 12 pilares publicada.
2. [DONE] Temas sem sobreposicao obvia.
3. [DONE] Criar matriz "tema x dor real x acao pratica" v2 (60 linhas).
Checklist de qualidade da task:
1. [DONE] Cobertura de todos os pilares.
2. [DONE] Acao pratica objetiva por tema.
4. [DONE] Consolidar guia de voz e anti-padroes.
Checklist de qualidade da task:
1. [DONE] Principios de tom documentados.
2. [DONE] Secao "o que evitar" documentada.

## Fase 2 - Modelagem editorial
1. [TODO] Definir schema final da carta v2.
Checklist de qualidade da task:
1. [ ] Campos obrigatorios definidos.
2. [ ] Formato JSON validavel.
2. [TODO] Definir 3 moldes de carta (curta, media, profunda).
Checklist de qualidade da task:
1. [ ] Limite de palavras por molde.
2. [ ] Estrutura consistente entre moldes.
3. [TODO] Definir recursos poeticos opcionais de fechamento (sem obrigatoriedade).
Checklist de qualidade da task:
1. [ ] Recurso nao prescritivo.
2. [ ] Linguagem sem risco de culpabilizacao.
4. [TODO] Definir banco de perguntas de reflexao.
Checklist de qualidade da task:
1. [ ] Perguntas abertas e nao moralistas.
2. [ ] Variedade sem repeticao obvia.

## Fase 3 - Producao de cartas
1. [DONE] Produzir 40 cartas lote A (fundacao).
Checklist de qualidade da task:
1. [DONE] 100% com fechamento coerente (com ou sem pergunta).
2. [DONE] Linguagem contemplativa e concreta.
2. [TODO] Produzir 40 cartas lote B (transicao e impermanencia).
Checklist de qualidade da task:
1. [ ] Distribuicao tematica equilibrada.
2. [ ] Sem duplicidade semantica.
3. [TODO] Produzir 40 cartas lote C (pertencimento e expansao).
Checklist de qualidade da task:
1. [ ] Cobertura de pilares 5 e 6.
2. [ ] Clareza de linguagem mantida.
4. [TODO] Revisao editorial 1 (tom, clareza, originalidade).
Checklist de qualidade da task:
1. [ ] Aplicar checklist editorial completo.
2. [ ] Ajustar cartas reprovadas.
5. [TODO] Revisao editorial 2 (seguranca e neutralidade de risco).
Checklist de qualidade da task:
1. [ ] Sem promessas de cura/diagnostico.
2. [ ] Sem tom prescritivo.
6. [TODO] Exportar `cartas-v2-rascunho-120.json`.
Checklist de qualidade da task:
1. [ ] JSON sem erro de estrutura.
2. [ ] IDs unicos por carta.

## Fase 4 - Piloto e decisao
1. [TODO] Definir eventos de tracking anonimo.
Checklist de qualidade da task:
1. [ ] Eventos minimos: reveal/share/retorno.
2. [ ] Sem coleta de dado sensivel.
2. [TODO] Rodar piloto 7 dias com grupo pequeno.
Checklist de qualidade da task:
1. [ ] Grupo de 20-50 usuarias definido.
2. [ ] Janela de observacao registrada.
3. [TODO] Consolidar metricas (reveal/share/retorno).
Checklist de qualidade da task:
1. [ ] Base unica consolidada.
2. [ ] Leitura por coorte quando possivel.
4. [TODO] Reuniao de decisao go/no-go da fase 2 de produto.
Checklist de qualidade da task:
1. [ ] Decisao documentada com justificativa.
2. [ ] Proximas acoes com dono e prazo.

## Responsaveis por skill AIOS
1. `aios-analyst`: pesquisa, sintese, matriz de temas.
2. `aios-po`: backlog, criterios de aceite, priorizacao.
3. `aios-sm`: quebrar em stories executaveis por sprint.
4. `aios-architect`: definicao de stack, eventos e estrutura JSON.
5. `aios-qa`: gate de qualidade editorial e risco de tom.

## Criterios de aceite globais
1. 120 cartas sem repeticao semantica obvia.
2. 100% com fechamento coerente.
3. 0 ocorrencias de linguagem culpabilizante.
4. 0 ocorrencias de copia textual de referencia externa.
5. JSON validado e pronto para integrar no MVP web.
