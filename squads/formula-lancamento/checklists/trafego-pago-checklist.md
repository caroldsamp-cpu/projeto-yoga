# Checklist: Trafego Pago para Lancamentos

**Gerado de:** `trafego-pago-sop.md`
**Depende de:** `base-fundamentos-checklist.md` (Produto + Oferta + Lista existentes)
**Pattern:** 1:1 com o SOP — cada checkbox mapeia para um step ou guardrail

---

## GATE: Infraestrutura Tecnica

### Step 1: Ativos Meta Ads

- [ ] Pagina do Facebook criada (perfil empresarial)
- [ ] Perfil Comercial do Instagram criado (NAO criador de conteudo, NAO pessoal)
- [ ] Gerenciador de Negocios (Business Manager) configurado
- [ ] Conta de Anuncios criada dentro do Gerenciador
- [ ] Pixel do Facebook criado
- [ ] Pixel conectado a Conta de Anuncios (Configuracoes do Negocio → Conjunto de Dados → Conectar Ativos)

---

### Step 2: Ativos Google Ads

- [ ] Conta Google Ads criada
- [ ] Canal do YouTube vinculado a conta Google Ads
- [ ] Evento de conversao criado MANUALMENTE (nao via "Events in Web")
- [ ] Global Site Tag copiada
- [ ] Snippet de Evento de Conversao copiado
- [ ] Opcao "Usar o Gerenciador de Tags do Google" disponivel no evento

---

### Step 3: Dominio e DNS

- [ ] Dominio comprado (curto, facil de lembrar e pronunciar)
- [ ] DNS apontado para Cloudflare
- [ ] SSL ativo no Cloudflare (automatico)
- [ ] Dominio verificado no Facebook (registro TXT no DNS)
- [ ] Dominio configurado no HotmartPages
- [ ] Opcionalmente: .com.br E .com comprados

---

### Step 4: Google Tag Manager (GTM)

- [ ] Conta GTM criada
- [ ] Container Web criado
- [ ] Codigo GTM instalado em TODAS as paginas (cabecalho + corpo)

**Tags "All Pages":**
- [ ] Tag: Pixel do Facebook (codigo base)
- [ ] Tag: Global Site Tag do Google (codigo base)
- [ ] Tag: Vinculador de Conversoes do Google

**Tags "Pagina de Obrigado":**
- [ ] Tag: CompleteRegistration (Facebook)
- [ ] Tag: Snippet de Evento de Conversao (Google)

**Verificacao:**
- [ ] Tag Assistant (extensao Google) confirma tags disparando
- [ ] Meta Pixel Helper confirma pixel funcionando
- [ ] Testado com bloqueador de anuncios DESATIVADO

---

### Step 5: Paginas e Publicos

**Paginas:**
- [ ] Pagina de Inscricao publicada
- [ ] Pagina de Obrigado publicada
- [ ] GTM instalado em ambas as paginas

**Publicos Meta:**
- [ ] Pagina de Inscricao (visitantes)
- [ ] Pagina de Obrigado (convertidos)
- [ ] Envolvimento Instagram 7D
- [ ] Envolvimento Instagram 30D
- [ ] Envolvimento Instagram 90D
- [ ] Seguidores do Instagram

**Publicos Google:**
- [ ] Visitantes pagina de inscricao
- [ ] Visitantes pagina de obrigado
- [ ] Retencao YouTube 3D
- [ ] Retencao YouTube 7D
- [ ] Retencao YouTube 14D
- [ ] Retencao YouTube 30D
- [ ] Retencao YouTube 60D
- [ ] Retencao YouTube 90D
- [ ] Retencao YouTube 180D
- [ ] Retencao YouTube 365D

**Guardrail YouTube:**
- [ ] "Pre-preenchimento" ativado (30 dias)
- [ ] YouTube Studio → Canal → Avancadas → "Anuncios com base em interesse" DESATIVADO

---

## FASE 1: DISTRIBUICAO DE CONTEUDO

### Step 6: Campanha de Audiencia Externa

- [ ] Campanha criada com objetivo: Engajamento
- [ ] Publico: Interesses ou Lookalike (NAO seguidores)
- [ ] Posicionamentos manuais: Feed FB, Feed IG, Feed Perfil IG, Reels IG, Reels FB
- [ ] Orcamento diario: 70% da verba de distribuicao
- [ ] Anuncios: publicacoes existentes do Instagram (Reels organicos)
- [ ] Sem botao de CTA (objetivo e distribuir)
- [ ] Reels selecionados por performance organica (planilha de metrificacao)

---

### Step 7: Campanha de Aquecimento Interno

