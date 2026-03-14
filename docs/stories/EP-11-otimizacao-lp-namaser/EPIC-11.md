# EP-11: Otimizacao LP NamaSer — Performance, SEO, Acessibilidade & Conversao

**Status:** Draft
**Criado:** 2026-03-14
**PM:** Morgan (@pm)
**Origem:** Analise completa da LP por 3 squads (UX 8.3 / Tech 5.1 / CRO 6.1) — `D:\Downloads\analise-namaser.html`

---

## Epic Goal

Elevar as notas tecnica (5.1 → 8+) e de conversao (6.1 → 7.5+) da landing page namaser.vercel.app, mantendo intacto o emotional design (9.5/10) e o tom acolhedor da marca. Nenhuma melhoria pode comprometer o que ja funciona.

## Epic Description

### Contexto do Sistema Existente

- **LP atual:** namaser.vercel.app — deployada, funcional, visual aprovado pela Gaby
- **Stack:** HTML/CSS/Vanilla JS, single-file, deploy Vercel
- **Checkout:** Hotmart
- **Emotional Design:** Nota 9.5/10 — ponto mais forte, PRESERVAR a todo custo
- **Commits relevantes:** `343c36e` (headers seguranca ja parcialmente implementados), `6de0a41` (design system)
- **CTA sticky:** Ja existe no header ("Quero construir meu Sadhana") — NAO duplicar

### O Que Sera Feito

Otimizacoes em 3 waves priorizadas por impacto x esforco:

| Wave | Foco | Tempo estimado |
|------|------|----------------|
| Wave 1 (Dia 1) | Performance + SEO + Seguranca | ~2-3h |
| Wave 2 (Semana 1) | Conversao + Acessibilidade | ~4-6h |
| Wave 3 (Semana 2) | Polish UX | ~3-4h |

### Constraints Globais (TODAS as stories)

> **COPY:** Nenhuma story tem autonomia para criar ou decidir textos. Toda copy (FAQ, micro-copy, CTAs, titulos, descripcoes) DEVE ser validada pelo squad de Light Copy (EP-03) e/ou pela Gaby ANTES de implementar. O @dev recebe copy pronta e implementa. NAO inventa texto.

> **DESIGN & VISUAL:** Qualquer mudanca que altere o visual da pagina (cores, layout, espacamento, componentes, selos, footer) DEVE passar por @ux-design-expert primeiro e ter aprovacao do stakeholder (usuario) ANTES de implementar. O @dev NAO toma decisoes visuais sozinho.

> **EMOTIONAL DESIGN:** O tom acolhedor, quente, "que respira" e inegociavel (nota 9.5/10). Se uma melhoria tecnica comprometer a experiencia emocional, a melhoria e descartada ou adaptada.

> **PERGUNTAR ANTES:** Cada story deve apresentar opcoes ao usuario antes de implementar. NAO sair fazendo. Isso vale para decisoes tecnicas, visuais e de copy.

### Criterios de Sucesso

1. LCP < 2.5s (hoje estimado 3.5-4.5s)
2. SEO: meta tags OG completas, structured data, meta description 150+ chars
3. Acessibilidade: ARIA completo no carousel e accordion, skip navigation
4. Objecoes tratadas no FAQ (copy validada pelo squad Light Copy)
5. Seguranca: headers completos, links externos protegidos
6. Zero regressao no emotional design e funcionalidade existente

### Decisoes Ja Tomadas

| Item | Decisao | Motivo |
|------|---------|--------|
| Fotos de alunas nos depoimentos | NAO | Decisao do stakeholder |
| CTA sticky mobile (rodape) | NAO | Ja existe CTA sticky no header |
| Countdown timer | PENDENTE | Precisa discutir com Gaby — 3 opcoes levantadas (texto, tag visual, timer suave) |
| Videos depoimento | Existem no YouTube | Avaliar se/como embedar — decisao pendente |
| Numero real de alunas | PENDENTE | Gaby precisa informar |

---

## Stories

### Story 11.1: Performance — Hero Image + Otimizacao de Imagens

