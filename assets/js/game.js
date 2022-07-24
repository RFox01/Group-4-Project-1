var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");

// Empty string, values will be pushed using eventListeners
var finalScore = "";

// these functions hold the questions for the quiz
function question1() {
  question.innerHTML = "Would you break the law to save someone?";
  choiceA.innerHTML = "<img src=assets/images/dontbreakthelaw.png>";
  choiceB.innerHTML = "<img src=assets/images/breakthelaw.png>";
  answerA.innerHTML = "No";
  answerB.innerHTML = "Yes";
}

function question2() {
  question.innerHTML = "Flight or Super Strength?";
  choiceA.innerHTML = "<img src=assets/images/flight.png>";
  choiceB.innerHTML = "<img src=assets/images/super-strength.png>";
  answerA.innerHTML = "Flight";
  answerB.innerHTML = "Super Strength";
}

function question3() {
  question.innerHTML = "Intelligence or Charisma?";
  choiceA.innerHTML = "<img src=assets/images/profX.png>";
  choiceB.innerHTML = "<img src=assets/images/deadpool.png>";
  answerA.innerHTML = "Intelligence";
  answerB.innerHTML = "Charisma";
}

function question4() {
  question.innerHTML = "Super Speed or Magic?";
  choiceA.innerHTML = "<img src=assets/images/super-speed.png>";
  choiceB.innerHTML = "<img src=assets/images/magic.png>";
  answerA.innerHTML = "Super Speed";
  answerB.innerHTML = "Magic";
}

function question5() {
  question.innerHTML = "Regeneration or Bullet Proof Skin?";
  choiceA.innerHTML = "<img src=assets/images/regeneration.png>";
  choiceB.innerHTML = "<img src=assets/images/bulletproof.png>";
  answerA.innerHTML = "Regeneration";
  answerB.innerHTML = "Bullet Proof Skin";
}

function question6() {
  question.innerHTML = "Wealth or Martial Skill?";
  choiceA.innerHTML = "<img src=assets/images/wealth.png>";
  choiceB.innerHTML = "<img src=assets/images/martialart.png>";
  answerA.innerHTML = "Wealth";
  answerB.innerHTML = "Martial Skill";
}

function question7() {
  question.innerHTML = "Espionage or Honour?";
  choiceA.innerHTML = "<img src=assets/images/espionnage.png>";
  choiceB.innerHTML = "<img src=assets/images/honour.png>";
  answerA.innerHTML = "Espionage";
  answerB.innerHTML = "Honour";
}

/* Adding an event listener to the choiceA button. When the button is clicked, it will push a 0 to the
finalScore array and call the nextQuestion function. */

function choiceaPush() {
  finalScore += "0";
}

function choicebPush() {
  finalScore += "1";
}

choiceA.addEventListener("click", function () {
  choiceaPush();
  nextQuestion();
});

choiceB.addEventListener("click", function () {
  choicebPush();
  nextQuestion();
});

question1();

//  If the finalScore array is equal to a certain value, then run a certain function and saving match in the local storage

function nextQuestion() {
  if (finalScore === "0") {
    question2();
  } else if (finalScore === "1") {
    question3();
  } else if (finalScore === "00") {
    question4();
  } else if (finalScore === "01") {
    question5();
  } else if (finalScore === "10") {
    question6();
  } else if (finalScore === "11") {
    question7();
  } else if (finalScore === "000") {
    localStorage.setItem("finalScore", finalScore);
    location.href = "./ending.html";
  } else if (finalScore === "001") {
    localStorage.setItem("finalScore", finalScore);
    location.href = "./ending.html";
  } else if (finalScore === "010") {
    localStorage.setItem("finalScore", finalScore);
    location.href = "./ending.html";
  } else if (finalScore === "011") {
    localStorage.setItem("finalScore", finalScore);
    location.href = "./ending.html";
  } else if (finalScore === "100") {
    localStorage.setItem("finalScore", finalScore);
    location.href = "./ending.html";
  } else if (finalScore === "101") {
    localStorage.setItem("finalScore", finalScore);
    location.href = "./ending.html";
  } else if (finalScore === "110") {
    localStorage.setItem("finalScore", finalScore);
    location.href = "./ending.html";
  } else if (finalScore === "111") {
    localStorage.setItem("finalScore", finalScore);
    location.href = "./ending.html";
  }
}

console.log(finalScore);

// this is to make sure the hamburger menu is clickable

document.addEventListener("DOMContentLoaded", () => {
  // Get  "navbar-burger" elements
  const navbarBurgers = document.querySelector(".navbar-burger");

  const navBarMenu = document.querySelector(".navbar-menu");
  // Add a click event on each of them
  navbarBurgers.addEventListener("click", () => {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    navbarBurgers.classList.toggle("is-active");
    navBarMenu.classList.toggle("is-active");
  });
});
