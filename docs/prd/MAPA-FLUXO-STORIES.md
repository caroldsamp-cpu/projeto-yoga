# Mapa Visual de Fluxo das Stories â€” Mente Leve Sadhana

**Data:** 14/02/2026
**Total:** 50 stories em 8 Epics

---

## VISAO GERAL â€” Fluxo entre Epics

```mermaid
graph TD
    EP01["EP-01: Framework Sadhana\n(6 stories)\nMUST - Fundacao"] --> EP02["EP-02: Reposicionamento Trilhas\n(7 stories)\nMUST"]
    EP01 --> EP03["EP-03: Framework Light Copy\n(7 stories)\nMUST"]
    EP01 --> EP04["EP-04: Identidade Tribo\n(5 stories)\nSHOULD"]

    EP03 --> EP05["EP-05: Estrategia Conteudo\n(6 stories)\nSHOULD"]
    EP04 --> EP05
    EP02 --> EP05

    EP03 --> EP06["EP-06: Funnel Conversao\n(7 stories)\nSHOULD"]
    EP04 --> EP06
    EP01 --> EP06

    EP03 --> EP07["EP-07: Gerador CLI\n(6 stories)\nCOULD"]
    EP01 --> EP07

    EP05 --> EP06

    CHECKPOINT{{"CHECKPOINT GO/NO-GO\napos S-01.6"}}
    EP01 --> CHECKPOINT
    CHECKPOINT -->|Go| EP02
    CHECKPOINT -->|Go| EP03

    style EP01 fill:#4CAF50,color:#fff
    style EP02 fill:#4CAF50,color:#fff
    style EP03 fill:#4CAF50,color:#fff
    style EP04 fill:#FFC107,color:#000
    style EP05 fill:#FFC107,color:#000
    style EP06 fill:#FFC107,color:#000
    style EP07 fill:#90CAF9,color:#000
    style CHECKPOINT fill:#F44336,color:#fff
```

---

## FLUXO DETALHADO â€” EP-01: Framework Sadhana (Fundacao)

```mermaid
graph TD
    S11["S-01.1\nManifesto Sadhana\n(RAIZ de tudo)"] --> S12["S-01.2\nManifesto Permissao"]
    S11 --> S13["S-01.3\nGlossario da Tribo"]
    S11 --> S14["S-01.4\nReceitas Sadhana"]
    S14 --> S13
    S13 --> S14

    S11 --> S15["S-01.5\nJornada 90 Dias"]
    S13 --> S15
    S14 --> S15

    S11 --> S16["S-01.6\nValidacao 10 Mulheres\n(CHECKPOINT)"]
    S12 --> S16
    S13 --> S16
    S14 --> S16
    S15 --> S16

    S16 --> GATE{{"GO / NO-GO"}}
    GATE -->|"7+/10 ressoam"| GO["EP-02 + EP-03\n(em paralelo)"]
    GATE -->|"4-6/10 ressoam"| AJUSTE["Ajustar S-01.1 a S-01.5\nRe-validar"]

    style S11 fill:#4CAF50,color:#fff
    style S16 fill:#F44336,color:#fff
    style GATE fill:#F44336,color:#fff
```

---

## FLUXO DETALHADO â€” EP-02: Reposicionamento de Trilhas

```mermaid
graph TD
    S21["S-02.1\nEntrada Sadhana\n(Porta de chegada)"] --> S22["S-02.2\nTrilha Fundacao\n(Base: 28 aulas)"]
    S22 --> S23["S-02.3\nMinguante & Nova\n(14 aulas)"]
    S22 --> S25["S-02.5\nRespiracao & Presenca\n(19 aulas)"]
    S23 --> S24["S-02.4\nCrescente & Cheia\n(32 aulas)"]
    S24 --> S26["S-02.6\nEvolucao\n(aulas de mestria)"]
    S25 --> S26

    S21 --> S27["S-02.7\nGuia de Navegacao"]
    S22 --> S27
    S23 --> S27
    S24 --> S27
    S25 --> S27
    S26 --> S27

    style S21 fill:#4CAF50,color:#fff
    style S27 fill:#2196F3,color:#fff
```

