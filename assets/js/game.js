var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");

var finalScore = [];

function question1() {
    question.innerHTML = "Would you break the law to save someone?";
    choiceA.innerHTML = "";
    choiceB.innerHTML = "";
}

function question2() {
    question.innerHTML = "Would you break the law to save someone?";
    choiceA.innerHTML = "";
    choiceB.innerHTML = "";
}

function question3() {
    question.innerHTML = "Would you break the law to save someone?";
    choiceA.innerHTML = "";
    choiceB.innerHTML = "";
}

function question4() {
    question.innerHTML = "Would you break the law to save someone?";
    choiceA.innerHTML = "";
    choiceB.innerHTML = "";
}

function question5() {
    question.innerHTML = "Would you break the law to save someone?";
    choiceA.innerHTML = "";
    choiceB.innerHTML = "";
}

function question6() {
    question.innerHTML = "Would you break the law to save someone?";
    choiceA.innerHTML = "";
    choiceB.innerHTML = "";
}

function question7() {
    question.innerHTML = "Would you break the law to save someone?";
    choiceA.innerHTML = "";
    choiceB.innerHTML = "";
}

choiceA.addEventListener("click", function() {
    finalScore.push(0);
    nextQuestion();
});

choiceB.addEventListener("click", function() {
    finalScore.push(1);
    nextQuestion();
});

question1();

function nextQuestion() {
if (finalScore === [0]) {
    question2();
} else if (finalScore === [1]) {
    question3();
} else if (finalScore === [0, 0]) {
    question4();
} else if (finalScore === [0, 1]) {
    question5();
} else if (finalScore === [1, 0]) {
    question6();
} else if (finalScore === [1, 1]) {
    question7();
}};