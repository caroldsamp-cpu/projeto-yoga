# Voice QA Scorecard | {{DATE}}

**Content ID:** {{CONTENT_ID}}
**Canal:** {{CHANNEL}}
**Reviewer:** {{REVIEWER}}
**Fonte:** `data/voice-dna-gaby.yaml`

---

## Texto Avaliado

{{CONTENT_TEXT}}

---

## Score por Dimensao (0-5)

| Dimensao | Score | Evidencia curta |
|----------|-------|-----------------|
| Tom acolhedor e firme | {{SCORE_TONE}} | {{EVIDENCE_TONE}} |
| Clareza e simplicidade | {{SCORE_CLARITY}} | {{EVIDENCE_CLARITY}} |
| Ritmo/respiracao do texto | {{SCORE_RHYTHM}} | {{EVIDENCE_RHYTHM}} |
| Convite sem pressao | {{SCORE_ETHICS}} | {{EVIDENCE_ETHICS}} |
| Fidelidade lexical (always_use/never_use) | {{SCORE_LEXICON}} | {{EVIDENCE_LEXICON}} |

**Voice Score Final:** {{VOICE_SCORE_FINAL}}/5

Formula sugerida:
- `VOICE_SCORE_FINAL = media dos 5 scores`

---

## Checklist de Gate

- [ ] Usou pelo menos 3 termos de `always_use`
- [ ] Nao usou termos de `never_use`
- [ ] Possui estrutura de opcao ("se der... se nao...")
- [ ] Sem promessa exagerada
- [ ] Fechamento com convite leve

---

## Decisao

**Status:** {{GO|AJUSTAR|BLOQUEAR}}

**Motivo principal:** {{MAIN_REASON}}

**Ajustes obrigatorios (se houver):**
1. {{FIX_1}}
2. {{FIX_2}}
3. {{FIX_3}}

---

*Template criado por marketing-yog v1.1.0*
