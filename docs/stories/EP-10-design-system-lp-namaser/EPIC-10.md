# EP-10: Design System NamaSer + Landing Page de Conversao

**Status:** Draft
**Criado:** 2026-03-11
**PM:** Morgan (@pm)

---

## Epic Goal

Criar uma Landing Page de vendas do NamaSer que converta (a atual tem conversao zero), usando como referencia visual o site atual da Gaby (que ela gosta esteticamente) combinado com a elegancia profissional dos sites MaaS Hub e Framework Arquiteto IA — porem em versao clara e luminosa, alinhada com yoga. A partir da LP validada, extrair um Design System unificado que servira para todos os sites do ecossistema NamaSer (Primeiro Passo, Oraculo, Entrada Sadhana).

## Epic Description

### Contexto do Sistema Existente

- **Produto:** NamaSer — caminho de yoga para mulheres na vida real construindo Sadhana
- **Publico:** Mulheres 25-45, vida corrida, alta carga mental, buscam presenca sem performance
- **Sites existentes:** Primeiro Passo, Oraculo, Entrada Sadhana (Vercel) — funcionam, manter
- **LP atual (gabydrummondyoga.com.br):** Bonita visualmente mas conversao zero
- **DS anterior:** Descartado (qualidade insuficiente)
- **Stack:** HTML/CSS, deploy Vercel
- **Posicionamento:** Documentado em `docs/marca/` (posicionamento, brand guide, messaging house, manifesto)
- **Tom de voz:** Gaby — acolhedor, calmo, pratico, humano (documentado em `docs/analise-gaby/`)
- **Pesquisa:** 55 leads com dados qualitativos reais (`docs/research/`)

### O Que Sera Criado

1. **Landing Page NamaSer** — pagina de vendas que converte, deploy em namaser.vercel.app
2. **Design System NamaSer v2.0** — tokens, tipografia, cores, espacamentos, componentes — servindo TODOS os sites

### Direcao Visual (validada pela stakeholder)

- **Base:** Estetica clara e luminosa (como site atual da Gaby)
- **Inspiracao:** Elegancia e profissionalismo do MaaS Hub e Framework Arquiteto IA
- **Adaptar:** Harmonia tipografica, espacamentos generosos, hierarquia visual sofisticada
- **NAO usar:** Tema escuro (nao combina com yoga)
- **Prioridades:** Harmonia das palavras, fontes, cores. Legibilidade mobile.

### Referencias Visuais

| Site | O que pegar | O que NAO pegar |
|------|-------------|-----------------|
| gabydrummondyoga.com.br | Tom emocional, CTAs acolhedores, autenticidade, estetica clara | Estrutura que nao converte, blocos de texto densos |
| maas-hub.vercel.app | Tipografia Inter+Playfair, hierarquia refinada, espacamentos, layered depth | Tema escuro, gold accent |
| framework-arquiteto-ia.vercel.app | Animacoes suaves, micro-interacoes, pulse-glow adaptado | Tema escuro, tons marrom/gold |
| aiox.academialendaria.ai/advanced | Estrutura de conversao (prova social, urgencia sutil, FAQ) | Visual agressivo, tom tech |

### Criterios de Sucesso

1. LP deployada em namaser.vercel.app (ou similar)
2. Gaby aprova o visual
3. Estrutura de conversao validada (secoes, CTAs, prova social)
4. Design System documentado e reutilizavel para os demais sites
5. Acessibilidade WCAG AA minimo
6. Mobile-first

---

## Stories

### Story 10.1: Briefing Criativo + Analise de Referencias

- **Descricao:** Compilar todo material existente (posicionamento, ICP, tom de voz, pesquisa 55 leads) num briefing criativo unico. Analisar sites de referencia e extrair padroes visuais aplicaveis (versao clara/luminosa). Gerar documento de direcao visual.
- **Executor:** `@ux-design-expert`
- **Quality Gate:** `@po`
- **Quality Gate Tools:** `[brand_alignment, tone_validation, reference_analysis]`
- **Comandos UX:** `*research`, `*scan`
- **Entradas:** `docs/marca/*`, `docs/analise-gaby/*`, `docs/estrategia/icp-namaser.md`, `docs/research/lead-survey-55-namaser-2026-02-21.md`, sites de referencia
- **Saida:** `docs/stories/EP-10-design-system-lp-namaser/briefing-criativo-namaser.md`
- **Estimativa:** P (pequeno)

### Story 10.2: Wireframe + Estrutura de Conversao da LP

