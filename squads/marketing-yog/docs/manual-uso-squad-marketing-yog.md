# Manual de Uso do Squad `marketing-yog`

Data: 2026-02-20  
Escopo: construção de marca + operação de conteúdo para o projeto-yoga com base no Sadhana.

---

## 1) Objetivo do squad

O `marketing-yog` existe para transformar estratégia de marca em conteúdo semanal consistente, com voz da Gaby e publicação manual.

Ele foi desenhado para:
1. Definir direção estratégica e editorial.
2. Produzir conteúdo diário e sequências de stories.
3. Medir resultado e ajustar o mapa de conteúdo.
4. Preservar o tom Sadhana em todas as peças.

---

## 2) O que já está pronto

Arquivos-chave já operacionais:
1. Estrutura do squad: `squad.yaml`
2. Configuração geral: `config.yaml`
3. Ciclo semanal: `workflows/weekly-marketing-cycle.md`
4. Pipeline diário: `tasks/daily-content.md`
5. Planejamento semanal: `tasks/weekly-content-plan.md`
6. Stories da semana: `tasks/weekly-story-sequence.md`
7. Métricas semanais: `tasks/metrics-weekly.md`
8. Voz da Gaby: `data/voice-dna-gaby.yaml`
9. Gate de voz: `checklists/voice-gate-gaby.md`

---

## 3) O que falta para a marca ficar 100%

Hoje o squad opera bem conteúdo, mas a camada de marca ainda precisa ser formalizada no projeto.

Prioridade de criação:
1. Manifesto Sadhana (interno).
2. Manifesto Sadhana (externo, para público).
3. Anti-manifesto (o que a marca não é).
4. Frases de posicionamento por canal.
5. Calendário editorial mensal oficial.

Fonte de verdade para criar isso:
1. `docs/stories/EP-01-framework-sadhana/`
2. `docs/stories/EP-03-framework-light-copy/`
3. `docs/stories/EP-04-identidade-tribo/`
4. `docs/stories/EP-05-estrategia-conteudo/`

---

## 4) Como usar o squad para construir a marca (fase fundação)

### Fase A - Fundação de marca (1-2 semanas)

Objetivo: sair com o pacote estratégico mínimo da marca Sadhana.

Passo a passo:
1. Consolidar premissas do Sadhana a partir das stories EP-01 e EP-04.
2. Gerar versão 0.1 do manifesto interno.
3. Derivar manifesto externo em linguagem pública.
4. Definir anti-manifesto com exemplos práticos de “não dizer”.
5. Atualizar `data/voice-dna-gaby.yaml` com termos centrais da marca.
6. Validar tudo com `checklists/voice-gate-gaby.md`.

Entregáveis mínimos:
1. `docs/framework/manifesto-sadhana.md`
2. `docs/framework/manifesto-sadhana-externo.md`
3. `docs/framework/anti-manifesto.md`
4. Atualização de `data/voice-dna-gaby.yaml`

### Fase B - Tradução editorial (1 semana)

Objetivo: transformar marca em sistema de conteúdo.

Passo a passo:
1. Rodar `weekly-content-plan` com base no manifesto.
2. Atualizar `data/content-map.yaml` com pilares e provas.
3. Criar biblioteca de ângulos por pilar no estilo Sadhana.
4. Fechar checklist de coerência por formato.

---

## 5) Como operar semanalmente (fase escala)

Cadência recomendada:
1. Segunda: `weekly-content-plan`
2. Terça a sábado: `daily-content`
3. Quarta/quinta: `weekly-story-sequence`
4. Sexta: `metrics-weekly`
5. Sexta: `voice-calibration-weekly`

Fluxo padrão:
1. Estratégia: board e CMO filtram direção.
2. Ideação: temas e ângulos da semana.
3. Produção: copy final em voz da Gaby.
4. Design: direção visual por formato.
5. Distribuição: adaptação por canal.
6. Revisão humana: aprovação final.
7. Publicação manual: execução.

---

## 6) Regras de governança (não negociáveis)

1. Tom final sempre passa por `data/voice-dna-gaby.yaml`.
2. Conteúdo sem prova prática não avança.
3. Nunca usar urgência artificial.
4. Nunca prometer transformação instantânea.
5. Publicação continua manual.
6. Se houver conflito entre estratégia e voz, a voz da Gaby vence.

---

## 7) Critérios para dizer “a marca está consistente”

Checklist semanal:
1. 7/7 peças planejadas com pilar e prova.
2. 100% das peças passam no gate de voz.
3. Nenhuma peça viola anti-manifesto.
4. Existe coerência entre feed, stories e CTA.
5. Ajustes de conteúdo são guiados por métricas, não por achismo.

---

## 8) Plano de implementação em 14 dias

### Dias 1-3
1. Consolidar base Sadhana (EP-01, EP-03, EP-04).
2. Escrever manifesto interno v0.1.
3. Revisar com Gaby.

### Dias 4-6
1. Escrever manifesto externo.
2. Escrever anti-manifesto.
3. Atualizar voice DNA e checklist de voz.

### Dias 7-10
1. Rodar `weekly-content-plan` já com a nova base.
2. Produzir 4-6 peças via `daily-content`.
3. Produzir 1 lote de stories via `weekly-story-sequence`.

### Dias 11-14
1. Rodar `metrics-weekly`.
2. Rodar `voice-calibration-weekly`.
3. Ajustar content map para a semana seguinte.

---

## 9) Template de briefing para usar no squad

Use este briefing antes de qualquer rodada:

1. Objetivo da semana:
2. Pilar principal:
3. Dor principal da audiência:
4. Promessa realista:
5. Prova prática disponível:
6. Limites (o que não vamos dizer):
7. CTA de convite (sem pressão):

---

## 10) Resultado esperado

Seguindo este manual, o `marketing-yog` deixa de ser só um gerador de peças e vira um sistema de marca:
1. Estratégia clara.
2. Linguagem consistente.
3. Produção contínua.
4. Aprendizado semanal.
5. Crescimento com identidade Sadhana.
