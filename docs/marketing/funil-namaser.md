# Funil NamaSer

**Data:** 2026-03-15
**Status:** Ativo

---

## Visao Geral do Funil

```
TOPO (Descoberta)
  Instagram / YouTube / Aulao presencial / WhatsApp
    ↓ (links UTM)
MEIO (Captura + Experiencia)
  LP namaser.vercel.app
    ↓ (exit-intent popup)
  Captura de email (Google Forms → Google Sheets)
    ↓ (redirect)
  Pagina /respire (video de respiracao guiada 4min)
    ↓ (botao "Quero mais momentos assim")
FUNDO (Conversao)
  Checkout Hotmart (pay.hotmart.com)
    ↓
  Aluna NamaSer
```

---

## Pontos de Entrada (Topo)

| Canal | Link curto | UTM | Rastreamento |
|-------|-----------|-----|-------------|
| Instagram bio | namaser.vercel.app/instagram | instagram / bio | GA4 + Meta Pixel |
| Instagram stories | namaser.vercel.app/stories | instagram / stories | GA4 + Meta Pixel |
| WhatsApp | namaser.vercel.app/whatsapp | whatsapp / direto | GA4 |
| YouTube | namaser.vercel.app/youtube | youtube / descricao | GA4 |
| Email | namaser.vercel.app/email | email / lista | GA4 |
| QR Code (presencial) | namaser.vercel.app/qr | qrcode / presencial | GA4 |

---

## Landing Page (Meio)

**URL:** namaser.vercel.app

**Estrutura de conversao (18 secoes):**
1. Hero (headline + CTA)
2. Transformacao (antes/depois)
3. Reframe (filosofia)
4. Para Quem (identificacao)
5. Metodo LC (como funciona)
6. Trilhas (5 trilhas)
7. Bonus (tapete, reset, oraculo)
8. Depoimentos (video YouTube)
9. Vozes (3 perguntas × cards)
10. Bio Gaby (autoridade)
11. CTA Bridge (transicao)
12. Pricing (valor de pre-lancamento)
13. Garantia (15 dias)
14. FAQ (9 perguntas)
15. CTA Final (respire + foto Gaby)
16. Footer

**Elementos de conversao na LP:**
- CTA sticky no header
- 3+ CTAs distribuidos
- Micro-copy sob CTAs ("Acesso imediato. Garantia de 15 dias. Pagamento seguro.")
- Contextualizacao de preco ("menos de R$1,50/aula")
- Urgencia real ("valor de pre-lancamento · somente ate inicio de abril")
- FAQ tratando objecoes (YouTube gratis, funciona online, tempo/dia)
- Prova social (depoimentos + vozes)

**Exit-intent popup:**
- Trigger: mouse sai da janela (desktop) / scroll up apos 30s (mobile)
- Copy: "Antes de voltar pra correria, respira comigo."
- Captura email → Google Forms → Google Sheets
- Redireciona para /respire
- 1x por sessao

---

## Lead Magnet (Meio → Fundo)

**URL:** namaser.vercel.app/respire

**O que e:** Video de 4 min com a Gaby guiando exercicio de respiracao (cortado do video de vendas, trecho 02:18-06:42)

**Jornada emocional da pagina:**

| Momento | Elemento | Emocao |
|---------|----------|--------|
| Chegada | Logo + breathing glow + paper grain | Calma, reconhecimento |
| Convite | "Respira fundo. Eu te guio a partir daqui." | Confianca, intimidade |
| Controle | "Aperta o play quando estiver pronta." | Autonomia |
| Experiencia | Video (4 min de respiracao guiada) | Presenca, corpo soltando |
| Semente | "Isso que voce sentiu agora? Pode ser o comeco..." | Desejo sutil |
| Pausa | Linha divisoria | Respiro visual |
| Proximo passo | "Quero mais momentos assim" (botao soft) | Decisao natural |
| Acolhimento | "Te espero la dentro." | Pertencimento |

**Botao:** Soft (fundo teal clarinho, nao solido) → checkout Hotmart

---

## Checkout (Fundo)

**Plataforma:** Hotmart
**URL:** pay.hotmart.com/V79262413F
**Produto:** NamaSer
**Preco:** 12x R$14,27 ou R$138 a vista
**Preco original:** R$197 (riscado)

**Rastreamento de vendas:**
- UTM passthrough: script na LP pega utm_source/medium da URL e repassa pro link Hotmart
- Hotmart recebe parametro `src` automatico (ex: src=instagram-stories)
- Meta Pixel: Purchase event via API de Conversoes (server-side)
- GA4: configurado na Hotmart

**Order bump:** Pendente (ideias: Diario do Sadhana R$27)

---

## Rastreamento Completo

| Ferramenta | O que rastreia | Onde ver |
|-----------|----------------|---------|
| Google Analytics (GA4) | Visitantes, origem, tempo, paginas | analytics.google.com |
| Google Tag Manager | Container de todos os scripts | tagmanager.google.com |
| Microsoft Clarity | Gravacoes de sessao, mapas de calor | clarity.microsoft.com |
| Meta Pixel | Visitantes do Instagram/Facebook, remarketing | business.facebook.com/events_manager |
| Google Search Console | Buscas no Google, indexacao | search.google.com/search-console |
| Hotmart (src) | Origem de cada venda | Hotmart → Vendas → src |
| Google Sheets | Emails capturados no popup | Google Sheets (via Forms) |

**IDs:**
- GTM: GTM-PJRZ65PB
- GA4: G-34SDRDQEE2
- Meta Pixel: 919349924221478

---

## Timeline do Lancamento

| Data | Acao |
|------|------|
| Agora → inicio abril | LP ativa com preco de pre-lancamento. Captura de leads via popup. |
| Inicio abril | Pagina fecha. Leads acumulados no Google Sheets. |
| Abril | Preparacao do lancamento. Sequencia de emails para leads. |
| Inicio maio | Lancamento oficial. Preco novo (maior). Trafego pago. |

---

## Metricas a Acompanhar

| Metrica | Onde ver | Meta |
|---------|---------|------|
| Visitantes/dia | GA4 → Tempo real | Baseline antes do lancamento |
| Taxa de captura (popup) | Sheets / GA4 | 3-5% dos visitantes |
| Origem do trafego | GA4 → Aquisicao | Qual canal traz mais |
| Scroll depth | Clarity → Heatmaps | Ate onde as pessoas vao |
| Cliques no CTA | Clarity → Recordings | Quais CTAs convertem |
| Vendas por origem | Hotmart → src | Qual canal vende mais |
| Custo por lead | Meta Ads (futuro) | A definir |

---

## Proximos Passos

| Item | Status | Prioridade |
|------|--------|-----------|
| Sequencia de emails para leads (MailerLite) | Pendente | Alta (antes de abril) |
| Order bump: Diario do Sadhana PDF | Pendente | Media |
| Dominio proprio: gabydrummondyoga.com.br → Vercel | Pendente | Media |
| Trafego pago: Meta Ads | Pendente | Para o lancamento de maio |
| MCP Gmail: envios manuais de email | Pendente | Baixa |
| Quiz de autoconhecimento yogui | Pendente | Pos-lancamento |
| Guia Lunar NamaSer | Pendente | Pos-lancamento |

---

*Documento gerado em 15/03/2026*
*Funil ativo em namaser.vercel.app*
