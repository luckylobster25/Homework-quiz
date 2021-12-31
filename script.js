var timerEl = document.getElementById("timer")
var startBtn = document.getElementById("start")
var quizBodyEl = document.getElementById("main-body")
var timeLeft = 50;
var breakLine = document.createElement("br")
var questions = [
    {
        question: "What is HTML?",
        option1: "1. Hypertext Markup Language",
        option2: "2. A frame work of another language",
        option3: "3. A Javascript library",
        answer: "1"
    },
    {
        question: "What kind of language is CSS?",
        option1: "1. Backend language",
        option2: "2. Styling language",
        option3: "3. Not a language",
        answer: "2"
    },
    {
        question: "Which one of these is a HTML element tag?",
        option1: "1. <o>",
        option2: "2. <hi",
        option3: "3. <li>",
        answer: "3"
    },
    {
        question: "Which Javascript code is not right?",
        option1: "1. var time = 50",
        option2: "2. consolelog('hi') ",
        option3: "3. document.getElementById('btn')",
        answer: "2"
    },
    {
        question: "What does CSS stand for?",
        option1: "1. Cascading Style System",
        option2: "2. Coding Style Sheets",
        option3: "3. Cascading Style Sheets",
        answer: "3"
    },
    {
        question: "Which library belong to Javascript?",
        option1: "1. Numpy",
        option2: "2. jQuery",
        option3: "3. .NET",
        answer: "2"
    },
    {
        question: "which one of these does not use FUNCTION?",
        option1: "1. CSS",
        option2: "2. Python",
        option3: "3. Javascript",
        answer: "1"
    },
    {
        question: "What is <ul> in html?",
        option1: "1. underline",
        option2: "2. unorganized list",
        option3: "3. unordered list",
        answer: "3"
    },
    {
        question: "What does RBG stand for?",
        option1: "1. Read Glow Brush",
        option2: "2. Red Green Blue",
        option3: "3. Red Grey Black",
        answer: "2"
    },
    {
        question: "What can't CSS do?",
        option1: "1. Style web page",
        option2: "2. create animations",
        option3: "3. create functions",
        answer: "3"
    }
]


startBtn.addEventListener("click", function () {
    var num = 0
    startQuiz(num)
    function startQuiz(num) {
        var i = num
        quizBodyEl.textContent = ""
        var questionEl = document.createElement("ol")
        var answerEl = document.createElement("input")
        var submitEl = document.createElement("button")
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
        questionEl.appendChild(answerEl)
        answerEl.setAttribute("placeholder", "Write your answer here")
        submitEl.textContent = "Submit"
        quizBodyEl.appendChild(submitEl)
        submitEl.addEventListener("click", function () {
            if (answerEl.value == questions[i].answer) {
                timeLeft += 15
                num += 1
                if (num < questions.length) {
                    startQuiz(num)
                } else {
                    clearInterval(timer);
                    timerEl.textContent = timeLeft
                    quizBodyEl.textContent = "Your time stop at " + timeLeft + "."
                    var recordNameEl = document.createElement("input")
                    quizBodyEl.appendChild(breakLine)
                    quizBodyEl.appendChild(recordNameEl)
                    var recordBtnEl = document.createElement("button")
                    recordBtnEl.textContent = "RECORD"
                    quizBodyEl.appendChild(recordBtnEl)
                    recordBtnEl.addEventListener("click", function(){
                        var highScoreEl = localStorage.setItem(recordNameEl.value,timeLeft)
                    })
                }
            }
            else {
                timeLeft -= 10
                num += 1
                if (num < questions.length) {
                    startQuiz(num)
                } else {
                    clearInterval(timer);
                    timerEl.textContent = timeLeft
                    quizBodyEl.textContent = "Your time stop at " + timeLeft + "."
                    var recordNameEl = document.createElement("input")
                    quizBodyEl.appendChild(breakLine)
                    quizBodyEl.appendChild(recordNameEl)
                    var recordBtnEl = document.createElement("button")
                    recordBtnEl.textContent = "RECORD"
                    quizBodyEl.appendChild(recordBtnEl)
                    recordBtnEl.addEventListener("click", function(){
                        var highScoreEl = localStorage.setItem(recordNameEl.value,timeLeft)
                    })
                }
            }
        })
    }
    var timer = setInterval(function () {
        timerEl.textContent = timeLeft
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
            timerEl.textContent = 0
            quizBodyEl.textContent = "You ran out of time. You lose!"
        }

    }, 1000)
})