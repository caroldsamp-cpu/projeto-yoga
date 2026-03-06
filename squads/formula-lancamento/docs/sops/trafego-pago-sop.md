# SOP: Trafego Pago para Lancamentos

**Extraido de:** 56 transcricoes do modulo "Trafego pago" da Formula de Lancamento
**Pattern:** Zero Invention — 100% Source-Based Extraction
**Depends on:** `base-fundamentos-sop.md` (Produto + Oferta + Lista ja existentes)

---

## Visao Geral

```
GATE: Infraestrutura → DISTRIBUICAO (continuo) → CAPTACAO DE LEADS (2-4 sem) → REMARKETING CPL (durante CPLs) → REMARKETING CARRINHO (carrinho aberto) → POS: Debriefing
```

---

## GATE: Infraestrutura Tecnica

### Step 1: Configurar Ativos Meta Ads

**Cognitive Type:** Accountability
**Executor:** Human (ou Assistente Tecnico)
**Precondition:** Nenhuma — este e o primeiro step

**Acao:**
1. Criar Pagina do Facebook (perfil empresarial)
2. Criar Perfil Comercial do Instagram (NAO criador de conteudo, NAO pessoal)
3. Configurar Gerenciador de Negocios (Business Manager)
4. Criar Conta de Anuncios dentro do Gerenciador
5. Criar Pixel do Facebook
6. Conectar Pixel a Conta de Anuncios (Configuracoes do Negocio → Conjunto de Dados → Conectar Ativos)

> "A pagina e o meio que as empresas, marcas, figuras publicas conseguem comunicar com o usuario... a pagina e um ponto obrigatorio para voce conseguir criar sua conta de anuncios"
> [SOURCE: Facebook - Criacao de Pagina e Perfil do Instagram.txt]

**Guardrail:**
- Instagram DEVE ser perfil comercial — nao pessoal, nao criador de conteudo
- Pixel DEVE estar conectado a conta de anuncios (causa comum de erro: pixel nao aparece no anuncio)

> "Na aba de configuracoes de seu negocio... vai ter dominios... voce vai clicar em dominios"
> [SOURCE: Como Verificar seu Dominio do Facebook ADs.txt]

**Output:** Pagina FB + Instagram Comercial + BM + Conta de Anuncios + Pixel — tudo conectado

---

### Step 2: Configurar Ativos Google Ads

**Cognitive Type:** Accountability
**Executor:** Human (ou Assistente Tecnico)
**Precondition:** Step 1 concluido

**Acao:**
1. Criar conta Google Ads
2. Vincular canal do YouTube a conta Google Ads
3. Criar evento de conversao MANUALMENTE (nao via "Events in Web")
4. Copiar Global Site Tag + Snippet de Evento

**Decision Rule:**
```
IF criou evento via "Events in Web":
  THEN opcao Tag Manager NAO estara disponivel
  THEN recrie o evento manualmente usando codigo

IF criou manualmente:
  THEN opcao "Usar o Gerenciador de Tags do Google" estara disponivel
  THEN prossiga
```

> "Os eventos padroes ja sao rastreados a todo momento pelo meta em paginas que contem o pixel... ele sabe quais usuarios executam determinados eventos"
> [SOURCE: Devo usar conversao personalizada ou evento de conversao padrao.txt]

**Output:** Conta Google Ads + YouTube vinculado + Evento de conversao manual criado

---

### Step 3: Configurar Dominio e DNS

**Cognitive Type:** Accountability
**Executor:** Human (ou Assistente Tecnico)
**Precondition:** Nenhuma (pode ser paralelo aos Steps 1-2)

**Acao:**
1. Comprar dominio (recomendado: Registro.br)
2. Apontar DNS para Cloudflare (gratuito — SSL, DDoS, otimizacao)
3. Verificar dominio no Facebook (registro TXT no DNS da Cloudflare)
4. Configurar dominio no HotmartPages

> "Um dominio e o seu endereco exclusivo dentro da internet... o dominio ajuda a construir credibilidade e confianca com seu publico"
> [SOURCE: Entendendo dominios e como adquirir um.txt]

**Decision Rule — Escolha do dominio:**
```
IF dominio e curto, facil de lembrar e pronunciar:
  THEN bom dominio

IF dominio e longo ou dificil de entender:
  THEN ruim — refaca

RECOMENDACAO: comprar tanto .com.br quanto .com
```

