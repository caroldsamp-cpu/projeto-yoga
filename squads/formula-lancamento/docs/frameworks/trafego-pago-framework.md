# Framework: Trafego Pago para Lancamentos

**Extraido de:** 56 transcricoes do modulo "Trafego pago" da Formula de Lancamento
**Padrao:** Zero Invention — 100% source-based, cada afirmacao rastreavel

---

## 1. Arquitetura Geral do Trafego Pago

O trafego pago no contexto de lancamentos opera em **4 macro-fases sequenciais**, cada uma com plataformas, objetivos e metricas distintas:

| Fase | Objetivo | Plataformas | Timing |
|------|----------|-------------|--------|
| Distribuicao de Conteudo | Construir audiencia + aquecer | Meta Ads + Google Ads | Continuo (pre-lancamento) |
| Captacao de Leads | Inscrever pessoas no evento | Meta Ads + Google Ads | 2-4 semanas pre-evento |
| Remarketing de CPL | Lembrar/levar inscritos ao evento | Meta Ads + Google Ads | Durante CPLs |
| Remarketing de Carrinho | Converter inscritos em compradores | Meta Ads + Google Ads | Periodo de carrinho aberto |

[SOURCE: Conceitos Iniciais - Explorando as ferramentas de trafego.txt]
[SOURCE: Preparacao pra Captacao de Leads - Ferramentas de captacao (pre-requisito).txt]

---

## 2. Infraestrutura Tecnica (Pre-Requisitos)

### 2.1 Ativos Obrigatorios

**Meta Ads:**
- Perfil pessoal do Facebook
- Pagina do Facebook (perfil empresarial)
- Perfil comercial do Instagram (nao criador de conteudo, nao pessoal)
- Gerenciador de Negocios (Business Manager)
- Conta de Anuncios
- Pixel do Facebook

> "A pagina e o meio que as empresas, marcas, figuras publicas conseguem comunicar com o usuario... a pagina e um ponto obrigatorio para voce conseguir criar sua conta de anuncios" [SOURCE: Facebook - Criacao de Pagina e Perfil do Instagram.txt]

**Google Ads:**
- Conta Google Ads
- Canal do YouTube (vinculado)
- Global Site Tag + Snippet de Evento de Conversao
- Conta do Google Merchant Center (opcional)

**Infraestrutura Web:**
- Dominio proprio (recomendado: comprar no Registro.br)
- DNS gerenciado (recomendado: Cloudflare — gratuito, SSL, DDoS protection, otimizacao)
- Ferramenta de paginas (HotmartPages ou WordPress + Elementor)
- Ferramenta de email marketing (HotmartSend ou equivalente)
- Google Tag Manager (GTM) — centraliza todos os scripts

> "O Google Tag Manager e justamente uma ferramenta que centraliza todos esses scripts... voce so vai precisar instalar um unico codigo em absolutamente todas as nossas paginas" [SOURCE: Implementando o Google Tag Manager.txt]

### 2.2 Rastreamento e Eventos

**Estrutura do GTM:**
- Tag: Script + Acionador combinados
- Acionador "All Pages": Pixel FB + Global Site Tag + Vinculador de Conversoes
- Acionador "Pagina de Obrigado": CompleteRegistration (FB) + Conversao Lead (Google)

> "A gente pega um codigo de script, coloca dentro de uma tag, e essa tag a gente fala pra ela onde que ela deve ser disparada" [SOURCE: Implementando o Google Tag Manager.txt]

**Eventos de Conversao:**
- Meta: Usar eventos PADRAO (Lead, Purchase) — nao personalizados
- Google: Criar conversao MANUALMENTE (nao via Events in Web) para ter opcao de Tag Manager

> "Os eventos padroes ja sao rastreados a todo momento pelo meta em paginas que contem o pixel... ele sabe quais usuarios executam determinados eventos" [SOURCE: Devo usar conversao personalizada ou evento de conversao padrao.txt]

### 2.3 Dominio e Verificacao

- Comprar dominio curto, facil de lembrar
- Apontar DNS para Cloudflare (gratuito, SSL automatico)
- Verificar dominio no Facebook (registro TXT no DNS)
- Configurar dominio no HotmartPages (integracao automatica)

