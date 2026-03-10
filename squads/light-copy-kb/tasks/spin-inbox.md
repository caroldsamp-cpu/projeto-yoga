# SPIN Inbox

> Task do comando `*spin-inbox` do @lc-stories
> Guia conversa SPIN Selling adaptada no inbox do Instagram para converter leads

---

## Task Metadata

```yaml
task_name: "SPIN Inbox"
status: active
responsible_executor: "@lc-stories"
execution_type: Agent
estimated_time: "15-30min (S: 3-5min, P: 3-5min, I: 3-5min, N: 2-3min, Hook: 2-5min)"
input:
  - "Nome/perfil do lead"
  - "Mensagem inicial do lead (DM recebida)"
  - "Contexto: como chegou (stories, reels, ad, indicacao)"
  - "Produto/servico a ser oferecido"
output:
  - "Roteiro SPIN completo (4 fases + hook)"
  - "Mensagens sugeridas para cada fase"
  - "Gatilhos de transicao entre fases"
  - "Decisao: oferecer / nutrir / desqualificar"
acceptance_criteria:
  - "4 fases SPIN completas (Situacao, Problema, Implicacao, Necessidade)"
  - "Hook Question definido"
  - "Regra 80/20 respeitada (80% ouvir, 20% falar)"
  - "Nao empurrar venda sem SPIN completo"
  - "Se comprou: pedir comprovante"
  - "Se hesitou: oferecer bonus/call/trial"
```

---

## Veto Conditions

| Condition | Action |
|-----------|--------|
| Lead nao iniciou conversa (cold outreach) | BLOQUEAR — SPIN e para quem JA interagiu |
| Pular direto para oferta sem SPIN | BLOQUEAR — "NAO empurrar sem SPIN completo" |
| Lead disse NAO explicitamente | PARAR — respeitar, nao insistir |
| Lead menor de idade (se detectado) | BLOQUEAR — nao vender |
| Sem produto/servico definido para oferecer | ALERTAR — definir antes de iniciar SPIN |

---

## Steps

### Step 1: Classificar Lead

```yaml
description: "Avaliar mensagem inicial e classificar qualidade do lead"
cognitive_type: "classification"
automation_potential: 0.6
executor: "@lc-stories"
precondition: "Lead enviou DM"
output: "Classificacao: HOT / WARM / COLD + contexto"
guardrails:
  - "Triagem de leads (LC_ST_H009): Texto longo > Objecoes especificas > Perguntas sobre produto > Emojis genericos (BAIXA)"
  - "Lead HOT: perguntou sobre produto/preco/disponibilidade"
  - "Lead WARM: respondeu stories, fez pergunta generica"
  - "Lead COLD: so mandou emoji ou resposta curta"
decision_rule: "IF HOT THEN SPIN direto | IF WARM THEN nutrir 1-2 msgs antes do SPIN | IF COLD THEN nutrir e esperar sinal"
```

**Classificacao:**
| Sinal | Nivel | Acao |
|-------|-------|------|
| "Quanto custa?" / "Como funciona?" | HOT | SPIN imediato |
| "Adorei!" + pergunta | WARM | 1-2 msgs de rapport → SPIN |
| Emoji / "Legal" | COLD | Agradecer + nutrir |
| Objecao direta ("Nao tenho dinheiro") | HOT | SPIN focado em Implicacao |

---

### Step 2: Fase S — Situacao

```yaml
description: "Fazer perguntas de diagnostico para entender contexto do lead"
cognitive_type: "elicitation"
automation_potential: 0.3
executor: "@lc-stories"
precondition: "Lead classificado como HOT ou WARM (apos rapport)"
output: "Contexto do lead: situacao atual, experiencia previa, recursos"
guardrails:
  - "Max 2-3 perguntas de Situacao (nao interrogar)"
  - "Tom: curioso e genuino, nao vendedor"
  - "80% ouvir — esperar resposta antes de proxima pergunta"
decision_rule: "IF situacao clara THEN prosseguir para P ELSE fazer mais 1 pergunta"
```

**Mensagens-modelo:**
- "Me conta, voce ja pratica yoga ou ta comecando agora?"
- "Ha quanto tempo voce sente essa [dor mencionada]?"
- "O que te fez procurar isso agora?"

**Transicao para P:** Quando entender: quem e, o que ja tentou, ha quanto tempo busca.

---

### Step 3: Fase P — Problema

```yaml
description: "Cavar a dor principal do lead"
cognitive_type: "elicitation"
automation_potential: 0.3
executor: "@lc-stories"
precondition: "Situacao do lead mapeada"
output: "Dor principal identificada + intensidade"
guardrails:
  - "Nao assumir a dor — perguntar e esperar"
  - "Usar reformulacao: 'Entendi, entao voce sente que...'"
  - "Nao oferecer solucao ainda — so ouvir"
decision_rule: "IF dor clara e verbalizada pelo lead THEN prosseguir para I ELSE aprofundar"
```

**Mensagens-modelo:**
- "E o que mais te incomoda nisso?"
- "Se nada mudar nos proximos 6 meses, como fica?"
- "Voce ja tentou resolver de outra forma? O que aconteceu?"

**Transicao para I:** Quando lead verbalizou a dor claramente.

---

### Step 4: Fase I — Implicacao

```yaml
description: "Amplificar a urgencia mostrando consequencias de nao resolver"
cognitive_type: "persuasion"
automation_potential: 0.3
executor: "@lc-stories"
precondition: "Dor identificada"
output: "Lead consciente das implicacoes de nao agir"
guardrails:
  - "Nao exagerar — usar fatos reais"
  - "Conectar dor atual com futuro se nao resolver"
  - "Mostrar custo de inacao, nao assustar"
  - "Tom: empatico, nao alarmista"
decision_rule: "IF lead demonstra urgencia (verbal ou emocional) THEN prosseguir para N ELSE uma mais implicacao"
```

