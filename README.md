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

# 🌿 GIT FLOW - EcoSabidos

No projeto EcoSabidos você deve SEMPRE usar branches para manter o sistema organizado, evitar bugs e garantir que o código principal (main) nunca quebre.

---

# 🧠 REGRAS GERAIS

- NUNCA trabalhar direto na branch main
- Sempre criar uma branch antes de qualquer alteração
- Cada branch deve ter apenas UMA responsabilidade
- Main deve estar sempre funcionando

---

# 🚀 TIPOS DE BRANCH

Você vai usar APENAS 2 tipos:

---

# 🌱 FEATURE (novas funcionalidades)

Use quando estiver criando algo novo no sistema.

Exemplos:
- nova página
- novo botão global
- novo layout
- novo sistema
- nova rota
- nova funcionalidade

📌 Padrão de nome:

feature/nome-da-funcionalidade

📌 Exemplos:

feature/pagina-home
feature/pagina-perguntas
feature/sistema-login
feature/botoes-globais
feature/topbar-global

---

# 🛠️ FIX (correção de erros)

Use quando estiver corrigindo algo quebrado.

Exemplos:
- botão não funciona
- loadPage bugado
- CSS quebrado
- erro de rota
- JS não executa
- página não carrega

📌 Padrão de nome:

fix/problema-resumido

📌 Exemplos:

fix/loadpage-nao-carrega
fix/botao-nao-clica
fix/css-global-quebrando-layout
fix/js-nao-executa-pagina
fix/erro-rota-usuarios

---

# 🔄 FLUXO DE TRABALHO

## 1. Criar branch

git checkout -b feature/nome-ou-fix

---

## 2. Desenvolver a tarefa

- criar páginas
- editar routes.js
- ajustar CSS
- criar JS
- testar sistema

---

## 3. Testar tudo

Antes de finalizar, garantir que:
- loadPage funciona
- página carrega
- CSS aplica corretamente
- botões funcionam

---

## 4. Voltar para main

git checkout main

---

## 5. Juntar código

git merge feature/nome-da-branch

ou

git merge fix/nome-da-branch

---

## 6. Apagar branch (opcional)

git branch -d feature/nome-da-branch

---

# ⚠️ REGRAS IMPORTANTES

- Main nunca pode quebrar
- Cada branch é uma tarefa isolada
- Não misturar feature com fix
- Não fazer várias coisas na mesma branch
- Sempre testar antes de dar merge

---

# 🧠 COMO PENSAR NO PROJETO

MAIN:
→ sistema estável e funcionando

FEATURE:
→ estou criando algo novo

FIX:
→ estou corrigindo algo quebrado

---

# 🚀 EXEMPLO REAL NO EcoSabidos

Criar nova página perguntas:

feature/pagina-perguntas

Corrigir botão reset:

fix/botao-reset-nao-funciona

Criar sistema de navegação:

feature/sistema-loadpage

Corrigir CSS global:

fix/css-global-layout-quebrado

---

# 📘 RESUMO FINAL

feature = criar coisas novas  
fix = corrigir problemas  
main = sistema estável  

---

# 🔥 OBJETIVO

Manter o EcoSabidos:
- organizado
- escalável
- sem bugs acumulados
- pronto para crescer como sistema profissional