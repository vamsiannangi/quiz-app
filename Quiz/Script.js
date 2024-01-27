let selectedTopics = [];
let currentQuestionIndex = 0;
let userScore = 0;

const quizData = [
    {
        "category": "General Knowledge",
        "questions": [
            {
                "question": "Who wrote 'To Kill a Mockingbird'?",
                "options": ["Harper Lee", "George Orwell", "Jane Austen", "F. Scott Fitzgerald"],
                "answer": "Harper Lee"
            },
            {
                "question": "Who is the author of the play Romeo and Juliet?",
                "options": ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
                "answer": "William Shakespeare"
            },
            {
                "question": "Which planet is known as the 'Red Planet'?",
                "options": ["Venus", "Mars", "Jupiter", "Saturn"],
                "answer": "Mars"
            },
            // More questions...
        ]
    },
    // Add more categories...

    {
        "category": "Science",
        "questions": [
            {
                "question": "What is the chemical symbol for water?",
                "options": ["H2O", "CO2", "O2", "CH4"],
                "answer": "H2O"
            },
            {
                "question": "What is the chemical symbol for Hydrogen?",
                "options": ["H", "C", "O", "He"],
                "answer": "H"
            },
            {
                "question": "What is the chemical symbol for gold?",
                "options": ["Au", "Ag", "Fe", "Hg"],
                "answer": "Au"
            },
            // More questions...
        ]
    },
    {
        "category": "Mathematics",
        "questions": [
            {
                "question": "Solve the equation 2x+5=15?",
                "options": ["x=5", "x=7", "x=10", "x=15"],
                "answer": "x=5"
            },
            {
                "question": "What is the area of a rectangle with length 8 units and width 6 units?",
                "options": ["12sq units", "24sq units", "32sq units", "48sq units"],
                "answer": "48sq units"
            },
            // More questions...
        ]
    },
    // Add more categories...
];

const startQuizBtn = document.getElementById('startQuizBtn');
const topicSelection = document.getElementById('topicSelection');
const questionContainer = document.getElementById('questionContainer');
const resultContainer = document.getElementById('resultContainer');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');

function showTopics() {
    startQuizBtn.style.display = 'none';
    topicSelection.style.display = 'block';
}

function startQuiz() {
    topicSelection.style.display = 'none';
    selectedTopics = getSelectedTopics();
    showNextQuestion();
}

function getSelectedTopics() {
    const selected = [];
    if (document.getElementById('chkGeneralKnowledge').checked) {
        selected.push('General Knowledge');
    }
    if (document.getElementById('chkScience').checked) {
        selected.push('Science');
    }
    if (document.getElementById('chkMathematics').checked) {
        selected.push('Mathematics');
    }
    // Add more topics as needed
    return selected;
}

function showNextQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const currentCategory = quizData[currentQuestionIndex];
        if (selectedTopics.includes(currentCategory.category)) {
            const currentQuestion = currentCategory.questions[0]; // Assuming only one question for simplicity
            questionElement.textContent = currentQuestion.question;

            optionsElement.innerHTML = "";
            for (let i = 0; i < currentQuestion.options.length; i++) {
                const option = document.createElement('button');
                option.textContent = currentQuestion.options[i];
                option.onclick = function () {
                    checkAnswer(currentQuestion.options[i]);
                };
                optionsElement.appendChild(option);
            }

            questionContainer.style.display = 'block';
        } else {
            currentQuestionIndex++;
            showNextQuestion();
        }
    } else {
        endQuiz();
    }
}

function checkAnswer(userAnswer) {
    const currentCategory = quizData[currentQuestionIndex];
    const currentQuestion = currentCategory.questions[0]; // Assuming only one question for simplicity
    if (userAnswer === currentQuestion.answer) {
        userScore++;
    }

    currentQuestionIndex++;
    showNextQuestion();
}

function endQuiz() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.textContent = userScore + " / " + selectedTopics.length;
}