**Mensagens-modelo:**
- "E como isso afeta [area importante da vida]?"
- "Voce sabia que [dado relevante sobre a dor]?"
- "Uma coisa que muita gente nao percebe e que [implicacao indireta]..."

**Transicao para N:** Quando lead demonstrou que entende a urgencia.

---

### Step 5: Fase N — Necessidade

```yaml
description: "Levar o lead a verbalizar a necessidade de solucao"
cognitive_type: "persuasion"
automation_potential: 0.3
executor: "@lc-stories"
precondition: "Lead consciente das implicacoes"
output: "Lead pedindo ou aceitando ouvir sobre a solucao"
guardrails:
  - "Nao oferecer — fazer o lead PEDIR"
  - "Pergunta-chave: 'E se existisse um jeito de [resolver dor] sem [objecao principal]?'"
  - "Se lead pedir: apresentar oferta"
  - "Se lead hesitar: recuar com elegancia"
decision_rule: "IF lead pediu/abriu porta THEN Hook Question ELSE recuar e nutrir"
```

**Mensagens-modelo:**
- "Se existisse um metodo que [resolve dor] mesmo [objecao], voce tentaria?"
- "O que voce acharia de [beneficio principal] em [prazo]?"
- "Quer que eu te explique como funciona o [produto]?"

---

### Step 6: Hook Question + Oferta

```yaml
description: "Apresentar oferta de forma natural apos SPIN completo"
cognitive_type: "conversion"
automation_potential: 0.4
executor: "@lc-stories"
precondition: "Lead abriu porta na Fase N"
output: "Oferta apresentada + link/instrucoes"
guardrails:
  - "SPIN DEVE estar completo — todas 4 fases executadas"
  - "Oferta conectada diretamente com a dor do lead"
  - "Incluir: o que e + pra quem e + garantia + como acessar"
  - "Se comprou: pedir comprovante"
  - "Se hesitou: oferecer bonus/call/trial (1x apenas)"
  - "Se disse NAO: agradecer e parar"
decision_rule: "IF comprou THEN pedir comprovante | IF hesitou THEN oferecer incentivo | IF NAO THEN encerrar com elegancia"
```

**Pos-oferta:**
| Resposta do lead | Acao |
|-----------------|------|
| Comprou | "Parabens! Me manda o print do comprovante que te libero [bonus]" |
| Hesitou | "Sem pressao! Que tal [bonus/call/trial] pra voce experimentar?" |
| Disse NAO | "Tranquilo! Se mudar de ideia, me chama. Tamo junto!" |
| Sumiu | Esperar 24h, mandar 1 follow-up leve, depois parar |

---

## Output Example

**Input:** "Lead @maria_yoga mandou DM: 'Oi, vi seu story sobre yoga pra quem nao e flexivel, quanto custa seu curso?'"

**Output:**
```
## Roteiro SPIN — @maria_yoga

**Classificacao:** HOT (perguntou preco diretamente)
**Origem:** Story SEQ01 (yoga iniciantes)
**Produto:** Metodo Yoga Sem Forca

### Fase S (Situacao)
> "Oi Maria! Que bom que viu! Me conta, voce ja pratica yoga ou ta comecando?"
> [esperar resposta]
> "Ha quanto tempo voce sente essa vontade de comecar?"

### Fase P (Problema)
> "E o que te impediu ate agora?"
> [esperar — provavel: "nao sou flexivel" ou "nao tenho tempo"]
> "Entendi, e como isso te faz sentir?"

### Fase I (Implicacao)
> "Sabia que 73% das pessoas que desistem de yoga nos primeiros 30 dias e justamente por comecar com metodo que exige flexibilidade?"
> "E cada mes que passa, o corpo fica mais rigido — e a frustração so aumenta"

### Fase N (Necessidade)
> "Se existisse um metodo criado especificamente pra quem NAO e flexivel, com aulas de 20min, voce tentaria?"
> [esperar — se SIM:]

### Hook + Oferta
> "Entao, o Yoga Sem Forca e exatamente isso. 12 semanas, aulas de 20min, do zero. Tem garantia de 30 dias — se nao gostar, devolvo 100%."
> "Quer que te mande o link?"

### Se hesitar:
> "Sem pressao! Posso te mandar uma aula gratis pra voce testar antes de decidir?"

### Se comprar:
> "Parabens Maria! Me manda o print do comprovante que te libero o bonus de meditacao guiada"
```

---

## Completion Criteria

- [ ] Lead classificado (HOT/WARM/COLD)
- [ ] 4 fases SPIN executadas em ordem
- [ ] Regra 80/20 respeitada
- [ ] Hook Question apresentado apenas apos SPIN completo
- [ ] Pos-oferta com 3 cenarios (comprou/hesitou/NAO)
- [ ] Mensagens em tom conversacional (nao robotico)
- [ ] Roteiro adaptado ao produto/servico especifico

## Handoff

| Direction | Agent | When |
|-----------|-------|------|
| FROM | @lc-stories (*debriefing) | Quando debriefing identifica hot leads |
| FROM | @lc-chief | Quando usuario pede ajuda com inbox |
| TO | @lc-chief | Quando lead fechou venda (registrar) |
| TO | @lc-stories (*debriefing) | Quando conversa SPIN gera dados para debriefing |
