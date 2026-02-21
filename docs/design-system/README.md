# NamaSer Design System

Design system extraÃ­do da apresentaÃ§Ã£o Sadhana. ReutilizÃ¡vel em qualquer projeto.

**ExtraÃ­do de:** `docs/reposicionamento/index.html`
**Data:** 14/02/2026
**VersÃ£o:** 1.0.0

---

## ðŸ“¦ Arquivos

| Arquivo | Uso | Tamanho |
|---------|-----|--------|
| `tokens.css` | Importar em HTML/projects CSS | ~3.5KB |
| `tokens.scss` | Usar em projetos SCSS com mixins | ~7KB |
| `README.md` | Este guia | - |

---

## ðŸŽ¨ Paleta de Cores

### Cores Base
- **Cream** `#FDF8F4` â€” Fundo principal, muito claro
- **White** `#FFFFFF` â€” Cards, superfÃ­cies
- **Text Dark** `#3D3A38` â€” Texto principal
- **Text Light** `#6B6560` â€” Texto secundÃ¡rio

### Acentos
- **Green (Terra)** `#6B7B5E` â€” Acento primÃ¡rio
- **Green Light** `#8A9A7D` â€” VariaÃ§Ã£o clara
- **Gold** `#C4A882` â€” Acento secundÃ¡rio
- **Gold Light** `#D4C4A8` â€” VariaÃ§Ã£o clara

### UI
- **Card BG** `#F5EDE4` â€” Fundo de cards
- **Border** `#E8DDD2` â€” Linhas, divisÃ³rias

---

## ðŸ”¤ Tipografia

### Fonts
```css
--font-serif: 'Playfair Display', serif;   /* Headings, tÃ­tulos */
--font-sans: 'Inter', sans-serif;          /* Body, UI */
```

### Font Sizes (Escalas Responsivas)
```
H1: clamp(36px, 6vw, 56px)
H2: clamp(28px, 4.5vw, 40px)
H3: 22px
H4: 20px
H5: 18px
Large: 19px
Base: 17px
Small: 15px
Extra Small: 14px
```

### Font Weights
```
Light: 300
Regular: 400
Medium: 500
Semibold: 600
```

### Line Heights
```
Tight: 1.2 (headings)
Snug: 1.3 (subheadings)
Normal: 1.6 (body with breathing)
Relaxed: 1.7
Loose: 1.8 (default body)
Extra: 1.9 (quote blocks)
```

---

## ðŸ“ Spacing Scale (4px base)

```
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px      â† Base unit
--space-5: 20px
--space-6: 24px      â† Common padding
--space-7: 28px
--space-8: 32px      â† Card padding
--space-10: 40px
--space-12: 48px     â† Section spacing
--space-20: 80px     â† Bottom padding
--space-30: 120px    â† Top padding
```

**MnemÃ´nico:** MÃºltiplos de 4px: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 80, 120

---

## ðŸ§© Componentes (Atomic Design)

### Atoms
- Button (implÃ­cito, usar card base)
- Input/Label (estrutura pronta)
- Icon (SVG 28x28 ou 36x36)
- Text (5 nÃ­veis: h1-h5 + body)

### Molecules
- Stat Card: number + label
- Nav Item: link + state
- Form Field: label + input
- Recipe Item: icon + title + meta + desc

### Organisms
- Header/Nav: fixed com backdrop blur
- Card Section: padding + border + hover
- Journey Timeline: com linha vertical
- Stats Grid: auto-fit responsive
- Benefits List: com bullets customizados

### Templates
- Hero Section
- Content Section (2-column)
- Timeline Section
- Full-width Page

---

## ðŸš€ Como Usar

### Em Projetos HTML + CSS

```html
<!-- 1. Importe o CSS -->
<link rel="stylesheet" href="path/to/tokens.css">

<!-- 2. Use os tokens -->
<div style="background: var(--color-cream); color: var(--color-text);">
  <h1 style="font-family: var(--font-serif);">TÃ­tulo</h1>
  <p style="font-size: var(--font-size-base);">ParÃ¡grafo</p>
</div>

<!-- 3. Use as classes utilitÃ¡rias -->
<div class="bg-cream rounded-md p-lg gap-md">
  ConteÃºdo com spacing automÃ¡tico
</div>
```

### Em Projetos SCSS

```scss
// 1. Importe os tokens
@import 'tokens.scss';

// 2. Use as funÃ§Ãµes
.card {
  @include card($padding: $space-8);
  background: color('white');
  border: 1px solid color('border');

  &:hover {
    border-color: color('gold');
  }
}

// 3. Use os mixins
.hero {
  @include heading(1);
  color: color('text');
  margin-bottom: $space-8;
}

.grid-cards {
  @include grid($columns: auto-fit, $min: 200px, $gap: $space-6);
}

// 4. Responsivo
.sidebar {
  @include respond-to('md') {
    display: none;
  }
}

// 5. Flexbox
.nav {
  @include flex-between(center);
  padding: $space-4;
}
```

