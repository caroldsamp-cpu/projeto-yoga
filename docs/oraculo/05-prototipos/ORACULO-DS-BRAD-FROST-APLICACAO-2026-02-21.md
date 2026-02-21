# Oráculo Sadhana - Aplicação do Clone Brad Frost

Data: 2026-02-21
Fonte de estratégia: `outputs/minds/brad_frost/mind_dna_complete.yaml`

## Objetivo
Aplicar princípios de design system (atomic + token-first + a11y-first) na página do Oráculo e no fluxo de conteúdo da live.

## O que já foi aplicado
1. Tokens semânticos de interação e acessibilidade adicionados em `docs/design-system/tokens.css`.
2. Página `docs/oraculo/05-prototipos/oraculo-v1-preview.html` conectada ao design system via `tokens.css`.
3. Melhorias WCAG base:
- `focus-visible` consistente para botões.
- `target size` com mínimo confortável.
- tratamento de `prefers-reduced-motion`.
- `role=status` para feedback ritual.

## Mapeamento Atomic Design (Oráculo)
1. Atoms:
- Tipografia (`--font-*`)
- Cores semânticas (`--color-*`)
- Estados (`--focus-ring`, `--disabled-opacity`, `--target-*`)
2. Molecules:
- Botão primário/ secundário com estados.
- Indicador de ritual (dots + label).
3. Organisms:
- Carta completa do oráculo.
4. Templates:
- Estrutura da página (header, ações, resultado).

## Delta System sugerido (próximas versões)
1. Patch: ajuste de contraste, foco, micro-espaçamento.
2. Minor: novos estados/componente de carta.
3. Major: mudança de nomenclatura de token ou quebra de API visual.

## Conteúdo da live (pipeline de integração)
Quando tiver transcrição/highlights da live:
1. Extrair frases âncora (5-10) e mapear para microcopy da UI.
2. Classificar por intenção:
- acolhimento
- instrução
- reflexão
- chamada para ação
3. Atualizar cartas e labels mantendo voice gate.

## Checklist rápido por release
- [ ] Todos os componentes interativos têm estado `focus-visible`.
- [ ] Tokens substituem valores hardcoded repetidos.
- [ ] Texto principal mantém contraste legível.
- [ ] Motion respeita `prefers-reduced-motion`.
- [ ] Mudanças documentadas com tipo de versão (patch/minor/major).
