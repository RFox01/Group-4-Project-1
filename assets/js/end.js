var characterImage = document.getElementById("characterImage");
var characterName = document.getElementById("character");
var characterDesc = document.getElementById("description");

// retrieve data from finalScore
var finalScore = localStorage.getItem("finalScore");

//function to get all 8 characters and retrieve their information from both APIs
function getCptMarvel() {
  characterImage.src = "assets/images/cptMarvel.png";
  characterName.innerHTML = "Captain Marvel";
  var apiKey = "c371f4bd";
  var queryURL = "https://www.omdbapi.com/?t=Captain%20Marvel&apikey=" + apiKey;

  fetch(queryURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        var movieTitle = document.getElementById("movie-title");
        movieTitle.textContent = data.Title;

        var actors = document.getElementById("actors");
        actors.textContent = " " + data.Actors;

        var awards = document.getElementById("awards");
        awards.textContent = " " + data.Awards;

        var ratings = document.getElementById("ratings");
        ratings.textContent = " " + data.imdbRating;

        var poster = document.getElementById("poster");
        poster.setAttribute("src", data.Poster);
      });
    } else {
      return;
    }
  });
  getWikiDataCORS("Captain Marvel");
  displayWikiData("Captain Marvel");
  getWikiLink("Captain Marvel");
}

function getHulk() {
  characterImage.src = "assets/images/hulk.png";
  characterName.innerHTML = "Hulk";
  var apiKey = "c371f4bd";
  var queryURL = "https://www.omdbapi.com/?t=Hulk&apikey=" + apiKey;

  fetch(queryURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        var movieTitle = document.getElementById("movie-title");
        movieTitle.textContent = data.Title;

        var actors = document.getElementById("actors");
        actors.textContent = " " + data.Actors;

        var awards = document.getElementById("awards");
        awards.textContent = " " + data.Awards;

        var ratings = document.getElementById("ratings");
        ratings.textContent = " " + data.imdbRating;

        var poster = document.getElementById("poster");
        poster.setAttribute("src", data.Poster);
      });
    } else {
      return;
    }
  });
  getWikiDataCORS("Hulk");
  displayWikiData("Hulk");
  getWikiLink("Hulk");
}

function getThor() {
  characterImage.src = "assets/images/thor.png";
  characterName.innerHTML = "Thor";
  var apiKey = "c371f4bd";
  var queryURL = "https://www.omdbapi.com/?t=Thor&apikey=" + apiKey;

  fetch(queryURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        var movieTitle = document.getElementById("movie-title");
        movieTitle.textContent = data.Title;

        var actors = document.getElementById("actors");
        actors.textContent = " " + data.Actors;

        var awards = document.getElementById("awards");
        awards.textContent = " " + data.Awards;

        var ratings = document.getElementById("ratings");
        ratings.textContent = " " + data.imdbRating;

        var poster = document.getElementById("poster");
        poster.setAttribute("src", data.Poster);
      });
    } else {
      return;
    }
  });
  getWikiDataCORS("Thor");
  displayWikiData("Thor");
  getWikiLink("Thor");
}

function getDrStrange() {
  characterImage.src = "assets/images/drStrange.png";
  characterName.innerHTML = "Dr. Strange";
  var apiKey = "c371f4bd";
  var queryURL = "https://www.omdbapi.com/?t=Doctor%20Strange&apikey=" + apiKey;

  fetch(queryURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        var movieTitle = document.getElementById("movie-title");
        movieTitle.textContent = data.Title;

        var actors = document.getElementById("actors");
        actors.textContent = " " + data.Actors;

        var awards = document.getElementById("awards");
        awards.textContent = " " + data.Awards;

        var ratings = document.getElementById("ratings");
        ratings.textContent = " " + data.imdbRating;

        var poster = document.getElementById("poster");
        poster.setAttribute("src", data.Poster);
      });
    } else {
      return;
    }
  });
  getWikiDataCORS("Dr. Strange");
  displayWikiData("Dr. Strange");
  getWikiLink("Dr. Strange");
}

function getIronMan() {
  characterImage.src = "assets/images/ironman.png";
  characterName.innerHTML = "Iron Man";
  var apiKey = "c371f4bd";
  var queryURL = "https://www.omdbapi.com/?t=Iron%20Man&apikey=" + apiKey;

  fetch(queryURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        var movieTitle = document.getElementById("movie-title");
        movieTitle.textContent = data.Title;

        var actors = document.getElementById("actors");
        actors.textContent = " " + data.Actors;

        var awards = document.getElementById("awards");
        awards.textContent = " " + data.Awards;

        var ratings = document.getElementById("ratings");
        ratings.textContent = " " + data.imdbRating;

        var poster = document.getElementById("poster");
        poster.setAttribute("src", data.Poster);
      });
    } else {
      return;
    }
  });
  getWikiDataCORS("Iron Man");
  displayWikiData("Iron Man");
  getWikiLink("Iron Man");
}

