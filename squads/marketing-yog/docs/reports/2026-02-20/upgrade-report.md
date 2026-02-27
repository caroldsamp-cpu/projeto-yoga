# Upgrade Report - marketing-yog

Date: 2026-02-20
Mode: execute

## Summary

- Squad upgraded to `v1.1.0`.
- Component loading changed from wildcard to explicit active files.
- Legacy OPES/board files preserved but no longer loaded by active squad definition.
- Active docs and data rewritten for projeto-yoga and Gaby voice workflow.
- Posting automation remains disabled.
- API token fields remain optional and not required.

## Before

- `squad.yaml` loaded `agents/*.md`, `tasks/*.md`, `workflows/*.md`, including legacy OPES and board artifacts.
- Active files still mixed with OPES/Jose language.

## After

- `squad.yaml` points only to active marketing-yog files.
- New checklist: `checklists/voice-gate-gaby.md`.
- New operational voice references in production and readme.
- Weekly cycle and data maps aligned to Sadhana/yoga scenario.

## Backups

All replaced files were backed up to `.backup/` with timestamp suffix.

## Next recommended step

Run `*extract-voice-dna marketing-production` using the transcriptions corpus and refresh examples in active agents.
