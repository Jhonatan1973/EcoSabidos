// Traduções
const translations = {
    pt: {
        appTitle: "EcoSabidos",
        appSubtitle: "Teste seus conhecimentos sobre sustentabilidade",
        startBtn: "COMEÇAR",
        testBtn: "TESTE RÁPIDO",
        infoText: "Aprenda sobre meio ambiente enquanto se diverte!"
    },
    en: {
        appTitle: "EcoSabidos",
        appSubtitle: "Test your knowledge about sustainability",
        startBtn: "START",
        testBtn: "QUICK TEST",
        infoText: "Learn about the environment while having fun!"
    },
    es: {
        appTitle: "EcoSabidos",
        appSubtitle: "Prueba tus conocimientos sobre sostenibilidad",
        startBtn: "COMENZAR",
        testBtn: "PRUEBA RÁPIDA",
        infoText: "¡Aprende sobre el medio ambiente mientras te diviertes!"
    }
};

let currentLanguage = localStorage.getItem('language') || 'pt';

export function init() {
    // Inicializar idioma
    setLanguage(currentLanguage);
    setupLanguageButtons();
}

function setupLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            setLanguage(lang);
            localStorage.setItem('language', lang);
        });
    });
}

function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Atualizar elementos com data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Atualizar botões ativos
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
}