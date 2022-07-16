document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello Bulma!");
});

//add toggle for burger menu 

// create an array of questions
var questions = [
  {
    question: "What is the name of the main character in the game?",
    answers: ["Mario", "Luigi", "Peach", "Toad"],
  },
  {
    question: "What is the name of the main character in the game?",
    answers: ["Mario", "Luigi", "Peach", "Toad"],
  },
  {
    question: "What is the name of the main character in the game?",
    answers: ["Mario", "Luigi", "Peach", "Toad"],
  },
  {
    question: "What is the name of the main character in the game?",
    answers: ["Mario", "Luigi", "Peach", "Toad"],
  },
];

// create a variable to keep track of the current question
var currentQuestion = 0;

// create a variable to keep track of the current score
var currentScore = 0;

// create a function to randomize the questions and answers
function randomize(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// create a function to display the current question
function displayQuestion() {
  var question = questions[currentQuestion];
  var questionElement = document.getElementById("question");
  questionElement.innerHTML = question.question;
}

// create a function to assign values to the answers and track the value of the answer
function displayAnswers() {
  var answers = questions[currentQuestion].answers;
  var answersElement = document.getElementById("answers");
  answersElement.innerHTML = "";
  for (var i = 0; i < answers.length; i++) {
    var answer = answers[i];
    var button = document.createElement("button");
    button.innerHTML = answer;
    button.setAttribute("class", "answer-button");
    button.setAttribute("id", "answer" + i);
    button.setAttribute("onclick", "checkAnswer(" + i + ")");
    answersElement.appendChild(button);
  }
}

// create a function to check the answer
function checkAnswer(answer) {
  var correctAnswer = questions[currentQuestion].correctAnswer;
  if (answer === correctAnswer) {
    currentScore++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
    displayAnswers();
  } else {
    displayScore();
  }
}

// use the score to assign a message
function displayScore() {
  var scoreElement = document.getElementById("score");
  scoreElement.innerHTML =
    "Your score is " + currentScore + " out of " + questions.length;
}