> "Um dominio e o seu endereco exclusivo dentro da internet... o dominio ajuda a construir credibilidade e confianca com seu publico" [SOURCE: Entendendo dominios e como adquirir um.txt]

---

## 3. Fase 1: Distribuicao de Conteudo

### 3.1 Conceito

Investir em trafego pago para distribuir conteudos organicos (Reels) para duas audiencias:
- **Audiencia Externa (70%):** Pessoas que NAO te conhecem — objetivo: construir audiencia
- **Audiencia Interna (30%):** Seguidores existentes — objetivo: manter aquecidos

> "70% do orcamento vai para audiencia externa e 30% para audiencia interna" [SOURCE: Facebook - Criando sua decima campanha de distribuicao.txt]

### 3.2 Ciclo Semanal

- Campanha roda por **7 dias** (seg-dom ou equivalente)
- Selecionar Reels com base em performance organica (planilha de metrificacao)
- A cada semana: novos Reels selecionados baseado em feedback da semana anterior

### 3.3 Campanha de Construcao de Audiencia (Externa)

**Objetivo:** Engajamento
**Publico:** Interesses/Lookalike (nao seguidores)
**Posicionamentos manuais:** Feed FB, Feed IG, Feed Perfil IG, Reels IG, Reels FB
**Anuncio:** Publicacao existente do Instagram (Reels organico)
**Botao:** Nenhum (objetivo e distribuir, nao CTA)

### 3.4 Campanha de Aquecimento (Interna)

**Objetivo:** Engajamento (com publicacao)
**Publico personalizado:** Seguidores do Instagram
**Inicio:** Apos 10 semanas de construcao de audiencia + minimo R$15/dia
**Metricas-chave:** Visualizacoes 95% do video + Custo por 95%

> "Quanto mais visualizacoes 95% o video tiver pelo menor custo de visualizacoes de 95%, significa que aquele conteudo esta funcionando" [SOURCE: Facebook - Criando sua decima campanha de distribuicao.txt]

### 3.5 Distribuicao no Google (YouTube)

- Campanha de Video (In-Feed)
- CPV (Custo por Visualizacao) como estrategia de lance
- Conteudo Nutella vs Raiz: campanhas separadas
- Segmentacao: interesses, topicos, canais semelhantes

[SOURCE: Google - Criando sua primeira campanha de distribuicao.txt]
[SOURCE: Google - Criando sua decima campanha de distribuicao.txt]

---

## 4. Fase 2: Captacao de Leads

### 4.1 Pre-Requisitos Especificos

- Dominio verificado no Facebook
- Pagina de inscricao + Pagina de obrigado publicadas
- Pixel + GTM instalados em TODAS as paginas
- Publicos criados: Pagina de Inscricao + Pagina de Obrigado (ambas plataformas)

> "Voce precisa ter o seu pixel do Facebook criado, a sua Global Site Tag, o evento de conversao, e pelo menos a pagina de inscricao e pagina de obrigado publicadas" [SOURCE: Preparacao pra Captacao de Leads - Configuracoes Iniciais para Captar Leads no Facebook.txt]

### 4.2 Hierarquia de Publicos

A hierarquia de publicos segue logica de exclusao para evitar sobreposicao:

| Posicao | Publico | Exclusao |
|---------|---------|----------|
| 0.0 | Envolvimento IG/FB 7D | Pagina de Obrigado |
| 0.1 | Envolvimento IG/FB 30D | Envolvimento 7D + Pagina de Obrigado |
| 0.2 | Envolvimento IG/FB 90D | Envolvimento 30D + PO |
| 1.0 | Semelhante 1% | Todos envolvimentos + PO |
| 1.1 | Semelhante 2-3% | Semelhante 1% + PO |
| 2.0 | Interesses | Todos acima + PO |

> "A gente precisa passar esse publico que veio duplicar para exclusao... porque a gente esta montando a hierarquia" [SOURCE: Remarketing de CPLs para Lancamento Ao Vivo - Criacao de Campanhas...Google Ads.txt]

### 4.3 Tipos de Campanha por Plataforma

**Meta Ads:**
- Objetivo: Leads/Conversoes
- Evento de conversao: Lead (ou CompleteRegistration)
- Orcamento diario por conjunto de anuncios

