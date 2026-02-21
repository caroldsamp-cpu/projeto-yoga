# Task: Sobre Meu Humano - marketing-yog
task: sobre-meu-humano
responsavel: marketing-yog
responsavel_type: Agent
atomic_layer: content-ops
Entrada:
  - bastidores reais da semana
  - contexto de rotina da gaby
Saida:
  - roteiro de conteudo de bastidor para revisao humana
Checklist:
  - tom respeitoso e acolhedor
  - sem dados sensiveis

**Task ID**: sobre-meu-humano
**Agent**: @marketing-ideation-ig -> @marketing-production -> @marketing-cmo
**Version**: 1.0.0

---

## Purpose

Criar conteudo de bastidores com toque humano, fortalecendo conexao com a audiencia sem expor dados pessoais e sem perder elegancia da marca.

---

## Inputs

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `bastidor` | string | **Yes** | Cena real da rotina |
| `aprendizado` | string | No | Licao pratica do bastidor |
| `formato` | string | No | `stories`, `carrossel` ou `post` |

---

## Workflow

1. `@marketing-ideation-ig` estrutura narrativa curta de bastidor.
2. `@marketing-production` escreve texto final na voz da Gaby.
3. `@marketing-cmo` valida limites eticos e coerencia de marca.
4. Salvar output em `outputs/hubs/marketing/YYYY-MM-DD-sobre-meu-humano.md`.
5. Publicacao manual apos revisao humana.

---

## Guardrails

- Proibido expor dados sensiveis, terceiros ou informacoes privadas.
- Proibido tom ironico agressivo ou constrangedor.
- Sempre incluir utilidade/reflexao para a comunidade.

---

## Success Criteria

- [ ] narrativa de bastidor com contexto real
- [ ] copy em voz da Gaby e sem exagero
- [ ] revisao etica aprovada pelo CMO
- [ ] publicacao manual registrada

---

*Task v1.0.0 - bastidores com seguranca e humanidade*
