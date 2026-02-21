# Plano Mestre - Pesquisa Profunda Oraculo do Sadhana

**Data:** 2026-02-21  
**Status:** Planejado para execucao  
**Escopo:** Pesquisa + Curadoria + Producao de base textual + Validacao piloto

## 1) Objetivo
Construir um sistema de conteudo autoral para o Oraculo do Sadhana, inspirado na experiencia ritual do "Oraculo do Pao", sem copia textual e com voz propria da marca.

## 2) Norte Editorial (a partir do resumo do NotebookLM)
Pilares de base para pesquisa e escrita:
1. Presenca (Yoga classico / Atha / chitta vritti nirodha)
2. Fortaleza interna (estoicismo / foco no que controlamos)
3. Fluidez (Tao / agua / wu wei)
4. Impermanencia e desapego (budismo secular)
5. Hospitalidade emocional (poesia contemplativa)
6. Sensibilidade e intervalos (tantra contemplativo sem exotizacao)

## 3) Entregaveis da Pesquisa
1. `docs/oraculo/guia-de-voz-oraculo-sadhana.md`
2. `docs/oraculo/taxonomia-temas-oraculo-v1.md`
3. `docs/oraculo/banco-sementes-reflexao-v1.md`
4. `docs/oraculo/cartas-v2-rascunho-120.md`
5. `docs/oraculo/cartas-v2-rascunho-120.json`
6. `docs/oraculo/checklist-qualidade-cartas.md`
7. `docs/oraculo/plano-piloto-oraculo-v2.md`

## 4) Fases e Cronograma (2 semanas)
### Fase 0 - Setup (Dia 1)
Objetivo: organizar fontes e criterios.
- consolidar fontes internas relevantes (PRD, stories EP-08, pesquisas existentes)
- criar pasta de entrada de fontes externas e exportadas
- definir criterios de exclusao (evitar linguagem culpabilizante, tom guru, promessa terapeutica)

### Fase 1 - Pesquisa profunda (Dias 2-4)
Objetivo: mapear linguagem, temas e dores reais.
- trilha A: fundamentos contemplativos (yoga, estoicismo, budismo, tao)
- trilha B: linguagem de audiencia (conteudo social ja coletado no projeto)
- trilha C: estilo de carta (cadencia curta, palavra-ancora, fechamento poetico)

### Fase 2 - Modelagem editorial (Dias 5-7)
Objetivo: transformar pesquisa em sistema.
- definir taxonomia final de temas
- definir moldes de carta (template curto, medio e profundo)
- criar checklist de qualidade e seguranca editorial

### Fase 3 - Producao de conteudo (Dias 8-11)
Objetivo: gerar base v2 de cartas.
- produzir 120 cartas rascunho
- revisar para eliminar repeticao e generalidade
- exportar em JSON pronto para produto

### Fase 4 - Piloto e decisao (Dias 12-14)
Objetivo: validar aderencia e decidir evolucao.
- piloto beta pequeno (20-50 usuarias)
- medir: reveal rate, share rate, retorno D7
- decisao go/no-go para fase de personalizacao

## 5) Guardrails de Conteudo
1. Conteudo 100% autoral.
2. Nao copiar texto de obras/cartas sem licenca.
3. Nao prometer cura, diagnostico ou substituicao terapeutica.
4. Linguagem acolhedora, concreta e sem culpa.
5. Inspiracao filosofica com traducao para vida cotidiana.
6. Sempre incluir uma micro acao pratica simples.

## 6) Criterios de Qualidade das Cartas
1. Palavra-ancora clara (1-3 palavras).
2. Texto entre 60 e 120 palavras.
3. Cadencia em frases curtas.
4. Fechamento com pergunta de reflexao util.
5. Sem tom de ordem, sem moralismo.
6. Sem jargao nao explicado.

## 7) Dependencias
1. Base existente em `docs/stories/EP-08-oraculo-sadhana`.
2. PRD em `docs/prd/PRD-MVP-ORACULO-SADHANA.md`.
3. Direcao V1 em `docs/oraculo/ORACULO-V1-TEXTO-E-DIRECAO.md`.
4. Fontes de pesquisa em `docs/research`.

## 8) Decisoes Ja Tomadas
1. MVP segue stateless.
2. Conteudo principal e diferencial do produto.
3. Pesquisa pode iniciar sem NotebookLM/API externa.
4. Apify entra somente se faltar cobertura de linguagem real.
