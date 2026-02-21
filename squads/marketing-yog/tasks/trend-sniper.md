# Task: Trend Sniper - marketing-yog
task: trend-sniper
responsavel: marketing-yog
responsavel_type: Agent
atomic_layer: strategy
Entrada:
  - tendencia observada manualmente
  - contexto da comunidade
Saida:
  - brief de oportunidade com recomendacao
Checklist:
  - aderencia ao posicionamento sadhana
  - handoff para tom da gaby

**Task ID**: trend-sniper
**Agent**: @marketing-ideation-ig + @marketing-cmo
**Version**: 1.0.0

---

## Purpose

Avaliar tendencias relevantes e decidir se vale converter em conteudo para o `marketing-yog`, sem oportunismo e sem perder identidade.

---

## Inputs

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `trend` | string | **Yes** | Tendencia, assunto ou noticia |
| `source` | string | No | Origem da tendencia |
| `timing` | string | No | Janela estimada de relevancia |

---

## Workflow

1. `@marketing-ideation-ig` propõe 2-3 angulos editoriais.
2. `@marketing-cmo` aplica filtro:
   - relevancia para audiencia real
   - alinhamento com valores Sadhana
   - potencial de utilidade pratica
3. Se aprovado, gerar brief com:
   - `insight_estrategico`
   - `implicacao_editorial`
   - `traducao_para_tom_gaby`
4. Entregar handoff para `@marketing-production`.

---

## Success Criteria

- [ ] tendencia avaliada com criterio explicito
- [ ] recomendacao clara (usar agora / agendar / descartar)
- [ ] handoff para tom da Gaby incluido
- [ ] sem linguagem de urgencia artificial

---

*Task v1.0.0 - trend analysis com curadoria humana*
