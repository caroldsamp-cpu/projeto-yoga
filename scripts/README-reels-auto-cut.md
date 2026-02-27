# Reels Auto Cut (MVP v2)

Script local para gerar cortes de Reels em 9:16 a partir de `video + transcript`.

## Arquivos

- Script: `scripts/reels-auto-cut.js`
- Comando npm: `reels:auto-cut`
- Saida padrao: `outputs/reels-auto/`

## O que faz

1. Le transcript e quebra em blocos.
2. Pontua blocos por heuristica de copy/voz.
3. Estima timestamps no video via `ffprobe`.
4. Gera Reels em 9:16 com crop central.
5. Opcional: queima legenda (`--srt`) e/ou headline.

## Pre requisitos

- `ffmpeg` no PATH
- `ffprobe` no PATH
- Node.js

## Uso rapido

### 1) Dry-run (sugere cortes, nao renderiza mp4)

```bash
npm run reels:auto-cut -- --video "C:\\caminho\\video.MOV" --transcript "C:\\caminho\\video.txt" --out "outputs\\reels-auto-test" --count 5 --min 22 --max 38 --must-include "sadhana" --min-tail-seconds 4 --dry-run
```

### 2) Render real sem texto no topo

```bash
npm run reels:auto-cut -- --video "C:\\caminho\\video.MOV" --transcript "C:\\caminho\\video.txt" --out "outputs\\reels-auto-test" --count 5 --min 22 --max 38 --no-text
```

### 3) Render real com legenda SRT queimando no video

```bash
npm run reels:auto-cut -- --video "C:\\caminho\\video.MOV" --transcript "C:\\caminho\\video.txt" --srt "C:\\caminho\\captions.srt" --out "outputs\\reels-auto-test" --count 4 --min 24 --max 42
```

## Parametros

- `--video`: caminho do video de entrada
- `--transcript`: caminho do transcript txt
- `--srt`: legenda `.srt` para burn-in (opcional)
- `--out`: pasta de saida
- `--count`: numero maximo de cortes
- `--min`: duracao minima por corte (s)
- `--max`: duracao maxima por corte (s)
- `--must-include`: termos obrigatorios (csv), ex.: `"sadhana,presenca"`
- `--min-tail-seconds`: adiciona cauda minima ao fim do corte (evita corte seco)
- `--no-text`: remove headline automatica do topo
- `--dry-run`: nao gera mp4, apenas `cuts-manifest.json`

## Saida

- `cuts-manifest.json`: lista de cortes sugeridos, scores, trecho e comando ffmpeg
- `reel_01.mp4`, `reel_02.mp4`, ... (quando sem `--dry-run`)

## Limitacoes atuais

- Selecao de cortes ainda e heuristica (nao semantica profunda).
- Crop ainda e central (sem face-tracking).
- Headline automatica precisa curadoria.
