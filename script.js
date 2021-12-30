var timerEl = document.getElementById("timer")
var startBtn = document.getElementById("start")
var quizBodyEl = document.getElementById("main-body")
var timeLeft = 50;

var questions = [
    {question: "what is the answer?",
    option1:"this is the first option",
    option2:"this is the second option",
    option3:"option 3",
    answer: "3"},
    {question: "what is the answer?",
    option1:"this is the first option",
    option2:"this is the second option",
    option3:"option 3",
    answer: "3"},
    {question: "what is the answer?",
    option1:"this is the first option",
    option2:"this is the second option",
    option3:"option 3",
    answer: "3"}
]


startBtn.addEventListener("click", function () {
    for (i = 0; i < questions.length; i++){
    
    quizBodyEl.textContent = ""
    var questionEl = document.createElement("ol")
    questionEl.textContent = questions[i].question
    option1 = document.createElement("li")
    option1.textContent = questions[i].option1
    questionEl.appendChild(option1)
    quizBodyEl.appendChild(questionEl)
    option2 = document.createElement("li")
    option2.textContent = questions[i].option2
    questionEl.appendChild(option2)
    quizBodyEl.appendChild(questionEl)
    option3 = document.createElement("li")
    option3.textContent = questions[i].option3
    questionEl.appendChild(option3)
    quizBodyEl.appendChild(questionEl)
}
    var timer = setInterval(function () {
        timerEl.textContent = timeLeft
        timeLeft--;
        if (timeLeft === -1) {
            clearInterval(timer);
            timerEl.textContent = 0
            quizBodyEl.textContent = "You lose!"
        }
    }, 1000)
})