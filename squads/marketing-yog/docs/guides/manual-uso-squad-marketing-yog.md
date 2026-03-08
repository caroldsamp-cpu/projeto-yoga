# Manual de Uso do Squad `marketing-yog`

Data: 2026-02-20  
Escopo: construÃ§Ã£o de marca + operaÃ§Ã£o de conteÃºdo para o projeto-yoga com base no Sadhana.

---

## 1) Objetivo do squad

O `marketing-yog` existe para transformar estratÃ©gia de marca em conteÃºdo semanal consistente, com voz da Gaby e publicaÃ§Ã£o manual.

Ele foi desenhado para:
1. Definir direÃ§Ã£o estratÃ©gica e editorial.
2. Produzir conteÃºdo diÃ¡rio e sequÃªncias de stories.
3. Medir resultado e ajustar o mapa de conteÃºdo.
4. Preservar o tom Sadhana em todas as peÃ§as.

---

## 2) O que jÃ¡ estÃ¡ pronto

Arquivos-chave jÃ¡ operacionais:
1. Estrutura do squad: `squad.yaml`
2. ConfiguraÃ§Ã£o geral: `config.yaml`
3. Ciclo semanal: `workflows/weekly-marketing-cycle.md`
4. Pipeline diÃ¡rio: `tasks/daily-content.md`
5. Planejamento semanal: `tasks/weekly-content-plan.md`
6. Stories da semana: `tasks/weekly-story-sequence.md`
7. MÃ©tricas semanais: `tasks/metrics-weekly.md`
8. Voz da Gaby: `data/voice-dna-gaby.yaml`
9. Gate de voz: `checklists/voice-gate-gaby.md`

---

## 3) O que falta para a marca ficar 100%

Hoje o squad opera bem conteÃºdo, mas a camada de marca ainda precisa ser formalizada no projeto.

Prioridade de criaÃ§Ã£o:
1. Manifesto Sadhana (interno).
2. Manifesto Sadhana (externo, para pÃºblico).
3. Anti-manifesto (o que a marca nÃ£o Ã©).
4. Frases de posicionamento por canal.
5. CalendÃ¡rio editorial mensal oficial.

Fonte de verdade para criar isso:
1. `docs/stories/EP-01-framework-sadhana/`
2. `docs/stories/EP-03-framework-light-copy/`
3. `docs/stories/EP-04-identidade-tribo/`
4. `docs/stories/EP-05-estrategia-conteudo/`

---

## 4) Como usar o squad para construir a marca (fase fundaÃ§Ã£o)

### Fase A - FundaÃ§Ã£o de marca (1-2 semanas)

Objetivo: sair com o pacote estratÃ©gico mÃ­nimo da marca Sadhana.

Passo a passo:
1. Consolidar premissas do Sadhana a partir das stories EP-01 e EP-04.
2. Gerar versÃ£o 0.1 do manifesto interno.
3. Derivar manifesto externo em linguagem pÃºblica.
4. Definir anti-manifesto com exemplos prÃ¡ticos de â€œnÃ£o dizerâ€.
5. Atualizar `data/voice-dna-gaby.yaml` com termos centrais da marca.
6. Validar tudo com `checklists/voice-gate-gaby.md`.

EntregÃ¡veis mÃ­nimos:
1. `docs/framework/manifesto-sadhana.md`
2. `docs/framework/manifesto-sadhana-externo.md`
3. `docs/framework/anti-manifesto.md`
4. AtualizaÃ§Ã£o de `data/voice-dna-gaby.yaml`

### Fase B - TraduÃ§Ã£o editorial (1 semana)

Objetivo: transformar marca em sistema de conteÃºdo.

Passo a passo:
1. Rodar `weekly-content-plan` com base no manifesto.
2. Atualizar `data/content-map.yaml` com pilares e provas.
3. Criar biblioteca de Ã¢ngulos por pilar no estilo Sadhana.
4. Fechar checklist de coerÃªncia por formato.

---

## 5) Como operar semanalmente (fase escala)

CadÃªncia recomendada:
1. Segunda: `weekly-content-plan`
2. TerÃ§a a sÃ¡bado: `daily-content`
3. Quarta/quinta: `weekly-story-sequence`
4. Sexta: `metrics-weekly`
5. Sexta: `voice-calibration-weekly`

Fluxo padrÃ£o:
1. EstratÃ©gia: board e CMO filtram direÃ§Ã£o.
2. IdeaÃ§Ã£o: temas e Ã¢ngulos da semana.
3. ProduÃ§Ã£o: copy final em voz da Gaby.
4. Design: direÃ§Ã£o visual por formato.
5. DistribuiÃ§Ã£o: adaptaÃ§Ã£o por canal.
6. RevisÃ£o humana: aprovaÃ§Ã£o final.
7. PublicaÃ§Ã£o manual: execuÃ§Ã£o.

---

## 6) Regras de governanÃ§a (nÃ£o negociÃ¡veis)

1. Tom final sempre passa por `data/voice-dna-gaby.yaml`.
2. ConteÃºdo sem prova prÃ¡tica nÃ£o avanÃ§a.
3. Nunca usar urgÃªncia artificial.
4. Nunca prometer transformaÃ§Ã£o instantÃ¢nea.
5. PublicaÃ§Ã£o continua manual.
6. Se houver conflito entre estratÃ©gia e voz, a voz da Gaby vence.

---

## 7) CritÃ©rios para dizer â€œa marca estÃ¡ consistenteâ€

Checklist semanal:
1. 7/7 peÃ§as planejadas com pilar e prova.
2. 100% das peÃ§as passam no gate de voz.
3. Nenhuma peÃ§a viola anti-manifesto.
4. Existe coerÃªncia entre feed, stories e CTA.
5. Ajustes de conteÃºdo sÃ£o guiados por mÃ©tricas, nÃ£o por achismo.

---

## 8) Plano de implementaÃ§Ã£o em 14 dias

### Dias 1-3
1. Consolidar base Sadhana (EP-01, EP-03, EP-04).
2. Escrever manifesto interno v0.1.
3. Revisar com Gaby.

### Dias 4-6
1. Escrever manifesto externo.
2. Escrever anti-manifesto.
3. Atualizar voice DNA e checklist de voz.

### Dias 7-10
1. Rodar `weekly-content-plan` jÃ¡ com a nova base.
2. Produzir 4-6 peÃ§as via `daily-content`.
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
3. Dor principal da audiÃªncia:
4. Promessa realista:
5. Prova prÃ¡tica disponÃ­vel:
6. Limites (o que nÃ£o vamos dizer):
7. CTA de convite (sem pressÃ£o):

---

## 10) Resultado esperado

Seguindo este manual, o `marketing-yog` deixa de ser sÃ³ um gerador de peÃ§as e vira um sistema de marca:
1. EstratÃ©gia clara.
2. Linguagem consistente.
3. ProduÃ§Ã£o contÃ­nua.
4. Aprendizado semanal.
5. Crescimento com identidade Sadhana.

## Checklist de Copy Poetica (padrao CMO)

Aplicar antes de aprovar roteiros da serie:

- [ ] Tom poetico sem soar abstrato demais
- [ ] Linguagem humana e autoral
- [ ] Sem estrutura "nao e X, e Y"
- [ ] Sem pressao comercial
- [ ] Fechamento reflexivo forte
- [ ] Coerencia com marca NamaSer
