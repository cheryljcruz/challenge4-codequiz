
// Write for loops to cycle through quiz questions
// Use key press events to receive user input in the form of answers to quiz questions
// time penalty
// Write conditional statements to determine right and wrong answers
// Use client side storage to store highscores
var startButton = document.querySelector("#start");
var timeEl = document.querySelector("#timer");
var wrapperEl = document.querySelector(".wrapper");
var quizContent = document.querySelector(".quiz-content");
var quizQuestion = document.querySelector("#question");
var answersOrdLi = document.querySelector("#answers");
var responseDiv = document.querySelector("#response");
var resultInput = document.querySelector(".result-input");
var totalScore = document.querySelector("#total");
var timeLeft;
var timeInterval;

// timer set to start when button is clicked
timeLeft = 70;
function startTime() {
     timeInterval = setInterval(function () {
        timeLeft--;
        var resetTime = timeEl.textContent = timeLeft + ' seconds remaining';
        timeLeft = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timeInterval);

            timeEl.textContent = resetTime;
        }
    }, 1000)
}

// Click event start
//When button is clicked time starts and intro page is removed
startButton.addEventListener("click", function(event) {
    if (event.target === startButton) {
        wrapperEl.style.display = "none";
        displayQuestions();
        startTime();
    }
})

// Questions and answers
var quizQuestionsArr = [ 
    {
        question: "Commonly used data types do NOT include",
        answers: [
            "Strings",
            "Booleans",
             "Alerts",
             "Numbers",
        ],
        correct: "Alerts",    
    },
    {
        question: "The condition in an if/else statement is enclosed with _____.",
         answers: [
            "Quotes",
            "Curly brackets",
            "Square brackets",
            "Parenthesis",
         ],
         correct: "Parenthesis",
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: [
            "Numbers and strings",
            "Other arrays",
            "Booleans",
            "All of the above",
        ],
         correct: "All of the above",
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables",
        answers: [
            "Commas",
            "Curly Brackets",
            "Quotes",
            "Parenthesis",
        ],
        correct: "Quotes",
    }

];

//display questions
function displayQuestions () {
    var questionTitle = quizQuestionsArr[i].question
    quizQuestion.textContent = questionTitle
    var answerOption1 = quizQuestionsArr[i].answers[0];
    var answerOption2 = quizQuestionsArr[i].answers[1];
    var answerOption3 = quizQuestionsArr[i].answers[2];
    var answerOption4 = quizQuestionsArr[i].answers[3];

    answersOrdLi.innerHTML = '';



    var listItemEl = document.createElement("li");
    listItemEl.setAttribute("class","list")
    var btnFirst = document.createElement("button");
    btnFirst.setAttribute("class", "buttons")
    btnFirst.textContent = answerOption1;
    listItemEl.appendChild(btnFirst)
    answersOrdLi.appendChild(listItemEl);
    quizContent.appendChild(answersOrdLi);

    var listItemEl2 = document.createElement("li");
    listItemEl2.setAttribute("class","list");
    var btnSec = document.createElement("button");
    btnSec.setAttribute("class", "buttons")
    btnSec.textContent = answerOption2;
    listItemEl2.appendChild(btnSec)
    answersOrdLi.appendChild(listItemEl2);
    quizContent.appendChild(answersOrdLi);

    var listItemEl3 = document.createElement("li");
    listItemEl3.setAttribute("class","list")
    var btnThird = document.createElement("button");
    btnThird.setAttribute("class", "buttons")
    btnThird.textContent = answerOption3;
    listItemEl3.appendChild(btnThird)
    answersOrdLi.appendChild(listItemEl3);
    quizContent.appendChild(answersOrdLi);

    var listItemEl4 = document.createElement("li");
    listItemEl4.setAttribute("class","list")
    var btnFour = document.createElement("button");
    btnFour.setAttribute("class", "buttons");
    btnFour.textContent = answerOption4;
    listItemEl4.appendChild(btnFour);
    answersOrdLi.appendChild(listItemEl4);
    quizContent.appendChild(answersOrdLi);
    var buttonEl = document.querySelectorAll(".buttons")
    buttonEl.forEach(function (event){
        event.addEventListener("click", eventHandler)
    });
//come back to this

};

var i = 0;

function eventHandler (event) {
    if (timeLeft<=0) {
        clearInterval(timeInterval);
        quizContent.style.display= "none";
        displayScore();
    }

    var textAnswer = event.target.textContent
    if (textAnswer === quizQuestionsArr[i].correct) {
        timeLeft = timeLeft;
        responseDiv.textContent = "Right";
    } else {
      responseDiv.textContent = "Wrong";
      timeLeft -=  10;

    }

    if (i < quizQuestionsArr.length-1) {
        i++;
        setTimeout(function () {
            displayQuestions();
            responseDiv.textContent = "";
        }, 1000)
    } else {
        setTimeout(function (){
            responseDiv.textContent = "";
            displayScore();
            clearInterval(timeInterval);
        }, 500)

        quizContent.innerHTML = "";
    }
};
//final score display
function displayScore() {
    resultInput.style.visibility = "visible";
    timeEl.textContent = timeLeft + " " + ' seconds remaining'
    var highScores = timeLeft;
    localStorage.getItem(highScores)
    totalScore.textContent = "Your total score is  " + highScores;
    localStorage.setItem("Total Score", highScores)

 }
