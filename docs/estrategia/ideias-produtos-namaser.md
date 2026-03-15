# Ideias de Produtos e Apps — NamaSer

**Data:** 2026-03-15
**Autor:** Morgan (@pm)
**Status:** Brainstorm aprovado para explorar

---

## Contexto

Ideias geradas a partir dos materiais teoricos existentes (apostilas, livros, transcricoes)
e da analise do ecossistema NamaSer. O objetivo e criar produtos complementares que
alimentem o funil de vendas e aumentem o ticket medio.

### Materiais disponveis (base)

| Material | Local | Conteudo |
|----------|-------|----------|
| Filosofia do Yoga (apostila) | Drive/Materiais de estudo yoga | Fundamentos filosoficos |
| Yoga-Sutra de Patanjali (livro) | Drive/Materiais de estudo yoga | Texto classico completo |
| Bhagavad Gita (livro) | Drive/Materiais de estudo yoga | Texto sagrado |
| Anatomia do Yoga (apostila) | Drive/Materiais de estudo yoga | Corpo + respiracao |
| Anatomia Respiratoria | Drive/Materiais de estudo yoga | Pranayama cientifico |
| Yin Yoga (apostila) | Drive/Materiais de estudo yoga | Pratica restaurativa |
| Vinyasa + Metodologia (apostila) | Drive/Materiais de estudo yoga | Sequenciamento |
| Fases da Lua (material) | Drive/Materiais de estudo yoga | Pratica lunar |
| Visao Holistica do Yoga | Drive/Materiais de estudo yoga | Panorama geral |
| A Arte da Meditacao (livro) | Drive/Materiais de estudo yoga | Meditacao |
| 58 transcricoes de aulas da Gaby | docs/analise-gaby/ | Metodo LC documentado |
| Metodo Leveza Ciclica | docs/analise-gaby/06-Metodo-Leveza-Ciclica.md | Framework proprio da Gaby |
| Video pagina de vendas | Drive/Criativos/IMG_2291.MOV | Video com exercicio de respiracao guiado |
| Ads gravados (scripts) | Drive/Gravacoes aulas/Gravacoes/todos ads gravados.txt | Scripts completos de anuncios |

---

## Produtos para Lancamento de Maio (curto prazo)

### Lead Magnet: Video de Respiracao com a Gaby

**O que e:** Trecho do video de vendas (IMG_2291.MOV) onde a Gaby guia um exercicio de respiracao 4 tempos. Video de 2-3 minutos.

**Por que funciona:** A pessoa SENTE o efeito no corpo. Nao e PDF que fica na gaveta. E experiencia real. Quem sente, quer mais.

**Como usar:**
- Popup exit-intent na LP: "Antes de ir, experimente 2 minutos de respiracao com a Gaby"
- Captura email antes de acessar o video
- Sequencia de emails apos captura (nutrir ate a compra)

**O que precisa:**
- Gaby define o trecho exato do video
- Cortar video (ffmpeg, 10 min)
- Pagina simples de captura (email → video)
- Integrar com email marketing (Hotmart ou Mailchimp)
- Popup exit-intent na LP

**Esforco:** Baixo (1-2 dias)
**Prioridade:** ALTA — fazer antes de abril

---

### Order Bump: Diario do Sadhana (PDF 30 dias)

**O que e:** PDF imprimivel de 30 paginas — 1 por dia. Cada pagina tem:
- Espaco para intencao do dia
- Check de "pratiquei hoje"
- Reflexao de 1 linha
- Frase da Gaby no rodape (extraida das transcricoes)

**Por que funciona:** Reforca o habito de pratica diaria (que e o core do NamaSer). Custo zero de producao. Valor percebido alto. Aparece no checkout Hotmart como "+R$27".

**O que precisa:**
- Design do template (1 pagina, replicar 30x com frases diferentes)
- 30 frases da Gaby (extrair das transcricoes)
- Configurar como order bump na Hotmart

**Esforco:** Baixo (1 dia)
**Prioridade:** ALTA — fazer antes de abril

---

## Apps Web (medio prazo — pos-lancamento)

### App 1: Quiz de Autoconhecimento Yogui (PRIORIDADE)

**O que e:** Aplicacao web interativa com 10 perguntas sobre como a pessoa se sente, seu estilo de vida, e o que busca. No final, resultado personalizado com:
- Seu "perfil yogui" (ex: "Buscadora de Calma", "Guerreira em Pausa")
- Praticas recomendadas das 5 trilhas do NamaSer
- Conceitos filosoficos que se conectam com o perfil
- CTA para o NamaSer

