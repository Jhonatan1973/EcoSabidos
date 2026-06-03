const routes = {

    home: {
        title: "Home",
        number: "pg0001",
        html: "src/pages/pg0001/pg0001.html",
        css: "src/pages/pg0001/pg0001.css",
        js: "src/pages/pg0001/pg0001.js"
    }
    ,config: {
        title: "config",
        number: "pg0002",
        html: "src/pages/pg0002/pg0002.html",
        css: "src/pages/pg0002/pg0002.css",
        js: "src/pages/pg0002/pg0002.js"
    },


    perguntas: {
        title: "perguntas",
        number: "pg0003",
        html: "src/pages/pg0003/pg0003.html",
        css: "src/pages/pg0003/pg0003.css",
        js: "src/pages/pg0003/pg0003.js"
    },


    pontuacao: {
        title: "pontuacao",
        number: "pg0004",
        html: "./src/pages/pg0004/pg0004.html",
        css: "./src/pages/pg0004/pg0004.css",
        js: "./src/pages/pg0004/pg0004.js"
    },

};
async function loadPage(page) {

    const route = routes[page];
    if (!route) return;

    document.title = `EcoSabidos - ${route.title}`;

    const response = await fetch(route.html);
    let html = await response.text();

    html += `
        <div class="page-footer">
            <p>${route.title} - ${route.number}</p>
        </div>
    `;

    document.getElementById("app").innerHTML = html;

    // remove CSS antigo
    const oldCss = document.getElementById("page-css");
    if (oldCss) oldCss.remove();

    // adiciona CSS novo
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = route.css;
    link.id = "page-css";
    document.head.appendChild(link);

    // IMPORTANTE: importar JS UMA vez só
    const module = await import(new URL(route.js, window.location.href).href);

    if (module.init) {
        module.init();
    }
}
window.loadPage = loadPage;
loadPage("home");