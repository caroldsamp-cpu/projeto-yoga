# Task: Daily Content LIVE â€” OPES Big Brother Mode

**Task ID**: daily-content-live
**Agent**: @marketing-ideation â†’ @marketing-cmo â†’ @marketing-production â†’ @marketing-designer â†’ @marketing-distribution â†’ @auto-publish
**Version**: 1.0.0

---

## Purpose

Executar o pipeline `daily-content` com emissÃ£o de eventos em tempo real para o **OPES Big Brother** â€” a visualizaÃ§Ã£o espacial dos agentes trabalhando.

Antes de iniciar, abre `outputs/hubs/marketing/opes-big-brother.html` no browser e clica em **LIVE**.

---

## Pre-requisitos

1. HTTP server rodando: `python3 -m http.server 8080` (no dir `outputs/hubs/marketing/`)
2. Browser aberto em `http://localhost:8080/opes-big-brother.html` com modo **LIVE** ativado

---

## Como Funciona

Esta task Ã© um wrapper do `daily-content` que adiciona chamadas ao `emit_event.py` em cada etapa. O pipeline real roda normalmente, mas cada passo emite eventos que a UI consome via polling.

---

## Emit Helper

```bash
E="squads/marketing-yog/scripts/emit_event.py"
```

---

## Workflow (mesmo do daily-content, com emissÃµes)

### InicializaÃ§Ã£o

```bash
python3 "$E" --clear
```

### Step 2: IdeaÃ§Ã£o

```bash
python3 "$E" ideation start "Consultando Content Map..." step=2
```

> Executar ideaÃ§Ã£o normalmente. A cada pensamento relevante:

```bash
python3 "$E" ideation think "DescriÃ§Ã£o do que estÃ¡ pensando"
```

> Ao terminar, apresentar ao CMO:

```bash
python3 "$E" ideation say "Resumo dos Ã¢ngulos" to=cmo
```

### Step 2.5: CMO Gate

```bash
python3 "$E" cmo think "Avaliando Big Idea..."
```

> Se aprovado:

```bash
python3 "$E" cmo gate "Purple Cow X/5 â€” Aprovado" step=2.5 result=approved from=ideation
python3 "$E" ideation walk_from_gate "Aprovado" nextAgent=production
```

> Se reprovado:

```bash
python3 "$E" cmo gate "Motivo da reprovaÃ§Ã£o" step=2.5 result=vetoed from=ideation
```

### Step 3: ProduÃ§Ã£o

```bash
python3 "$E" production start "Escrevendo post..." step=3
python3 "$E" production think "DescriÃ§Ã£o do processo"
python3 "$E" production say "Post pronto" to=designer
```

### Step 3.5: Designer

```bash
python3 "$E" designer start "Avaliando formato visual..." step=3.5
python3 "$E" designer think "DecisÃ£o de formato"
python3 "$E" designer say "Visual Brief pronto" to=distribution
```

### Step 4: DistribuiÃ§Ã£o

```bash
python3 "$E" distribution start "Adaptando para plataformas..." step=4
python3 "$E" distribution think "AdaptaÃ§Ã£o IG/LinkedIn"
python3 "$E" distribution walk_to_gate "Pedindo autorizacao de publish" gate=6
```

### Step 6: Gate 6 (Publish)

```bash
python3 "$E" gate6 think "Verificando compliance..."
python3 "$E" gate6 gate "Publish autorizado" step=6 result=approved from=distribution
python3 "$E" distribution walk_from_gate "Seguindo pro Metrics" nextAgent=metrics
```

### Step 7: Metrics

```bash
python3 "$E" metrics start "Registrando dados..." step=7
python3 "$E" metrics think "IDs registrados"
```

### Complete

```bash
python3 "$E" system complete "Pipeline completo."
```

---

## Uso

```
/daily-content-live
/daily-content-live auto=true
/daily-content-live contexto="algo que aconteceu hoje"
```

Aceita os mesmos parÃ¢metros do `/daily-content`. A diferenÃ§a Ã© que emite eventos pro Big Brother em cada etapa.

---

## Regras de EmissÃ£o

1. **Sempre limpar** eventos no inÃ­cio (`--clear`)
2. **Um `start`** por agente quando ele entra em cena
3. **`think`** para cada raciocÃ­nio interno relevante (typing dots na UI)
4. **`say`** quando entrega trabalho para o prÃ³ximo (agente caminha atÃ© o destino)
5. **`gate`** com `result=approved` ou `result=vetoed` nos gates
6. **`walk_to_gate`** quando agente vai atÃ© um gate
7. **`walk_from_gate`** apÃ³s aprovaÃ§Ã£o, com `nextAgent=` destino
8. **`complete`** quando pipeline termina (todos voltam Ã s salas)

---

*Task v1.0.0 â€” OPES Big Brother Live Mode*

