//COUNTDOWN TIMER
let timeLeft = 5 * 60 ;

const timerDisplay = document.getElementById("timer");

const countdown = setInterval(function(){

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timerDisplay.textContent = String(minutes).padStart(2,"0") + ":" + String(seconds).padStart(2,"0");

    if (timeLeft <= 0){
        clearInterval(countdown);

        timerDisplay.textContent = "00:00";

        alert("Time is up!");


        document.getElementById("submit-btn").disabled = true;

        return;
    }
    timeLeft--;
}, 500);


const quizData = [
{
    question: "Find the sum to infinity when the first term is 2 and the common ratio is 3/5",
    options: ["5", "3", "7", "6"],
    answer: "5"
},

{
    question: "Find the value of a, b in the arithmetic series of 8, a, b, 20",
    options: ["12,16", "12,14", "10,17", "10,13"],
    answer: "12,16"
},
{
    question: "If A, B, C are subsets then Set C = (A - B)U(B - a)",
    options: ["Union", "Disjoint", "Difference of two sets", "Symmetric difference of two sets"],
    answer: "Symmetric difference of two sets"
},
{
    question: "If A = [5,6,7] and B = [5,6,8,9]. Find the set B - A",
    options: ["{7}", "{5,6}", "{5,6,7}", "{8,9}"],
    answer: "{8,9}"
},
{
    question: "Sum of A.P in 1,3,5... 101 is",
    options: ["51", "510", "260", "2601"],
    answer: "2601"
},
{
    question: "Find the arithmetic mean of 34 and 68",
    options: ["102", "51", "48", "15"],
    answer: "51"
},
{
    question: "The nature of the quadratic equation 3x2 + 4x + 2 = 0 is",
    options: ["Two equal roots", "Real and different roots", "Real and equal roots", "No real roots"],
    answer: "No real roots"
},
{
    question: "If P = [1,3,5,7,9,11] and Q = [2,4,6,8,10,12]. Determine the relationship between P and Q. i. Disjoint ii. PnQ = !0 or {} iii. (PnQ) = 0",
    options: ["i only", "ii only", "i and ii only", "i,ii and iii"],
    answer: "i and ii only"
},
{
    question: "Find the number of term of an AP given that the first and last term are k and 37k respectively and common difference is 4k",
    options: ["13", "11", "12", "10"],
    answer: "10"
},
{
    question: "What is the sum of integers from 1 to 1000?",
    options: ["500600", "500500", "600500", "500502"],
    answer: "500500"
},






];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

function loadQuestion(){
    const currentQuestion = quizData[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const resultElement = document.getElementById('result');

    // Clear any previous result
    resultElement.textContent = '';

    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML='';

    currentQuestion.options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(optionButton);
    });
}

function checkAnswer(selectedOption){
    const currentQuestion = quizData[currentQuestionIndex];
    const resultElement = document.getElementById('result');

    if (selectedOption === currentQuestion.answer){
        score++;
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green"
    } else {
        resultElement.textContent = `Incorrect! The correct answer was ${currentQuestion.answer}.`;
        resultElement.style.color = "red";
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length){
        setTimeout(() =>{
            loadQuestion(); //Load next question after 1 second
        }, 3000);
    } else {
        setTimeout(() => {
            showResult();
        }, 2000);
    }
}

function showResult(){
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your score: ${score} out of ${quizData.length}`;
    resultElement.style.color = "black";
    document.getElementById('submit-btn').disabled = true;
}

document.getElementById('submit-btn').addEventListener('click', () => {
    if (currentQuestionIndex === quizData.length){
        showResult();
    }
});

// Initial load of the first question
loadQuestion();

