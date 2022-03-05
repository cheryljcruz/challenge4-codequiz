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

var quizQuestions = [ 
    {
        question: "Commonly used data types do NOT include",
        answers: {
            1: "Strings",
            2: "Booleans",
            3: "Alerts",
            4: "Numbers",
        },
         correctAnswer: "3"
    },
    {
        question: "The condition in an if/else statement is enclosed with _____.",
         answers: {
            1: "Quotes",
            2: "Curly brackets",
            3: "Square brackets",
            4: "Parenthesis",
        },
         correctAnswer: "4"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: {
            1: "Numbers and strings",
            2: "Other arrays",
            3: "Booleans",
            4: "All of the above",
        },
         correctAnswer: "4"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables",
        answers: {
            1: "Commas",
            2: "Curly Brackets",
            3: "Quotes",
            4: "Parenthesis"
        },
        correctAnswer: "3"
    },

];