# Matriz de Agentes, APIs e Dados - Oraculo do Sadhana

**Data:** 2026-02-21

## 1) Decisao de Arquitetura de Pesquisa
Estrategia recomendada em 2 passos:
1. Comecar com dados internos ja disponiveis no repo (zero custo extra).
2. Ativar coleta externa (Apify) somente se houver gap de cobertura.

## 2) Matriz de Agentes AIOS
| Etapa | Objetivo | Agente principal | Saida |
|---|---|---|---|
| Descoberta | mapear temas e linguagem | aios-analyst | matriz de temas + dores |
| Planejamento | priorizar backlog e escopo | aios-po | backlog fechado |
| Execucao | quebrar em stories claras | aios-sm | stories prontas |
| Stack | definir JSON/eventos/pipeline | aios-architect | arquitetura de dados |
| Qualidade | validar tom e seguranca | aios-qa | relatorio de qualidade |

## 3) Fontes de Dados (ordem de uso)
1. Internas: `docs/research`, `docs/analise-gaby`, `docs/stories/EP-08-oraculo-sadhana`.
2. Exportadas manualmente: docs vindos de NotebookLM/Google Docs.
3. Externas publicas: redes sociais, blogs, comunidades (somente publico).

## 4) Apify - Quando usar
Use Apify se:
1. faltar volume de linguagem real para diversificar cartas.
2. faltar cobertura de subtemas da audiencia.
3. precisar de coleta recorrente e estruturada em escala.

Nao usar Apify se:
1. o corpus interno ja cobrir as dores/linguagem principais.
2. o objetivo for apenas fechar MVP de conteudo em 2 semanas.
3. a equipe nao quiser custo e manutencao de scraping agora.

## 5) APIs/Ferramentas por camada
### Camada de pesquisa
1. Parser local de markdown/txt/json.
2. OCR opcional para imagens de referencia.
3. Coleta externa opcional via Apify.

### Camada de geracao e curadoria
1. LLM para gerar rascunhos de carta.
2. Embeddings para deduplicacao semantica.
3. Regras de guardrail para filtrar linguagem inadequada.

### Camada de produto MVP
1. Front web stateless.
2. JSON local de cartas.
3. Tracking anonimo de eventos.

## 6) Decisao de curto prazo (recomendada)
1. Sprint atual: sem Apify, foco em consolidar base e escrever cartas v2.
2. Sprint seguinte: avaliar gap e ligar Apify apenas para complementar linguagem.

## 7) Riscos e mitigacao
1. Risco de tom generico.
Mitigacao: checklist de voz + revisao QA editorial.
2. Risco de repeticao entre cartas.
Mitigacao: embeddings + revisao por cluster tematico.
3. Risco de aproximacao excessiva do "Oraculo do Pao".
Mitigacao: guardrails de originalidade e wording legal consistente.
