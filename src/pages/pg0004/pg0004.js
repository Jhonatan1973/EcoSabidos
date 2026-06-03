// Traduções
const translations = {
    pt: {
        backBtn: "← VOLTAR",
        scorePageTitle: "Desempenho e Pontuação",
        scorePageSubtitle: "Acompanhe suas estatísticas de sustentabilidade em tempo real",
        totalScoreLabel: "Pontuação Total",
        totalCorrectLabel: "Total de Acertos",
        totalIncorrectLabel: "Total de Erros",
        historyTitle: "Histórico de Respostas",
        filterAll: "Todas",
        filterCorrect: "Acertos",
        filterIncorrect: "Erros",
        emptyHistoryText: "Você ainda não respondeu a nenhuma pergunta. Comece um quiz para acumular pontos!",
        resetBtn: "Resetar Histórico",
        userAnswerLabel: "Sua resposta: ",
        correctAnswerLabel: "Resposta correta: ",
        correctBadge: "Acertou",
        incorrectBadge: "Errou",
        resetConfirm: "Tem certeza de que deseja limpar todo o seu histórico de pontuação?",
        atWord: "às"
    },
    en: {
        backBtn: "← BACK",
        scorePageTitle: "Performance & Score",
        scorePageSubtitle: "Track your sustainability statistics in real-time",
        totalScoreLabel: "Total Score",
        totalCorrectLabel: "Total Correct",
        totalIncorrectLabel: "Total Incorrect",
        historyTitle: "Answer History",
        filterAll: "All",
        filterCorrect: "Correct",
        filterIncorrect: "Incorrect",
        emptyHistoryText: "You haven't answered any questions yet. Start a quiz to earn points!",
        resetBtn: "Reset History",
        userAnswerLabel: "Your answer: ",
        correctAnswerLabel: "Correct answer: ",
        correctBadge: "Correct",
        incorrectBadge: "Wrong",
        resetConfirm: "Are you sure you want to clear all your score history?",
        atWord: "at"
    },
    es: {
        backBtn: "← VOLVER",
        scorePageTitle: "Desempeño y Puntuación",
        scorePageSubtitle: "Sigue tus estadísticas de sostenibilidad en tiempo real",
        totalScoreLabel: "Puntuación Total",
        totalCorrectLabel: "Total de Aciertos",
        totalIncorrectLabel: "Total de Errores",
        historyTitle: "Historial de Respuestas",
        filterAll: "Todas",
        filterCorrect: "Aciertos",
        filterIncorrect: "Errores",
        emptyHistoryText: "Aún no has respondido ninguna pregunta. ¡Comienza un quiz para acumular puntos!",
        resetBtn: "Reiniciar Historial",
        userAnswerLabel: "Tu respuesta: ",
        correctAnswerLabel: "Respuesta correcta: ",
        correctBadge: "Correcto",
        incorrectBadge: "Incorrecto",
        resetConfirm: "¿Estás seguro de que deseas limpiar todo tu historial de puntuación?",
        atWord: "a las"
    }
};

let currentLanguage = localStorage.getItem('language') || 'pt';
let currentFilter = 'all';

export function init() {
    setLanguage(currentLanguage);
    setupLanguageButtons();
    setupFilters();
    setupResetButton();
    renderStatsAndHistory();
}

function setupLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        // Remove existing listener to prevent duplicates in SPA environment
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        
        newBtn.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            setLanguage(lang);
            localStorage.setItem('language', lang);
            renderStatsAndHistory(); // Re-render text translations in the list
        });
    });
}

function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-tabs .tab-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            renderHistoryList();
        });
    });
}

function setupResetButton() {
    const btnReset = document.getElementById('btnReset');
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            const confirmMsg = translations[currentLanguage]['resetConfirm'];
            if (confirm(confirmMsg)) {
                localStorage.removeItem('ecosabidos_stats');
                renderStatsAndHistory();
            }
        });
    }
}

function getStatsData() {
    return JSON.parse(localStorage.getItem('ecosabidos_stats')) || {
        score: 0,
        correct: 0,
        incorrect: 0,
        history: []
    };
}

function renderStatsAndHistory() {
    const data = getStatsData();
    
    // Update stats values
    const scoreVal = document.getElementById('statTotalScore');
    const correctVal = document.getElementById('statTotalCorrect');
    const incorrectVal = document.getElementById('statTotalIncorrect');
    
    if (scoreVal) scoreVal.textContent = data.score;
    if (correctVal) correctVal.textContent = data.correct;
    if (incorrectVal) incorrectVal.textContent = data.incorrect;
    
    renderHistoryList();
}

function renderHistoryList() {
    const data = getStatsData();
    const historyList = document.getElementById('historyList');
    if (!historyList) return;
    
    // Remove apenas os itens de histórico anteriores
    const items = historyList.querySelectorAll('.history-item');
    items.forEach(item => item.remove());
    
    const emptyHistory = document.getElementById('emptyHistory');
    
    // Filtra os itens do histórico de acordo com a aba ativa
    const filteredHistory = data.history.filter(item => {
        if (currentFilter === 'correct') return item.isCorrect;
        if (currentFilter === 'incorrect') return !item.isCorrect;
        return true; // 'all'
    });
    
    if (filteredHistory.length === 0) {
        if (emptyHistory) emptyHistory.style.display = 'flex';
        return;
    }
    
    if (emptyHistory) emptyHistory.style.display = 'none';
    
    // Ordena do mais recente para o mais antigo (mais recente primeiro)
    const sortedHistory = [...filteredHistory].reverse();
    
    sortedHistory.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = `history-item ${item.isCorrect ? 'correct' : 'incorrect'}`;
        
        const badgeText = item.isCorrect 
            ? translations[currentLanguage]['correctBadge'] 
            : translations[currentLanguage]['incorrectBadge'];
            
        const dateText = formatDate(item.timestamp, currentLanguage);
        
        itemEl.innerHTML = `
            <div class="item-header">
                <span class="item-badge">${badgeText}</span>
                <span class="item-date">${dateText}</span>
            </div>
            <div class="item-body">
                <h4 class="item-question">${item.question}</h4>
                <p class="item-user-ans">
                    <strong>${translations[currentLanguage]['userAnswerLabel']}</strong>
                    <span class="ans-text">${item.userAnswer}</span>
                </p>
                ${!item.isCorrect ? `
                <p class="item-correct-ans">
                    <strong>${translations[currentLanguage]['correctAnswerLabel']}</strong>
                    <span class="ans-text">${item.correctAnswer}</span>
                </p>
                ` : ''}
            </div>
        `;
        
        historyList.appendChild(itemEl);
    });
}

function formatDate(isoString, lang) {
    if (!isoString) return '';
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return '';
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    const at = translations[lang]['atWord'] || 'às';
    
    return `${day}/${month}/${year} ${at} ${hours}:${minutes}`;
}