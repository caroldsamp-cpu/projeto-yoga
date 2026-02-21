# Task: Quick Post - marketing-yog
task: quick-post
responsavel: marketing-yog
responsavel_type: Agent
atomic_layer: content-ops
Entrada:
  - insight direto da gaby
  - contexto do dia
Saida:
  - post pronto para revisao humana
Checklist:
  - coerencia com voz da gaby
  - sem automacao de publicacao

**Task ID**: quick-post
**Agent**: @marketing-cmo -> @marketing-production -> @marketing-designer -> @marketing-distribution
**Version**: 1.0.0

---

## Purpose

Transformar um insight direto da Gaby em post publicavel no mesmo dia, com qualidade e tom consistentes.

---

## Inputs

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `insight` | string | **Yes** | Insight principal do post |
| `angulo` | string | No | Angulo sugerido (confessional/pratico/educacional) |
| `canal` | string | No | `instagram`, `linkedin` ou `ambos` |

---

## Workflow

1. `@marketing-cmo` valida utilidade, etica e foco editorial.
2. `@marketing-production` escreve copy final na voz da Gaby.
3. `@marketing-designer` define formato e direcao visual.
4. `@marketing-distribution` adapta por canal.
5. Salvar output em `outputs/hubs/marketing/YYYY-MM-DD-quick-post.md`.
6. Revisao humana e publicacao manual.

---

## Success Criteria

- [ ] Insight validado pelo CMO
- [ ] Copy final com voz da Gaby
- [ ] Direcao visual clara e legivel
- [ ] Adaptacao por canal concluida
- [ ] Publicacao manual registrada

---

*Task v1.0.0 - quick turnaround, manual publishing only*
