# Voice DNA Extraction Report - Gaby

Date: 2026-02-20
Command: `*extract-voice-dna gaby --mode=deep --refresh`
Executor: `@oalanicolas` (via squad-creator protocol)

## Sources used

- `C:/Users/carol/OneDrive/Yoga Gaby - DRIVE/Aulas antigas/transcricoes`
- `docs/analise-gaby/04-Transcricoes-Aulas-Gaby-ANALISE-COMPLETA.md`
- `docs/analise-gaby/05-INSIGHTS-FINAIS-VALIDACAO-58-TRANSCRICOES.md`

## Output generated

- `data/voice-dna-gaby.yaml`

## Refresh evidence (corpus scan)

- files analyzed: 38 transcriptions
- lexical signals:
  - `respira`: 147
  - `observa`: 61
  - `sente`: 46
  - `devagar`: 12

## Applied integration

- `agents/marketing-production.md` now consumes `data/voice-dna-gaby.yaml`
- `checklists/voice-gate-gaby.md` now validates lexical and structural voice markers
- `squad.yaml` and `config.yaml` now include voice DNA as active component

## Notes

- Publishing automation remains disabled.
- API tokens remain optional and unfilled.
