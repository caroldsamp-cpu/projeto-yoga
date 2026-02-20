# Workflow: Voice Calibration Weekly

**Workflow ID**: voice-calibration-weekly
**Version**: 1.0.0
**Trigger**: toda semana (dom ou seg)
**Cadence**: semanal

---

## Overview

Ritual semanal para calibrar e manter o tom de voz da Gaby no conteudo publicado.

---

## Flow

1. Coletar 5 a 10 pecas da semana em `outputs/hubs/marketing/`.
2. Avaliar cada peca com `templates/voice-qa-scorecard.md`.
3. Consolidar media e padroes em relatorio unico.
4. Identificar desvios do `data/voice-dna-gaby.yaml`.
5. Definir 3 ajustes obrigatorios da semana seguinte.
6. Atualizar `data/voice-dna-gaby.yaml` se houver aprendizado recorrente.
7. Validar ajustes com `@marketing-cmo`.

---

## Gates

- Gate 1: score medio de voz >= 4.2/5
- Gate 2: zero ocorrencia de `never_use`
- Gate 3: cada peca deve conter convite leve e opcao sem pressao

---

## Inputs

- `outputs/hubs/marketing/*.md` (semana corrente)
- `templates/voice-qa-scorecard.md`
- `data/voice-dna-gaby.yaml`
- `checklists/voice-gate-gaby.md`

---

## Outputs

- `docs/logs/YYYY-MM-DD_voice-calibration.md`
- ajustes registrados no `data/voice-dna-gaby.yaml` (quando aplicavel)
- lista de foco da semana para Production/CMO

---

## Exemplo Rapido

### Exemplo 1 - Diagnostico

- 8 pecas avaliadas
- score medio: 3.9/5
- desvio principal: CTA com pressao em 2 pecas

Acao:
1. remover linguagem de urgencia
2. reforcar starter "no seu tempo"
3. obrigar bloco de opcao "se der... se nao..."

### Exemplo 2 - Semana saudavel

- 7 pecas avaliadas
- score medio: 4.5/5
- nenhum termo de `never_use`

Acao:
1. manter padrao atual
2. testar 1 nova variacao de abertura
3. registrar frase assinatura que performou melhor

