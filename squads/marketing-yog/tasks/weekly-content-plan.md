# Task: Weekly Content Plan - marketing-yog
task: weekly-content-plan
responsavel: marketing-yog
responsavel_type: Agent
atomic_layer: content-ops
Entrada:
  - briefing semanal
  - content-map
Saida:
  - output pronto para revisao humana
Checklist:
  - coerencia com voz da gaby
  - sem automacao de publicacao

**Task ID**: weekly-content-plan
**Agent**: @marketing-ideation-ig
**Version**: 1.1.0

---

## Purpose

Planejar 7 dias de conteudo em bloco para manter consistencia editorial semanal.

---

## Inputs

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `semana` | date | No | Data de inicio da semana |
| `foco` | string | No | Tema prioritario da semana |

---

## Workflow

1. Revisar semana anterior em `outputs/hubs/marketing/`.
2. Consultar calendario em `data/platform-specs.yaml`.
3. Ler benchmark semanal em `docs/research/estrategia-comum-amanda-camila.md`.
4. Ler prioridades de nicho em `docs/research/camila-zen/ranking-top-reels.md`.
5. Ler padroes de estrategia/conversao em `docs/research/amanda-lourenco/ranking-top-reels.md`.
6. Aplicar lentes estrategicas de `data/strategic-minds.yaml` para priorizar ideias.
7. Selecionar ideias do `data/content-map.yaml`.
8. Montar plano por dia com tema, angulo e prova.
9. Submeter para aprovacao da Gaby.
10. Atualizar queue em `data/content-map.yaml`.

---

## Output

- Queue semanal atualizada no `data/content-map.yaml`

---

## Success Criteria

- [ ] 7 ideias com prova pratica
- [ ] Temas equilibrados na semana
- [ ] Referencias de `docs/research` aplicadas (Camila = nicho, Amanda = estrategia)
- [ ] Aprovacao humana registrada
- [ ] Queue atualizada

---

*Task v1.1.0 - Weekly planning for projeto-yoga*

