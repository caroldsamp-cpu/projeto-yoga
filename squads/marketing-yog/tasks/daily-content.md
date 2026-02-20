# Task: Daily Content - marketing-yog
task: daily-content
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

**Task ID**: daily-content
**Agent**: @marketing-ideation-ig -> @marketing-cmo -> @marketing-production -> @marketing-designer -> @marketing-distribution
**Version**: 1.0.0

---

## Purpose

Gerar conteudo diario para Instagram (e variacao opcional por canal), pronto para publicacao manual.

---

## Inputs

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tema` | string | No | Tema especifico do dia |
| `angulo` | string | No | Angulo preferido |
| `contexto` | string | No | Contexto do dia para ideacao |
| `auto` | boolean | No | Se true, auto-seleciona angulo |

---

## Workflow

### Step 1: Carregar Contexto

1. Ler `data/content-map.yaml`
2. Ler `data/platform-specs.yaml`
3. Verificar tema e queue do dia

### Step 2: Ideacao (@marketing-ideation-ig)

1. Gerar Big Idea + 3 angulos
2. Selecionar angulo (auto ou interativo)

### Step 2.5: QA Gate - CMO Validation (@marketing-cmo)

Gate obrigatorio:
- SVA clara
- Relevancia e utilidade
- Permission check

Resultado:
- Aprovado -> segue
- Reescrever -> volta para ideacao (max 2 loops)
- Vetado -> encerrar e registrar motivo

### Step 3: Producao (@marketing-production)

1. Escrever copy na voz da Gaby
2. Aplicar checklist de voz e light copy
3. Reescrever se falhar

### Step 3.5: Direcao Visual (@marketing-designer)

1. Definir formato (carrossel, imagem unica, texto puro)
2. Gerar visual brief por canal
3. Validar legibilidade e coerencia com brand guide

### Step 4: Distribuicao (@marketing-distribution)

1. Adaptar versoes por canal
2. Evitar copy-paste
3. Definir CTA de convite (nao pressao)

### Step 5: Salvar Output

1. Formatar via `templates/daily-content-output.md`
2. Avaliar voz via `templates/voice-qa-scorecard.md`
3. Salvar em `outputs/hubs/marketing/YYYY-MM-DD.md`
4. Se houver visual, salvar arte/brief associado

### Step 6: Publicacao Manual (Humano)

1. Revisar output final
2. Publicar manualmente nos canais definidos
3. Registrar horario e observacoes no proprio output

---

## Success Criteria

- [ ] CMO aprovou Big Idea
- [ ] Conteudo final alinhado a voz da Gaby
- [ ] Conteudo aprovado em checklist light copy
- [ ] Versoes por canal sem copy-paste
- [ ] Output salvo em `outputs/hubs/marketing/`
- [ ] Publicacao manual registrada

---

*Task v1.0.0 - marketing-yog (manual publishing only)*


