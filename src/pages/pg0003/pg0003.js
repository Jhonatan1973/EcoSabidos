// Traduções
const translations = {
    pt: {
        backBtn: "← VOLTAR",
        finalTitle: "Resultado Final",
        homeBtn: "VOLTAR À HOME",
        correct: "Excelente! Você é um verdadeiro especialista em sustentabilidade!",
        good: "Muito bom! Você tem um bom conhecimento sobre o meio ambiente!",
        regular: "Bom começo! Continue aprendendo sobre sustentabilidade.",
        needsImprovement: "Continue estudando! Aprenda mais sobre sustentabilidade."
    },
    en: {
        backBtn: "← BACK",
        finalTitle: "Final Score",
        homeBtn: "BACK TO HOME",
        correct: "Excellent! You are a true sustainability expert!",
        good: "Very good! You have good knowledge about the environment!",
        regular: "Good start! Keep learning about sustainability.",
        needsImprovement: "Keep studying! Learn more about sustainability."
    },
    es: {
        backBtn: "← VOLVER",
        finalTitle: "Resultado Final",
        homeBtn: "VOLVER AL INICIO",
        correct: "¡Excelente! ¡Eres un verdadero experto en sostenibilidad!",
        good: "¡Muy bien! ¡Tienes buen conocimiento del medio ambiente!",
        regular: "¡Buen comienzo! Sigue aprendiendo sobre sostenibilidad.",
        needsImprovement: "¡Sigue estudiando! Aprende más sobre sostenibilidad."
    }
};

// Perguntas do Quiz
const quizQuestions = {
    pt: [
        {
            question: "Qual é o impacto ambiental do desmatamento?",
            options: [
                "Reduz a poluição do ar",
                "Aumenta a emissão de CO2 e reduz biodiversidade",
                "Melhora a qualidade do solo",
                "Aumenta a quantidade de água no planeta"
            ],
            correct: 1
        },
        {
            question: "Qual material é mais sustentável para embalagens?",
            options: [
                "Plástico comum",
                "Papel e papelão recicláveis",
                "Poliestireno",
                "Plástico de única vez"
            ],
            correct: 1
        },
        {
            question: "Quantos litros de água são necessários para produzir 1kg de algodão?",
            options: [
                "Aproximadamente 100 litros",
                "Aproximadamente 1000 litros",
                "Aproximadamente 10.000 litros",
                "Não consome água"
            ],
            correct: 2
        },
        {
            question: "Qual é o principal benefício das energias renováveis?",
            options: [
                "São mais caras",
                "Não prejudicam o meio ambiente e são inexotáveis",
                "Produzem muito lixo tóxico",
                "Aumentam a poluição"
            ],
            correct: 1
        },
        {
            question: "O que é economia circular?",
            options: [
                "Um sistema econômico que foca em lucro rápido",
                "Um modelo que minimiza reduz, reutiliza e recicla recursos",
                "Uma moeda digital",
                "Uma política de desmatamento controlado"
            ],
            correct: 1
        }
    ],
    en: [
        {
            question: "What is the environmental impact of deforestation?",
            options: [
                "Reduces air pollution",
                "Increases CO2 emissions and reduces biodiversity",
                "Improves soil quality",
                "Increases the amount of water on the planet"
            ],
            correct: 1
        },
        {
            question: "Which material is most sustainable for packaging?",
            options: [
                "Common plastic",
                "Recyclable paper and cardboard",
                "Polystyrene",
                "Single-use plastic"
            ],
            correct: 1
        },
        {
            question: "How many liters of water are needed to produce 1kg of cotton?",
            options: [
                "Approximately 100 liters",
                "Approximately 1000 liters",
                "Approximately 10,000 liters",
                "No water consumption"
            ],
            correct: 2
        },
        {
            question: "What is the main benefit of renewable energy?",
            options: [
                "They are more expensive",
                "They don't harm the environment and are inexhaustible",
                "They produce toxic waste",
                "They increase pollution"
            ],
            correct: 1
        },
        {
            question: "What is a circular economy?",
            options: [
                "An economic system that focuses on quick profit",
                "A model that minimizes, reuses, and recycles resources",
                "A digital currency",
                "A controlled deforestation policy"
            ],
            correct: 1
        }
    ],
    es: [
        {
            question: "¿Cuál es el impacto ambiental de la deforestación?",
            options: [
                "Reduce la contaminación del aire",
                "Aumenta las emisiones de CO2 y reduce la biodiversidad",
                "Mejora la calidad del suelo",
                "Aumenta la cantidad de agua en el planeta"
            ],
            correct: 1
        },
        {
            question: "¿Qué material es más sostenible para el embalaje?",
            options: [
                "Plástico común",
                "Papel y cartón reciclables",
                "Poliestireno",
                "Plástico de un solo uso"
            ],
            correct: 1
        },
        {
            question: "¿Cuántos litros de agua se necesitan para producir 1kg de algodón?",
            options: [
                "Aproximadamente 100 litros",
                "Aproximadamente 1000 litros",
                "Aproximadamente 10.000 litros",
                "No consume agua"
            ],
            correct: 2
        },
        {
            question: "¿Cuál es el principal beneficio de las energías renovables?",
            options: [
                "Son más caras",
                "No dañan el medio ambiente y son inagotables",
                "Producen muchos desechos tóxicos",
                "Aumentan la contaminación"
            ],
            correct: 1
        },
        {
            question: "¿Qué es la economía circular?",
            options: [
                "Un sistema económico enfocado en ganancias rápidas",
                "Un modelo que minimiza, reutiliza y recicla recursos",
                "Una moneda digital",
                "Una política de deforestación controlada"
            ],
            correct: 1
        }
    ]
};

