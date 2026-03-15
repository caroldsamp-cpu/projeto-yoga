# Links UTM — NamaSer

Links prontos para compartilhar. Copie o link correspondente ao canal onde vai divulgar.
O Google Analytics rastreia automaticamente de onde veio cada visitante.

## Links curtos (use estes para compartilhar)

| Canal | Link curto | Link completo |
|-------|-----------|---------------|
| Instagram bio | `namaser.vercel.app/instagram` | `namaser.vercel.app?utm_source=instagram&utm_medium=bio` |
| Instagram stories | `namaser.vercel.app/stories` | `namaser.vercel.app?utm_source=instagram&utm_medium=stories` |
| WhatsApp | `namaser.vercel.app/whatsapp` | `namaser.vercel.app?utm_source=whatsapp&utm_medium=direto` |
| YouTube | `namaser.vercel.app/youtube` | `namaser.vercel.app?utm_source=youtube&utm_medium=descricao` |
| Email | `namaser.vercel.app/email` | `namaser.vercel.app?utm_source=email&utm_medium=lista` |
| QR Code (presencial) | `namaser.vercel.app/qr` | `namaser.vercel.app?utm_source=qrcode&utm_medium=presencial` |

Os links curtos redirecionam automaticamente para os links com UTM. Use os curtos para compartilhar.

## Como funciona

- `utm_source` = de onde veio (instagram, whatsapp, youtube, etc.)
- `utm_medium` = como veio (bio, stories, direto, etc.)
- O visitante clica no link → o GA4 registra a origem automaticamente
- Tu ve os dados em: **analytics.google.com → Relatorios → Aquisicao**

## Como adicionar novos links

Para criar um link novo, basta adicionar `?utm_source=ORIGEM&utm_medium=MEIO` ao final da URL.

Exemplo para um anuncio pago no Facebook:
`https://namaser.vercel.app?utm_source=facebook&utm_medium=ads`

## Importante

- Use SEMPRE o link com UTM ao compartilhar (senao o visitante aparece como "direto/nenhum")
- Nao altere os parametros depois de comecar a usar (senao os dados ficam inconsistentes)
- Links UTM nao afetam o site — sao invisiveis para o visitante