> "O ideal e que seja facil de lembrar e curto para ficar na cabeca das pessoas"
> [SOURCE: Configurar dominio na HotmartPages + FAQ.txt]

**Verificacao no Facebook:**
1. Gerenciador de Negocios → Seguranca → Dominios → Adicionar
2. Selecionar verificacao por TXT
3. Criar registro TXT no Cloudflare com o codigo fornecido
4. Usar @ como nome (atalho que puxa dominio completo)
5. Voltar ao Facebook → Verificar Dominio

> "Voce vai querer fazer o registro de tester... ele e mais facil, mais simples de entender"
> [SOURCE: Como Verificar seu Dominio do Facebook ADs.txt]

**Output:** Dominio comprado + DNS no Cloudflare + Verificado no Facebook + Configurado no HotmartPages

---

### Step 4: Instalar Google Tag Manager (GTM)

**Cognitive Type:** Accountability
**Executor:** Human (ou Assistente Tecnico)
**Precondition:** Steps 1-3 concluidos

**Acao:**
1. Criar conta no GTM
2. Criar container Web
3. Instalar codigo do GTM em TODAS as paginas (cabecalho + corpo)
4. Criar 3 tags com acionador "All Pages":
   - Tag 1: Pixel do Facebook (codigo base)
   - Tag 2: Global Site Tag do Google (codigo base)
   - Tag 3: Vinculador de Conversoes do Google
5. Criar tags com acionador "Pagina de Obrigado" (URL especifica):
   - Tag: CompleteRegistration (Facebook) — evento de conversao
   - Tag: Snippet de Evento de Conversao (Google)

> "O Google Tag Manager e justamente uma ferramenta que centraliza todos esses scripts... voce so vai precisar instalar um unico codigo em absolutamente todas as nossas paginas"
> [SOURCE: Implementando o Google Tag Manager.txt]

> "A gente pega um codigo de script, coloca dentro de uma tag, e essa tag a gente fala pra ela onde que ela deve ser disparada"
> [SOURCE: Implementando o Google Tag Manager.txt]

**Guardrail:**
- GTM deve estar em TODAS as paginas (inscricao, obrigado, vendas, checkout)
- Usar extensoes para verificar: Tag Assistant (Google) + Meta Pixel Helper (Facebook)
- Desativar bloqueadores de anuncios ao testar

**Output:** GTM instalado com Pixel + GST + Eventos de conversao funcionando

---

### Step 5: Criar Paginas e Publicos

**Cognitive Type:** Accountability
**Executor:** Human (ou Assistente Tecnico)
**Precondition:** Steps 1-4 concluidos

**Acao:**
1. Publicar Pagina de Inscricao (landing page do evento/lancamento)
2. Publicar Pagina de Obrigado (confirmacao de inscricao)
3. Criar publicos personalizados no Meta:
   - Pagina de Inscricao (visitantes)
   - Pagina de Obrigado (convertidos = inscritos)
   - Envolvimento Instagram 7D, 30D, 90D
   - Seguidores do Instagram
4. Criar publicos no Google Ads:
   - Visitantes pagina de inscricao
   - Visitantes pagina de obrigado
   - Retencao YouTube (3, 7, 14, 30, 60, 90, 180, 365 dias)

> "Voce precisa ter o seu pixel do Facebook criado, a sua Global Site Tag, o evento de conversao, e pelo menos a pagina de inscricao e pagina de obrigado publicadas"
> [SOURCE: Preparacao pra Captacao de Leads - Configuracoes Iniciais para Captar Leads no Facebook.txt]

**Guardrail YouTube:**
- Ativar "Pre-preenchimento" (30 dias) nos publicos
- YouTube Studio → Configuracoes → Canal → Avancadas → Desativar "anuncios com base em interesse"
- Criar publicos para TODAS as retencoes (nao so 30 dias)

> [SOURCE: Meus publicos do canal do Youtube nao populam, o que fazer.txt]

**Output:** Paginas publicadas + Todos os publicos criados em ambas plataformas

---

## FASE 1: DISTRIBUICAO DE CONTEUDO

### Step 6: Criar Campanha de Construcao de Audiencia (Externa)