let currentLanguage = localStorage.getItem('language') || 'pt';
let currentQuestion = 0;
let score = 0;
let answered = false;

export function init() {
    setLanguage(currentLanguage);
    setupLanguageButtons();
    loadQuestion();
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

function loadQuestion() {
    if (currentQuestion >= quizQuestions[currentLanguage].length) {
        showResults();
        return;
    }

    const questionContainer = document.querySelector('.question-container');
    if (!questionContainer) return;

    const question = quizQuestions[currentLanguage][currentQuestion];
    const progressPercent = ((currentQuestion + 1) / quizQuestions[currentLanguage].length) * 100;
    
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        progressFill.style.width = progressPercent + '%';
    }
    
    const progressText = document.getElementById('progressText');
    if (progressText) {
        progressText.textContent = `Pergunta ${currentQuestion + 1} de ${quizQuestions[currentLanguage].length}`;
    }
    
    document.getElementById('questionTitle').textContent = question.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => selectAnswer(index, question.correct);
        optionsContainer.appendChild(btn);
    });
    
    answered = false;
}

function selectAnswer(selectedIndex, correctIndex) {
    if (answered) return;
    
    answered = true;
    const optionButtons = document.querySelectorAll('.option-btn');
    
    optionButtons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === correctIndex) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && selectedIndex !== correctIndex) {
            btn.classList.add('incorrect');
        }
    });
    
    if (selectedIndex === correctIndex) {
        score++;
    }
    
    setTimeout(() => {
        currentQuestion++;
        loadQuestion();
    }, 2000);
}

function showResults() {
    document.querySelector('.question-container').style.display = 'none';
    
    const scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.style.display = 'block';
    
    document.getElementById('finalScore').textContent = `${score}/${quizQuestions[currentLanguage].length}`;
    
    const percent = (score / quizQuestions[currentLanguage].length) * 100;
    let messageKey = 'needsImprovement';
    
    if (percent === 100) {
        messageKey = 'correct';
    } else if (percent >= 80) {
        messageKey = 'good';
    } else if (percent >= 60) {
        messageKey = 'regular';
    }
    
    document.getElementById('finalMessage').textContent = translations[currentLanguage][messageKey];
    
    // Resetar para próximo quiz
    currentQuestion = 0;
    score = 0;
}