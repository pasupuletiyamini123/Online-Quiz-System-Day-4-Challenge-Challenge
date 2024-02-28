const quizData = [
    {
        question: "Which planet is known as the "Red Planet"??",
        options: [" Venus","Mars","Jupiter","Saturn"],
        answer: " Mars"
    },
    {
        question: "What is 02+04+143-76+27*30+568?",
        options: ["3489", "1451", "1541", "1269"],
        answer: "1451"
    }
];

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = "";
    currentQuizData.options.forEach(option => {
        const optionElement = document.createElement('button');
        optionElement.innerText = option;
        optionElement.classList.add('option');
        optionElement.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer(answer) {
    if (answer === quizData[currentQuestion].answer) {
        score++;
        resultElement.innerText = "Correct!";
    } else {
        resultElement.innerText = "Wrong!";
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        quizContainer.innerHTML = `
            <h2>You completed the quiz!</h2>
            <p>Your score is ${score}/${quizData.length}</p>
        `;
    }
}

loadQuestion();