**Cognitive Type:** Synthesis
**Executor:** Human (ou Gestor de Trafego)
**Precondition:** Infraestrutura completa (Steps 1-5) + Reels organicos publicados

**Acao:**
1. Nova campanha → Objetivo: Engajamento
2. Nivel do Conjunto de Anuncios:
   - Publico: Interesses ou Lookalike (NAO seguidores)
   - Posicionamentos manuais: Feed FB, Feed IG, Feed Perfil IG, Reels IG, Reels FB
   - Orcamento diario: 70% da verba de distribuicao
3. Nivel do Anuncio:
   - Usar publicacao existente do Instagram (Reel organico)
   - Sem botao de CTA (objetivo e distribuir, nao converter)
4. Selecionar Reels com melhor performance organica (planilha de metrificacao)
5. Ciclo semanal: trocar Reels a cada 7 dias baseado em resultados

> "70% do orcamento vai para audiencia externa e 30% para audiencia interna"
> [SOURCE: Facebook - Criando sua decima campanha de distribuicao.txt]

**Output:** Campanha de audiencia externa rodando com ciclo semanal

---

### Step 7: Criar Campanha de Aquecimento (Interna)

**Cognitive Type:** Synthesis
**Executor:** Human (ou Gestor de Trafego)
**Precondition:** 10 semanas de construcao de audiencia (Step 6) + minimo R$15/dia disponivel

**Acao:**
1. Nova campanha → Objetivo: Engajamento (com publicacao)
2. Publico personalizado: Seguidores do Instagram
3. Usar publicacao existente (Reels)
4. Metrica-chave: Visualizacoes 95% do video + Custo por 95%

**Decision Rule:**
```
IF menos de 10 semanas de distribuicao externa:
  THEN NAO comece aquecimento interno ainda
  THEN continue apenas com Step 6

IF 10+ semanas de distribuicao + orcamento >= R$15/dia:
  THEN inicie campanha de aquecimento
```

> "Quanto mais visualizacoes 95% o video tiver pelo menor custo de visualizacoes de 95%, significa que aquele conteudo esta funcionando"
> [SOURCE: Facebook - Criando sua decima campanha de distribuicao.txt]

**Output:** Campanha de aquecimento interno rodando

---

### Step 8: Criar Distribuicao no Google (YouTube)

**Cognitive Type:** Synthesis
**Executor:** Human (ou Gestor de Trafego)
**Precondition:** Canal YouTube com videos + Conta Google Ads configurada

**Acao:**
1. Campanha de Video (In-Feed)
2. Estrategia de lance: CPV (Custo por Visualizacao)
3. Separar campanhas: Conteudo Nutella vs Conteudo Raiz
4. Segmentacao: interesses, topicos, canais semelhantes

[SOURCE: Google - Criando sua primeira campanha de distribuicao.txt]
[SOURCE: Google - Criando sua decima campanha de distribuicao.txt]

**Output:** Campanhas de distribuicao YouTube rodando

---

## FASE 2: CAPTACAO DE LEADS

### Step 9: Planejar Investimento de Captacao

**Cognitive Type:** Judgment
**Executor:** Human
**Precondition:** Tipo de lancamento definido + Orcamento total definido

**Decision Rule:**
```
IF Lancamento Semente:
  THEN 80% captacao / 20% remarketing

IF Lancamento Classico:
  THEN 85% captacao / 15% remarketing
```

> "80% do seu orcamento total de trafego vai para captacao de leads e 20% vai para remarketing"
> [SOURCE: Planejamento Inicial - Planejamento de investimento para Lancamento Semente.txt]

> "85% captacao e 15% remarketing"
> [SOURCE: Planejamento Inicial - Planejamento de investimento para Lancamento Classico.txt]

**Distribuicao do remarketing (15-20%):**

| Tipo | % do Remarketing |
|------|-----------------|
| Lembrete (Antecipacao) | 5% |
| CPL | 60% |
| Carrinho | 25% |

> "5% para o lembrete, 60% para o CPL e 25% desse valor para carrinho"
> [SOURCE: Remarketing de CPLs para Lancamento Ao Vivo - Planejamento de investimento.txt]

**Output:** Planilha de investimento com divisao captacao/remarketing

---

### Step 10: Criar Campanhas de Captacao — Meta Ads

**Cognitive Type:** Synthesis
**Executor:** Human (ou Gestor de Trafego)
**Precondition:** Steps 1-5 + 9 concluidos + Paginas publicadas

