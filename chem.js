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
    question: "The higher the ionization energy of an element, the more the",
    options: ["Volume", "Reactive", "Stable", "Unstable"],
    answer: "Stable"
},

{
    question: "What happens to the concentration of a solution when it is diluted?",
    options: ["it decreases", "it remains the same", "it doubles", "it increases"],
    answer: "it doubles"
},
{
    question: "What type of bond is responsible for the high melting and boiling points of water?",
    options: ["Hydrogen bond", "Ionic bond", "Covalent bond", "Van der waals bond"],
    answer: "Symmetric difference of two sets"
},
{
    question: "Which of the following favors the production of ammonia in the haber process?",
    options: ["Presence of finely divided ion", "Low temperature", "High pressure", "All of the above"],
    answer: "All of the above"
},
{
    question: "The species that brings about oxidation and it is reduced is",
    options: ["Oxidation", "Oxidant", "Reducing agents", "Reduction"],
    answer: "Oxidant"
},
{
    question: "How many lone pair and bonding pair of electrons are present in Oxygen molecules respectively?",
    options: ["3,3", "5,5", "3,2", "4,4"],
    answer: "4,4"
},
{
    question: "How many degenerated orbitals are in d-orbitals?",
    options: ["4", "5", "2", "3"],
    answer: "5"
},
{
    question: "During electrolysis of a salt of metal X of mass 0.52g with a current of 0.5A for 32min 10sec. What is the mole (F = 96500)?",
    options: ["3", "1", "4", "2"],
    answer: "1"
},
{
    question: "Calculate the atom of Cu in 35.4g of the substance (Avogadro's number is 6.02*1023, Mm = 63.5g/mol)",
    options: ["1.08*10^24", "6.02*10^23", "1.20*10^23", "3.37*10^23"],
    answer: "3.37*10^23"
},
{
    question: "If relative molecular mass is 2Y, what is Y?",
    options: ["Gas constant", "Vapour density of gas", "Volume", "Pressure"],
    answer: "Vapour density of gas"
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