- **Descricao:** Criar wireframe da LP definindo: quais secoes, em que ordem, onde ficam CTAs, prova social, FAQ. Baseado nas melhores praticas de conversao adaptadas ao tom acolhedor NamaSer (sem urgencia agressiva, sem culpa).
- **Executor:** `@ux-design-expert`
- **Quality Gate:** `@po`
- **Quality Gate Tools:** `[conversion_structure, brand_tone_check, mobile_first]`
- **Comandos UX:** `*wireframe`
- **Dependencia:** Story 10.1 (briefing criativo)
- **Saida:** `docs/stories/EP-10-design-system-lp-namaser/wireframe-lp-namaser.md`
- **Estimativa:** M (medio)

### Story 10.3: Prompt de IA + Geracao Visual da LP

- **Descricao:** Gerar prompt detalhado para ferramenta de IA (v0 ou Lovable) criar o visual da LP. Incluir: cores, tipografia, espacamentos, tom, estrutura de secoes, copy principal. Iterar ate Gaby aprovar.
- **Executor:** `@ux-design-expert`
- **Quality Gate:** `@architect`
- **Quality Gate Tools:** `[prompt_completeness, visual_direction, brand_alignment]`
- **Comandos UX:** `*generate-ui-prompt`
- **Dependencia:** Story 10.2 (wireframe)
- **Saida:** `docs/stories/EP-10-design-system-lp-namaser/ui-prompt-lp-namaser.md`
- **Estimativa:** M (medio)
- **Gate especial:** Aprovacao visual da Gaby antes de prosseguir

### Story 10.4: Design System NamaSer v2.0 — Tokens + Setup

- **Descricao:** A partir da LP aprovada, extrair todos os tokens de design (cores, tipografia, espacamentos, bordas, sombras, animacoes). Montar estrutura do DS. Exportar em formato profissional (CSS custom properties + DTCG). Validar acessibilidade.
- **Executor:** `@ux-design-expert`
- **Quality Gate:** `@dev`
- **Quality Gate Tools:** `[token_extraction, accessibility_audit, documentation]`
- **Comandos UX:** `*tokenize`, `*setup`, `*export-dtcg`, `*a11y-check`, `*document`
- **Dependencia:** Story 10.3 (LP visual aprovada)
- **Saida:** Novo Design System em local a definir (substituindo o anterior)
- **Estimativa:** G (grande)

---

## Fluxo de Execucao

```
Story 10.1 (briefing + scan)
    ↓
Story 10.2 (wireframe)
    ↓
Story 10.3 (prompt IA + visual) → ✅ Gaby aprova
    ↓
Story 10.4 (extrair DS + documentar)
    ↓
✅ LP no ar + DS NamaSer v2.0 pronto
```

## Compatibilidade

- [ ] Sites existentes (Primeiro Passo, Oraculo, Entrada Sadhana) continuam funcionando
- [ ] DS novo e aditivo, nao quebra nada existente
- [ ] Migracao dos sites existentes pro DS novo sera epic separado (futuro)

## Riscos

| Risco | Mitigacao |
|-------|-----------|
| Gaby nao aprova o visual | Iteracoes no prompt de IA (Story 10.3) ate aprovar |
| LP bonita mas nao converte | Wireframe baseado em padroes de conversao comprovados |
| DS muito generico, nao captura essencia yoga | Briefing criativo profundo (Story 10.1) ancora tudo |
| Escopo cresce demais | Foco: 1 LP + tokens. Componentes atomicos ficam pra epic futuro |

## Definition of Done

- [ ] Briefing criativo completo e alinhado com marca
- [ ] Wireframe da LP aprovado
- [ ] Visual da LP aprovado pela Gaby
- [ ] LP deployada em Vercel
- [ ] Design System NamaSer v2.0 com tokens documentados
- [ ] Acessibilidade WCAG AA validada
- [ ] Mobile-first verificado

---

## Handoff para @sm

Desenvolver stories detalhadas para este epic. Consideracoes:

- Executor principal: @ux-design-expert (Uma) para todas as stories
- Todo material de marca ja existe em `docs/marca/`, `docs/analise-gaby/`, `docs/estrategia/`
- Tom da marca: acolhedor, calmo, pratico — NUNCA urgencia ou culpa
- Gate especial na Story 10.3: Gaby precisa aprovar visual
- Dependencia sequencial: cada story depende da anterior
- DS novo servira todos os sites do ecossistema NamaSer

---

*— Morgan, planejando o futuro 📊*
