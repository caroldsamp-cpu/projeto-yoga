# Guia de Otimizacao de Landing Page — NamaSer

**Documento formal do processo EP-11**
**Data:** 2026-03-15
**Autor:** Aria (@architect)
**Baseado em:** Analise de 3 squads (UX, Tech, CRO) + implementacao completa EP-11

---

## 1. Visao Geral

Este documento registra o processo completo de otimizacao da LP namaser.vercel.app, desde a analise ate a implementacao. Serve como **template replicavel** para futuras LPs.

### Scores Antes vs Depois

| Dimensao | Antes | Depois (estimado) | Meta |
|----------|-------|-------------------|------|
| UX/UI Design | 8.3 | 8.5 | Manter acima de 8 |
| Tecnico/Performance | 5.1 | 8.5+ | Acima de 8 |
| Marketing/Conversao | 6.1 | 7.5+ | Acima de 7.5 |
| Emotional Design | 9.5 | 9.5 | Preservar |

### Stack da LP

- HTML/CSS/Vanilla JS (single-file)
- Deploy: Vercel (auto-deploy on push to main)
- Checkout: Hotmart
- Fontes: Google Fonts (Playfair Display + Inter)
- Imagens: JPG + WebP com fallback

---

## 2. Checklist de Construcao de LP (para novas LPs)

Use este checklist ao construir uma LP do zero. Cada item deve ser implementado durante a construcao, nao depois.

### 2.1 Head / Meta Tags

- [ ] `<html lang="pt-BR">`
- [ ] `<title>` com keyword principal + nome do produto (~60 chars)
- [ ] `<meta name="description">` com 150-160 chars, inclui beneficio + preco
- [ ] `<link rel="canonical" href="URL-definitiva">`
- [ ] Favicon SVG ou PNG
- [ ] Google Fonts com `display=swap` no link
- [ ] `<link rel="preconnect">` para fonts.googleapis.com e fonts.gstatic.com

### 2.2 Open Graph + Twitter Cards

- [ ] `og:type` = "website"
- [ ] `og:url` = URL canonica
- [ ] `og:title` = titulo para compartilhamento (pode ser diferente do title tag)
- [ ] `og:description` = 1-2 frases sobre o produto
- [ ] `og:image` = imagem 1200x630px (foto relevante do produto/pessoa)
- [ ] `og:locale` = "pt_BR"
- [ ] `twitter:card` = "summary_large_image"
- [ ] `twitter:title`, `twitter:description`, `twitter:image`

### 2.3 Structured Data (JSON-LD)

- [ ] `@type: "Course"` (para infoprodutos educacionais)
- [ ] `name`, `description`, `provider` (Person ou Organization)
- [ ] `offers` com `price`, `priceCurrency`, `availability`, `url` (link de checkout)

### 2.4 Performance de Imagens

- [ ] Hero image: `fetchpriority="high"`, SEM `loading="lazy"`
- [ ] Hero image: `<link rel="preload" href="..." as="image" type="image/webp">` no head
- [ ] Todas as imagens: `width` e `height` explicitos (previne CLS)
- [ ] Imagens below-fold: `loading="lazy"` + `decoding="async"`
- [ ] Formato WebP com fallback JPG usando `<picture>`
- [ ] Imagens redimensionadas para max 1200-1440px de largura (nao usar 4000px+ na web)
- [ ] CSS global: `picture { display: block; width: 100%; height: 100%; }` (evita quebra de layout em containers flex/grid)

### 2.5 Seguranca (vercel.json)

```json
{
  "headers": [{
    "source": "/(.*)",
    "headers": [
      { "key": "X-Content-Type-Options", "value": "nosniff" },
      { "key": "X-Frame-Options", "value": "DENY" },
      { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
      { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
      { "key": "Content-Security-Policy", "value": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com" }
    ]
  }]
}
```

- [ ] Todos os links externos: `rel="noopener noreferrer"`
- [ ] CSP adaptado aos recursos usados (YouTube, Hotmart, etc.)

### 2.6 Acessibilidade