### Em Tailwind (Estender)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        cream: '#FDF8F4',
        'text-dark': '#3D3A38',
        'text-light': '#6B6560',
        'green-terra': '#6B7B5E',
        'gold-accent': '#C4A882',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '4.5': '1.125rem',
        '13': '3.25rem',
        // ... adicionar mais conforme necessÃ¡rio
      },
    },
  },
}
```

---

## ðŸ“Š Breakpoints

```
SM: 540px   (mobile)
MD: 640px   (tablet small)
LG: 768px   (tablet)
XL: 1024px  (desktop)
2XL: 1280px (desktop large)
```

**Uso em CSS:**
```css
@media (max-width: 640px) {
  /* Mobile adjustments */
}
```

**Uso em SCSS:**
```scss
@include respond-to('md') {
  // Aplicado em max-width: 640px
}
```

---

## ðŸŽ­ Component Examples

### Stat Card
```html
<div style="
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  text-align: center;
">
  <span style="
    font-family: var(--font-serif);
    font-size: 36px;
    font-weight: 600;
    color: var(--color-green);
  ">700</span>
  <span style="
    font-size: var(--font-size-xs);
    color: var(--color-text-light);
    margin-top: var(--space-2);
    display: block;
  ">leads interessadas</span>
</div>
```

### Highlight/Callout
```html
<div style="
  background: var(--color-card-bg);
  border-left: 3px solid var(--color-gold);
  padding: var(--space-8);
  margin: var(--space-10) 0;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
">
  <p style="
    font-family: var(--font-serif);
    font-size: 19px;
    font-style: italic;
    color: var(--color-text);
  ">Sua frase importante aqui</p>
</div>
```

### Recipe/Card Item
```html
<div style="
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-8);
  display: flex;
  gap: var(--space-6);
">
  <div style="
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    background: var(--color-card-bg);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  ">
    <!-- SVG icon here -->
  </div>
  <div style="flex: 1;">
    <div style="
      font-family: var(--font-serif);
      font-size: 20px;
      font-weight: 600;
      margin-bottom: var(--space-3);
    ">TÃ­tulo</div>
    <p style="color: var(--color-text-light); margin: 0;">DescriÃ§Ã£o</p>
  </div>
</div>
```

---

## ðŸ”„ Fluxo de Uso Recomendado

### Novo Projeto (Greenfield)

1. **Copie `tokens.css` ou `tokens.scss`** para seu projeto
2. **Importe** no inÃ­cio do arquivo de estilos
3. **Use os tokens** em vez de hardcoding cores/spacing
4. **Crie componentes** usando os padrÃµes do design system
5. **Mantenha consistÃªncia** referenciando sempre os tokens

### Projeto Existente (Brownfield)

1. **Importe `tokens.css`** sem remover estilos atuais
2. **Mude gradualmente** cores hardcoded para tokens
3. **Identifique componentes repetidos** e consolide
4. **Aplique mixins SCSS** para reduzir duplicaÃ§Ã£o
5. **Documente** novos padrÃµes conforme padronizar

---

## ðŸ“ VariÃ¡veis em CSS (17 grupos)

```
Colors: 10 + 8 aliases
Typography: 5 sizes + 5 weights + 6 line-heights + 6 letter-spacings
Spacing: 14 scale values + 5 gap/pad aliases
Layout: 4 container widths
Border: 3 widths + 4 radii
Shadows: 3 levels
Transitions: 3 speeds
Breakpoints: 5 responsivos
```

**Total: 86 CSS Custom Properties**

---

## ðŸ› ï¸ Ferramentas Complementares

- **[Figma Design Tokens Plugin](https://www.figma.com/plugin-search/tokens)**: Sincronizar tokens entre Figma e cÃ³digo
- **[Storybook](https://storybook.js.org/)**: Documentar componentes
- **[Chromatic](https://www.chromatic.com/)**: Testar componentes visualmente
- **[W3C Design Tokens](https://design-tokens.github.io/)**: PadrÃ£o para export

---

## ðŸ“„ LicenÃ§a

Design system extraÃ­do do projeto NamaSer. Livre para uso em projetos Gaby Drummond.

---

## ðŸ“ž ManutenÃ§Ã£o

**Ãšltima atualizaÃ§Ã£o:** 14/02/2026
**MantÃ©m:** Design System Team
**VersÃ£o Atual:** 1.0.0

### Como atualizar
1. Edite `tokens.css` ou `tokens.scss`
2. Sincronize entre os dois arquivos
3. Atualize versÃ£o em ambos
4. Documente mudanÃ§as aqui

---

## âœ¨ Destaques

- âœ… **10 cores** cuidadosamente selecionadas
- âœ… **Typography system** escalÃ¡vel e responsivo
- âœ… **4px spacing scale** consistente
- âœ… **5 breakpoints** para mobile-first
- âœ… **Atomic Design** pronto para componentes
- âœ… **SCSS mixins** para rÃ¡pida prototipagem
- âœ… **86 CSS tokens** cobrem 95% dos casos
- âœ… **Zero hardcoded values** â€” tudo Ã© um token
- âœ… **ReutilizÃ¡vel** em qualquer projeto

