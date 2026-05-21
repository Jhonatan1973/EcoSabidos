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

Todas as páginas devem seguir obrigatoriamente o padrão:

pages
    pgxxxx
        pgxxxx.html
        pgxxxx.css
        pgxxxx.js

⚠️ Regras obrigatórias:
- Nome de pastas e arquivos em minúsculo
- Utilizar sequência numérica crescente (pg0001, pg0002, pg0003...)
- Nunca pular números
- Nunca reutilizar números antigos

---

# ⚙️ 2. Registro de Páginas (routes.js)

Após criar uma nova página, registrar em:
src/settings/routes.js

Padrão:
nomeDaPagina: {
    title: "nomeDaPagina",
    html: "./src/pages/pgxxxx/pgxxxx.html",
    css: "./src/pages/pgxxxx/pgxxxx.css",
    js: "./src/pages/pgxxxx/pgxxxx.js"
},

Exemplo:
perguntas: {
    title: "Perguntas",
    html: "./src/pages/pg0002/pg0002.html",
    css: "./src/pages/pg0002/pg0002.css",
    js: "./src/pages/pg0002/pg0002.js"
},

---

# 🧭 3. Navegação entre páginas

Para trocar de página usar:
<button class="btn" onclick="loadPage('perguntas')">Mudar de página</button>

⚠️ Importante:
O nome dentro do loadPage deve ser exatamente igual ao nome da rota no routes.js

Exemplo:
loadPage('perguntas')

---

# 🎨 4. Sistema de Estilo (CSS GLOBAL)

O projeto utiliza APENAS CSS global.

Todos os estilos estão em:
src/assets/css/global.css

O sistema NÃO usa mais components.

Agora funciona assim:
- Você usa IDs ou classes padrões
- O CSS global já aplica o estilo automaticamente

Exemplos:
<button id="btn-exit">Sair</button>
<button id="btn-reset">Resetar</button>
<button id="btn-help">Ajuda</button>
<button id="btn-config">Configurações</button>

<div class="question-box">Pergunta aqui</div>

<div class="topbar"><h1>Título da Página</h1></div>

---

⚠️ Regra importante:
NUNCA alterar o CSS global sem autorização.

src/assets/css/global.css

---

O que pode ser alterado:
- pgxxxx.css
- pgxxxx.js

---

# 🚨 Regras finais

- Sempre criar páginas no padrão pgxxxx
- Sempre registrar no routes.js
- Sempre usar loadPage() para navegação
- Nunca mexer no CSS global sem permissão
- Cada página é independente
- Estilo baseado em IDs e classes globais
- Não usar mais components

---

# 📘 Observação

O sistema funciona como uma SPA simples (Single Page Application), onde todas as páginas são carregadas dinamicamente sem reload do navegador.