- [ ] Skip navigation link (primeiro elemento do body, visivel no :focus)
- [ ] Carousel: `role="region"`, `aria-roledescription="carousel"`, `aria-label` nos slides
- [ ] Carousel dots: `role="tablist"`, `aria-selected` no ativo, touch target >= 44x44px
- [ ] Carousel arrows: `aria-label` descritivo
- [ ] Accordion: `aria-expanded`, `aria-controls`, `role="region"` nos paineis
- [ ] Contraste texto: ratio >= 4.5:1 (WCAG AA) para todo texto sobre fundo
- [ ] Alt text descritivo em todas as imagens
- [ ] `:focus-visible` com outline visivel
- [ ] `prefers-reduced-motion` respeitado (desativar animacoes)
- [ ] HTML semantico: header, main, section, footer, nav

### 2.7 Conversao (CRO)

- [ ] CTA sticky no header ou nav (sempre acessivel)
- [ ] Minimo 3 CTAs distribuidos na pagina (hero, meio, final)
- [ ] Micro-copy sob CTAs ("Acesso imediato. Garantia de X dias. Pagamento seguro.")
- [ ] FAQ tratando as principais objecoes do mercado
- [ ] Contextualizacao de preco ("Menos de R$X por aula/dia/semana")
- [ ] Prova social com nomes reais
- [ ] Garantia em destaque
- [ ] Ancoragem de preco (valor original riscado → valor atual)

### 2.8 UX / Emotional Design

- [ ] Fluxo narrativo: problema → solucao → prova social → autoridade → oferta → objecoes → fechamento
- [ ] Espacamento generoso ("o site respira")
- [ ] Tipografia serif para headlines (emocional) + sans para corpo (legibilidade)
- [ ] Paleta quente e coerente com a proposta
- [ ] Botoes com feedback de toque (`:active { transform: scale(0.98) }`)
- [ ] Autoplay de carousel >= 8s (ou desativado no mobile)

---

## 3. Checklist de Otimizacao de LP Existente

Use quando tiver uma LP pronta e quiser elevar a qualidade. Este foi o processo do EP-11.

### 3.1 Analise (Dia 0)

1. Rodar analise com 3 perspectivas:
   - **UX/UI Design** — hierarquia visual, tipografia, paleta, copy, componentes, responsividade, acessibilidade, performance percebida, emotional design
   - **Tecnico** — performance (LCP, CLS, FCP), SEO, acessibilidade tecnica, seguranca, code quality
   - **Marketing/CRO** — funil AIDA, proposta de valor, pricing, prova social, objecoes, urgencia, CTAs, upsell

2. Pontuar cada dimensao (1-10)
3. Gerar Top 10 melhorias priorizadas por impacto x esforco
4. Definir roadmap em waves (quick wins → core → polish)

### 3.2 Wave 1 — Quick Wins (Dia 1, ~2-3h)

**Performance:**
- [ ] Hero image: remover `loading="lazy"`, adicionar `fetchpriority="high"` + preload
- [ ] Adicionar `width`/`height` em todas as imagens
- [ ] Converter imagens para WebP (quality 85, max 1200-1440px largura)
- [ ] Implementar `<picture>` com fallback JPG
- [ ] Verificar `font-display: swap` no Google Fonts

**SEO:**
- [ ] Title tag otimizada (keyword + marca, ~60 chars)
- [ ] Meta description completa (150-160 chars, inclui beneficio + preco)
- [ ] Canonical URL
- [ ] OG tags completas + OG image 1200x630
- [ ] Twitter card tags
- [ ] JSON-LD structured data

**Seguranca:**
- [ ] Headers de seguranca no vercel.json
- [ ] `rel="noopener noreferrer"` em todos os links externos
- [ ] `lang` correto no html tag

### 3.3 Wave 2 — Core (Semana 1, ~4-6h)

**Conversao:**
- [ ] FAQs tratando objecoes principais do mercado
- [ ] Contextualizacao de preco
- [ ] Micro-copy sob CTAs
- [ ] CTA adicional apos prova social

**Acessibilidade:**
- [ ] ARIA no carousel (region, roledescription, tablist, aria-selected)
- [ ] ARIA no accordion (aria-expanded, aria-controls)
- [ ] Skip navigation
- [ ] Contraste WCAG AA (>= 4.5:1)
- [ ] Touch targets >= 44x44px

### 3.4 Wave 3 — Polish (Semana 2, ~3-4h)

- [ ] Autoplay carousel ajustado (>= 8s)
- [ ] Footer alinhado com tom do site
- [ ] Feedback de toque nos CTAs (:active)
- [ ] Simplificar componentes complexos se necessario

---

## 4. O Que Foi Implementado no EP-11

### 4.1 Commits

