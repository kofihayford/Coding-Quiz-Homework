//--------Declare Key constiables for Questions, Score, & Timer-----
let score = 0
const timeInterval = 10
let lastQuestionMarker
let correctAnswer
let currentQuestionMarker = 0

//-------Connect the DOM -------
const startQuizBtn = document.getElementById("startquizbtn")
const response = document.querySelector("response")
const timerElement = document.getElementById("timer")
const gameOver = () => {
    alert("Game Over")
}

//------Create questions and options for user to select from------// 
// const quizQuestions = [{
//     question: "What element typically contains the link to css styling?",
//     options: ["<head>", "<footer>", "<title>", "<body>", "<all the above>",],
//     correctAnswer: "<head>"
// },
// {
//     question: "To activate a function what type of brackets should be used?",
//     optionA: "<Curly Brackets{}>",
//     optionB: "<Square Brackets>",
//     optionC: "<Parentheses ()>",
//     optionD: "<None of the above>",
//     optionE: "<All the options>",
//     correctAnswer: "optionC"
// },
// {
//     question: "What are the options with a confirm method?",
//     optionA: "Ok & Cancel",
//     optionB: "Yes & No",
//     optionC: "Maybe, Sometimes, Always",
//     optionD: "OptionA and Option B",
//     optionE: "Noe of the above",
//     correctAnswer: "optionA"
// },
// {
//     question: "What is a correct initial part of a for loop?",
//     optionA: "for {i = 0}; {i < cars.length}[i++] )",
//     optionB: "for (i = 0; i < cars.length; i++)",
//     optionC: "for (i > 'val' ; i >= cars.length; ++i)",
//     optionD: "for (i += 0; i  cars_length; i__)",
//     optionE: "None of the above",
//     correctAnswer: "optionB"
// },
// {
//     question: "How do you write 'Hello World' in an alert box?",
//     optionA: "alertBox('{Hello World}')",
//     optionB: "msgBox('Hello World')",
//     optionC: "Option A and Option B",
//     optionD: "alert('Hello, World')",
//     optionE: "None of the above",
//     correctAnswer: "optionD"
// },
// ]


const startQuiz = () => {
    let timer = 60
    //change options from key value pairs into arrays for 2nd questions to the end //
    const quizQuestions = [{
        question: "What element typically contains the link to css styling?",
        options: ["<head>", "<footer>", "<title>", "<body>", "<all the above>",],
        correctAnswer: "<head>"
    },
    {
        question: "To activate a function what type of brackets should be used?",
        options: ["<Curly Brackets{}>", "<Square Brackets>", "<Parentheses ()>", "<None of the above>", "<All the above>",],
        correctAnswer: "<Parentheses ()>"
    },
    {
        question: "What are the options with a confirm method?",
        options: ["Ok & Cancel", "Yes & No", "Maybe, Sometimes, Always", "OptionA and Option B", "Noe of the above",],
        correctAnswer: "Ok & Cancel"
    },
    {
        question: "What is a correct initial example of a for loop?",
        options: ["for {i = 0}; {i < cars.length}[i++] )", "for (i = 0; i < cars.length; i++)", "for (i > 'val' ; i >= cars.length; ++i)", "for (i += 0; i  cars_length; i__)", "None of the above",],
        correctAnswer: "for (i = 0; i < cars.length; i++)"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        options: ["alertBox('{Hello World}')", "msgBox('Hello World')", "Option A and Option B", "alert('Hello, World')", "None of the above",],
        correctAnswer: "alert('Hello, World')"
    },
    ]
    //when the button is clicked, the timer should start, and a new randomly selected question should be displayed
    //The timer should count down by 1 second at a time starting from 60 seconds and should stop at zero(0). When the timer hits zero, the quiz is over. 



    // Create a function that renders/presents the questions and renders the answers //
    const renderQuestion = (quizQuestions, currentQuestionMarker) => {
        const questionText = document.getElementById("question")
        questionText.textContent = quizQuestions[currentQuestionMarker].question
        for (let i = 0; i < quizQuestions[currentQuestionMarker].options.length; i++) {
            let option = document.getElementById("option" + (i + 1))
            option.textContent = quizQuestions[currentQuestionMarker].options[i]
        }

    }

    const timerInterval = setInterval(() => {
        timer--
        timerElement.textContent = timer;
        //Todo: Add conditional statements for what it does when it reaches zero for Game Over. This will need it's own function. 
        if (timer <= 0) {
            clearInterval(timerInterval)
            //todo: need to add gameover function here 
        }
    }, 1000)

    let questionContent = `<h2 class="question" id="questionHdr">Question</h2>
    <br>

    <div class="questionCntnt" id="question"> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Reiciendis, quae.
        Perspiciatis facere dolore blanditiis debitis natus? </div>
    <br>

    <div class="ui vertical buttons">
        <button class="options ui button answer " id="option1"> Option A - Lorem, ipsum dolor
            sit amet
            consectetur adipisicing eli</button>
        <br>
        <button class="ui button answer options" id="option2"> Option B - Lorem, ipsum dolor
            sit amet
            consectetur adipisicing eli</button>
        <br>
        <button class="ui button answer options" id="option3"> Option C - Lorem, ipsum dolor
            sit amet
            consectetur adipisicing eli</button>
        <br>
        <button class="ui button answer options" id="option4"> Option D - Lorem, ipsum dolor
            sit amet
            consectetur adipisicing eli</button>
        <br>
        <button class="ui button answer options" id="option5"> Option E - Lorem, ipsum dolor
            sit amet
            consectetur adipisicing eli</button>
        <br>
    </div>`

    document.querySelector(".mainContent").innerHTML = questionContent
    document.querySelectorAll("button").forEach((answerBtn) => {
        answerBtn.addEventListener("click", (event) => {
            if (quizQuestions.length - 1 > currentQuestionMarker) {
                if (event.target.innerText === quizQuestions[currentQuestionMarker].correctAnswer) {
                    alert("Correct")
                    score += 10
                    document.querySelector("#score").innerText = score
                }

                else {
                    alert("Wrong")
                    timer -= 10
                    document.querySelector("#timer").innerText = timer
                }
                currentQuestionMarker++
                renderQuestion(quizQuestions, currentQuestionMarker)

            }
            else { gameOver() }
        })
    })
    countdown(timer)
    renderQuestion(quizQuestions, currentQuestionMarker)
    startQuizBtn.style.display = "none"

}
// the Current question marker increments by one whenever a user answers a question
// when the current question marker becomes = or more than the question QuestionQuiz.length then it should be gameover. 
// Check answer function that gives them 1 point if they are right. If they are wrong, the timer loses 10s per the Interval and the current queston marker should go up by 1
// Then call the Render question again. 
//when the game is over. Display the score and have an iput to submit your initials which stores your reponse in local storage. After that happens it should display the score history which is also 
// A button on the high score page should then reset the quiz back to the beginning. 

//---- Configure the Start Quiz Button to Begin the Game ------
startQuizBtn.addEventListener("click", startQuiz);