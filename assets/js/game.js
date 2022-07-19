var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");

var finalScore = [];

function question1() {
    question.innerHTML = "Would you break the law to save someone?";
    choiceA.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
    choiceB.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
}

function question2() {
    question.innerHTML = "Flight or Super Strength?";
    choiceA.innerHTML = "";
    choiceB.innerHTML = "";
}

function question3() {
    question.innerHTML = "Speed or Power?";
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

/* Adding an event listener to the choiceA button. When the button is clicked, it will push a 0 to the
finalScore array and call the nextQuestion function. */
choiceA.addEventListener("click", function() {
    finalScore.push('0');
    nextQuestion();
});

choiceB.addEventListener("click", function() {
    finalScore.push('1');
    nextQuestion();
});

question1();

/**
 * If the finalScore array is equal to a certain value, then run a certain function.
 */
function nextQuestion() {
if (finalScore === ['0']) {
    question2();
} else if (finalScore === ['1']) {
    question3();
} else if (finalScore === ['0', '0']) {
    question4();
} else if (finalScore === ['0', '1']) {
    question5();
} else if (finalScore === ['1', '0']) {
    question6();
} else if (finalScore === ['1', '1']) {
    question7();
}};


console.log(finalScore.length);