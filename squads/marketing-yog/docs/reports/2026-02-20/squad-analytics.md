# Squad Analytics - marketing-yog

Date: 2026-02-20
Command: `*squad-analytics marketing-yog`

## Raw Analyzer Output (folder-level)

- agents: 6
- tasks: 4
- workflows: 5
- templates: 4
- checklists: 2
- scripts: 4
- data: 6

Notes:
- This includes files that exist in folders, even if not active in `squad.yaml`.
- Suggested action from analyzer (`*extend-squad --add task`) is not fully contextual for this squad because the script does not map our explicit active design.

## Active Runtime View (manifest-level)

From `squad.yaml` active components:

- agents: 6
- tasks: 4
- workflows: 3
- templates: 2
- checklists: 1

### Non-active files still present in active directories

- workflows:
  - `workflows/board-consultation.md`
  - `workflows/story-sequence-pipeline.md`
- templates:
  - `templates/board-session-report.md`
  - `templates/story-sequence-output.md`
- checklists:
  - `checklists/board-decision-quality.md`

Recommendation:
- Keep as legacy reference OR move to `archive/` to reduce operational noise.

## Quality Snapshot

- `*validate-squad marketing-yog`: PASS
- `valid=true`, `errors=0`, `warnings=0`

## Interpretation

The squad is healthy and production-ready for the current scope (manual publishing + Gaby voice calibration). Remaining work is optimization, not structural correction.

