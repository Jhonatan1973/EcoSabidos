const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const pageName = process.argv[2];
const branchType = process.argv[3] || 'feature';

if (!pageName) {
    console.log('\nUse: npm run page nomeDaPagina [feature|fix]\n');
    process.exit();
}

const routesPath = path.join(__dirname, 'src/settings/routes.js');
const pagesPath = path.join(__dirname, 'src/pages');

if (!fs.existsSync(routesPath)) {
    console.log('routes.js não encontrado.');
    process.exit();
}

if (!fs.existsSync(pagesPath)) {
    console.log('Pasta pages não encontrada.');
    process.exit();
}

const normalizedName = pageName.toLowerCase();

const routesContent = fs.readFileSync(routesPath, 'utf8');

if (routesContent.includes(`${normalizedName}:`)) {
    console.log(`Rota "${normalizedName}" já existe.`);
    process.exit();
}

const pages = fs.readdirSync(pagesPath)
    .filter(p => /^pg\d{4}$/.test(p))
    .sort();

let nextNumber = 1;

if (pages.length > 0) {
    const lastPage = pages[pages.length - 1];
    nextNumber = parseInt(lastPage.replace('pg', '')) + 1;
}

const pageCode = `pg${String(nextNumber).padStart(4, '0')}`;
const pageFolder = path.join(pagesPath, pageCode);

console.log(`Criando ${pageCode}...`);

fs.mkdirSync(pageFolder);

const htmlContent = `
<div class="topbar">
    <h1>${normalizedName}</h1>
</div>

<div class="question-box">
    Conteúdo da página
</div>
`;

const cssContent = `
/* ${pageCode}.css */
`;

const jsContent = `
export function init() {
    console.log('${normalizedName} carregada');
}
`;

fs.writeFileSync(
    path.join(pageFolder, `${pageCode}.html`),
    htmlContent.trim()
);

fs.writeFileSync(
    path.join(pageFolder, `${pageCode}.css`),
    cssContent.trim()
);

fs.writeFileSync(
    path.join(pageFolder, `${pageCode}.js`),
    jsContent.trim()
);

const newRoute = `
    ${normalizedName}: {
        title: "${normalizedName}",
        number: "${pageCode}",
        html: "./src/pages/${pageCode}/${pageCode}.html",
        css: "./src/pages/${pageCode}/${pageCode}.css",
        js: "./src/pages/${pageCode}/${pageCode}.js"
    },
`;

const routesStart = routesContent.indexOf('const routes = {');

if (routesStart === -1) {
    console.log('Objeto routes não encontrado.');
    process.exit();
}

const routesEnd = routesContent.indexOf('};', routesStart);

if (routesEnd === -1) {
    console.log('Fechamento do routes não encontrado.');
    process.exit();
}

const beforeEnd = routesContent.slice(0, routesEnd);
const afterEnd = routesContent.slice(routesEnd);

const updatedRoutes =
    beforeEnd +
    newRoute +
    '\n' +
    afterEnd;

fs.writeFileSync(routesPath, updatedRoutes);

const branchName =
    branchType === 'fix'
        ? `fix/${normalizedName}`
        : `feature/pagina-${normalizedName}`;

try {
    execSync(`git checkout -b ${branchName}`, {
        stdio: 'inherit'
    });
} catch {
    console.log('Branch já existe ou git não iniciado.');
}

console.log(`
✓ Pasta criada
✓ HTML criado
✓ CSS criado
✓ JS criado
✓ routes atualizado
✓ Branch criada
`);