# Task: Evaluate Deal - marketing-yog
task: evaluate-deal
responsavel: marketing-yog
responsavel_type: Agent
atomic_layer: strategy
Entrada:
  - proposta de parceria
  - dados de impacto
Saida:
  - decisao go/no-go com condicoes
Checklist:
  - criterios economicos
  - criterios de marca e tom

**Task ID**: evaluate-deal
**Agent**: @board-orchestrator + @marketing-cmo
**Version**: 1.0.0

## Purpose

Avaliar parceria/oportunidade comercial sem comprometer posicionamento e tom de marca.

## Workflow

1. Aplicar matriz valor x risco x esforco.
2. Verificar compatibilidade com `data/voice-dna-gaby.yaml` e guardrails eticos.
3. Definir decisao (`GO`, `GO_COM_CONDICOES`, `NO_GO`).
4. Registrar em `docs/logs/YYYY-MM-DD_board-deal.md`.

## Success Criteria

- [ ] decisao com justificativa
- [ ] condicoes claras (se houver)
- [ ] proximo passo definido
