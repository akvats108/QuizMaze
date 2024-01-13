const questions = [
    {
        question: "I speak without a mouth hear without ears. i have no body , but i come alive with the wind . What am I?",
        answers: [
            {text: "Echo", correct: true},
            {text: "Windmil", correct: false},
            {text: "Shadow", correct: false},
            {text: "Wishper", correct: false},
        ]
    },
    {
        question: "I'm taken from a mine and shut up in a wooden case from which i am never released , and yet i am used by almost every person. What am I?",
        answers: [
            {text: "Gold", correct: false},
            {text: "Diamond", correct: false},
            {text: "Pencil", correct: true},
            {text: "Coal", correct: false},
        ]   
    },
    {
        question: "The more you take, the more you leave behind. What am I?",
        answers: [
            {text: "Memories", correct: false},
            {text: "Decisions", correct: false},
            {text: "Secrets", correct: false},
            {text: "Footstepts", correct: true},
        ]
    },
    {
        question: " What comes once in a minute , twice in a moment, but never in a thousand years?",
        answers: [
            {text: "Opportunity", correct: false},
            {text: "Number 2", correct: false},
            {text: "Clock", correct: false},
            {text: "Letter M", correct: true},
        ]
    },
    {
        question: "What has keys but can't open locks?",
        answers: [
            {text: "Keyboard", correct: false},
            {text: "Piano", correct: true},
            {text: "Teasure chest", correct: false},
            {text: "Banana", correct: false},
        ]
    },
    {
        question: "  What has cities but no houses, forests but no trees, and rivers but no water?",
        answers: [
            {text: "Globe", correct: false},
            {text: "Map", correct: true},
            {text: "Library", correct: false},
            {text: "Desert", correct: false},
        ] 
    }
]; 

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
     resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.addEventListener("click", selectAnswer);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){ 
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true"
    });
    nextButton.style.display = "block";  
}

 
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    
     
}

function handleNextButton(){
     currentQuestionIndex++;
     if(currentQuestionIndex < questions.length){
        showQuestion();
     }else{
        showScore();
     }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz(); 