---

## FLUXO DETALHADO â€” EP-03: Framework Light Copy

```mermaid
graph TD
    S31["S-03.1\nLight Copy Pattern\n(6 passos)"] --> S32["S-03.2\nVocabulario Gaby"]
    S31 --> S35["S-03.5\nChecklist Light Copy"]
    S32 --> S35

    S32 --> S33["S-03.3\nMetodo LC Roteiros"]
    S31 --> S33

    S33 --> S34["S-03.4\nTemplates por Avatar"]
    S32 --> S34

    S31 --> S36["S-03.6\nPesquisa Creators"]
    S32 --> S36
    S36 --> S37["S-03.7\nAnalise Comparativa"]

    style S31 fill:#4CAF50,color:#fff
    style S35 fill:#FFC107,color:#000
```

---

## FLUXO DETALHADO â€” EP-04: Identidade de Tribo

```mermaid
graph TD
    S41["S-04.1\nPaleta Visual"] --> S42["S-04.2\nFrases Posicionamento"]
    S42 --> S43["S-04.3\nIdentidade Comunidade"]
    S41 --> S43

    S43 --> S44["S-04.4\nInimigo Comum"]
    S43 --> S45["S-04.5\nTemplates Visuais"]
    S41 --> S45
    S42 --> S45

    style S41 fill:#FFC107,color:#000
```

---

## FLUXO DETALHADO â€” EP-05: Estrategia de Conteudo

```mermaid
graph TD
    S51["S-05.1\nCategorias Conteudo\n(7 categorias)"] --> S52["S-05.2\nCalendario Editorial"]
    S51 --> S53["S-05.3\nRoteiros Video/Reel"]
    S51 --> S54["S-05.4\nHashtags Tribais"]
    S51 --> S55["S-05.5\nEstrategia Stories IG"]

    S53 --> S52
    S54 --> S52
    S55 --> S52

    S51 --> S56["S-05.6\nMetricas Sucesso"]
    S52 --> S56
    S53 --> S56
    S54 --> S56
    S55 --> S56

    style S51 fill:#FFC107,color:#000
    style S56 fill:#2196F3,color:#fff
```

---

## FLUXO DETALHADO â€” EP-06: Funnel de Conversao

```mermaid
graph TD
    S61["S-06.1\nQuiz Funnel"] --> S62["S-06.2\nSequencia WhatsApp"]
    S61 --> S63["S-06.3\nEmail Sequence"]

    S62 --> S64["S-06.4\nJornada 7 Dias"]
    S63 --> S64

    S64 --> S65["S-06.5\nPitch Presencial"]
    S64 --> S66["S-06.6\nDesafio Sadhana Real"]
    S65 --> S66

    S61 --> S67["S-06.7\nLanding Page Copy"]
    S66 --> S67

    style S61 fill:#FFC107,color:#000
    style S67 fill:#2196F3,color:#fff
```

---

## FLUXO DETALHADO â€” EP-07: Gerador CLI

```mermaid
graph TD
    S71["S-07.1\nArquitetura CLI"] --> S72["S-07.2\nPrompts IA"]
    S72 --> S73["S-07.3\nCLI Basico"]

    S73 --> S74["S-07.4\nSelecao Avatar"]
    S73 --> S75["S-07.5\nSelecao Formato"]

    S74 --> S76["S-07.6\nTestes Validacao"]
    S75 --> S76

    style S71 fill:#90CAF9,color:#000
    style S76 fill:#2196F3,color:#fff
```

---

## LINHA DO TEMPO â€” Fases de Execucao

