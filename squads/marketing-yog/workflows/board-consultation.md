# Workflow: Board Consultation

**Workflow ID**: board-consultation
**Version**: 1.0.0
**Trigger**: `/consult-board`, `/strategic-review`, `/evaluate-deal`
**Cadence**: sob demanda + semanal

## Overview

Workflow de advisory estrategico com mentes de referencia e handoff obrigatorio para voz da Gaby.

## Flow

1. Receber questao e classificar tipo.
2. Rodar `consult-board`.
3. Se necessario, rodar `evaluate-deal`.
4. Fechar com `strategic-review` semanal.
5. Handoff para CMO/Production.

## Gates

- Gate decisao: acao concreta definida.
- Gate etica: sem contradizer guardrails de marca.
- Gate voz: estrategia traduzida para tom Gaby antes da execucao.

## Outputs

- `docs/logs/YYYY-MM-DD_board-session.md`
- `docs/logs/YYYY-MM-DD_board-review.md`
- `docs/logs/YYYY-MM-DD_board-deal.md`
