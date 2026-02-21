# Oráculo do Sadhana - V1 (Texto + Direção de Design)

**Data:** 18/02/2026
**Status:** Draft para visualização rápida
**Escopo:** MVP stateless (sem salvar dados)

---

## 1) Carta-teste (aleatória)

### Virtude
Presença mansa

### Texto da carta
Hoje, você não precisa acelerar para merecer paz. Em vez de começar o dia tentando resolver tudo de uma vez, experimente voltar para o corpo e para o instante que existe agora. Há uma força silenciosa em escolher o ritmo que te respeita. Quando você respira com atenção e se escuta, as decisões ficam mais simples e o coração deixa de correr atrás do que ainda nem aconteceu. Qual é o ritmo mais verdadeiro para o seu dia de hoje?

### CTA suave
Se fizer sentido, compartilhe esta carta com alguém que também precise desacelerar.

---

## 2) Guardrail editorial

- Linguagem: acolhedora, simples, sem pressão.
- Sem tom de cobrança, sem “você precisa”.
- Referência declarada: inspirado no ritual do Oráculo do Pão.
- Conteúdo 100% autoral do projeto.

---

## 3) Melhor Design System para o Oráculo (recomendação)

### Base recomendada
Usar como base `docs/design-system/tokens.css` + ajustes leves de identidade de `docs/leads/tokens-gaby-leads.css`.

### Por que esta combinação
- Mantém o universo claro e acolhedor já validado no projeto.
- Preserva consistência com materiais existentes (Sadhana / reposicionamento).
- Evita desvio para estéticas escuras ou “tech”.

### Tokens principais para V1
- Fundo da página: `--color-cream` (`#FDF8F4`)
- Superfície da carta: `--color-white` (`#FFFFFF`)
- Texto principal: `--color-text` (`#3D3A38`)
- Borda suave: `--color-border` (`#E8DDD2`)
- Acento de ação: `--color-primary` (azul Gaby do lead token)
- Acento secundário: `--color-secondary` (verde Sadhana)

### Tipografia recomendada
- Título/virtude: `Playfair Display`
- Corpo e interface: `Inter`

### Direção visual da carta
- Card vertical com cantos arredondados e borda fina interna.
- Virtude com destaque tipográfico no topo.
- Texto único, fluido, com pergunta final integrada.
- Detalhe orgânico discreto no rodapé.
- Sem elementos místicos clichês (mandalas/lótus).

---

## 4) Estrutura mínima de UI (MVP)

1. Headline curta: “Oráculo do Sadhana”.
2. Subheadline: “Um ritual simples de presença para o seu dia”.
3. Botão principal: “Tirar carta”.
4. Card revelado com virtude + texto único.
5. Ação opcional: “Copiar carta”.

---

## 5) Próximo passo sugerido (UX)

Criar uma versão V2 com:
- 33 cartas reais do baralho inicial.
- Variação visual por virtude (cor do acento).
- Acessibilidade AA (contraste e foco de teclado).
