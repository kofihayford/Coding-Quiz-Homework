//--------Declare Key Variables-----
let questionPrompt = "";
let score = 0
let previousScores;
let timer = 60
let questionIndex = 0;
let scoreHistory = [];


//-------Connect the DOM -------
var startQuiz = document.getElementById("#startquizbtn")
var questionText = document.getElementById("question")
var option1 = document.getElementById("optionA")
var option2 = document.getElementById("optionB")
var option3 = document.getElementById("optionC")
var option4 = document.getElementById("optionD")
var option5 = document.getElementById("optionE")
var response = document.querySelector("response")
var timer = document.getElementById("timer")


//---- Configure the Start Quiz Button to Begin the Game ------
startButton.addEventListener("click", startGame);
