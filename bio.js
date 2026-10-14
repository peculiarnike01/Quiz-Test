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
    question: "Which one of these is not a product of Anaerobic respiration?",
    options: ["Water", "Lactic acid", "Carbondioxide", "Alcohol"],
    answer: "Water"
},

{
    question: "Which of these is the Excretory unit of mammalian kidney?",
    options: ["Cell", "Alveoli", "Medulla", "Nephron"],
    answer: "Nephron"
},
{
    question: "The tracheal system of gaseous exchange is common in ?",
    options: ["Goat", "Earthworm", "Insect", "Fish"],
    answer: "Insect"
},
{
    question: "Which year was laww of Inheritance of Parental character by Progenies elucidate?",
    options: ["1920", "1884", "1810", "1822"],
    answer: "1822"
},
{
    question: "Transpiration occur in plants from internal tissue through?",
    options: ["Stem and root", "Shoot and stem", "Leaves and stem", "Leaves and green shoot"],
    answer: "Leaves and green shoot"
},
{
    question: "The cell theory was postulated in what year?",
    options: ["1665", "1839", "1831", "1801"],
    answer: "1839"
},
{
    question: "The following are examples of Polymorph except;",
    options: ["Granulocyte", "Basophils", "Eosinophils", "Neutrophils"],
    answer: "Granulocyte"
},
{
    question: "Glycolysis takes place in",
    options: ["Mitochondrial outer membrane", "Cytoplasm", "Mitochondrial Matrix", "Mitochondrial and cytoplasm"],
    answer: "Cytoplasm"
},
{
    question: "Genes expression means",
    options: ["Accumulation of proteins", "Neutralization of proteins", "Synthesis of proteins", "Metabolism in plants"],
    answer: "Synthesis of proteins"
},
{
    question: "Commonest form of nucleic acid is?",
    options: ["DNA", "RNA", "Inorganic acid", "Organic acid"],
    answer: "DNA"
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

