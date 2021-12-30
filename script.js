var timerEl = document.getElementById("timer")
var startBtn = document.getElementById("start")
var quizBodyEl = document.getElementById("main-body")
var timeLeft = 50;

startBtn.addEventListener("click", function () {
    var timer = setInterval(function () {
        timerEl.textContent = timeLeft
        timeLeft--;
        if (timeLeft === 0) {
            timerEl.textContent = "You ran out of time!"
        }
    }, 1000)
})