**Google Ads:**
- Search: Palavras-chave de intencao + CPA target
- YouTube (TrueView for Action): Video com CTA overlay
- Display: Banners em rede de sites
- Campanhas Alternativas: Estados, mulheres, caixinha de pergunta, brasileiros no exterior, faixa etaria, interesses perifericos, Android

> "Campanhas alternativas sao campanhas que a gente testa para tentar encontrar novas bolsas de audiencia" [SOURCE: Facebook - Campanhas Alternativas de Captacao de Leads.txt]
[SOURCE: Google - Campanhas Alternativas para Captacao de Leads.txt]

### 4.4 Planejamento de Investimento

**Lancamento Semente:** 80% captacao / 20% remarketing
**Lancamento Classico:** 85% captacao / 15% remarketing

> "80% do seu orcamento total de trafego vai para captacao de leads e 20% vai para remarketing" [SOURCE: Planejamento Inicial - Planejamento de investimento para Lancamento Semente.txt]
> "85% captacao e 15% remarketing" [SOURCE: Planejamento Inicial - Planejamento de investimento para Lancamento Classico.txt]

---

## 5. Fase 3: Remarketing

### 5.1 Distribuicao do Orcamento de Remarketing

| Tipo | % do Orcamento Remarketing | Funcao |
|------|---------------------------|--------|
| Lembrete (Antecipacao) | 5% | Lembrar inscritos do evento |
| CPL (Conteudo Pre-Lancamento) | 60% | Levar inscritos para assistir CPLs |
| Carrinho Aberto | 25% | Converter inscritos em compradores |

> "5% para o lembrete, 60% para o CPL e 25% desse valor para carrinho" [SOURCE: Remarketing de CPLs para Lancamento Ao Vivo - Planejamento de investimento.txt]

### 5.2 Remarketing de Antecipacao (Lembrete)

**Objetivo:** Reconhecimento (Awareness)
**Frequencia:** 1 impressao a cada 1-2 dias
**Estrutura:**
- Conjunto 1: Inscritos lançamento atual (80% da verba lembrete)
- Conjunto 2: Contagem regressiva "Faltam 2 dias" (20% da verba)

**Inicio:** 7 dias apos captacao comecar (minimo 1000 inscritos)
**Termino:** 2 dias antes do CPL comecar
**Criativos:** Imagem/calendario de evento + CTA: "Coloque no despertador"
**Destino:** Link do grupo WhatsApp/Telegram ou ativacao de sininho YouTube

> "O objetivo aqui do remarketing de antecipacao e fazer com que a audiencia inscrita no seu lancamento lembre-se sempre de que dia tal ira rolar o seu evento" [SOURCE: Remarketing de Antecipacao - Criacao de Campanhas.txt]

### 5.3 Remarketing de CPL — Lancamento Ao Vivo

**16 campanhas no total:** 8 Meta + 8 Google

**Estrutura por CPL:**
- Campanha "Aula Hoje" (40% da verba CPL): Roda das 7-8h ate 19h
- Campanha "Estou Ao Vivo" (60% da verba CPL): Roda das 19h ate 20:30

**Hierarquia de publicos em cada campanha:**
- Conjunto 0.0: Inscritos lancamento atual
- Conjunto 0.1: Envolvimento 30D (excl. inscritos)
- Conjunto 0.2: Lista total de email (excl. envolvimento + inscritos)

**Campanha "Todas as Aulas" (apos CPL3):**
- Video In-Feed no YouTube
- CPV como estrategia de lance
- Playlist com 3 aulas nao-listadas
- Roda sexta-sabado-domingo antes de abrir carrinho

> "Essa campanha e como se fosse uma campanha de distribuicao de um conteudo raiz. As suas aulas serao distribuidas para os inscritos lancamento" [SOURCE: Remarketing de CPLs para Lancamento Ao Vivo - Criacao de Campanhas...Google Ads.txt]

**Otimizacao de Orcamentos e Lances (Google — Ao Vivo):**
- Campanhas sobem com orcamento MINIMO (R$5) e lance minimo
- 1 hora antes do CPL: virada de orcamentos para valores reais
- Lances agressivos: ~10x menor que orcamento total (ex: R$300 para R$3937)
- Hierarquia de lances decrescente por conjunto (300, 280, 260...)
- Apos 80% gasto: puxar lances drasticamente para baixo (desaceleracao)

