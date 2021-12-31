var timerEl = document.getElementById("timer")
var startBtn = document.getElementById("start")
var quizBodyEl = document.getElementById("main-body")
var timeLeft = 50;
// this is how much time player have to begin with. 
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
    // Questions are written in form of Object. This will come handy later down the road.
]
startBtn.addEventListener("click", function () {
    // adding an evenlistener for 'start quiz' button. when button is clicked, the function will execute. 
    var num = 0
    //starting fuction at index 0 which begin with first question in array of questions define as object up above. 
    startQuiz(num)
    //calling function to be execute
    function startQuiz(num) {
        var i = num
        // variable i is set to num so options and questions in array can display properly. 
        quizBodyEl.textContent = ""
        // setting content in main body to blink so it can add more content later on.
        var questionEl = document.createElement("ol")
        var answerEl = document.createElement("input")
        var submitEl = document.createElement("button")
        // the code here are creating element in the html files. making it easier to hid and show.
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
        // pretty much all the code above are creating what is neccessary to display the question, options, compare answer to input and button to submit.
        submitEl.addEventListener("click", function () {
            // when button is clicked, answer is being compare and code execute accordly to rule. 
            if (answerEl.value == questions[i].answer) {
                timeLeft += 15
                // player gain 15 second to time if answer correctly.
                num += 1
                // this is to make sure next question will display.
                if (num < questions.length) {
                    startQuiz(num)
                    //rerunning the function if all question is not yet display.
                } else {
                    // if everything in array is displayed and answered. time will stop.
                    clearInterval(timer);
                    timerEl.textContent = timeLeft
                    quizBodyEl.textContent = "Your time stop at " + timeLeft + "."
                    var recordNameEl = document.createElement("input")
                    quizBodyEl.appendChild(breakLine)
                    quizBodyEl.appendChild(recordNameEl)
                    var recordBtnEl = document.createElement("button")
                    recordBtnEl.textContent = "RECORD"
                    quizBodyEl.appendChild(recordBtnEl)
                    recordBtnEl.addEventListener("click", function () {
                        localStorage.setItem(recordNameEl.value, timeLeft)
                        // saving score and name onto local storage
                        var highScoreLink = document.getElementById("highscore")
                        highScoreLink.addEventListener("click", function () {
                            historyScore = JSON.stringify(localStorage.valueOf(localStorage))
                            quizBodyEl.textContent = historyScore
                            //when score is clicked on top-left of page. score that is saved on local storage will show up.
                        })
                    })
                }
            }
            else {
                timeLeft -= 10
                // if player answer incorrect or doesn't enter anything, player will lose 15 second. 
                num += 1
                if (num < questions.length) {
                    startQuiz(num)
                } else {
                    // code repeat as if player answer correctly and time have not run out.
                    clearInterval(timer);
                    timerEl.textContent = timeLeft
                    quizBodyEl.textContent = "Your time stop at " + timeLeft + "."
                    var recordNameEl = document.createElement("input")
                    quizBodyEl.appendChild(breakLine)
                    quizBodyEl.appendChild(recordNameEl)
                    var recordBtnEl = document.createElement("button")
                    recordBtnEl.textContent = "RECORD"
                    quizBodyEl.appendChild(recordBtnEl)
                    recordBtnEl.addEventListener("click", function () {
                        highScoreName = recordNameEl.value
                        localStorage.setItem(highScoreName, timeLeft)
                        var highScoreLink = document.getElementById("highscore")
                        highScoreLink.addEventListener("click", function () {
                            historyScore = JSON.stringify(localStorage.valueOf(localStorage))
                            quizBodyEl.textContent = historyScore
                        })
                    })

                }
            }
        })
    }
    var timer = setInterval(function () {
        // with this code, timer is able to function. rules will apply if player run out of time by answering wrong answer or no answer.
        timerEl.textContent = timeLeft
        timeLeft--;
        if (timeLeft < 0) {
            // time will stop if player cannot maintain time left. 
            clearInterval(timer);
            timerEl.textContent = 0
            quizBodyEl.textContent = "You ran out of time. You lose!"
            // this will display if timer ran down to 0. everything stop and nothing else work even score. refesh to try again. 
        }
    }, 1000)
})
