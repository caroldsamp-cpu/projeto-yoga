# Task: Metrics Weekly - marketing-yog
task: metrics-weekly
responsavel: marketing-yog
responsavel_type: Agent
atomic_layer: content-ops
Entrada:
  - briefing semanal
  - content-map
Saida:
  - output pronto para revisao humana
Checklist:
  - coerencia com voz da gaby
  - sem automacao de publicacao

**Task ID**: metrics-weekly
**Agent**: @marketing-metrics
**Version**: 1.0.0

---

## Purpose

Analise semanal de performance do conteudo para orientar ajustes no Content Map e no plano da semana seguinte.

---

## Inputs

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ig_handle` | string | No | Handle Instagram |
| `other_channel_data` | string | No | Dados manuais de outros canais |

---

## Workflow

### Step 1: Coletar Dados

1. Coletar dados de Instagram (ferramenta ou coleta manual)
2. Coletar dados de canais secundarios de forma manual
3. Consolidar em tabela semanal

### Step 2: Analise de Padroes

1. Top e bottom performers
2. Comparar temas, formatos e horarios
3. Identificar padroes de salvamento, compartilhamento e resposta

### Step 3: KPI Review

KPIs sugeridos:
- Save Rate
- Shares
- DMs por semana
- Qualidade media (score interno de conteudo)

### Step 4: Recomendar Ajustes

1. Propor 3 ajustes acionaveis
2. Atualizar `data/content-map.yaml`
3. Submeter revisao ao CMO

### Step 5: Relatorio

1. Salvar em `docs/logs/YYYY-MM-DD_marketing-metrics.md`
2. Registrar decisoes para proxima semana

---

## Success Criteria

- [ ] Dados da semana consolidados
- [ ] KPIs calculados
- [ ] 3 ajustes propostos
- [ ] Content Map atualizado
- [ ] CMO revisou ajustes
- [ ] Relatorio salvo

---

*Task v1.0.0 - marketing-yog (sem integracao externa checks)*


