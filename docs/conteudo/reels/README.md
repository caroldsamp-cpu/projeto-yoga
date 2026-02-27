# Reels - Planejamento e Historico

Esta pasta centraliza os Reels do projeto para facilitar:
1. Planejamento semanal de postagem.
2. Controle do que ja foi publicado.
3. Aprendizado por performance.

## Arquivos

1. `planejamento-reels.csv`
- Pipeline dos reels (ideia -> roteiro -> gravado -> agendado -> postado).

2. `reels-postados-log.csv`
- Historico de reels publicados + metricas.

3. `roteiros/`
- Um arquivo por reel pronto para gravar/publicar.

## Fluxo recomendado

1. Criar/atualizar linhas em `planejamento-reels.csv`.
2. Escrever roteiro em `roteiros/`.
3. Quando publicar, mover status para `postado` e registrar em `reels-postados-log.csv`.
4. Fechar semana revisando metricas para decidir iteracoes.