function getBlackWidow() {
  characterImage.src = "assets/images/blackwidow.png";
  characterName.innerHTML = "Black Widow";
  var apiKey = "c371f4bd";
  var queryURL = "https://www.omdbapi.com/?t=Black%20Widow&apikey=" + apiKey;

  fetch(queryURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        var movieTitle = document.getElementById("movie-title");
        movieTitle.textContent = data.Title;

        var actors = document.getElementById("actors");
        actors.textContent = " " + data.Actors;

        var awards = document.getElementById("awards");
        awards.textContent = " " + data.Awards;

        var ratings = document.getElementById("ratings");
        ratings.textContent = " " + data.imdbRating;

        var poster = document.getElementById("poster");
        poster.setAttribute("src", data.Poster);
      });
    } else {
      return;
    }
  });
  getWikiDataCORS("Black Widow");
  displayWikiData("Black Widow");
  getWikiLink("Black Widow");
}

function getHawkEye() {
  characterImage.src = "assets/images/hawkeye.png";
  characterName.innerHTML = "Hawkeye";
  var apiKey = "c371f4bd";
  var queryURL = "https://www.omdbapi.com/?t=Hawkeye&apikey=" + apiKey;

  fetch(queryURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        var movieTitle = document.getElementById("movie-title");
        movieTitle.textContent = data.Title;

        var actors = document.getElementById("actors");
        actors.textContent = " " + data.Actors;

        var awards = document.getElementById("awards");
        awards.textContent = " " + data.Awards;

        var ratings = document.getElementById("ratings");
        ratings.textContent = " " + data.imdbRating;

        var poster = document.getElementById("poster");
        poster.setAttribute("src", data.Poster);
      });
    } else {
      return;
    }
  });
  getWikiDataCORS("Hawkeye");
  displayWikiData("Hawkeye");
  getWikiLink("Hawkeye");
}

function getCptAmerica() {
  characterImage.src = "assets/images/cptamerica.png";
  characterName.innerHTML = "Captain America";
  var apiKey = "c371f4bd";
  var queryURL =
    "https://www.omdbapi.com/?t=Captain%20America&apikey=" + apiKey;

  fetch(queryURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        var movieTitle = document.getElementById("movie-title");
        movieTitle.textContent = data.Title;

        var actors = document.getElementById("actors");
        actors.textContent = " " + data.Actors;

        var awards = document.getElementById("awards");
        awards.textContent = " " + data.Awards;

        var ratings = document.getElementById("ratings");
        ratings.textContent = " " + data.imdbRating;

        var poster = document.getElementById("poster");
        poster.setAttribute("src", data.Poster);
      });
    }
  });
  getWikiDataCORS("Captain America");
  displayWikiData("Captain America");
  getWikiLink("Captain America");
}

if (finalScore === "011") {
  getCptMarvel();
} else if (finalScore === "010") {
  getHulk();
} else if (finalScore === "000") {
  getThor();
} else if (finalScore === "001") {
  getDrStrange();
} else if (finalScore === "100") {
  getIronMan();
} else if (finalScore === "101") {
  getBlackWidow();
} else if (finalScore === "110") {
  getHawkEye();
} else if (finalScore === "111") {
  getCptAmerica();
}

// this is to get the modal to appear on button click and to close once you hit the close arrow
var modalBtn = document.getElementById("modal-btn");
var modal = document.getElementById("modal-movies");
var modalClose = document.querySelector(".delete");

modalBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

modalClose.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target.className === "modal-background") {
    modal.style.display = "none";
  }
});

//this is the function that will fetch the Wiki API and display them on the ending page
function getWikiDataCORS(searchTerm) {
  return fetch(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&format=json&origin=*`
  )
    .then((response) => response.json())
    .then((data) => data.query.search[0].snippet);
}

function displayWikiData(searchTerm) {
  getWikiDataCORS(searchTerm).then((data) => {
    characterDesc.innerHTML = data;
  });
}

function getWikiLink(searchTerm) {
  fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${searchTerm}`).then(
    function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          var wikiLink = document.getElementById("wiki-link");
          wikiLink.setAttribute("href", data.content_urls.desktop.page);
        });
      }
    }
  );
}

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
