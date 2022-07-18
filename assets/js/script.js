document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello Bulma!");
});

//add toggle for burger menu 

// Linking 'Get Started' button to questions page when clicked
var getStartedBtn = document.getElementById("getStartedId");
getStartedBtn.addEventListener("click", function() {
  location.href = "./questionsindex.html";
}) 