| Commit | Descricao |
|--------|-----------|
| `2c4eabf` | Wave 1: WebP (98% menor), hero preload, SEO estrutura, seguranca, EP-11 + 6 stories |
| `56cab6d` | Copy aprovada: 3 FAQs, OG tags, micro-copy, preco/aula |
| `428667b` | Fix: layout picture + title tag |
| `c445dd2` | Acessibilidade: ARIA carousel/accordion, skip nav, contraste, touch targets |
| `a454bfc` | Polish UX: footer quente, autoplay 8s, CTA active |
| `13c11f8` | Fix: remover selos SVG (nao aprovados) |
| `0b3bb20` | Style: preco/aula mais delicado |
| `f99dcf6` | Fix: revert footer para claro + ajuste cor preco |

### 4.2 Impacto em Numeros

| Metrica | Antes | Depois |
|---------|-------|--------|
| Peso total imagens | ~100MB | ~2MB (98% reducao) |
| OG tags | 0 | 8 tags completas |
| Structured data | ausente | JSON-LD Course |
| Meta description | 137 chars | 163 chars otimizada |
| ARIA roles | 0 | 15+ (carousel, accordion, tabs) |
| FAQs | 6 | 9 (3 objecoes novas) |
| Links protegidos | 0 `noreferrer` | 6/6 com `noreferrer` |
| Touch targets dots | 8px | 44px |
| Contraste text-secondary | 4.2:1 (falha) | 5.2:1 (WCAG AA) |

### 4.3 Arquivos Modificados

- `outputs/lp-namaser/index.html` — todas as mudancas de codigo
- `outputs/lp-namaser/vercel.json` — X-Frame-Options DENY
- `outputs/lp-namaser/img/*.webp` — 14 imagens WebP criadas
- `outputs/lp-namaser/img/og-namaser.jpg` — OG image 1200x630

---

## 5. O Que Ficou Pendente

### 5.1 Decisoes da Stakeholder (Gaby)

| Item | Opcoes Levantadas | Status |
|------|-------------------|--------|
| Countdown/deadline no preco | 1) So texto com data. 2) Tag visual sutil. 3) Timer suave em dias | Pendente |
| Videos YouTube nos depoimentos | Existem no YouTube, avaliar embed | Pendente |
| Numero real de alunas | Usar numero real (ex: "347 alunas") | Pendente — Gaby precisa informar |

### 5.2 Melhorias Futuras (CRO)

| Item | Nota da Analise | Descricao |
|------|----------------|-----------|
| Reordenar secoes | Funil 8/10 | Mostrar "Para Quem" (dor) ANTES do Reframe filosofico — testar com dados |
| Tiers de preco | Pricing 6.5/10 | Considerar Basico/Completo/VIP — decisao de produto |
| Order bump Hotmart | Upsell 3/10 | "Kit Meditacao Guiada +R$27" no checkout — configurar na Hotmart |
| Upsell pos-compra | Upsell 3/10 | Sessao individual com Gaby (R$197-297) — configurar na Hotmart |
| Exit-intent popup | Urgencia 4/10 | Lead magnet "7 dias de yoga gratis" — requer email marketing |
| Meta Pixel + Google Tag | Urgencia 4/10 | Remarketing para visitantes que nao compraram |
| Comparacao com alternativas | Proposta 7/10 | Diferenciar de YouTube gratis, apps como Calm/Down Dog |
| Modelo assinatura | Upsell 3/10 | R$29,90/mes com aulas novas mensais — LTV maior |
| Programa de indicacao | Upsell 3/10 | "Traga uma amiga e ganhe 1 mes gratis" |

### 5.3 Melhorias Tecnicas Menores

| Item | Descricao |
|------|-----------|
| Self-host Google Fonts | Eliminar render-blocking externo |
| Accordion multiplos abertos | Permitir abrir varios itens simultaneamente |
| Pre-commit hook | Corrigir hook quebrado pela migracao AIOS→AIOX |
| Lighthouse formal | Rodar Lighthouse antes/depois e documentar scores |

---

## 6. Decisoes Tomadas e Justificativas