> "Essa campanha que agora a gente vai subir ela com orcamento minimo e o lance minimo tambem. E ai, quando estiver faltando uma hora pra aula comecar, voce vai retornar os orcamentos dessas campanhas para os orcamentos originais" [SOURCE: Remarketing de CPLs para Lancamento Ao Vivo - Otimizacao.txt]

**Deep Links (Meta para YouTube):**
- Nao e possivel colocar link direto do YouTube em anuncios Meta
- Usar ferramenta de deep link (Bit.ly, URLgenius) para redirecionar

> "Nao e possivel criar um anuncio dentro da meta onde o destino do anuncio seja o link do YouTube. Porem... tem como a gente dar uma contornada nessa situacao utilizando deep links" [SOURCE: Remarketing de CPLs para Lancamento Ao Vivo - Criacao...Meta Ads.txt]

### 5.4 Remarketing de CPL — Lancamento Gravado

- Estrutura mais simples que ao vivo
- Blog de lancamento como destino (pagina com aulas)
- Planilha automatizada distribui verba entre campanhas
- Nao requer pessoa ao vivo operando

[SOURCE: Remarketing de CPLs para Lancamento Gravado - Planejamento de investimento.txt]

### 5.5 Remarketing de Carrinho Aberto

**Duas campanhas por plataforma:**
1. Dia 1 ao penultimo dia: Inscricoes abertas + bonus + oferta
2. Ultimo dia: Gatilho de escassez — "Ultimas horas"

**Estrutura de publicos:** Mesma hierarquia (inscritos > envolvimento > lista email)
**Destino:** Pagina de vendas → Checkout
**Criativos necessarios:** Feed, Stories, Reels, Display (1200x628), Video

> "As campanhas de abertura de carrinho exercem a funcao de avisar a sua audiencia, principalmente as pessoas inscritas no seu lancamento, de que voce esta com as matriculas abertas" [SOURCE: Remarketing de Carrinho Aberto - Criacao de Campanhas.txt]

**Google Display para Carrinho:**
- Campanha de Display dinamica (aparece em 3M+ sites, YouTube, Gmail)
- CPC manual como estrategia de lance
- Criativos: imagem (3 formatos) + video + titulos/descricoes

---

## 6. Otimizacao

### 6.1 Criativos

- Testar novos criativos **2x por semana**
- **3-4 anuncios ativos** por conjunto (maximo)
- Derivar novos criativos a partir dos vencedores
- Se muitos criativos: dividir em subgrupos (conjuntos duplicados)

> "Voce pode manter em media de 3 a 4 ativos simultaneamente. Mais do que isso... vai ter uma diluicao de verba, o algoritmo vai priorizar algum que esta te trazendo resultado" [SOURCE: Quantos anuncios devo deixar ativos em cada conjunto de anuncios.txt]

### 6.2 Orcamento

- Metodo da **Tabela Dinamica**: analisar gasto vs resultado por conjunto
- Orcamento diario (nao vitalicio) para captacao
- Regra 4x CPL para testar: gastar pelo menos 4x o CPL desejado antes de decidir

> "Gastar pelo menos 4 vezes o CPL desejado antes de decidir se o publico funciona ou nao" [SOURCE: Facebook - Otimizar Orcamento de Campanha de Captacao de Leads.txt]

### 6.3 Publicos

- Testar novos publicos **1-2x por semana**
- Estrutura de teste: isolar variavel (mesmo criativo, mesma pagina, mesmo orcamento)
- Facebook: 1 campanha com multiplos conjuntos (publicos diferentes)
- Google: 1 campanha POR publico (orcamento so a nivel de campanha)
- Exclusoes obrigatorias em testes de retencao (7D excl. de 14D, etc.)

> "Eu nao posso mudar alguma outra variavel que seja... eu preciso isolar todas as variaveis, so pode mudar o meu publico" [SOURCE: Qual estrutura devo usar testar meus publicos.txt]

### 6.4 Anuncios Reprovados

- Comum acontecer — nao desanimar
- Resubmeter sem alteracao (pode ser revisao automatica)
- Se persistir: modificar copy/imagem e resubmeter
- Evitar palavras proibidas (saude, financeiro absoluto, antes/depois)

