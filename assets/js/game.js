var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");

// Empty array, string values will be pushed using eventListeners
var finalScore = [];

function question1() {
    question.innerHTML = "Would you break the law to save someone?";
    choiceA.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
    choiceB.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
}

function question2() {
    question.innerHTML = "Flight or Super Strength?";
    choiceA.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
    choiceB.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
}

function question3() {
    question.innerHTML = "Speed or Power?";
    choiceA.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
    choiceB.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
}

function question4() {
    question.innerHTML = "Would you break the law to save someone?";
    choiceA.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
    choiceB.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
}

function question5() {
    question.innerHTML = "Would you break the law to save someone?";
    choiceA.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
    choiceB.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
}

function question6() {
    question.innerHTML = "Would you break the law to save someone?";
    choiceA.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
    choiceB.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
}

function question7() {
    question.innerHTML = "Would you break the law to save someone?";
    choiceA.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
    choiceB.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
}

/* Adding an event listener to the choiceA button. When the button is clicked, it will push a 0 to the
finalScore array and call the nextQuestion function. */

// Creating array value to log when button is clicked
var answerValue = ["0", "1"];

choiceA.addEventListener("click", function() {
    finalScore.push(answerValue[0]);
    nextQuestion();
});

choiceB.addEventListener("click", function() {
    finalScore.push(answerValue[1]);
    nextQuestion();
});

question1();
/**
 * If the finalScore array is equal to a certain value, then run a certain function.
 */
function nextQuestion() {
if (finalScore === (answerValue[0])) {
    question2();
} else if (finalScore === (answerValue[1])) {
    question3();
} else if (finalScore === [answerValue[0], answerValue[0]]) {
    question4();
} else if (finalScore === [answerValue[0], answerValue[1]]) {
    question5();
} else if (finalScore === [answerValue[1], answerValue[0]]) {
    question6();
} else if (finalScore === [answerValue[1], answerValue[1]]) {
    question7();
}};

nextQuestion();
console.log(finalScore);