**Acao:**
1. Nova campanha → Objetivo: Leads/Conversoes
2. Evento de conversao: Lead (ou CompleteRegistration)
3. Orcamento: diario por conjunto de anuncios
4. Montar hierarquia de publicos com exclusoes:

| Conjunto | Publico | Exclusao |
|----------|---------|----------|
| 0.0 | Envolvimento IG/FB 7D | Pagina de Obrigado |
| 0.1 | Envolvimento IG/FB 30D | Envolvimento 7D + PO |
| 0.2 | Envolvimento IG/FB 90D | Envolvimento 30D + PO |
| 1.0 | Semelhante 1% | Todos envolvimentos + PO |
| 1.1 | Semelhante 2-3% | Semelhante 1% + PO |
| 2.0 | Interesses | Todos acima + PO |

5. Criativos: 3-4 anuncios por conjunto (maximo)

> "A gente precisa passar esse publico que veio duplicar para exclusao... porque a gente esta montando a hierarquia"
> [SOURCE: Remarketing de CPLs para Lancamento Ao Vivo - Criacao de Campanhas...Google Ads.txt]

**Guardrail:**
- SEMPRE excluir Pagina de Obrigado de TODOS os conjuntos (evita anunciar para quem ja se inscreveu)
- Usar eventos PADRAO do Meta (Lead, Purchase) — nao personalizados

> [SOURCE: Devo usar conversao personalizada ou evento de conversao padrao.txt]

**Output:** Campanhas de captacao Meta rodando com hierarquia de publicos

---

### Step 11: Criar Campanhas de Captacao — Google Ads

**Cognitive Type:** Synthesis
**Executor:** Human (ou Gestor de Trafego)
**Precondition:** Steps 1-5 + 9 concluidos

**Acao:**
1. **Search:** Palavras-chave de intencao + CPA target
2. **YouTube (TrueView for Action):** Video com CTA overlay
3. **Display:** Banners em rede de sites
4. Aplicar mesma hierarquia de exclusoes

[SOURCE: Google - Criando sua primeira campanha de captacao de leads.txt]

**Output:** Campanhas de captacao Google rodando

---

### Step 12: Criar Campanhas Alternativas

**Cognitive Type:** Creativity + Synthesis
**Executor:** Human (ou Gestor de Trafego)
**Precondition:** Campanhas principais rodando (Steps 10-11)

**Acao — testar novas bolsas de audiencia:**
- Segmentacao por estados
- Segmentacao por genero (ex: mulheres)
- Caixinha de pergunta (remarketing de quem interagiu)
- Brasileiros no exterior
- Faixa etaria especifica
- Interesses perifericos
- Dispositivo (ex: Android)

> "Campanhas alternativas sao campanhas que a gente testa para tentar encontrar novas bolsas de audiencia"
> [SOURCE: Facebook - Campanhas Alternativas de Captacao de Leads.txt]
[SOURCE: Google - Campanhas Alternativas para Captacao de Leads.txt]

**Output:** 2-5 campanhas alternativas em teste

---

### Step 13: Otimizar Campanhas de Captacao

**Cognitive Type:** Analysis + Judgment
**Executor:** Human (ou Gestor de Trafego)
**Precondition:** Campanhas com pelo menos 4x CPL gasto por conjunto

**Acao:**
1. Analisar Tabela Dinamica: gasto vs resultado por conjunto
2. Testar novos criativos 2x por semana
3. Testar novos publicos 1-2x por semana
4. Manter 3-4 anuncios ativos por conjunto

**Decision Rule:**
```
IF conjunto gastou < 4x CPL desejado:
  THEN espere — dados insuficientes para decidir

IF conjunto gastou >= 4x CPL e NAO converteu:
  THEN pausar ou realocar verba

IF conjunto convertendo bem:
  THEN aumentar verba gradualmente
```

> "Gastar pelo menos 4 vezes o CPL desejado antes de decidir se o publico funciona ou nao"
> [SOURCE: Facebook - Otimizar Orcamento de Campanha de Captacao de Leads.txt]

**Guardrail de teste de publicos:**
- Isolar variavel: mesmo criativo, mesma pagina, mesmo orcamento
- Facebook: 1 campanha com multiplos conjuntos
- Google: 1 campanha POR publico (orcamento so a nivel de campanha)

