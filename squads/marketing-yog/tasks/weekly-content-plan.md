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
3. Aplicar lentes estrategicas de `data/strategic-minds.yaml` para priorizar ideias.
4. Selecionar ideias do `data/content-map.yaml`.
5. Montar plano por dia com tema, angulo e prova.
6. Submeter para aprovacao da Gaby.
7. Atualizar queue em `data/content-map.yaml`.

---

## Output

- Queue semanal atualizada no `data/content-map.yaml`

---

## Success Criteria

- [ ] 7 ideias com prova pratica
- [ ] Temas equilibrados na semana
- [ ] Aprovacao humana registrada
- [ ] Queue atualizada

---

*Task v1.1.0 - Weekly planning for projeto-yoga*

