// Create variables to store the quiz questions
// Use mouse click events to start quiz
// - when clicked startQuiz: start timer, generate quiz
// Write for loops to cycle through quiz questions
// Use key press events to receive user input in the form of answers to quiz questions
// Create a time limit for the game using time functions
// Write conditional statements to determine right and wrong answers
// Use client side storage to store highscores
var startButton = document.querySelector("#start-btn");
var timeEl = document.querySelector("#timer");
var timeLeft;


 function startQuiz() {
    timeLeft = 70;
    startButton.disabled = true;

    startTime()
}

function startTime() {
   
    var timeInterval = setInterval(function () {
        timeLeft--;
        timeEl.textContent = timeLeft + ' seconds remaining';
        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

// Click event start
startButton.addEventListener("click", startQuiz);