> "Eu nao posso mudar alguma outra variavel que seja... eu preciso isolar todas as variaveis, so pode mudar o meu publico"
> [SOURCE: Qual estrutura devo usar testar meus publicos.txt]

> "Voce pode manter em media de 3 a 4 ativos simultaneamente. Mais do que isso... vai ter uma diluicao de verba"
> [SOURCE: Quantos anuncios devo deixar ativos em cada conjunto de anuncios.txt]

**Output:** Campanhas otimizadas com CPL dentro do target

---

## FASE 3: REMARKETING DE CPL

### Step 14: Remarketing de Antecipacao (Lembrete)

**Cognitive Type:** Synthesis
**Executor:** Human (ou Gestor de Trafego)
**Precondition:** Captacao com minimo 1000 inscritos + 7 dias apos inicio da captacao

**Acao:**
1. Campanha → Objetivo: Reconhecimento (Awareness)
2. Frequencia: 1 impressao a cada 1-2 dias
3. Conjunto 1 (80% verba lembrete): Inscritos lancamento atual
4. Conjunto 2 (20% verba lembrete): Contagem regressiva "Faltam X dias"
5. Criativos: Imagem/calendario + CTA "Coloque no despertador"
6. Destino: Link do grupo WhatsApp/Telegram ou ativacao sininho YouTube

**Timing:**
- Inicio: 7 dias apos captacao comecar
- Termino: 2 dias antes do CPL comecar

> "O objetivo aqui do remarketing de antecipacao e fazer com que a audiencia inscrita no seu lancamento lembre-se sempre de que dia tal ira rolar o seu evento"
> [SOURCE: Remarketing de Antecipacao - Criacao de Campanhas.txt]

**Output:** Campanha de lembrete rodando com frequencia controlada

---

### Step 15: Remarketing de CPL — Lancamento Ao Vivo

**Cognitive Type:** Synthesis + Accountability (operacao em tempo real)
**Executor:** Human (gestor de trafego PRESENTE durante CPLs)
**Precondition:** CPLs agendados + Criativos prontos + Deep links configurados

**Estrutura: 16 campanhas no total (8 Meta + 8 Google)**

**Para CADA CPL (1, 2, 3, 4), criar em cada plataforma:**

| Campanha | Horario | % Verba CPL | Funcao |
|----------|---------|-------------|--------|
| "Aula Hoje" | 7-8h ate 19h | 40% | Avisar que tem aula hoje |
| "Estou Ao Vivo" | 19h ate 20:30 | 60% | Puxar para assistir ao vivo |

**Hierarquia de publicos em cada campanha:**

| Conjunto | Publico | Exclusao |
|----------|---------|----------|
| 0.0 | Inscritos lancamento atual | — |
| 0.1 | Envolvimento 30D | Inscritos |
| 0.2 | Lista total email | Envolvimento + Inscritos |

**Deep Links (Meta → YouTube):**
- Usar Bit.ly ou URLgenius para redirecionar
- NAO e possivel colocar link direto do YouTube em anuncios Meta

> "Nao e possivel criar um anuncio dentro da meta onde o destino do anuncio seja o link do YouTube. Porem... tem como a gente dar uma contornada nessa situacao utilizando deep links"
> [SOURCE: Remarketing de CPLs para Lancamento Ao Vivo - Criacao...Meta Ads.txt]

**Otimizacao Google — Estrategia de Lance Virada:**
1. Subir campanhas com orcamento MINIMO (R$5) e lance minimo
2. 1 hora antes do CPL: virar orcamentos para valores reais
3. Lances agressivos: ~10x menor que orcamento total
4. Hierarquia de lances decrescente por conjunto (300, 280, 260...)
5. Apos 80% gasto: puxar lances drasticamente para baixo

> "Essa campanha que agora a gente vai subir ela com orcamento minimo e o lance minimo tambem. E ai, quando estiver faltando uma hora pra aula comecar, voce vai retornar os orcamentos dessas campanhas para os orcamentos originais"
> [SOURCE: Remarketing de CPLs para Lancamento Ao Vivo - Otimizacao.txt]

**Campanha "Todas as Aulas" (apos CPL3, antes de abrir carrinho):**
- Google: Video In-Feed no YouTube
- CPV como estrategia de lance
- Playlist com aulas nao-listadas
- Roda sexta-sabado-domingo

