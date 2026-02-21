# Comandos de Agentes AIOS - Oraculo do Sadhana

**Data:** 2026-02-21  
**Status:** validado (greetings executados via script)

## 1) Ordem de acionamento
1. `aios-analyst`
2. `aios-po`
3. `aios-sm`
4. `aios-architect`
5. `aios-qa`

## 2) Comandos de chamada (shell)
```powershell
node .aios-core/development/scripts/generate-greeting.js analyst
node .aios-core/development/scripts/generate-greeting.js po
node .aios-core/development/scripts/generate-greeting.js sm
node .aios-core/development/scripts/generate-greeting.js architect
node .aios-core/development/scripts/generate-greeting.js qa
```

## 3) Comandos operacionais por agente
### analyst
1. `*perform-market-research`
2. `*research-prompt`
3. `*brainstorm`

### po
1. `*backlog-review`
2. `*backlog-prioritize`
3. `*stories-index`

### sm
1. `*draft`
2. `*story-checklist`

### architect
1. `*create-brownfield-architecture`
2. `*research`
3. `*assess-complexity`

### qa
1. `*review`
2. `*risk-profile`
3. `*gate`

## 4) Resultado da validacao de hoje
1. Todos os 5 agentes responderam com sucesso.
2. Houve alertas de arquivos ausentes no projeto:
   - `docs/framework/tech-stack.md`
   - `docs/framework/source-tree.md`
   - `docs/framework/coding-standards.md`
3. Esses alertas nao bloqueiam o planejamento do oraculo, mas vale preencher depois.