| Decisao | Justificativa |
|---------|---------------|
| Fotos de alunas nos depoimentos: NAO | Decisao do stakeholder — privacidade/praticidade |
| CTA sticky mobile (rodape): NAO | Ja existe CTA sticky no header |
| Selos de pagamento SVG: REMOVIDO | Stakeholder nao aprovou o visual |
| Contraste #5D5145 (opcao 2) | Passa WCAG AA (5.2:1), mudanca visual minima aprovada |
| Footer claro (--bg-accent) | Stakeholder preferiu sobre escuro — mantém tom quente |
| Autoplay 8s (nao desativar) | Stakeholder preferiu manter autoplay, so aumentar intervalo |
| Title tag "Yoga e presenca para a vida real" | Equilibrio entre tom da marca + SEO keyword "yoga" |
| Copy via squad Light Copy | Constraint: @dev nunca cria texto, squad LC produz, Gaby aprova |

---

## 7. Processo de Trabalho (Fluxo de Agentes)

O EP-11 seguiu este fluxo:

```
1. @aiox-master — Discussao inicial da analise, planejamento
2. @pm (Morgan) — Criou EP-11 com 6 stories em 3 waves
3. @sm (River) — Criou as 6 stories detalhadas
4. @po (Pax) — Validou todas as stories (batch, GO 9-10/10)
5. @dev (Dex) — Implementou Wave 1 (11.1, 11.2, 11.5)
6. @squad-chief → @lc-rewriter — Produziu copy para FAQs, title, OG, micro-copy
7. @dev (Dex) — Implementou copy aprovada (11.3)
8. @devops (Gage) — Push + deploy
9. @dev (Dex) — Implementou acessibilidade (11.4)
10. @devops (Gage) — Push + deploy
11. @ux (Uma) — Propôs opcoes para 11.6 (carousel, footer, selos)
12. @dev + @ux — Implementou polish UX (11.6)
13. @devops (Gage) — Push + deploy
14. Iteracoes de ajuste fino (footer, preco, selos) com aprovacao do stakeholder
15. @architect (Aria) — Este documento
```

### Constraints que funcionaram bem:

- **Copy blocker** — Impedir @dev de inventar texto evitou retrabalho
- **Aprovacao visual** — Apresentar opcoes antes de implementar evitou rollbacks
- **Waves** — Priorizar quick wins primeiro deu resultado visivel rapido
- **Batch validation** — PO validar todas as stories de uma vez foi eficiente

### O que poderia melhorar:

- Rodar Lighthouse formal antes/depois para ter numeros concretos
- Ter a OG image pronta antes de comecar (evitar iteracoes durante dev)
- Decisoes de stakeholder (countdown, videos) poderiam ter sido feitas antes de iniciar

---

## 8. Template de Analise de LP (3 Squads)

Para futuras analises, usar esta estrutura:

### Squad UX/UI (9 dimensoes)
1. Hierarquia Visual & Layout (peso visual, fluxo, espacamento)
2. Tipografia (escala, familias, legibilidade)
3. Paleta de Cores (coerencia, contraste, acessibilidade)
4. Copywriting & UX Writing (headlines, CTAs, tom)
5. Componentes UI (botoes, cards, accordions, carousels)
6. Responsividade (mobile-first, breakpoints, touch targets)
7. Acessibilidade (ARIA, skip nav, semantica, alt texts)
8. Performance Percebida (lazy loading, animacoes, skeleton)
9. Emotional Design (coerencia tom-visual, micro-interacoes)

### Squad Tecnico (5 dimensoes)
1. Performance (LCP, CLS, FCP, Core Web Vitals)
2. SEO Tecnico (meta tags, OG, JSON-LD, canonical, sitemap)
3. Acessibilidade Tecnica (ARIA, contraste, keyboard nav)
4. Seguranca (headers, CSP, links, CORS)
5. Code Quality (organizacao, componentizacao, manutencao)

### Squad Marketing/CRO (8 dimensoes)
1. Funil de Vendas (AIDA, sequencia de secoes)
2. Proposta de Valor (USP, diferenciacao)
3. Pricing Strategy (ancoragem, contextualizacao, tiers)
4. Prova Social (depoimentos, numeros, midia)
5. Tratamento de Objecoes (FAQs, garantia)
6. Urgencia & Escassez (deadline, vagas, countdown)
7. CTAs (posicionamento, copy, micro-copy)
8. Upsell / Cross-sell (order bump, pos-compra)

### Pontuacao
- Cada dimensao: nota 1-10
- Score por squad: media das dimensoes
- Top 10 global: priorizadas por impacto x esforco
- Roadmap: waves (quick wins → core → polish)

---

*Documento gerado por Aria (@architect) — EP-11 NamaSer LP Optimization*
*Baseado na analise de 14/03/2026 e implementacao de 14-15/03/2026*