> "Essa campanha e como se fosse uma campanha de distribuicao de um conteudo raiz. As suas aulas serao distribuidas para os inscritos lancamento"
> [SOURCE: Remarketing de CPLs para Lancamento Ao Vivo - Criacao de Campanhas...Google Ads.txt]

**Output:** 16 campanhas de CPL ao vivo criadas e operadas em tempo real

---

### Step 16: Remarketing de CPL — Lancamento Gravado

**Cognitive Type:** Synthesis
**Executor:** Human (ou Gestor de Trafego)
**Precondition:** CPLs gravados + Blog de lancamento publicado

**Acao:**
1. Estrutura mais simples que ao vivo
2. Blog de lancamento como destino (pagina com aulas)
3. Planilha automatizada distribui verba entre campanhas
4. NAO requer pessoa ao vivo operando

[SOURCE: Remarketing de CPLs para Lancamento Gravado - Planejamento de investimento.txt]

**Decision Rule:**
```
IF lancamento ao vivo:
  THEN usar Step 15 (operacao em tempo real)

IF lancamento gravado:
  THEN usar Step 16 (automatizado, sem operacao ao vivo)
```

**Output:** Campanhas de remarketing gravado rodando automaticamente

---

## FASE 4: REMARKETING DE CARRINHO ABERTO

### Step 17: Criar Campanhas de Carrinho

**Cognitive Type:** Synthesis
**Executor:** Human (ou Gestor de Trafego)
**Precondition:** Carrinho aberto + Pagina de vendas publicada + Criativos prontos

**Acao — duas campanhas por plataforma (Meta + Google):**

| Campanha | Periodo | Narrativa |
|----------|---------|-----------|
| Campanha 1 | Dia 1 ao penultimo dia | "Inscricoes abertas" + bonus + oferta |
| Campanha 2 | Ultimo dia | "Ultimas horas" — gatilho de escassez |

**Hierarquia de publicos:** Mesma (inscritos > envolvimento > lista email)
**Destino:** Pagina de vendas → Checkout

> "As campanhas de abertura de carrinho exercem a funcao de avisar a sua audiencia, principalmente as pessoas inscritas no seu lancamento, de que voce esta com as matriculas abertas"
> [SOURCE: Remarketing de Carrinho Aberto - Criacao de Campanhas.txt]

**Google Display para Carrinho:**
- Campanha de Display dinamica (3M+ sites, YouTube, Gmail)
- CPC manual como estrategia de lance
- Criativos: imagem (3 formatos) + video + titulos/descricoes

**Criativos necessarios:** Feed, Stories, Reels, Display (1200x628), Video

**Output:** 4 campanhas de carrinho (2 Meta + 2 Google) rodando

---

## POS-LANCAMENTO

### Step 18: Preparar Criativos de Remarketing

**Cognitive Type:** Creativity
**Executor:** Human (Designer + Gestor de Trafego)
**Precondition:** Narrativa de cada fase definida

**NOTA:** Este step e de PREPARACAO — deve ser executado ANTES das fases de remarketing.

**Formatos por fase:**

| Fase | Narrativa | CTA |
|------|-----------|-----|
| Lembrete | "Faltam X dias", "Coloque no despertador" | Grupo WhatsApp/sininho |
| CPL (Hoje) | "E hoje as 20h", "Ative o sininho" | Link da aula |
| CPL (Ao Vivo) | "Estou ao vivo agora" | Link da aula |
| CPL (Disponivel) | "Gravacao disponivel por tempo limitado" | Link da aula |
| Carrinho | "Inscricoes abertas", "Vagas limitadas" | Pagina de vendas |
| Ultimo Dia | "Ultimas horas", "Acaba hoje" | Pagina de vendas |

> "O mais importante desses criativos, alem dele seguir a narrativa de cada uma dessas fases... e importante que esses criativos tenham CTAs"
> [SOURCE: Preparacao - Criativos de Remarketing.txt]

**Guardrail:** Todo criativo DEVE ter CTA claro — sem excecao.

**Output:** Banco de criativos por fase, prontos antes do lancamento

---

### Step 19: Lidar com Anuncios Reprovados

**Cognitive Type:** Judgment
**Executor:** Human (ou Gestor de Trafego)
**Precondition:** Qualquer campanha ativa