**Pre-requisito:**
- [ ] 10+ semanas de distribuicao externa concluidas
- [ ] Orcamento minimo R$15/dia disponivel

**Campanha:**
- [ ] Objetivo: Engajamento (com publicacao)
- [ ] Publico personalizado: Seguidores do Instagram
- [ ] Anuncios: publicacoes existentes (Reels)
- [ ] Metrica acompanhada: Visualizacoes 95% + Custo por 95%

---

### Step 8: Distribuicao Google (YouTube)

- [ ] Campanha de Video (In-Feed) criada
- [ ] Estrategia de lance: CPV
- [ ] Campanhas separadas: Nutella vs Raiz
- [ ] Segmentacao: interesses, topicos, canais semelhantes

---

## FASE 2: CAPTACAO DE LEADS

### Step 9: Planejamento de Investimento

- [ ] Tipo de lancamento definido: ( ) Semente ( ) Classico
- [ ] Split calculado: ( ) 80/20 (Semente) ( ) 85/15 (Classico)
- [ ] Orcamento de remarketing subdividido: 5% lembrete / 60% CPL / 25% carrinho
- [ ] Planilha de investimento preenchida

---

### Step 10: Campanhas Meta Ads — Captacao

- [ ] Campanha criada com objetivo: Leads/Conversoes
- [ ] Evento de conversao: Lead (ou CompleteRegistration)
- [ ] Orcamento: diario por conjunto de anuncios

**Hierarquia de publicos com exclusoes:**
- [ ] Conjunto 0.0: Envolvimento 7D (exclui: PO)
- [ ] Conjunto 0.1: Envolvimento 30D (exclui: 7D + PO)
- [ ] Conjunto 0.2: Envolvimento 90D (exclui: 30D + PO)
- [ ] Conjunto 1.0: Semelhante 1% (exclui: todos envolvimentos + PO)
- [ ] Conjunto 1.1: Semelhante 2-3% (exclui: Semelhante 1% + PO)
- [ ] Conjunto 2.0: Interesses (exclui: todos acima + PO)

**Criativos:**
- [ ] 3-4 anuncios por conjunto (maximo)
- [ ] Eventos PADRAO do Meta utilizados (nao personalizados)

---

### Step 11: Campanhas Google Ads — Captacao

- [ ] Search: palavras-chave de intencao + CPA target
- [ ] YouTube (TrueView for Action): video com CTA overlay
- [ ] Display: banners em rede de sites
- [ ] Exclusoes aplicadas (mesma hierarquia)

---

### Step 12: Campanhas Alternativas

- [ ] 2-5 campanhas alternativas criadas para testar bolsas de audiencia
- [ ] Opcoes testadas: ( ) Estados ( ) Genero ( ) Caixinha pergunta ( ) Exterior ( ) Faixa etaria ( ) Interesses perifericos ( ) Dispositivo

---

### Step 13: Otimizacao de Captacao

**Criativos:**
- [ ] Novos criativos testados 2x por semana
- [ ] Maximo 3-4 anuncios ativos por conjunto

**Publicos:**
- [ ] Novos publicos testados 1-2x por semana
- [ ] Variavel isolada em testes (mesmo criativo, mesma pagina, mesmo orcamento)

**Orcamento:**
- [ ] Regra 4x CPL aplicada antes de decidir sobre conjunto
- [ ] Tabela Dinamica analisada (gasto vs resultado)
- [ ] Conjuntos com 4x CPL sem conversao pausados ou realocados

---

## FASE 3: REMARKETING DE CPL

### Step 14: Remarketing de Antecipacao (Lembrete)

**Pre-requisito:**
- [ ] Minimo 1000 inscritos
- [ ] 7+ dias apos inicio da captacao

**Campanha:**
- [ ] Objetivo: Reconhecimento (Awareness)
- [ ] Frequencia: 1 impressao a cada 1-2 dias
- [ ] Conjunto 1 (80%): Inscritos lancamento atual
- [ ] Conjunto 2 (20%): Contagem regressiva
- [ ] Criativos: Imagem/calendario + CTA "Coloque no despertador"
- [ ] Destino: Link grupo WhatsApp/Telegram ou sininho YouTube
- [ ] Termino: 2 dias antes do CPL

---

### Step 15: Remarketing CPL — Ao Vivo

**Pre-requisito:**
- [ ] CPLs agendados
- [ ] Criativos de remarketing prontos (Step 18)
- [ ] Deep links configurados (Bit.ly/URLgenius) para Meta → YouTube

**Para CADA CPL (repetir 4x):**