**Por que funciona:**
- Quizzes convertem 30-50% mais que PDFs como lead magnet
- Gera dados sobre o publico (quais perfis sao mais comuns)
- Resultado personalizado cria conexao emocional
- Compartilhavel ("veja meu resultado" → viralidade organica)

**Base de conteudo:**
- ICP NamaSer (docs/estrategia/icp-namaser.md)
- 5 trilhas do NamaSer
- Filosofia do Yoga (apostila)
- Fases da Lua (material)
- Metodo Leveza Ciclica

**Stack:** HTML/CSS/JS (mesma da LP), deploy Vercel
**URL:** namaser.vercel.app/quiz ou quiz.namaser.vercel.app

**Monetizacao:** Gratuito → captura email → funil pro NamaSer
**UTM:** namaser.vercel.app/quiz?utm_source=instagram&utm_medium=stories

**Esforco:** Medio (3-5 dias)
**Prioridade:** MEDIA — ideal para pos-lancamento, pode ser usado como ad criativo

---

### App 2: Guia Lunar NamaSer (PRIORIDADE)

**O que e:** Aplicacao web que mostra:
- Fase da lua ATUAL (atualiza automaticamente via API)
- Pratica recomendada para a fase (baseada no material Fases da Lua da Gaby)
- Conceito filosofico do dia
- Frase da Gaby
- CTA suave pro NamaSer

**Por que funciona:**
- Gera visitas RECORRENTES (a pessoa volta todo dia pra ver a lua)
- Super alinhado com a marca (yoga + lua + ciclos = Leveza Ciclica)
- Compartilhavel ("olha o que a lua de hoje pede")
- Conteudo atualiza sozinho (API de fases da lua)

**Base de conteudo:**
- Material de estudos 2 - Fases da Lua (Drive)
- Metodo Leveza Ciclica (ciclos)
- Transcricoes de aulas sobre lua
- Filosofia do Yoga (conceitos diarios)

**Stack:** HTML/CSS/JS + API de lua, deploy Vercel
**URL:** namaser.vercel.app/lua

**Monetizacao:** Gratuito → visitas recorrentes → CTA pro NamaSer
**Diferencial:** Ja existe o Oraculo do Sadhana (oraculo-do-sadhana.vercel.app) — o Guia Lunar seria complementar, nao substituto

**Esforco:** Medio (3-5 dias)
**Prioridade:** MEDIA — pode ser lancado junto ou apos o NamaSer

---

## Ideias Futuras (longo prazo)

### Enciclopedia Yoga NamaSer

**O que e:** Wiki bonita com conceitos de yoga organizados pela voz da Gaby. Busca "pranayama" e aparece: explicacao da Gaby + referencia das apostilas + video da aula.

**Base:** Todas as apostilas + transcricoes + videos
**Esforco:** Alto (precisa reescrever conteudo com voz da Gaby)
**Monetizacao:** Bonus do NamaSer ou produto separado (R$47)

### Jornada 21 Dias

**O que e:** App web com 1 ensinamento por dia. Dia 1: Ahimsa, Dia 2: Pranayama, etc. Conteudo das apostilas reescrito pela voz da Gaby.

**Base:** Filosofia do Yoga + Anatomia + Metodo LC
**Esforco:** Alto (21 dias de conteudo para criar)
**Monetizacao:** Produto de entrada (R$27-47) ou order bump

### Dicionario Vivo do Yoga

**O que e:** Cada termo (asana, pranayama, chakra) tem: definicao, contexto filosofico, frase da Gaby, video curto.

**Base:** Apostilas + transcricoes
**Esforco:** Alto
**Monetizacao:** Bonus do NamaSer ou lead magnet

---

## Decisoes Tomadas

| Decisao | Motivo |
|---------|--------|
| Tiers de preco: NAO | Manter 1 tier (R$138). Decisao final. |
| Dicionario/Reset como order bump: NAO | Ja existe dentro do NamaSer |
| Apostilas como produto direto: NAO por agora | Sao de terceiros/formacao, precisaria reescrever com voz da Gaby |
| Video de respiracao como lead magnet: SIM | Ja existe gravado, so cortar |
| Diario do Sadhana como order bump: SIM | Custo zero, valor percebido alto |
| Quiz: SIM (pos-lancamento) | Maior conversao que PDF, gera dados |
| Guia Lunar: SIM (pos-lancamento) | Visitas recorrentes, alinhado com marca |

---

*Documento gerado por Morgan (@pm) — Estrategia de Produtos NamaSer*
*Baseado em materiais do Drive + docs do projeto + sessao de brainstorm 15/03/2026*