**Decision Rule:**
```
IF anuncio reprovado:
  THEN resubmeter sem alteracao (pode ser revisao automatica)

IF reprovado novamente:
  THEN modificar copy ou imagem e resubmeter

IF persiste:
  THEN verificar palavras proibidas (saude, financeiro absoluto, antes/depois)
  THEN ajustar e resubmeter
```

> [SOURCE: Planejamento Inicial - Como lidar com anuncios reprovados.txt]

**Guardrail:** NAO desanimar — reprovacoes sao comuns e fazem parte do processo.

**Output:** Anuncios ativos e aprovados

---

### Step 20: Debriefing de Trafego

**Cognitive Type:** Analysis
**Executor:** Human (Gestor de Trafego + Expert)
**Precondition:** Lancamento encerrado

**Acao:**
1. Consolidar metricas por fase (distribuicao, captacao, remarketing, carrinho)
2. Documentar CPL medio, CPA, ROAS por campanha
3. Registrar publicos vencedores e criativos vencedores
4. Anotar aprendizados para proximo lancamento

**Output:** Relatorio de debriefing com metricas e aprendizados

---

## Regras de Decisao Globais

| Condicao | Acao |
|----------|------|
| Infraestrutura incompleta | VETO — nao lance campanhas sem pixel/GTM/paginas |
| Sem pagina de obrigado | VETO — impossivel rastrear conversoes |
| Publicos sem exclusao | VETO — sobreposicao desperdia verba |
| Conjunto com < 4x CPL gasto | ESPERE — dados insuficientes |
| Criativo sem CTA | VETO — refaca o criativo |
| Deep link nao configurado (Meta → YT) | VETO — anuncio nao funcionara |
| Lancamento ao vivo sem gestor presente | ALERTA — remarketing CPL exige operacao real-time |

---

## Excecoes

| Cenario | Tratamento |
|---------|------------|
| Lancamento Gravado (nao ao vivo) | Step 16 substitui Step 15; operacao simplificada |
| Sem canal YouTube | Pular Steps 8 e distribuicao Google; focar em Meta |
| Orcamento muito baixo | Priorizar captacao Meta; remarketing organico (email/WhatsApp) |
| Primeiro lancamento (Semente) | Split 80/20; menos campanhas alternativas; foco no basico |

---

## Handoff

```yaml
handoff:
  from: trafego-pago-sop.md
  to: null  # Trafego e transversal — integra com qualquer tipo de lancamento
  trigger: "lancamento_encerrado = true"
  data_transferred:
    - Metricas por fase (CPL, CPA, ROAS)
    - Publicos vencedores
    - Criativos vencedores
    - Aprendizados de otimizacao
  note: >
    O trafego pago e uma camada que se aplica sobre qualquer tipo de lancamento
    (Semente, Classico, Caixa). Os publicos e aprendizados de um lancamento
    alimentam o proximo. Manter distribuicao de conteudo ativa entre lancamentos.
```

---

## SOP Quality Gate

| Criterio | Req | Status |
|----------|-----|--------|
| Steps documentados | 8+ | 20 steps |
| Task Anatomy (8 campos) | Todos | Por step |
| Decision rules | Todas as bifurcacoes | Cobertas |
| Appendix D | 20+ refs | 30 referencias |
| Zero invention | Verificado | OK |
| Fluxo logico | Start to finish | OK |
| Cobertura das 4 fases | Todas | Distribuicao + Captacao + Remarketing CPL + Carrinho |

**Gate SOP_QUALITY: PASS**

---

## Appendix D: Referencias