**Campanha "Aula Hoje" (40% verba CPL):**
- [ ] CPL 1: Criada e agendada (7-8h ate 19h)
- [ ] CPL 2: Criada e agendada
- [ ] CPL 3: Criada e agendada
- [ ] CPL 4: Criada e agendada

**Campanha "Estou Ao Vivo" (60% verba CPL):**
- [ ] CPL 1: Criada e agendada (19h ate 20:30)
- [ ] CPL 2: Criada e agendada
- [ ] CPL 3: Criada e agendada
- [ ] CPL 4: Criada e agendada

**Hierarquia em cada campanha:**
- [ ] Conjunto 0.0: Inscritos lancamento atual
- [ ] Conjunto 0.1: Envolvimento 30D (exclui inscritos)
- [ ] Conjunto 0.2: Lista total email (exclui envolvimento + inscritos)

**Google — Estrategia Lance Virada:**
- [ ] Campanhas sobem com orcamento minimo (R$5)
- [ ] 1h antes do CPL: orcamentos virados para valores reais
- [ ] Lances agressivos configurados (~10x menor que orcamento)
- [ ] Hierarquia decrescente de lances por conjunto
- [ ] Apos 80% gasto: lances puxados para baixo

**Campanha "Todas as Aulas" (pos-CPL3):**
- [ ] Video In-Feed no YouTube
- [ ] CPV como estrategia de lance
- [ ] Playlist com aulas nao-listadas
- [ ] Ativa sexta-sabado-domingo antes de abrir carrinho

**Total de campanhas CPL:**
- [ ] 8 campanhas Meta criadas (4 "Aula Hoje" + 4 "Ao Vivo")
- [ ] 8 campanhas Google criadas (4 "Aula Hoje" + 4 "Ao Vivo")
- [ ] = 16 campanhas no total

---

### Step 16: Remarketing CPL — Gravado (alternativo)

- [ ] Blog de lancamento como destino
- [ ] Planilha automatizada para distribuicao de verba
- [ ] Campanhas configuradas sem necessidade de operacao ao vivo

---

## FASE 4: REMARKETING DE CARRINHO ABERTO

### Step 17: Campanhas de Carrinho

**Meta Ads:**
- [ ] Campanha 1: Dia 1 ao penultimo dia ("Inscricoes abertas" + bonus)
- [ ] Campanha 2: Ultimo dia ("Ultimas horas" — escassez)

**Google Ads:**
- [ ] Campanha 1: Display dinamica (Dia 1 ao penultimo)
- [ ] Campanha 2: Display ultimo dia (escassez)

**Publicos:** Mesma hierarquia (inscritos > envolvimento > lista email)
**Destino:** Pagina de vendas → Checkout

**Criativos de carrinho:**
- [ ] Feed
- [ ] Stories
- [ ] Reels
- [ ] Display (1200x628)
- [ ] Video

---

## PREPARACAO TRANSVERSAL

### Step 18: Criativos de Remarketing

- [ ] Criativos de Lembrete prontos (imagem + video)
- [ ] Criativos "Aula Hoje" prontos (imagem + video)
- [ ] Criativos "Ao Vivo" prontos (imagem + video)
- [ ] Criativos "Disponivel" prontos (imagem + video)
- [ ] Criativos "Carrinho Aberto" prontos (imagem + video + display)
- [ ] Criativos "Ultimo Dia" prontos (imagem + video + display)
- [ ] TODOS os criativos tem CTA claro

---

### Step 19: Anuncios Reprovados

- [ ] Anuncios reprovados resubmetidos sem alteracao (1a tentativa)
- [ ] Se persistiu: copy/imagem modificada e resubmetida
- [ ] Palavras proibidas verificadas (saude, financeiro absoluto, antes/depois)

---

### Step 20: Debriefing pos-Lancamento

- [ ] Metricas consolidadas por fase
- [ ] CPL medio documentado
- [ ] CPA documentado
- [ ] ROAS por campanha documentado
- [ ] Publicos vencedores registrados
- [ ] Criativos vencedores registrados
- [ ] Aprendizados anotados para proximo lancamento

---

## Checklist Quality Gate

| Criterio | Req | Status |
|----------|-----|--------|
| Cobertura dos steps | 100% do SOP | 20/20 steps cobertos |
| Mapeamento checkbox para SOP | 1:1 | OK |
| Zero invention | Nenhum checkbox inventado | OK |
| Gates incluidos | Gate infraestrutura + gate final | OK |
| Sequencia logica | Segue ordem do SOP | OK |
| Cobertura das 4 fases | Todas | OK |

**Gate CHECKLIST_QUALITY: PASS (6/6)**

---

*Extraction Date: 2026-03-06*
*Generated from: trafego-pago-sop.md*
