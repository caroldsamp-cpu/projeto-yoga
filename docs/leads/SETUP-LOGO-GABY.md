# ðŸ§˜ Setup: Logo Gaby na PÃ¡gina NamaSer

## VersÃµes Criadas

1. **`index-yoga-light.html`** âœ¨ (Com SVG da logo integrado)
   - Logo em SVG simplificado dentro do HTML
   - Pronto para usar, sem dependÃªncias
   - FuncionarÃ¡ offline

2. **`index-yoga-light-com-logo.html`** ðŸ“· (Para sua logo real)
   - Preparado para sua logo PNG/SVG real
   - Muda o arquivo em 1 linha
   - Melhor qualidade visual

---

## ðŸš€ Como Usar a Logo Real da Gaby

### OpÃ§Ã£o 1: Usar a Logo PNG (Recomendado)

1. **Salve a logo na mesma pasta:**
   ```
   C:\Users\carol\code\PROJETOS\projeto-yoga\docs\leads\
   â”œâ”€â”€ index-yoga-light-com-logo.html
   â”œâ”€â”€ logo-gaby.png          â† Salve aqui
   â””â”€â”€ ...
   ```

2. **Abra `index-yoga-light-com-logo.html` e encontre esta linha:**
   ```html
   <img src="logo-gaby.png" alt="Gaby Drummond Yoga" />
   ```

3. **Se a logo tiver um nome diferente, troque:**
   ```html
   <!-- Se Ã© logo-gaby-drummond.png -->
   <img src="logo-gaby-drummond.png" alt="Gaby Drummond Yoga" />

   <!-- Se estÃ¡ em uma pasta especÃ­fica -->
   <img src="../assets/logo-gaby.png" alt="Gaby Drummond Yoga" />
   ```

### OpÃ§Ã£o 2: Usar Logo de URL (Se hospedada online)

```html
<!-- Se sua logo estÃ¡ na web -->
<img src="https://seu-site.com/logo-gaby.png" alt="Gaby Drummond Yoga" />
```

### OpÃ§Ã£o 3: Converter Logo para Base64 (Sem arquivo externo)

Se quer que tudo funcione sem dependÃªncias externas:

1. Abra: https://www.base64-image.de/
2. Upload sua logo
3. Copie o cÃ³digo base64
4. Cole assim:

```html
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..." alt="Gaby Drummond Yoga" />
```

---

## ðŸŽ¨ Estilos da Logo

A logo estÃ¡ dentro da bolinha com esses estilos:

```css
.nav-logo {
  width: 50px;
  height: 50px;
  background: var(--bg-card);        /* Fundo branco/claro */
  border-radius: 50%;                /* CÃ­rculo */
  border: 1px solid var(--border-default);
  overflow: hidden;                  /* Recorta a logo no cÃ­rculo */
  box-shadow: var(--shadow-md);      /* Sombra suave */
}

nav .nav-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;              /* Encaixa mantendo proporÃ§Ã£o */
  padding: 4px;                     /* EspaÃ§o dentro do cÃ­rculo */
}
```

---

## ðŸ“ Dica: Tamanho da Logo

Para melhor resultado:
- **Tamanho recomendado:** 200x200px (ou maior, sem problema)
- **Formato:** PNG, SVG ou JPG
- **Fundo:** Transparente (PNG com alpha channel)

Se a sua logo tem fundo colorido, pode deixar mesmo assim que o CSS cuida do encaixe.

---

## ðŸ”„ ComparaÃ§Ã£o: VersÃµes Light

| Aspecto | index-yoga-light.html | index-yoga-light-com-logo.html |
|---------|----------------------|--------------------------------|
| **Background** | Branco âœ… | Branco âœ… |
| **Logo** | SVG inline | Arquivo externo |
| **Tamanho arquivo** | Menor | Depende da logo |
| **Requer arquivo externo** | NÃ£o | Sim (logo) |
| **Qualidade logo** | Boa (SVG) | Melhor (original) |
| **Pronto para usar** | Sim âœ… | Requer setup |

---

## ðŸŽ¯ Passo a Passo Completo

### Se sua logo Ã© PNG e estÃ¡ em "Yoga Gaby - DRIVE"