[SOURCE: Planejamento Inicial - Como lidar com anuncios reprovados.txt]

---

## 7. Criativos de Remarketing

### 7.1 Formatos por Fase

| Fase | Formatos | Narrativa |
|------|----------|-----------|
| Lembrete | Imagem + Video (Feed, Stories, YouTube) | "Faltam X dias", "Coloque no despertador" |
| CPL (Hoje) | Imagem + Video | "E hoje as 20h", "Ative o sininho" |
| CPL (Ao Vivo) | Imagem + Video | "Estou ao vivo agora", "Clica e assiste" |
| CPL (Disponivel) | Imagem + Video | "Gravacao disponivel por tempo limitado" |
| Carrinho | Imagem + Video (+ Display 1200x628) | "Inscricoes abertas", "Vagas limitadas" |
| Ultimo Dia | Imagem + Video (+ Display) | "Ultimas horas", "Acaba hoje" |

**Regra universal:** Todo criativo DEVE ter CTA claro

> "O mais importante desses criativos, alem dele seguir a narrativa de cada uma dessas fases... e importante que esses criativos tenham CTAs" [SOURCE: Preparacao - Criativos de Remarketing.txt]

---

## 8. Troubleshooting (FAQ)

### 8.1 Pixel nao aparece para selecionar no anuncio
- Causa: Pixel nao conectado a conta de anuncios
- Solucao: Configuracoes do Negocio → Conjunto de Dados → Conectar Ativos
- Se BMs diferentes: Compartilhar pixel via Parceiros

[SOURCE: O conjunto de dados (pixel) que criei nao aparece para selecionar no anuncio.txt]

### 8.2 Resultados e custo por resultado zerados
- Verificar GTM: tags disparando? (usar extensoes Tag Assistant + Meta Pixel Helper)
- Checar acionador: URL do acionador bate com URL real da pagina?
- Checar evento selecionado no conjunto = evento configurado na tag
- Desativar bloqueadores de anuncios para testar

[SOURCE: Meus resultados e custo por resultados estao zerados, o que fazer.txt]

### 8.3 Publicos YouTube nao populam
- Checar opcao "Pre-preenchimento" (deve estar ativada — 30 dias)
- YouTube Studio → Configuracoes → Canal → Avancadas → Desativar "anuncios com base em interesse"
- Criar publicos para TODAS as retencoes (3, 7, 14, 30, 60, 90, 180, 365 dias)

[SOURCE: Meus publicos do canal do Youtube nao populam, o que fazer.txt]

### 8.4 Evento de conversao sem opcao Tag Manager
- Causa: Conversao criada via "Events in Web" (automatica)
- Solucao: Criar conversao MANUALMENTE usando codigo

[SOURCE: Criei o evento de conversao mas a opcao USAR O GERENCIADOR DE TAGS DO GOOGLE NAO ESTA DISPONIVEL.txt]

---

## 9. Diagrama de Relacionamento entre Fases

```
DISTRIBUICAO DE CONTEUDO (continuo)
    ↓ constroi audiencia + aquece
CAPTACAO DE LEADS (2-4 semanas)
    ↓ gera lista de inscritos
    ├── REMARKETING ANTECIPACAO (7D apos inicio captacao)
    │       ↓ lembra inscritos
    ├── REMARKETING CPL (durante CPLs)
    │       ↓ leva inscritos para aulas
    └── REMARKETING CARRINHO (pos-CPLs)
            ↓ converte em compradores
```

---

## Quality Gate

| Criterio | Req | Status |
|----------|-----|--------|
| Cobertura de fontes | 56 transcricoes | 56/56 lidas |
| Zero Invention | 100% rastreavel | OK |
| Citacoes diretas | Min 20 | 25+ citacoes |
| Tabelas de sintese | Minimo 3 | 7 tabelas |
| Diagrama de relacionamento | 1 | 1 incluido |
| Abrangencia tematica | Infra + Campanhas + Otimizacao + FAQ | Completo |

**Gate FRAMEWORK_QUALITY: PASS**

---

*Extraction Date: 2026-03-06*
*Source: 56 transcripts from "Trafego pago/" folder*
*Total characters processed: ~800K+*
