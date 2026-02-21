# Engenharia Reversa - Reels `@amandallourenco` (últimos 50 posts)

Data: 2026-02-20  
Fonte de dados: Apify Instagram Scraper (`resultsLimit=50`)  
Arquivos base:
- `docs/research/amandallourenco-last50.json`
- `docs/research/amandallourenco-last50-summary.json`
- `docs/research/amandallourenco-reels-patterns.json`

---

## 1) Snapshot quantitativo

1. Total de posts analisados: 50
2. Reels: 36
3. Carrosséis: 13
4. Imagem estática: 1

Métricas de Reels:
1. Média de views: 324.298
2. Mediana de views: 58.825
3. Média de likes: 17.417
4. Mediana de likes: 2.423
5. Média de comentários: 2.834
6. Mediana de comentários: 534
7. Duração média: 87,3s
8. Duração mediana: 89,1s
9. Uso de áudio original: 86,1%

Leitura:
1. Forte cauda longa (alguns Reels puxam muito a média).
2. Núcleo operacional parece ser Reels de 60-100s.
3. Áudio original é parte importante de diferenciação/autoria.

---

## 2) Padrão do processo de produção (inferido)

Com base nos posts e no esquema enviado:

### Camada A - Estratégia (topo)
1. Tese da semana: tema macro (IA, posicionamento, creator founder, mercado).
2. Ângulo narrativo: contraste, polêmica controlada, oportunidade, risco.
3. Oferta de fundo: consultoria/mentoria como desdobramento natural.

### Camada B - Sistema de conteúdo
1. Transforma uma tese em múltiplos ativos:
- Reels de opinião/educação
- Carrossel explicativo
- CTA de comentário com palavra-chave
2. Reaproveita o mesmo eixo narrativo em formatos diferentes.

### Camada C - Distribuição/Conversão
1. CTA recorrente: “comenta X”.
2. Entrega no direct/DM em parte dos conteúdos.
3. Conversão por conversa (não só link em bio).

---

## 3) Anatomia recorrente dos Reels

Estrutura que mais aparece:
1. Hook forte em 1 linha (quebra de expectativa / tese ousada).
2. Contexto curto com autoridade, dado ou caso.
3. Explicação educacional (frame/processo/modelo).
4. Posicionamento (o que isso significa para o público dela).
5. CTA de ação (comentário, DM, convite).

Sinais observados:
1. `comment_trigger`: 17/36
2. `comment + DM bridge`: 5/36
3. `authority name-drop`: 10/36
4. `educational frame`: 27/36
5. `urgency`: 19/36

---

## 4) Onde Seth Godin aparece na prática

Não como citação explícita, mas como padrão estratégico:

1. Permission marketing:
- CTA por comentário/conversa, não só pressão de clique.
2. Nicho e posição:
- Mensagem para “quem é e quem não é” (filtro de audiência).
3. Remarkability:
- Hooks com tese forte para ser “comentável”.
4. Narrativa de diferenciação:
- Marca pessoal + método proprietário + categoria própria.

---

## 5) Hipótese de playbook operacional dela

1. Seleciona uma pauta de mercado com tensão.
2. Conecta pauta a um framework proprietário.
3. Publica Reels com hook + explicação + opinião.
4. Usa palavra-chave para puxar lead qualificado no comentário.
5. Move parte da conversa para direct.
6. Reaproveita a mesma tese em carrossel e variações.

---

## 6) Como traduzir para `marketing-yog` (sem copiar tom)

### O que adaptar
1. Sistema de tese semanal -> variações de formato.
2. CTA conversacional por palavra-chave.
3. Reaproveitamento inteligente da mesma ideia-base.

### O que não adaptar
1. Urgência agressiva.
2. Linguagem de pressão.
3. Tom confrontativo.

### Equivalente Sadhana (recomendado)
1. Hook:
“Você não precisa de mais força. Precisa de mais presença.”
2. Valor:
micro prática aplicável em 2-5 minutos.
3. CTA:
“Comenta PRESENÇA que eu te envio o ritual de hoje.”
4. Handoff:
estratégia -> voz da Gaby -> gate de voz -> publicação manual.

---

## 7) Próximo experimento (7 dias)

1. Publicar 4 Reels e 2 carrosséis no mesmo eixo semanal.
2. Em 2 peças, usar CTA com palavra-chave + entrega em DM manual.
3. Medir:
- comentários por post
- taxa de palavra-chave
- DMs iniciadas
- saves
4. Rodar `metrics-weekly` e ajustar o `content-map`.

---

## 8) Decisão recomendada

Adotar o processo (sistema narrativo + distribuição conversacional),  
mas manter identidade Sadhana no texto final.

Regra:
“Arquitetura estratégica pode ser inspirada. Voz final é da Gaby.”