1. **Copie a logo para a pasta leads:**
   ```
   De: C:\Users\carol\OneDrive\Yoga Gaby - DRIVE\Identidade visual - Yoga\
   Para: C:\Users\carol\code\PROJETOS\projeto-yoga\docs\leads\
   ```

2. **Abra `index-yoga-light-com-logo.html`**

3. **Procure por (linha ~215):**
   ```html
   <img src="logo-gaby.png" alt="Gaby Drummond Yoga" />
   ```

4. **Troque `logo-gaby.png` pelo nome real do arquivo:**
   ```html
   <!-- Exemplo -->
   <img src="20230301_160448000_iOS.png" alt="Gaby Drummond Yoga" />
   ```

5. **Salve (Ctrl+S)**

6. **Abra no browser e veja funcionando! ðŸŽ‰**

---

## âœ¨ Resultado Esperado

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  âœ§ NamaSer          ðŸ§˜ [Logo Gaby] â”‚  â† Logo em cÃ­rculo
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚                                         â”‚
â”‚         Seu Ritual DiÃ¡rio de PresenÃ§a   â”‚
â”‚                                         â”‚
â”‚              [FormulÃ¡rio]               â”‚
â”‚                                         â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

---

## ðŸŽ¨ Se Quiser Customizar Mais

### Mudar tamanho da logo:
```css
nav .nav-logo {
  width: 60px;   /* era 50px, agora maior */
  height: 60px;
}
```

### Mudar cor de fundo da bolinha:
```css
nav .nav-logo {
  background: #F3F1ED;  /* Era --bg-card, agora fixo mais escuro */
}
```

### Remover sombra da bolinha:
```css
nav .nav-logo {
  box-shadow: none;  /* Era var(--shadow-md) */
}
```

---

## ðŸ› Se a Logo NÃ£o Aparecer

1. **Verificar nome do arquivo:**
   - Windows Ã© case-sensitive em alguns contextos
   - Use exatamente o nome: `logo-gaby.png` â‰  `logo-Gaby.PNG`

2. **Verificar se o arquivo existe:**
   ```
   âœ… Logo deve estar em:
   C:\Users\carol\code\PROJETOS\projeto-yoga\docs\leads\logo-gaby.png
   ```

3. **Abrir o console do browser:**
   - Pressione F12
   - VÃ¡ em "Console"
   - Se houver erro como "404 logo-gaby.png not found"
   - Significa que o arquivo nÃ£o estÃ¡ no lugar certo

4. **SoluÃ§Ã£o rÃ¡pida:**
   - Copie o caminho completo na hora:
   ```html
   <img src="C:\Users\carol\code\PROJETOS\projeto-yoga\docs\leads\logo-gaby.png" alt="Gaby Drummond Yoga" />
   ```

---

## ðŸŒ Qual VersÃ£o Escolher?

### Use `index-yoga-light.html` se:
- âœ… Quer algo pronto agora
- âœ… NÃ£o quer lidar com arquivos
- âœ… Quer funcionar offline
- âœ… Logo SVG Ã© bom o suficiente

### Use `index-yoga-light-com-logo.html` se:
- âœ… Tem a logo Gaby real
- âœ… Quer mÃ¡xima qualidade
- âœ… Logo Ã© em alta resoluÃ§Ã£o
- âœ… Quer identidade visual completa

---

## ðŸ“± Cores da PÃ¡gina (Light Theme)

```css
/* Branco acolhedor */
--bg-app: #FFFFFF

/* Azul Gaby (principal) */
--text-primary: #1B5A6B

/* Azul claro (secundÃ¡rio) */
--accent-blue-light: #5ECFD8

/* Verde Sadhana */
--accent-green: #6B7B5E

/* Ouro quente */
--accent-gold: #D4A574
```

---

## ðŸš€ PrÃ³ximos Passos

- [ ] Copie a logo para a pasta
- [ ] Abra `index-yoga-light-com-logo.html`
- [ ] Atualize o nome do arquivo
- [ ] Teste no browser
- [ ] Compartilhe com seu time!

---

Generated: 2026-02-14
Theme: Light + Yoga Acolhedor
Background: Branco âœ¨
Logo: Gaby Drummond Integration Ready ðŸ§˜


