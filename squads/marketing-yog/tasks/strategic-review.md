# Task: Strategic Review - marketing-yog
task: strategic-review
responsavel: marketing-yog
responsavel_type: Agent
atomic_layer: strategy
Entrada:
  - dados semanais
  - relatorios de board
Saida:
  - prioridades da semana
Checklist:
  - top 3 prioridades fechadas
  - alinhamento com voz da gaby

**Task ID**: strategic-review
**Agent**: @board-orchestrator + @marketing-cmo + @marketing-metrics
**Version**: 1.0.0

## Purpose

Revisar a semana e definir prioridades estrategicas da proxima janela de conteudo/oferta.

## Workflow

1. Consolidar metricas e resultados.
2. Revisar decisoes abertas do board.
3. Aplicar frameworks de priorizacao.
4. Definir top 3 prioridades e top 3 riscos.
5. Publicar em `docs/logs/YYYY-MM-DD_board-review.md`.

## Success Criteria

- [ ] prioridades aprovadas
- [ ] riscos com mitigacao
- [ ] foco semanal alinhado ao plano editorial
