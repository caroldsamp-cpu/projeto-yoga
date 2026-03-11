# UI Prompt — LP NamaSer (para v0 / Lovable)

**Data:** 2026-03-11
**Story:** 10.3
**Executor:** @ux-design-expert (Uma)
**Status:** Completo
**Iteração:** 1 de 3

---

## Instruções de Uso

1. Copie o prompt completo da seção "PROMPT COMPLETO" abaixo
2. Cole no v0.dev (Vercel) ou Lovable
3. A Gaby revisa o resultado visual
4. Se precisar ajustes, use os "Prompts de Iteração" no final deste documento
5. Máximo 3 iterações documentadas

---

## PROMPT COMPLETO

```
Crie uma landing page de vendas completa para o NamaSer — um programa de yoga online para mulheres que querem construir um ritual diário de presença na vida real. O tom é acolhedor, calmo e convidativo. NUNCA use linguagem de urgência, escassez, culpa ou pressão. A estética é clara, luminosa e elegante.

---

## ESPECIFICAÇÕES VISUAIS

### Paleta de Cores (CLARA E LUMINOSA — NÃO escura)
- Background principal: #FDFBF7 (off-white quente)
- Background secundário: #F5F0EB (creme suave)
- Background accent suave: #EDE8DF (areia)
- Texto principal: #2D2926 (marrom escuro, NÃO preto puro)
- Texto secundário: #6B5E54 (marrom médio)
- Accent primário: #7C8B6F (sage green — verde salvia suave)
- Accent hover: #6A7A5E (sage green escuro)
- Accent secundário: #B8A9C4 (lavanda suave)
- Bordas: #E8E0D6 (bege quente)
- Success: #7C8B6F (mesmo sage)
- Garantia: #F0EDE8 (creme claro)

### Tipografia
- Títulos e citações: font-family "Playfair Display", serif — peso 400 e 600
- Overlines: "Playfair Display", serif, italic, 14px, letter-spacing 0.05em
- Corpo e botões: font-family "Inter", sans-serif — peso 400 e 500
- Escala fluida com clamp():
  - Hero headline: clamp(2rem, 5vw, 3.5rem)
  - Títulos de seção: clamp(1.5rem, 3.5vw, 2.5rem)
  - Subtítulos: clamp(1.1rem, 2.5vw, 1.4rem)
  - Corpo: clamp(1rem, 2vw, 1.125rem)
  - Overlines: clamp(0.75rem, 1.5vw, 0.875rem)
- Line-height: 1.6 para corpo, 1.2 para títulos

### Espaçamento
- Base unit: 8px
- Padding de seções: 64px vertical (desktop), 48px vertical (mobile)
- Padding lateral: 32px (desktop), 16px (mobile)
- Gap entre elementos: 24px
- Gap entre seções: 80px (desktop), 56px (mobile)
- Max-width do container: 1120px, centralizado

### Bordas e Sombras
- Border-radius botões: 12px
- Border-radius cards: 16px
- Border-radius imagens: 16px
- Sombra cards: 0 4px 24px rgba(45, 41, 38, 0.06)
- Sombra hover: 0 8px 32px rgba(45, 41, 38, 0.10)
- Bordas: 1px solid #E8E0D6

### Micro-interações e Animações
- Scroll reveal: fade-in 0.5s + slide-up 20px com easing cubic-bezier(0.4, 0, 0.2, 1)
- Delay incremental entre elementos: 0.1s cada
- Hover nos botões: scale(1.02) + sombra aumenta, transição 0.2s ease
- Hover nos cards de trilha (accordion): translateY(-2px), transição 0.15s ease
- Transição suave no accordion: max-height com ease-in-out 0.3s
- NADA abrupto ou chamativo — tudo fluido e calmo

---

## ESTRUTURA DA PÁGINA (12 seções + footer)

### SEÇÃO 1: HERO
Layout: texto centralizado com imagem de fundo sutil ou ao lado (desktop: split layout)

Conteúdo:
- Nav fixa no topo: Logo "NamaSer" à esquerda (Playfair Display, sage green), mini CTA à direita "Começar meu Sadhana" (botão pequeno, outline)
- Overline: "Yoga na vida real. Sem performance." (Playfair italic, sage green)
- Headline (Playfair Display, grande): "Construa seu Sadhana com constância simples"
- Subtítulo (Inter, #6B5E54): "Um ritual diário de presença para mulheres que querem leveza e calma — sem mudar toda a rotina."
- Botão CTA (sage green, texto branco, grande, 48px altura, full-width no mobile): "Quero conhecer o NamaSer"
- Micro-texto abaixo (Inter, 14px, #6B5E54): "Sem compromisso. Descubra no seu tempo."
- Imagem: placeholder 600x400 com texto "Foto da Gaby em prática real, ambiente claro, natureza, luz natural"
- No mobile: texto acima, imagem abaixo

### SEÇÃO 2: DOR — IDENTIFICAÇÃO
Background: #FDFBF7 (principal)

Conteúdo:
- Overline (Playfair italic): "Você se reconhece?"
- Grid de 4 cards (2x2 desktop, 1 coluna mobile), cada card com:
  - Fundo #F5F0EB, borda 1px #E8E0D6, border-radius 16px, padding 24px
  - Texto em aspas (Inter, 16px, #2D2926), estilo depoimento curto:
    1. "A mente não para. Nem pra dormir."
    2. "Começo algo e paro. Começo e paro."
    3. "Queria um momento só meu no dia."
    4. "Sei que preciso desacelerar, mas como?"
- Texto de transição (Playfair, 20px, centralizado): "Se você sentiu isso, você não está sozinha. E não precisa mudar tudo para mudar algo."

### SEÇÃO 3: REFRAME
Background: #F5F0EB (secundário, faixa inteira)

Conteúdo:
- Citação grande (Playfair Display, clamp(1.5rem, 4vw, 2.5rem), #2D2926, centralizada): "Constância simples transforma mais que intensidade ocasional."
- Texto de apoio (Inter, 18px, #6B5E54, centralizado, max-width 640px): "Você não precisa de uma hora no tapete. Não precisa ser flexível. Não precisa parar tudo. Precisa de um caminho possível — e alguém que caminhe com você."
- Padding vertical generoso: 80px

### SEÇÃO 4: PARA QUEM É
Background: #FDFBF7

Conteúdo:
- Título (Playfair): "O NamaSer é para você se..."
- Lista com 5 itens, cada um com ícone de folha ou check suave em sage green:
  1. "Você tem a vida corrida e quer um ponto de presença no meio do dia"
  2. "Você quer começar yoga mas não sabe por onde (e tem medo de não dar conta)"
  3. "Você já praticou mas não conseguiu manter e quer um caminho com estrutura e acolhimento"
  4. "Você busca leveza e calma sem precisar revolucionar sua rotina"
  5. "Você quer pertencer a um espaço onde não precisa provar nada"
- Espaçamento entre itens: 20px
- Botão CTA (sage green): "Sim, isso faz sentido pra mim"

### SEÇÃO 5: COMO FUNCIONA
Background: #FDFBF7

Conteúdo:
- Título (Playfair): "Como funciona o NamaSer"
- Subtítulo (Inter, #6B5E54): "Seu caminho em 3 passos simples"
- 3 cards lado a lado (desktop) / empilhados (mobile):
  - Card 1: Ícone (círculo sage green com número 1), título "Comece pelo Desafio Sadhana", texto "Escolha 1 ritual de 3-5 min e pratique por 7 dias. Sem tapete, sem roupa especial."
  - Card 2: Ícone (número 2), título "Siga o Caminho de 30 dias", texto "Um guia leve com no máximo 2 aulas por semana, no seu tempo."
  - Card 3: Ícone (número 3), título "Evolua no seu ritmo", texto "5 trilhas completas pra quando você quiser ir mais fundo."
- Cada card: fundo branco, borda sutil, border-radius 16px, padding 32px
- Texto de apoio abaixo (Inter, 14px, sage green): "47% das alunas sentem leveza na primeira prática."

### SEÇÃO 6: O QUE VOCÊ RECEBE
Background: #FDFBF7

Conteúdo dividido em 3 blocos visuais:

**Bloco 1 — "Seu ponto de presença diário" (destaque com fundo #F5F0EB, border-radius 24px, padding 40px)**
- 3 itens com ícone + título + descrição curta:
  1. Ícone estrela/spark → "Desafio Sadhana — 7 dias de ritual" / "Escolha 1 dos 5 rituais de 3-5 min. A vida real é o seu tapete."
  2. Ícone caminho → "Caminho dos Primeiros 30 Dias" / "Guia leve: no máximo 2 aulas por semana. Com carta de boas-vindas da Gaby."
  3. Ícone carta/oráculo → "Oráculo do Sadhana" / "Uma carta reflexiva por dia para usar como intenção da sua prática."

**Bloco 2 — "Quando quiser ir mais fundo" (accordion expandível)**
- Título (Playfair): "5 Trilhas de Yoga"
- Accordion com 5 itens, cada um com nome da trilha + descrição + módulos:
  1. "Fundação do Sadhana" → "Aprenda a trazer presença para sua vida diária." → Comece por Aqui (5 aulas) + Para Quem Nunca Praticou (8 aulas)
  2. "Sadhana Minguante & Nova" → "Práticas mais suaves e introspectivas." → Lua Minguante (9 aulas) + Lua Nova (5 aulas)
  3. "Sadhana Crescente & Cheia" → "Práticas mais dinâmicas e expansivas." → Lua Crescente (11 aulas) + Lua Cheia (9 aulas) + Tutorial Posturas (12 aulas)
  4. "Respiração & Presença" → "Aprofunde seus momentos de presença." → Pranayamas (9 aulas) + Meditações Guiadas (10 aulas)
  5. "Evolução do Sadhana" → "Quando Sadhana vira identidade, a profundidade." → Ao Vivo (10 aulas) + Bônus (6+ aulas) + Teóricas (2 aulas)
- Estilo accordion: borda superior sutil, ícone chevron que rotaciona, padding 20px, transição suave

**Bloco 3 — Bônus (2 cards lado a lado)**
- Card 1: "Reset Mental" / "Meditações curtas no Spotify pra ouvir ao acordar, antes de dormir ou no meio do dia." (ícone headphone/spotify)
- Card 2: "Entrada Sadhana" / "Aula especial de boas-vindas: o que é Sadhana, prática guiada de presença e seu desafio de 7 dias." (ícone porta/entrada)
- Cards com borda sage green sutil, fundo branco

**Resumo visual (barra com ícones, fundo #F5F0EB)**:
- "Ritual diário de 3-5 min · 5 trilhas · 96+ aulas · Oráculo do Sadhana · Reset Mental · Comunidade"

### SEÇÃO 7: PROVA SOCIAL — DEPOIMENTOS
Background: #F5F0EB (faixa inteira)

Conteúdo:
- Overline (Playfair italic): "O que dizem as alunas"
- Título (Playfair): "Mulheres reais, transformações reais"
- Carousel horizontal com 3 cards de depoimento:
  - Cada card: fundo branco, borda sutil, border-radius 16px, padding 32px
  - Texto entre aspas (Inter italic, 16px), nome da aluna em bold, contexto em #6B5E54
  - Placeholder: "[Depoimento real — a ser fornecido pela Gaby]"
  - Atribuição: "— Nome, contexto (ex: mãe de 2, trabalha tempo integral)"
- Placeholder de vídeo: retângulo 16:9, fundo #E8E0D6, ícone play centralizado, texto "Assista o que as alunas sentem após começar"
- Dado quantitativo (Inter, 18px, centralizado): "32 mulheres já praticam com a Gaby na Serra. Agora você pode praticar de onde estiver."
- Botão CTA (sage green): "Quero fazer parte"

### SEÇÃO 8: QUEM É A GABY
Background: #FDFBF7
Layout: texto à esquerda, foto à direita (desktop) / foto acima, texto abaixo (mobile)

Conteúdo:
- Overline (Playfair italic): "Quem vai caminhar com você"
- Título (Playfair): "Gaby Drummond"
- Texto (Inter, 18px, #2D2926, 4-5 linhas):
  "Eu não ensino yoga perfeito. Eu pratico yoga real — no meio da vida, com tudo acontecendo.

  São mais de [X] anos guiando mulheres como você a encontrar presença onde parecia impossível.

  O NamaSer nasceu dos aulões na Serra Gaúcha, onde 32 mulheres já descobriram que constância simples muda tudo. Agora, esse caminho chega até você, onde você estiver."
- Imagem: placeholder 480x560 com texto "Foto da Gaby em ambiente natural, sorrindo, luz natural — NÃO postura de yoga"
- Imagem com border-radius: 16px

### SEÇÃO 9: OFERTA — PRICING
Background: #FDFBF7
Layout: card centralizado

Conteúdo:
- Card com sombra elegante, border-radius 24px, padding 48px, max-width 560px, centralizado
- Overline (Playfair italic, sage green): "Seu caminho começa aqui"
- Título (Playfair, grande): "NamaSer"
- Lista do que inclui (Inter, 16px, ícone check sage green):
  - ✓ 5 trilhas completas
  - ✓ 11 módulos · 96+ aulas
  - ✓ Desafio Sadhana (rituais de 3-5 min por 7 dias)
  - ✓ Caminho guiado dos primeiros 30 dias
  - ✓ Oráculo do Sadhana (carta reflexiva diária)
  - ✓ Reset Mental (meditações no Spotify)
  - ✓ Comunidade de alunas
  - ✓ Acesso imediato à plataforma
- Preço em destaque: "12x de R$14,27" (Playfair, grande, sage green) + "ou R$138 à vista" (Inter, 16px, #6B5E54)
- Botão CTA (sage green, grande, full-width, 52px altura): "Começar meu Sadhana"
- Micro-texto (Inter, 14px, #6B5E54): "Pagamento seguro · Acesso imediato"

### SEÇÃO 10: GARANTIA
Background: #F0EDE8 (faixa suave)

Conteúdo:
- Ícone centralizado: escudo ou coração com check (sage green, 48px)
- Título (Playfair): "60 dias para sentir"
- Texto (Inter, 18px, centralizado, max-width 560px): "Se em 60 dias você sentir que o NamaSer não é o caminho certo pra você, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia."
- Padding vertical: 56px

### SEÇÃO 11: FAQ
Background: #FDFBF7

Conteúdo:
- Título (Playfair): "Perguntas que você pode estar se fazendo"
- 6 itens em accordion, cada um com pergunta (Inter bold, 18px) e resposta (Inter regular, 16px, #6B5E54):
  1. "Não tenho tempo para yoga." → "Seu Sadhana começa com um ritual de 3-5 minutos por dia. Sem tapete, sem roupa especial. As aulas de yoga são o complemento, quando sobrar tempo."
  2. "Não sei se vou conseguir manter." → "O foco não é intensidade. É constância simples, no seu ritmo, sem culpa. Sem metas impossíveis."
  3. "Nunca fiz yoga. Vou conseguir?" → "O NamaSer foi desenhado para acolher iniciantes. Sem performance, sem comparação. Cada prática tem adaptações e você vai no seu tempo."
  4. "Como funciona a plataforma?" → "Você recebe acesso imediato após a inscrição. Escolhe sua trilha, aperta play e pratica. Simples assim. E se tiver dúvida, estamos aqui."
  5. "E se eu não gostar?" → "Você tem 60 dias de garantia. Se não fizer sentido, devolvemos 100% — sem perguntas."
  6. "É só aula gravada?" → "Muito mais. Tem o Desafio Sadhana (ritual de 3-5 min), Oráculo diário, Reset Mental no Spotify, caminho guiado de 30 dias, comunidade e 5 trilhas completas de yoga."
- Estilo: apenas 1 aberto por vez, ícone + ou chevron, transição suave

### SEÇÃO 12: CTA FINAL
Background: accent suave — gradiente sutil de #F5F0EB para #EDE8DF

Conteúdo:
- Citação (Playfair Display, grande, centralizada): "Seu caminho de volta para você começa com um passo simples."
- Texto (Inter, 18px, centralizado): "Se fez sentido o que você leu até aqui, eu te espero no NamaSer."
- Botão CTA (sage green, grande, 52px altura): "Começar meu Sadhana"
- Preço reforço (Inter, 14px, #6B5E54): "12x de R$14,27 · Garantia de 60 dias"
- Padding vertical: 80px

### FOOTER
Background: #2D2926 (escuro, APENAS no footer)

Conteúdo:
- Logo "NamaSer" (Playfair, branco)
- Links (Inter, 14px, branco com opacidade 0.7): "Termos de uso · Política de privacidade"
- Contato: "Fale comigo no WhatsApp" (link)
- Copyright: "© 2026 NamaSer por Gaby Drummond"

---

## REGRAS GLOBAIS

### Responsividade (Mobile-First)
- Breakpoints: mobile < 640px, tablet 640-1024px, desktop > 1024px
- Tudo empilha no mobile — layouts lado a lado apenas no desktop
- CTAs são full-width no mobile com 48px de altura mínima
- Tipografia escala com clamp() — nunca quebra em telas pequenas
- Nav colapsa em hamburger no mobile
- Carousel com swipe horizontal no mobile
- Padding lateral: 16px (mobile), 24px (tablet), 32px (desktop)

### Acessibilidade
- Contraste mínimo WCAG AA (4.5:1 para texto, 3:1 para elementos grandes)
- Focus visible em todos os elementos interativos
- Accordion acessível com aria-expanded e aria-controls
- Alt text em todas as imagens
- Touch targets mínimo 44x44px

### Performance
- Fontes: preload Google Fonts (Playfair Display 400,600,400i + Inter 400,500)
- Imagens: lazy loading para tudo abaixo do fold
- Animações: preferir CSS transforms (GPU) sobre layout properties

### O que NÃO fazer (PROIBIÇÕES ABSOLUTAS)
- ❌ Tema escuro ou cores escuras no fundo (exceto footer)
- ❌ Cores neon ou saturadas
- ❌ Contagem regressiva ou timer
- ❌ "Últimas vagas" ou escassez artificial
- ❌ Linguagem de culpa ("se você não fizer...")
- ❌ Promessas de "transformação em X dias"
- ❌ Tom de coach agressivo
- ❌ Fotos de posturas extremas ou corpos idealizados
- ❌ Stock photos genéricas
- ❌ Animações disruptivas ou chamativas
- ❌ Preço riscado "de X por Y"
- ❌ Pop-ups de saída
```