| ID | Quote/Referencia | Source | Secao |
|----|-----------------|--------|-------|
| 001 | "A pagina e um ponto obrigatorio para criar sua conta de anuncios" | Facebook - Criacao de Pagina e Perfil do Instagram.txt | Step 1 |
| 002 | "Os eventos padroes ja sao rastreados a todo momento pelo meta" | Devo usar conversao personalizada ou evento de conversao padrao.txt | Step 2 |
| 003 | "Um dominio e o seu endereco exclusivo dentro da internet" | Entendendo dominios e como adquirir um.txt | Step 3 |
| 004 | "O ideal e que seja facil de lembrar e curto" | Configurar dominio na HotmartPages + FAQ.txt | Step 3 |
| 005 | "Voce vai querer fazer o registro de tester" | Como Verificar seu Dominio do Facebook ADs.txt | Step 3 |
| 006 | "O Google Tag Manager centraliza todos esses scripts" | Implementando o Google Tag Manager.txt | Step 4 |
| 007 | "Pega um codigo de script, coloca dentro de uma tag" | Implementando o Google Tag Manager.txt | Step 4 |
| 008 | "Voce precisa ter pixel criado, GST, evento de conversao, paginas publicadas" | Preparacao pra Captacao - Configuracoes Iniciais...Facebook.txt | Step 5 |
| 009 | "70% do orcamento vai para audiencia externa e 30% para interna" | Facebook - Criando sua decima campanha de distribuicao.txt | Step 6 |
| 010 | "Quanto mais visualizacoes 95% pelo menor custo, conteudo esta funcionando" | Facebook - Criando sua decima campanha de distribuicao.txt | Step 7 |
| 011 | "80% captacao / 20% remarketing" | Planejamento de investimento para Lancamento Semente.txt | Step 9 |
| 012 | "85% captacao e 15% remarketing" | Planejamento de investimento para Lancamento Classico.txt | Step 9 |
| 013 | "5% lembrete, 60% CPL, 25% carrinho" | Remarketing de CPLs - Planejamento de investimento.txt | Step 9 |
| 014 | "Precisa passar esse publico para exclusao — montando hierarquia" | Remarketing CPLs - Criacao de Campanhas...Google Ads.txt | Step 10 |
| 015 | "Campanhas alternativas para encontrar novas bolsas de audiencia" | Facebook - Campanhas Alternativas de Captacao.txt | Step 12 |
| 016 | "Gastar pelo menos 4x o CPL desejado antes de decidir" | Facebook - Otimizar Orcamento de Campanha de Captacao.txt | Step 13 |
| 017 | "Isolar todas as variaveis, so pode mudar o publico" | Qual estrutura devo usar testar meus publicos.txt | Step 13 |
| 018 | "Manter de 3 a 4 ativos simultaneamente" | Quantos anuncios devo deixar ativos em cada conjunto.txt | Step 13 |
| 019 | "Remarketing de antecipacao: lembrar audiencia de que dia rola o evento" | Remarketing de Antecipacao - Criacao de Campanhas.txt | Step 14 |
| 020 | "Nao e possivel link direto do YouTube em anuncios Meta — usar deep links" | Remarketing CPLs Ao Vivo - Criacao...Meta Ads.txt | Step 15 |
| 021 | "Subir com orcamento minimo, virar 1h antes da aula" | Remarketing CPLs Ao Vivo - Otimizacao.txt | Step 15 |
| 022 | "Campanha como distribuicao de conteudo raiz para inscritos" | Remarketing CPLs Ao Vivo - Criacao...Google Ads.txt | Step 15 |
| 023 | "Carrinho exerce funcao de avisar que matriculas estao abertas" | Remarketing de Carrinho Aberto - Criacao de Campanhas.txt | Step 17 |
| 024 | "Criativos devem ter CTAs" | Preparacao - Criativos de Remarketing.txt | Step 18 |
| 025 | "Anuncios reprovados — resubmeter sem alteracao" | Como lidar com anuncios reprovados.txt | Step 19 |
| 026 | "Pixel nao aparece: conectar via Configuracoes do Negocio" | O conjunto de dados (pixel) nao aparece para selecionar.txt | Troubleshoot |
| 027 | "Resultados zerados: verificar GTM tags disparando" | Meus resultados e custo por resultados estao zerados.txt | Troubleshoot |
| 028 | "Publicos YouTube: ativar pre-preenchimento, desativar anuncios por interesse" | Meus publicos do canal do Youtube nao populam.txt | Troubleshoot |
| 029 | "Evento sem Tag Manager: criou via Events in Web, recriar manualmente" | Criei evento mas opcao Tag Manager nao esta disponivel.txt | Troubleshoot |
| 030 | "Cloudflare: SSL, DDoS, otimizacao — gratuito" | Entendendo dominios e como adquirir um.txt | Step 3 |

*30 referencias — Gate Appendix D: PASS*

---

*Extraction Date: 2026-03-06*
*Source: 56 transcripts from "Trafego pago/" folder*
*Next: trafego-pago-checklist.md*
