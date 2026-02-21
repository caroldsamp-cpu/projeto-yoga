# Arquitetura de Conteudo V2 (Architect)

**Data:** 2026-02-21  
**Agente:** `aios-architect`

## 1) Schema da carta v2
Campos obrigatorios:
1. `id`
2. `palavra_ancora`
3. `pilar`
4. `tema_principal`
5. `tema_complementar`
6. `texto`
7. `tags`
8. `ativo`
9. `versao`

Campos opcionais:
1. `fonte_interna_ref`
2. `notas_editoriais`
3. `audio_url`
4. `convite_opcional`
5. `pergunta_reflexao`

Exemplo:
```json
{
  "id": "os_v2_0001",
  "palavra_ancora": "tempo certo",
  "pilar": "Ritmo e tempo certo",
  "tema_principal": "Maturacao silenciosa",
  "tema_complementar": "Pausa antes da resposta",
  "texto": "Nem tudo que importa acontece no ritmo da pressa. Hoje, permita que uma parte da sua vida amadureca sem ser forcada. Quando voce desacelera por dentro, a clareza comeca a aparecer sem barulho.",
  "pergunta_reflexao": "Que chamado do agora voce pode atender com presenca?",
  "tags": ["ritmo", "presenca", "maturacao"],
  "ativo": true,
  "versao": "2.0.0"
}
```

## 2) Regras de validacao
1. `id` unico no dataset.
2. `palavra_ancora` entre 1 e 3 palavras.
3. `texto` entre 60 e 120 palavras.
4. `pergunta_reflexao`, quando presente, deve ser aberta e em segunda pessoa.
5. `pilar` deve existir na taxonomia v2.

## 3) Pipeline de producao
1. selecionar linha da matriz v2.
2. gerar rascunho (texto com fechamento poetico; pergunta opcional).
3. revisar por checklist editorial.
4. revisar por deduplicacao semantica.
5. aprovar e exportar JSON.

## 4) Deduplicacao semantica (criterio)
1. evitar repeticao de mesma combinacao `tema_principal + pergunta_reflexao`.
2. sinalizar similaridade alta de texto para revisao manual.
3. bloquear cartas quase identicas no mesmo lote.

## 5) Eventos de tracking anonimo (MVP)
1. `oraculo_card_revealed`
2. `oraculo_card_copied`
3. `oraculo_card_shared`
4. `oraculo_session_return_d7`

## 6) Estrutura de arquivos recomendada
1. `docs/oraculo/03-editorial/cartas-v2-rascunho-120.md`
2. `docs/oraculo/03-editorial/cartas-v2-rascunho-120.json`
3. `docs/oraculo/04-operacao/relatorio-revisao-lotes-v2.md`

