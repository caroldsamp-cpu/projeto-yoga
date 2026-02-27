# Minds Handoff Upgrade Report

Date: 2026-02-20
Command: `*upgrade-squad marketing-yog --focus=agents` (minds integration)

## Objective

Reintroduce strategic minds (Hormozi + others) without losing Gaby voice.

## Implemented

1. Added strategic minds source:
   - `data/strategic-minds.yaml`

2. Integrated minds into strategic agents:
   - `agents/marketing-cmo.md`
   - `agents/marketing-metrics.md`
   - `tasks/weekly-content-plan.md`
   - `workflows/weekly-marketing-cycle.md`

3. Enforced language DNA handoff:
   - `agents/marketing-production.md`
   - rule: strategy may come from minds, final copy must be Gaby voice

4. Registered in squad config:
   - `config.yaml` -> `data/strategic-minds.yaml`

## Safety Guarantees

- No automated publishing introduced.
- No API tokens required.
- If strategic lens conflicts with voice, Gaby voice wins.

## Validation

- `*validate-squad marketing-yog`
- result: `valid=true`, `errors=0`, `warnings=0`

