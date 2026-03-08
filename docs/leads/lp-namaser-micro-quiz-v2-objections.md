# Micro-Quiz NamaSer v2 (Objeções Reais)

Objetivo: reduzir friccao de decisao e converter com clareza, sem pressao.
Base: ICP + Messaging House + Pesquisa 55 leads.

## 1) Objeções priorizadas

1. "Nunca fiz yoga / tenho medo de nao conseguir."
2. "Nao tenho tempo."
3. "Nao sei se vou manter."
4. "Nao sei como funciona a plataforma."
5. "Tenho receio de nao me encaixar."

## 2) Entrada do quiz (na LP)

Titulo:
"Em 60 segundos, descubra seu melhor primeiro passo no NamaSer"

Subtitulo:
"Responda 5 perguntas e receba uma recomendacao clara para o seu momento."

CTA de entrada:
"Fazer quiz de 1 minuto"

## 3) Perguntas (5) com foco em objeções

### Pergunta 1 - Experiencia
"Como esta sua relacao com yoga hoje?"

1. Nunca pratiquei
2. Ja tentei, mas parei
3. Pratico de vez em quando
4. Ja pratico, mas sem constancia

### Pergunta 2 - Tempo real
"Quanto tempo voce consegue ter na maioria dos dias?"

1. 5 minutos
2. 10 a 15 minutos
3. 20 minutos ou mais
4. Varia muito e nao consigo prever

### Pergunta 3 - Maior trava
"O que mais te impede de manter uma pratica?"

1. Falta de tempo
2. Nao saber por onde comecar
3. Desanimo/inconstancia
4. Vergonha/inseguranca

### Pergunta 4 - O que voce mais precisa agora
"Se pudesse melhorar uma coisa ja esta semana, seria:"

1. Acalmar a mente
2. Soltar tensao no corpo
3. Ter mais energia
4. Me sentir mais presente

### Pergunta 5 - Preferencia de suporte
"Para comecar, voce prefere:"

1. Passo a passo bem guiado
2. Praticas curtas e objetivas
3. Comunidade e incentivo
4. Misturar os tres

## 4) Logica de roteamento (scoring)

### Rota A - "Inicio Acolhido" (iniciante insegura)
Disparo:
1. Q1=1 (nunca pratiquei), ou
2. Q3=2/4 + Q5=1.

Mensagem:
"Voce nao precisa performar para comecar. Seu primeiro passo pode ser simples, guiado e no seu ritmo."

CTA final:
"Comprar e comecar com roteiro para iniciantes"

### Rota B - "Ritmo Possivel" (sem tempo)
Disparo:
1. Q2=1 ou 4, e
2. Q3=1.

Mensagem:
"Seu caminho nao depende de dia perfeito. Com praticas curtas, voce cria presenca no meio da rotina real."

CTA final:
"Comprar e receber trilha de praticas curtas"

### Rota C - "Constancia Gentil" (tenta, mas nao mantem)
Disparo:
1. Q1=2/4, e
2. Q3=3.

Mensagem:
"O foco nao e intensidade. E continuidade leve, com suporte para voce nao caminhar sozinha."

CTA final:
"Comprar e entrar na jornada de constancia"

### Rota D - "Reset de Sobrecarga" (mente acelerada)
Disparo:
1. Q4=1, e
2. qualquer combinacao acima.

Mensagem:
"Seu corpo esta pedindo pausa. Voce pode comecar com reset mental e voltar para si em poucos minutos."

CTA final:
"Comprar e iniciar com bonus Reset Mental"

## 5) Bloco de resultado (template)

Titulo:
"Seu primeiro passo no NamaSer: {{nome_rota}}"

Texto:
"{{mensagem_rota}}"

Oferta (sempre visivel no resultado):
"Acesso ao NamaSer por R$ 138,00 (1 ano) + bonus Desafio Rituais Sadhana + Reset Mental."

CTA principal:
"Quero comecar agora"

CTA secundario:
"Ainda tenho duvidas (WhatsApp)"

## 6) Regras de linguagem (light copy)

1. Convite sem pressao.
2. Sem promessa inflada.
3. Sem culpa.
4. Vida real sempre explicita.
5. Clareza de "como comecar" em 1 passo.

## 7) Implementacao simples (v1)

1. Quiz em modal de 1 tela por pergunta.
2. Barra de progresso (1/5 ... 5/5).
3. Resultado em 1 tela com CTA de compra direta.
4. Evento de analytics:
   1. `quiz_started`
   2. `quiz_completed`
   3. `quiz_route_{A|B|C|D}`
   4. `quiz_cta_checkout_click`
