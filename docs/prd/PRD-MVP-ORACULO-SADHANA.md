# PRD - MVP Oráculo do Sadhana
## Product Requirements Document (Feature Add-on)

**Projeto:** Mente Leve - Reposicionamento Sadhana
**Feature:** Oráculo do Sadhana (Web)
**Criadora:** Gaby Drummond
**PM:** Morgan (Strategist) | Synkra AIOS
**Data:** 18 de Fevereiro de 2026
**Versão:** 1.1
**Status:** Draft

---

## 1. VISÃO GERAL

### 1.1 Problema
A comunidade presencial já usa ritual de cartas (Oráculo do Pão), mas no online não existe um ritual diário equivalente com baixa fricção.

### 1.2 Oportunidade
Criar um ritual digital diário de presença para aumentar retorno recorrente, consistência de prática e pertencimento.

### 1.3 Solução
**Oráculo do Sadhana**: aplicação web simples de "Carta do Dia" com reflexão curta, micro prática (2-5 min) e pergunta de journal.

### 1.4 Posicionamento
- Sadhana é a narrativa da marca.
- LC (Leveza Cíclica) é o método que sustenta a experiência.
- O oráculo é o ritual de entrada diário para a vida real.

### 1.5 Nota legal/editorial
Usar linguagem: **"inspirado no ritual do Oráculo do Pão"**.
Não reproduzir textos autorais do baralho original sem licença explícita.

---

### Observação de evolução do produto
No MVP inicial, o Oráculo do Sadhana **não precisa guardar dados do usuário**.
A experiência será stateless: abrir o site, clicar e receber uma carta aleatória.
Em uma próxima fase de evolução, a persistência poderá ser adicionada para histórico, continuidade e personalização.

## 2. OBJETIVOS DO MVP

1. Ativar ritual diário com 1 clique.
2. Entregar valor imediato sem cadastro e sem atrito.
3. Gerar ponte entre carta -> prática -> comunidade.

---

## 3. ESCOPO MVP

### Incluído
- Tela única com CTA: "Tirar carta"
- Revelação de carta com 4 blocos:
  - virtude
  - mensagem
  - micro prática
  - pergunta de reflexão
- Sorteio aleatório de carta ativa
- Compartilhar (texto/copiar)
- 33 cartas autorais iniciais
- Instrumentação de eventos anônimos (sem perfil de usuário)

### Excluído (pós-MVP)
- Salvar carta no dia
- Histórico de cartas por usuário
- Login/perfil
- Painel admin com CRUD de cartas
- Personalização por fase lunar automática
- Áudio da Gaby em todas as cartas
- Ranking/gamificação
- App mobile nativo

---

## 4. MODELO DE DADOS (CARTA)

```json
{
  "id": "carta_001",
  "titulo": "Respirar antes de responder",
  "virtude": "Presença",
  "mensagem": "Hoje, o seu primeiro movimento é pausar.",
  "micro_pratica": "3 respirações lentas antes da primeira decisão do dia.",
  "pergunta": "O que muda quando você desacelera 10 segundos?",
  "fase_lunar": "geral",
  "ativo": true,
  "audio_url": ""
}
```

---

## 5. REQUISITOS FUNCIONAIS

- FR1: Tirar carta aleatória de baralho ativo
- FR2: Exibir conteúdo completo da carta
- FR3: Compartilhar texto curto da carta
- FR4: Registrar eventos anônimos de uso (ex.: clique em "tirar carta")
- FR5: Operar sem criação de conta e sem persistência por usuário

## 6. REQUISITOS NÃO-FUNCIONAIS

- NFR1: Mobile-first
- NFR2: Tempo de carregamento inicial < 2s
- NFR3: Linguagem 100% tom Gaby (acolhedor, sem pressão)
- NFR4: Sem termos sânscritos sem explicação
- NFR5: Sem gatilho de culpa por ausência

---

## 7. MÉTRICAS DE SUCESSO

- % sessões que chegam até carta revelada (meta > 70%)
- Tempo médio até revelar carta (meta < 10s)
- % clique em compartilhar/copiado (meta > 10%)
- % retorno em 7 dias (métrica observada no piloto, sem meta rígida no MVP)

---

## 8. ROADMAP (2 SEMANAS)

### Semana 1
- Story 8.1: Conceito + guardrails legais/editoriais
- Story 8.2: Modelo de dados + base de 33 cartas
- Story 8.3: Fluxo principal "Tirar carta"

### Semana 2
- Story 8.4: Regras de experiência stateless no MVP
- Story 8.5: Plano de fase 2 (persistência + admin)
- Story 8.6: Métricas + piloto com grupo pequeno

---

## 9. RISCOS E MITIGAÇÕES

- Risco: parecer cópia do produto original
  - Mitigação: conteúdo 100% autoral + wording "inspirado no ritual"
- Risco: baixa recorrência
  - Mitigação: micro prática acionável e compartilhamento fácil
- Risco: tom ficar genérico
  - Mitigação: checklist LC em toda carta

---

## 10. EPIC NOVO

**EP-08: Oráculo do Sadhana (MVP Web)**

Stories:
- S-08.1 conceito e guardrails
- S-08.2 conteúdo e modelagem
- S-08.3 experiência carta do dia
- S-08.4 experiência stateless
- S-08.5 plano da fase 2
- S-08.6 métricas e piloto

---

## Change Log

| Data | Mudança | Autor |
|---|---|---|
| 2026-02-18 | Criação PRD MVP | Morgan (PM) |
| 2026-02-18 | Ajuste de escopo: MVP sem persistência de dados; fase 2 com histórico/admin | Morgan (PM) |