```
FASE 1: FUNDACAO (Semanas 1-3)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  EP-01: S-01.1 â†’ S-01.2 â†’ S-01.3 â†â†’ S-01.4 â†’ S-01.5 â†’ S-01.6
                                                            â†“
                                                    [CHECKPOINT GO/NO-GO]
                                                            â†“
FASE 2: FRAMEWORKS (Semanas 4-6) â† EP-02 e EP-03 em paralelo
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  EP-02: S-02.1 â†’ S-02.2 â†’ S-02.3 â†’ S-02.4
                         â†’ S-02.5 â†’ S-02.6 â†’ S-02.7
  EP-03: S-03.1 â†’ S-03.2 â†’ S-03.3 â†’ S-03.4
                         â†’ S-03.5
                         â†’ S-03.6 â†’ S-03.7

FASE 3: IDENTIDADE + CONTEUDO (Semanas 7-9) â† EP-04 e EP-05 em paralelo
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  EP-04: S-04.1 â†’ S-04.2 â†’ S-04.3 â†’ S-04.4
                                   â†’ S-04.5
  EP-05: S-05.1 â†’ S-05.2
                â†’ S-05.3 â†’ S-05.6
                â†’ S-05.4
                â†’ S-05.5

FASE 4: CONVERSAO + CLI (Semanas 10-12) â† EP-06 e EP-07 em paralelo
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  EP-06: S-06.1 â†’ S-06.2 â†’ S-06.4 â†’ S-06.5 â†’ S-06.6 â†’ S-06.7
                â†’ S-06.3 â†—
  EP-07: S-07.1 â†’ S-07.2 â†’ S-07.3 â†’ S-07.4 â†’ S-07.6
                                   â†’ S-07.5 â†—
```

---

## LEGENDA

| Cor | Significado |
|-----|-------------|
| Verde | MUST (prioridade maxima) |
| Amarelo | SHOULD (importante) |
| Azul claro | COULD (desejavel) |
| Vermelho | Checkpoint de decisao |
| Azul escuro | Story de consolidacao/entrega final do Epic |

---

## PONTOS DE CONVERGENCIA (Stories que combinam multiplas fontes)

| Story | Recebe de | Por que importa |
|-------|-----------|----------------|
| **S-01.6** (Validacao) | S-01.1 a S-01.5 | Decide se segue ou ajusta |
| **S-02.7** (Guia Navegacao) | S-02.1 a S-02.6 | Consolida todas as trilhas |
| **S-05.1** (Categorias) | EP-01 + EP-03 + EP-04 | Une framework + copy + identidade |
| **S-06.7** (Landing Page) | EP-02 + EP-03 + EP-04 + EP-06 | Peca final do funil |
| **S-07.6** (Testes CLI) | S-07.1 a S-07.5 | Valida o gerador completo |

---

## Change Log

| Data | Descricao | Autor |
|------|-----------|-------|
| 14/02/2026 | Criacao do mapa visual | Pax (PO) |

---

## ATUALIZAÇÃO 18/02/2026 - EP-08: Oráculo do Sadhana (MVP Stateless)

`mermaid
graph TD
    S81["S-08.1\nConceito + Guardrails"] --> S82["S-08.2\nModelagem + 33 Cartas"]
    S82 --> S83["S-08.3\nFluxo Tirar Carta"]
    S83 --> S84["S-08.4\nExperiência Stateless"]
    S84 --> S86["S-08.6\nMétricas + Piloto Beta"]
    S84 --> S85["S-08.5\nPlano Fase 2\n(Persistência + Admin)"]

    style S81 fill:#4CAF50,color:#fff
    style S82 fill:#4CAF50,color:#fff
    style S83 fill:#4CAF50,color:#fff
    style S84 fill:#4CAF50,color:#fff
    style S86 fill:#2196F3,color:#fff
    style S85 fill:#90CAF9,color:#000
`

### Observação de escopo
- No MVP, não há salvamento de dados de usuário.
- Persistência e histórico ficam planejados para fase 2.
