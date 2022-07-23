document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello Bulma!");
});

//add toggle for burger menu

// Linking 'Get Started' button to questions page when clicked
var getStartedBtn = document.getElementById("getStartedId");
getStartedBtn.addEventListener("click", function () {
  location.href = "./questionsindex.html";
});

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
