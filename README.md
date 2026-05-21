# EcoSabidos
Quiz for office

Sistema de quiz desenvolvido com HTML, CSS e JavaScript puro, utilizando arquitetura de páginas dinâmicas (SPA simples).

---

# 📁 Estrutura do Projeto

/EcoSabidos
│
├── index.html
│
└── src
    ├── assets
    │   ├── css
    │   ├── js
    │   └── img
    │
    ├── settings
    │   └── routes.js
    │
    └── pages
        ├── pgxxxx
        │   ├── pgxxxx.html
        │   ├── pgxxxx.css
        │   └── pgxxxx.js

---

# 📌 1. Criação de Novas Páginas

Todas as páginas devem seguir obrigatoriamente o padrão abaixo:

pages
    pgxxxx
        pgxxxx.html
        pgxxxx.css
        pgxxxx.js

---

## ⚠️ Regras obrigatórias

- Nome de pastas e arquivos em minúsculo
- Utilizar sequência numérica crescente (pg0001, pg0002, pg0003...)
- Nunca pular números
- Nunca reutilizar números antigos

---

# ⚙️ 2. Registro no routes.js

Após criar a página, registrar no arquivo:

src/settings/routes.js

---

## Padrão de rota

nomeDaPagina: {
    title: "nomeDaPagina",
    html: "./src/pages/pgxxxx/pgxxxx.html",
    css: "./src/pages/pgxxxx/pgxxxx.css",
    js: "./src/pages/pgxxxx/pgxxxx.js"
},

---

## Exemplo

perguntas: {
    title: "perguntas",
    html: "./src/pages/pg0007/pg0007.html",
    css: "./src/pages/pg0007/pg0007.css",
    js: "./src/pages/pg0007/pg0007.js"
},

---

# 🧭 3. Navegação entre páginas

Para trocar de página usar:

<button class="btn" onclick="loadPage('perguntas')">Mudar de página</button>

---

## ⚠️ Importante

O nome dentro do loadPage deve ser igual ao nome da rota no routes.js

Exemplo:

loadPage('perguntas')

---

# 🎨 4. Sistema de estilo

O projeto já possui estilos globais prontos:

- cores padrão
- tamanhos padrão
- layout base
- botões estilizados
- topbar
- caixa de perguntas

---

## ⚠️ Regra importante

NUNCA alterar o CSS global sem aviso.

src/assets/css/global.css

---

## O que pode ser alterado

Dentro da sua página:

- pgxxxx.css
- pgxxxx.js

Você pode editar livremente sem afetar o sistema.

---

# 🧩 5. Componentes com CSS embutido

Já possuem estilo global:

- botões (saída, reset, respostas, ajuda, configurações)
- caixa de perguntas
- topbar

---

# 🚨 Regras finais

- Sempre criar páginas com padrão pgxxxx, (xxxx) sendo o numero da pagina
- Sempre registrar no routes.js
- Sempre usar loadPage() para navegação
- Nunca mexer no global sem permissão
- Cada página é independente

---

# 📘 Observação

O sistema funciona como uma SPA simples (Single Page Application), onde todas as páginas são carregadas dinamicamente sem reload do navegador.