- **Descricao:** Corrigir hero image (remover `loading="lazy"`, adicionar `fetchpriority="high"`, preload no head). Adicionar `width` e `height` em todas as imagens para eliminar CLS. Converter imagens para WebP com fallback. Verificar `font-display: swap` no Google Fonts.
- **Executor:** `@dev`
- **Quality Gate:** `@architect`
- **Quality Gate Tools:** `[performance_audit, cls_check, lcp_measurement]`
- **Wave:** 1 (Dia 1)
- **Estimativa:** P (pequeno)
- **Constraint:** Nao alterar nenhuma imagem visualmente — apenas formato e atributos tecnicos
- **Acceptance Criteria:**
  - [ ] Hero image sem loading="lazy", com fetchpriority="high"
  - [ ] `<link rel="preload">` da hero image no head
  - [ ] Todas as imagens com width/height explicitos
  - [ ] Imagens convertidas para WebP (com fallback jpg/png)
  - [ ] font-display: swap verificado no Google Fonts
  - [ ] LCP medido antes e depois (Lighthouse ou WebPageTest)

### Story 11.2: SEO Tecnico — Meta Tags, Structured Data & Canonical

- **Descricao:** Implementar SEO tecnico completo: title tag otimizada, meta description 150+ chars, todas as OG tags (og:image, og:type, og:url, og:locale, og:title, og:description), canonical URL, structured data JSON-LD (type: Course).
- **Executor:** `@dev`
- **Quality Gate:** `@architect`
- **Quality Gate Tools:** `[seo_validation, og_preview, structured_data_test]`
- **Wave:** 1 (Dia 1)
- **Estimativa:** P (pequeno)
- **Constraint copy:** Title tag, meta description e og:description sao COPY — devem ser validados pelo squad Light Copy antes de implementar. O @dev pode propor rascunho mas NAO decide texto final.
- **Constraint tecnico:** Criar imagem OG (1200x630) — pode ser screenshot da hero ou imagem propria. Perguntar antes de decidir.
- **Acceptance Criteria:**
  - [ ] Title tag com keywords relevantes (copy aprovada)
  - [ ] Meta description 150-160 chars (copy aprovada)
  - [ ] Todas as OG tags implementadas (og:type, og:url, og:title, og:description, og:image, og:locale)
  - [ ] OG image 1200x630 criada e deployada
  - [ ] Canonical URL apontando para https://namaser.vercel.app/
  - [ ] JSON-LD structured data (type: Course) com dados reais
  - [ ] Validar com ferramenta de OG preview (compartilhamento WhatsApp/social)

### Story 11.3: Conversao — FAQ, Contextualizacao de Preco & Micro-Copy

- **Descricao:** Adicionar nova pergunta FAQ tratando objecao "YouTube gratis". Contextualizar preco por aula na secao Pricing. Adicionar micro-copy sob CTAs ("Acesso imediato. Garantia 15 dias."). Tratar objecoes restantes no FAQ ("funciona online?", "quanto tempo por dia?"). Adicionar CTA apos secao de prova social.
- **Executor:** `@dev`
- **Quality Gate:** `@po`
- **Quality Gate Tools:** `[conversion_check, brand_tone_validation, copy_review]`
- **Wave:** 2 (Semana 1)
- **Estimativa:** M (medio)
- **Constraint copy CRITICO:** TODA a copy desta story (perguntas FAQ, respostas, micro-copy, frases de contextualizacao) DEVE ser produzida/validada pelo squad Light Copy (EP-03) e aprovada pela Gaby ANTES do @dev implementar. O @dev NAO cria texto. Fluxo: squad Light Copy produz → Gaby aprova → @dev implementa.
- **Acceptance Criteria:**
  - [ ] Copy de todas as novas perguntas FAQ aprovada pelo squad Light Copy + Gaby
  - [ ] FAQ "YouTube gratis" implementada com copy aprovada
  - [ ] Contextualizacao de preco implementada com copy aprovada
  - [ ] Micro-copy sob CTAs implementado com copy aprovada
  - [ ] Objecoes "funciona online?" e "quanto tempo/dia?" tratadas no FAQ (copy aprovada)
  - [ ] CTA adicional apos secao prova social (texto do CTA aprovado)
  - [ ] Tom acolhedor mantido — zero linguagem agressiva ou de urgencia

