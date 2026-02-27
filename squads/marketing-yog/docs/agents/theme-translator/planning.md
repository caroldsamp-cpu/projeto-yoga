# Planejamento de Agente - marketing-theme-translator-gaby

## 1. Resumo
- Objetivo: transformar `tema + jeito de falar` de reels benchmark (Camila) em conteudo autoral para `NamaSer` e metodo `Construir seu Sadhana`.
- Status: planejamento.
- Squad: `marketing-yog`.

## 2. Problema que resolve
- Hoje temos repertorio de benchmark, mas falta um processo consistente para:
- extrair padroes que funcionam,
- adaptar para nossa marca sem plagio,
- gerar roteiros prontos para producao.

## 3. Objetivo do agente
- Extrair principios de comunicacao de reels de alta performance.
- Traduzir para contexto Sadhana/NamaSer.
- Entregar roteiro final em voz Gaby com risco de plagio controlado.

## 4. Escopo
- Dentro do escopo:
- analise de transcricao e metadados de performance,
- classificacao de tema,
- proposta de roteiro (hook, reframe, pratica, CTA),
- avaliacao de originalidade.
- Fora do escopo:
- publicacao automatica,
- criacao de pecas visuais finais,
- aprovacao editorial final.

## 5. Entradas
- Reel/transcricao de origem.
- Metadados: views, likes, comments, timestamp.
- Pilar editorial da semana.
- Objetivo do conteudo (alcance, comunidade, conversao leve).

## 6. Saidas (contrato)
- `tema_origem_camila`
- `como_fala_camila` (estrutura, ritmo, recursos)
- `aplicacao_sadhana`
- `roteiro_gaby` (hook, reframe, pratica, CTA)
- `cta_namaser`
- `riscos_plagio`
- `score_originalidade` (0-100)
- `fonte_reel`

## 7. Guardrails anti-plagio
- Proibido copiar frases, blocos ou sequencia textual do original.
- Obrigatorio incluir elementos proprietarios da marca.
- Regra de validacao: "soa Gaby/NamaSer, nao Camila".
- Se `score_originalidade < 80`, roteiro retorna para revisao.

## 8. Logica de priorizacao da base
- Trabalhar primeiro com reels de maior sucesso.
- Score recomendado:
- `score_final = 0.45*reach_norm + 0.35*engagement_norm + 0.20*efficiency_norm`
- Selecao inicial: Top 20 reels validos.

## 9. Fluxo no squad
- `@marketing-theme-translator-gaby` cria proposta.
- `@marketing-cmo` valida aderencia estrategica.
- `@marketing-production` finaliza copy em voz Gaby.

## 10. Criterios de aceite (MVP)
- 20 reels priorizados e classificados por tema.
- 20 cards de ideias gerados no contrato definido.
- 3 roteiros finais aprovados nos gates:
- `voice-gate-gaby`
- `reels-data-driven-gate`
- Zero trecho textual copiado do benchmark.

## 11. Riscos e mitigacao
- Risco: ficar parecido demais com benchmark.
- Mitigacao: gate de originalidade + revisao CMO.
- Risco: excesso de tema "generico".
- Mitigacao: obrigar aplicacao explicita ao metodo Sadhana.

## 12. Metricas de sucesso
- % de roteiros aprovados no primeiro ciclo.
- Tempo medio de ideacao ate roteiro final.
- Salvamentos/comentarios dos posts derivados do banco.
- Reuso semanal de cards do banco.

## 13. Proximos passos (apos aprovacao)
1. Validar este planejamento.
2. Definir nome final do agente.
3. Especificar arquivo do agente em `squads/marketing-yog/agents/`.
4. Criar checklist de originalidade.
5. Rodar piloto com Top 5 reels.
