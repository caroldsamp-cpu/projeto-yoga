# Blueprint Oficial - marketing-yog

Status: Aprovado para planejamento
Data: 2026-02-20
Owner: Projeto Mente Leve (Gaby)

## 1) Decisoes travadas

- Nome do squad: `marketing-yog`
- Publicacao: manual (sem automacao)
- Integracoes externas: fora do escopo inicial (sem tokens/API)
- Prioridade maxima: tom exato da voz da Gaby antes de adaptar pipeline

## 2) Fontes oficiais de voz

Fontes primarias:
- `C:\Users\carol\OneDrive\Yoga Gaby - DRIVE\Aulas antigas\transcricoes`
- `C:\Users\carol\code\PROJETOS\projeto-yoga\docs\analise-gaby`

Regra:
- Nenhum prompt de agente pode definir voz sem referencia explicita a essas fontes.

## 3) Objetivo do squad

Transformar estrategia de conteudo Sadhana em operacao semanal consistente, com qualidade de voz controlada por gates, gerando conteudo pronto para publicacao manual.

## 4) Escopo inicial (v1)

Inclui:
- Planejamento semanal de conteudo
- Producao diaria de copy
- Direcao visual
- Adaptacao por canal
- Analise semanal de metricas
- Feedback loop editorial

Nao inclui:
- Publicacao automatica
- Health check de token
- WhatsApp/API notifier
- Qualquer dependencia de credenciais

## 5) Arquitetura de agentes (v1)

Ativos no `marketing-yog`:
- `marketing-cmo-yog`: coerencia estrategica e filtro de categoria
- `marketing-ideation-ig-yog`: ideacao nativa Instagram no universo Sadhana
- `marketing-production-yog`: copy final em voz Gaby
- `marketing-designer-yog`: direcao visual e formato
- `marketing-distribution-yog`: adaptacao de variacoes por canal
- `marketing-metrics-yog`: leitura semanal e ajustes no mapa de conteudo

Desativados na v1:
- `auto-publish`
- qualquer task de API posting
- qualquer task de renovacao de token

## 6) Pipeline operacional (sem publicacao automatica)

Fluxo semanal:
1. `/weekly-content-plan-yog`
2. `/daily-content-yog` (seg-sex)
3. `review-manual-publicacao` (humano publica)
4. `/metrics-weekly-yog`
5. `content-map` atualizado para semana seguinte

Output obrigatorio por dia:
- Copy final aprovada
- Versao por canal
- Direcao visual aprovada
- Checklist de voz aprovado

## 7) Sprint 0 - Voice Intelligence (gate de entrada)

Objetivo:
- criar o sistema formal de voz antes de alterar o squad.

Entregaveis obrigatorios:
1. `VOICE-BIBLE-GABY-v1.md`
2. `RUBRICA-VOZ-GABY-v1.md`
3. `ANTI-VOCABULARIO-GABY-v1.md`
4. `EXEMPLOS-PASSA-FALHA-v1.md`

Conteudo minimo da Voice Bible:
- Lexico preferencial (palavras, expressoes, mantras)
- Lexico proibido (marketing/coaching/pressao)
- Cadencia (frases curtas, pausas, convite)
- Estrutura narrativa dominante
- Estilo por avatar (Marina, Julia, Camila)
- CTA permitidos vs proibidos

## 8) Quality Gates (obrigatorios)

Gate A - Autenticidade da voz:
- Soa como Gaby real, nao como copywriter generico.

Gate B - Light Copy:
- Sem urgencia artificial, sem manipulacao, sem promessa inflada.

Gate C - Pilares Sadhana:
- Presenca > performance
- Permissao > prescricao
- Processo > resultado
- Acessibilidade > elite
- Humanizacao > transacao

Gate D - Aderencia por avatar:
- Marina: acolhimento sem culpa
- Julia: seguranca para iniciar
- Camila: consistencia sem perfeccionismo

Regra de aprovacao:
- Qualquer hard fail em A/B/C/D reprova a peca.

## 9) Criterio de pronto para implementar o squad

Somente iniciar adaptacao estrutural quando:
1. Voice Bible aprovada
2. Rubrica aprovada
3. 10 pecas piloto avaliadas
4. 10/10 sem hard fail de voz

## 10) Backlog de implementacao apos Sprint 0

Fase 1:
- Criar estrutura `marketing-yog` (agents/tasks/workflows/data/templates)
- Clonar pipeline sem blocos de automacao

Fase 2:
- Injetar gates de voz em `daily-content-yog`
- Adicionar checklist formal por peca

Fase 3:
- Rodar ciclo piloto de 2 semanas
- Revisar metricas + feedback qualitativo

## 11) Riscos e mitigacao

Risco: drift de voz para linguagem marketeira.
Mitigacao: rubrica com hard fail + exemplos de falha.

Risco: excesso de regra travar criacao.
Mitigacao: separar regra obrigatoria de regra recomendada.

Risco: manter heranca B2B do OPES no contexto wellness.
Mitigacao: revisar toda taxonomia, temas e CTA antes de go-live.

## 12) Proximo passo imediato

Executar Sprint 0 de voz e produzir os 4 artefatos obrigatorios antes de qualquer migracao tecnica do squad.

