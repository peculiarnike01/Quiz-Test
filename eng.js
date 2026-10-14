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
    question: "The ratio of adverb to noun in 'Singing regularly happens to be my hobby' is ",
    options: ["1:2", "None", "1:3", "1:1"],
    answer: "1:2"
},

{
    question: "How many words have derivatives suffixes in the sentence 'Singers of questionable talent' ?",
    options: ["2", "3", "4", "1"],
    answer: "2"
},
{
    question: "The headword for 'the use of English for science students' is ",
    options: ["Use", "English", "Students", "Science"],
    answer: "Use"
},
{
    question: "It rained yesterday. 'Rained' is what verb? ",
    options: ["Non-finite", "Auxiliary", "Finite Verbs", "Transitive"],
    answer: "Auxiliary"
},
{
    question: "The morpheme -fy in the word 'Identify' is",
    options: ["Inflectional", "Derivational", "Prefixational", "None "],
    answer: "Derivational"
},
{
    question: "The word 'man' in the sentence 'I will man the gate at the occasion' is",
    options: ["Noun", "Adjective", "Verb", "Adverb"],
    answer: "Verb"
},
{
    question: "What type of subordinate clause is in the sentence 'I know that there are refineries in Nigeria",
    options: ["Gerundial clause", "Noun clause", "Adjectival clause", "Adverbial clause"],
    answer: "Noun clause"
},
{
    question: "A noun is in it's nominative case when it is used in a sentence as what?",
    options: ["None", "Object", "Subject", "Verb"],
    answer: "Subject"
},
{
    question: "In-animate objects gender is ",
    options: ["Feminine", "Common", "Neuter", "Masculine"],
    answer: "Neuter"
},
{
    question: "A combination of one main and subordinate clause gives us?",
    options: ["Complex sentence", "Compound sentence", "Simple sentence", "All of the above"],
    answer: "Complex sentence"
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

