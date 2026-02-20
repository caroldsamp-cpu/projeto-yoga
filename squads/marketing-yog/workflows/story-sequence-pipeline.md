# Workflow: Story Sequence Pipeline

**Workflow ID**: story-sequence-pipeline
**Version**: 1.0.0
**Trigger**: `/weekly-story-sequence`
**Cadence**: semanal

## Overview

Pipeline para gerar sequencias de stories da semana com estrategia + voz da Gaby + direcao visual.

## Flow

1. Ideacao de 7 sequencias (uma por dia).
2. Gate CMO com lentes estrategicas.
3. Producao em voz da Gaby.
4. Direcao visual para stories.
5. Consolidar em template de story output.
6. Revisao humana e publicacao manual.

## Restricoes

- sem automacao de publicacao
- sem token/API obrigatorio

## Output

- `outputs/hubs/marketing/YYYY-WNN-story-sequence/plano.md`
- `outputs/hubs/marketing/YYYY-WNN-story-sequence/{dia}.md`
