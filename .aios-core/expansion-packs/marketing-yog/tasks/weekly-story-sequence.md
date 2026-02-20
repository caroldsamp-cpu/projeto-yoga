# Task: Weekly Story Sequence - marketing-yog

**Task ID**: weekly-story-sequence
**Agent**: @marketing-ideation-ig + @marketing-cmo + @marketing-production + @marketing-designer
**Version**: 1.0.0

---

## Purpose

Gerar 7 sequencias de stories para a semana, com scripts e direcao visual, prontas para revisao e publicacao manual.

---

## Inputs

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `semana` | date | No | Segunda-feira de referencia |
| `foco` | string | No | Ex: perpetuo, aquecimento, lancamento |
| `dia` | string | No | Se informado, gera apenas 1 dia |

---

## Workflow

1. CMO define foco e prioridades da semana
2. Ideation gera 7 sequencias (uma por dia)
3. CMO valida cada sequencia com score minimo
4. Production escreve os blocos de copy
5. Designer define composicao visual
6. Compilar output semanal em pasta da semana
7. Revisao humana final e publicacao manual

---

## Output

- `outputs/hubs/marketing/YYYY-WNN-story-sequence/plano.md`
- `outputs/hubs/marketing/YYYY-WNN-story-sequence/segunda.md` ... `domingo.md`

---

## Success Criteria

- [ ] 7 sequencias completas
- [ ] Score de qualidade aprovado
- [ ] Copy alinhada a voz da Gaby
- [ ] Direcao visual definida
- [ ] Revisao humana concluida

---

*Task v1.0.0 - marketing-yog (manual review only)*

