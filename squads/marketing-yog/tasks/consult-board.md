# Task: Consult Board - marketing-yog
task: consult-board
responsavel: marketing-yog
responsavel_type: Agent
atomic_layer: strategy
Entrada:
  - pergunta estrategica
  - contexto atual
Saida:
  - decisao estruturada com proximo passo
Checklist:
  - checklist do board preenchido
  - handoff para tom da gaby

**Task ID**: consult-board
**Agent**: @board-orchestrator
**Version**: 1.0.0

## Purpose

Submeter uma questao estrategica ao advisory board interno e obter decisao com plano acionavel.

## Inputs

- `question`
- `type` (`strategy|content|offer|partnership`)
- `context`

## Workflow

1. Ler `data/strategic-minds.yaml` e `data/decision-frameworks.yaml`.
2. Rodar analise por lentes relevantes.
3. Consolidar decisao e riscos.
4. Traduzir para linguagem operacional do squad.
5. Registrar relatorio em `docs/logs/YYYY-MM-DD_board-session.md`.

## Success Criteria

- [ ] decisao clara
- [ ] riscos listados
- [ ] proximo responsavel definido
- [ ] handoff para tom da Gaby descrito
