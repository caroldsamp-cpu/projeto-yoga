# Workflow: Weekly Marketing Cycle

**Workflow ID**: weekly-marketing-cycle
**Version**: 1.1.0
**Cadence**: semanal

---

## Overview

Ciclo semanal de planejamento, execucao e analise para o marketing do projeto-yoga.

---

## Fase 1 - Planejamento

1. Revisar resultados da semana anterior.
2. Rodar advisory estrategico (Hormozi/Godin/Koe/Thiel) via `data/strategic-minds.yaml`.
3. Rodar `weekly-content-plan`.
4. Aprovar plano semanal com a Gaby.

## Fase 2 - Execucao diaria

1. Rodar `daily-content` todos os dias planejados.
2. Revisao humana final.
3. Publicacao manual.

## Fase 3 - Analise e ajuste

1. Rodar `metrics-weekly`.
2. Atualizar `data/content-map.yaml`.
3. Revisar ajustes com `@marketing-cmo`.

## Fase 4 - Calibracao de Voz

1. Rodar `voice-calibration-weekly`.
2. Consolidar scorecards da semana.
3. Definir foco de linguagem para a semana seguinte.

---

## Calendario sugerido

| Dia | Pilar |
|-----|-------|
| Segunda | Presenca e respiracao |
| Terca | Mobilidade e postura |
| Quarta | Rotina real e consistencia |
| Quinta | Pratica guiada |
| Sexta | Reflexao e comunidade |
| Sabado | Bastidores |
| Domingo | Fechamento e intencao da semana |

---

## Output semanal

- posts em `outputs/hubs/marketing/`
- relatorio em `docs/logs/YYYY-MM-DD_marketing-metrics.md`
- queue atualizada em `data/content-map.yaml`
