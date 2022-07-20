var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");

// Empty string, values will be pushed using eventListeners
var finalScore = '';

// Add final questions
function question1() {
    question.innerHTML = "Would you break the law to save someone?"; 
    choiceA.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
    choiceB.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
};

function question2() {
    question.innerHTML = "Flight or Super Strength?";
    choiceA.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
    choiceB.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
};

function question3() {
    question.innerHTML = "Intelligence or Charisma?";
    choiceA.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
    choiceB.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
};

function question4() {
    question.innerHTML = "Super Speed or Magic?";
    choiceA.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
    choiceB.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
};

function question5() {
    question.innerHTML = "Regeneration or Bullet Proof Skin?";
    choiceA.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
    choiceB.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
};

function question6() {
    question.innerHTML = "Wealth or Martial Skill?";
    choiceA.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
    choiceB.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
};

function question7() {
    question.innerHTML = "Espionage or Honour?";
    choiceA.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
    choiceB.innerHTML = "<img src=https://bulma.io/images/placeholders/1280x960.png>";
};

/* Adding an event listener to the choiceA button. When the button is clicked, it will push a 0 to the
finalScore array and call the nextQuestion function. */

function choiceaPush () {
    finalScore += '0';
}

function choicebPush () {
    finalScore += '1';
}

choiceA.addEventListener("click", function() {
    choiceaPush();
    nextQuestion();
});

choiceB.addEventListener("click", function() {
    choicebPush();
    nextQuestion();
});

question1();

/**
 * If the finalScore array is equal to a certain value, then run a certain function.
 */
 function nextQuestion() {
    if (finalScore === '0') {
        question2();
    } else if (finalScore === '1') {
        question3();
    } else if (finalScore === '00') {
        question4();
    } else if (finalScore === '01') {
        question5();
    } else if (finalScore === '10') {
        question6();
    } else if (finalScore === '11') {
        question7();
    } else if (finalScore === '000') {
        localStorage.setItem("finalScore", finalScore);
        location.href = "./ending.html";
    } else if (finalScore === '001') {
        localStorage.setItem("finalScore", finalScore);
        location.href = "./ending.html";
    } else if (finalScore === '010') {
        localStorage.setItem("finalScore", finalScore);
        location.href = "./ending.html";
    } else if (finalScore === '011') {
        localStorage.setItem("finalScore", finalScore);
        location.href = "./ending.html";
    } else if (finalScore === '100') {
        localStorage.setItem("finalScore", finalScore);
        location.href = "./ending.html";
    } else if (finalScore === '101') {
        localStorage.setItem("finalScore", finalScore);
        location.href = "./ending.html";
    } else if (finalScore === '110') {
        localStorage.setItem("finalScore", finalScore);
        location.href = "./ending.html";
    } else if (finalScore === '111') {
        localStorage.setItem("finalScore", finalScore);
        location.href = "./ending.html";
    }
};

console.log(finalScore);