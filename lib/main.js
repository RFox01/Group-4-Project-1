'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Bulma!');
});

// Linking 'Get Started' button to questions page when clicked
var getStartedBtn = document.getElementById("getStartedId");
getStartedBtn.addEventListener("click", function() {
  location.href = "./questions index.html";
})