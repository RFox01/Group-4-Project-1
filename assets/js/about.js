// this is to make sure the hamburger menu is clickable

document.addEventListener("DOMContentLoaded", () => {
  // Get  "navbar-burger" elements
  const navbarBurger = document.querySelector(".navbar-burger");

  const navBarMenu = document.querySelector(".navbar-menu");
  // Add a click event on each of them
  navbarBurger.addEventListener("click", () => {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    navbarBurger.classList.toggle("is-active");
    navBarMenu.classList.toggle("is-active");
  });
});