---

## Prompts de Iteração

### Iteração A — Ajuste de Cores
```
Ajuste a paleta: o sage green (#7C8B6F) está [muito escuro/muito claro/muito saturado]. Quero um tom [mais suave/mais vibrante/mais terroso]. Mantenha toda a estrutura e layout. Apenas ajuste as cores accent.
```

### Iteração B — Ajuste de Tipografia
```
Ajuste a tipografia: quero os títulos [maiores/menores/com mais peso]. O corpo está [muito pequeno/muito grande]. Mantenha Playfair Display + Inter. Apenas ajuste os tamanhos e pesos.
```

### Iteração C — Ajuste de Espaçamento
```
Ajuste o espaçamento: a página está [muito apertada/muito espaçada]. Quero [mais respiro entre seções/menos scroll total/cards maiores/cards menores]. Mantenha toda a estrutura.
```

### Iteração D — Ajuste de Layout
```
Ajuste o layout da seção [NÚMERO]: quero [descrever mudança específica]. Mantenha o restante da página intacto.
```

### Iteração E — Ajuste de Copy
```
Ajuste o texto da seção [NÚMERO]: troque "[texto atual]" por "[texto novo]". Mantenha todo o visual e layout.
```

---

## Notas para a Stakeholder (Gaby)

1. **Imagens placeholder:** O prompt gera retângulos cinza com instruções do que colocar. Você vai substituir por fotos reais depois.
2. **Depoimentos:** Os cards de depoimento vêm com texto placeholder. Envie os depoimentos reais das alunas e eu substituo.
3. **Vídeo:** O placeholder de vídeo na seção de prova social. Quando tiver o vídeo, é só substituir.
4. **Anos de experiência:** Na seção "Quem é a Gaby", tem "[X] anos" — preencha com o número real.
5. **Cores:** Se o sage green não agradar, use a Iteração A para ajustar. Terracota (#C4956A) e lavanda (#B8A9C4) são alternativas.
6. **Ferramenta:** Cole o prompt no [v0.dev](https://v0.dev) ou [lovable.dev](https://lovable.dev). Ambos geram código funcional.

---

## Checklist de Validação Visual (para aprovação da Gaby)

Antes de aprovar, a Gaby deve verificar:

1. [ ] A estética é clara e luminosa? (NÃO escura)
2. [ ] As fontes são elegantes E legíveis?
3. [ ] O tom dos textos é acolhedor e sem pressão?
4. [ ] As cores transmitem calma e natureza?
5. [ ] Funciona bem no celular?
6. [ ] Os CTAs são convites, não ordens?
7. [ ] A seção da Gaby transmite proximidade e confiança?
8. [ ] O preço está claro e sem confusão?
9. [ ] A harmonia geral entre palavras, fontes e cores está boa?
10. [ ] Você se sentiria confortável enviando esse link para suas alunas?

---

*Prompt gerado por Uma (@ux-design-expert) com base no briefing criativo (Story 10.1) e wireframe (Story 10.2).*
*Todas as especificações visuais são sugestões iniciais — a aprovação da Gaby define a versão final.*