### Story 11.4: Acessibilidade — ARIA, Skip Navigation & Contraste

- **Descricao:** Adicionar ARIA roles completos no carousel (role="region", aria-roledescription, aria-label por slide). Adicionar aria-expanded e aria-controls no accordion. Implementar skip navigation link. Corrigir contraste de text-secondary (#6B5E54 → #5A4D43 ou similar). Aumentar touch targets dos dots do carousel para min 44x44px.
- **Executor:** `@dev`
- **Quality Gate:** `@architect`
- **Quality Gate Tools:** `[a11y_audit, wcag_validation, contrast_check]`
- **Wave:** 2 (Semana 1)
- **Estimativa:** M (medio)
- **Constraint:** Ajuste de contraste NAO pode alterar a percepcao visual da paleta. Testar variacao minima que atinja WCAG AA. Apresentar opcoes de cor antes de implementar.
- **Acceptance Criteria:**
  - [ ] Carousel com role="region", aria-roledescription="carousel", aria-label em cada slide
  - [ ] Botoes de navegacao do carousel com aria-label descritivo
  - [ ] Dots com role="tablist" e aria-selected
  - [ ] Accordion com aria-expanded e aria-controls em todos os itens
  - [ ] Skip navigation link implementado ("Pular para o conteudo")
  - [ ] text-secondary ajustado para ratio >= 5.0:1 (WCAG AA confirmado)
  - [ ] Touch targets dos dots >= 44x44px
  - [ ] Testes com screen reader (NVDA ou VoiceOver) documentados

### Story 11.5: Seguranca — Headers & Links Externos

- **Descricao:** Auditar headers de seguranca apos commit 343c36e e verificar gaps. Garantir que TODOS os links externos (Hotmart, YouTube, WhatsApp, Instagram) tenham rel="noopener noreferrer". Verificar CSP header. Verificar lang="pt-BR" no html tag.
- **Executor:** `@dev`
- **Quality Gate:** `@architect`
- **Quality Gate Tools:** `[security_headers_audit, link_audit]`
- **Wave:** 1 (Dia 1)
- **Estimativa:** P (pequeno)
- **Acceptance Criteria:**
  - [ ] Audit de headers comparando estado atual com recomendacoes da analise
  - [ ] X-Content-Type-Options: nosniff confirmado
  - [ ] X-Frame-Options: DENY confirmado
  - [ ] Referrer-Policy: strict-origin-when-cross-origin confirmado
  - [ ] Permissions-Policy configurado
  - [ ] Todos os links externos com rel="noopener noreferrer"
  - [ ] html tag com lang="pt-BR"
  - [ ] CSP header revisado e atualizado se necessario

### Story 11.6: Polish UX — Carousel Vozes, Selos & Footer

- **Descricao:** Simplificar carousel Vozes: desativar autoplay no mobile (ou aumentar para 8s), considerar consolidar secao duplicada "Vozes" em uma unica. Adicionar selos de pagamento (Pix, cartao, boleto) e badge Hotmart proximo ao pricing. Alinhar footer com tom emocional do site (cores quentes, nao generico).
- **Executor:** `@dev` + `@ux-design-expert`
- **Quality Gate:** `@po`
- **Quality Gate Tools:** `[ux_review, brand_alignment, mobile_test]`
- **Wave:** 3 (Semana 2)
- **Estimativa:** M (medio)
- **Constraint copy:** Qualquer texto novo no footer ou selos deve ser validado pelo squad Light Copy.
- **Constraint UX:** Apresentar opcoes visuais para selos e footer ANTES de implementar. Nao decidir layout sozinho.
- **Acceptance Criteria:**
  - [ ] Autoplay do carousel desativado no mobile OU intervalo aumentado para 8s (apresentar opcoes)
  - [ ] Secao "Vozes" duplicada avaliada — apresentar opcoes: consolidar em 1 com tabs/filtros OU manter 2 com diferenciacao clara
  - [ ] Accordion permite multiplos itens abertos simultaneamente
  - [ ] Selos de pagamento implementados proximo ao pricing (opcoes visuais aprovadas)
  - [ ] Footer redesenhado com cores quentes alinhadas ao tom do site (opcoes aprovadas)
  - [ ] Botoes CTA com estado :active (scale 0.98) para feedback de toque

---

## Fluxo de Execucao

```
Wave 1 — Dia 1 (podem ser paralelas):
  Story 11.1 (Performance) ──┐
  Story 11.2 (SEO)      ──── ├──→ Deploy
  Story 11.5 (Seguranca) ────┘

Wave 2 — Semana 1 (11.3 depende de copy aprovada):
  Story 11.4 (Acessibilidade) ──→ Deploy
  Story 11.3 (Conversao)    ──→ Aguarda copy do squad Light Copy → Deploy

Wave 3 — Semana 2:
  Story 11.6 (Polish UX) ──→ Aprovacao visual → Deploy
```

### Dependencia externa (copy):
```
Squad Light Copy produz copy ──→ Gaby aprova ──→ @dev implementa (Story 11.3)
```

---

## Itens Fora do Escopo (Decisao Pendente)

| Item | Status | Quem decide |
|------|--------|-------------|
| Countdown timer / deadline no preco | Pendente — 3 opcoes levantadas | Gaby |
| Videos YouTube nos depoimentos | Pendente — existem, avaliar embed | Gaby |
| Numero real de alunas (ex: "347 alunas") | Pendente — Gaby precisa informar | Gaby |
| Order bump / upsell Hotmart | Fora do escopo tecnico | Gaby + estrategia |
| Reordenar secoes (Reframe antes de Para Quem) | Avaliar com dados pos-otimizacao | @analyst |
| Tiers de preco (Basico/Completo/VIP) | Decisao de produto | Gaby + @pm |

---

## Compatibilidade

- [ ] LP continua funcional durante e apos cada wave
- [ ] Nenhuma alteracao visual perceptivel sem aprovacao
- [ ] Checkout Hotmart inalterado
- [ ] Sites existentes (Primeiro Passo, Oraculo, Entrada Sadhana) nao sao afetados
- [ ] Cada wave deployavel independentemente

## Riscos

| Risco | Mitigacao |
|-------|-----------|
| Mudanca de cor no contraste altera percepcao visual | Variacao minima, apresentar opcoes, testar com Gaby |
| Copy do FAQ nao fica no tom da marca | Squad Light Copy produz, Gaby valida — @dev so implementa |
| Otimizacao de imagens altera qualidade visual | Testar WebP com qualidade 85+, comparar antes/depois |
| Headers de seguranca bloqueiam recursos externos | Testar CSP em staging antes de deploy |
| Carousel simplificado perde engajamento | A/B test se possivel, ou rollback facil |

## Quality Assurance Strategy

- **Wave 1:** Lighthouse before/after para medir performance e SEO
- **Wave 2:** Screen reader test (NVDA/VoiceOver), WCAG contrast checker
- **Wave 3:** Mobile testing em dispositivos reais (ou emulador), aprovacao visual
- **Todas:** Verificar funcionalidade existente apos cada deploy

## Definition of Done

- [ ] Todas as 6 stories completadas com acceptance criteria atendidos
- [ ] LCP < 2.5s confirmado via Lighthouse
- [ ] SEO validado com ferramenta de OG preview
- [ ] ARIA testado com screen reader
- [ ] Zero regressao no emotional design
- [ ] Gaby aprovou todas as mudancas visuais
- [ ] Squad Light Copy aprovou toda copy nova
- [ ] Deploy final em namaser.vercel.app

---

## Handoff para @sm

Desenvolver stories detalhadas para este epic. Consideracoes:

- Executor principal: @dev (Dex) para todas as stories tecnicas
- Story 11.6 co-execucao com @ux-design-expert (Uma)
- **CRITICO:** Story 11.3 depende de copy do squad Light Copy — NAO permitir que @dev invente texto
- Material de referencia: analise completa em `D:\Downloads\analise-namaser.html`
- Tom da marca: acolhedor, calmo, pratico — preservar emotional design (9.5/10)
- Cada story deve apresentar opcoes antes de implementar
- Wave 1 stories podem ser executadas em paralelo
- Wave 2 Story 11.3 bloqueada ate copy aprovada

---

*— Morgan, planejando o futuro 📊*
