var characterImage = document.getElementById("characterImage");
var characterName = document.getElementById("character");
var characterDesc = document.getElementById("description");

// retrieve data from finalScore
var finalScore = localStorage.getItem("finalScore");

//final choice display options
function cptMarvel() {
  characterImage.src = "assets/images/captainMarvel.jpg";
  characterName.innerHTML = "Captain Marvel";
  var apiKey = "c371f4bd";
  var queryURL = "http://www.omdbapi.com/?t=Captain%20Marvel&apikey=" + apiKey;

  fetch(queryURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);

        var movieTitle = document.getElementById("movie-title");
        movieTitle.textContent = data.Title;

        var actors = document.getElementById("actors");
        actors.textContent = "Actors/Actresses: " + data.Actors;

        var awards = document.getElementById("awards");
        awards.textContent = "Awards: " + data.Awards;

        var ratings = document.getElementById("ratings");
        ratings.textContent = "Imdb Ratings: " + data.imdbRating;

        var poster = document.getElementById("poster");
        poster.setAttribute("src", data.Poster);
      });
    } else {
      return;
    }
  });
  getWikiDataCORS("Captain Marvel");
  displayWikiData("Captain Marvel");
}

function Hulk() {
  characterImage.src = "assets/images/hulk.jpg";
  characterName.innerHTML = "Hulk";
  var apiKey = "c371f4bd";
  var queryURL = "http://www.omdbapi.com/?t=Hulk&apikey=" + apiKey;

  fetch(queryURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);

        var movieTitle = document.getElementById("movie-title");
        movieTitle.textContent = data.Title;

        var actors = document.getElementById("actors");
        actors.textContent = "Actors/Actresses: " + data.Actors;

        var awards = document.getElementById("awards");
        awards.textContent = "Awards: " + data.Awards;

        var ratings = document.getElementById("ratings");
        ratings.textContent = "Imdb Ratings: " + data.imdbRating;

        var poster = document.getElementById("poster");
        poster.setAttribute("src", data.Poster);
      });
    } else {
      return;
    }
  });
  getWikiDataCORS("Hulk");
  displayWikiData("Hulk");
}

function Thor() {
  characterImage.src = "assets/images/thor.jpg";
  characterName.innerHTML = "Thor";
  var apiKey = "c371f4bd";
  var queryURL = "http://www.omdbapi.com/?t=Thor&apikey=" + apiKey;

  fetch(queryURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);

        var movieTitle = document.getElementById("movie-title");
        movieTitle.textContent = data.Title;

        var actors = document.getElementById("actors");
        actors.textContent = "Actors/Actresses: " + data.Actors;

        var awards = document.getElementById("awards");
        awards.textContent = "Awards: " + data.Awards;

        var ratings = document.getElementById("ratings");
        ratings.textContent = "Imdb Ratings: " + data.imdbRating;

        var poster = document.getElementById("poster");
        poster.setAttribute("src", data.Poster);
      });
    } else {
      return;
    }
  });
  getWikiDataCORS("Thor");
  displayWikiData("Thor");
}

function DrStrange() {
  characterImage.src = "assets/images/drStrange.jpg";
  characterName.innerHTML = "Dr. Strange";
  var apiKey = "c371f4bd";
  var queryURL = "http://www.omdbapi.com/?t=DrStrange&apikey=" + apiKey;

  fetch(queryURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);

        var movieTitle = document.getElementById("movie-title");
        movieTitle.textContent = data.Title;

        var actors = document.getElementById("actors");
        actors.textContent = "Actors/Actresses: " + data.Actors;

        var awards = document.getElementById("awards");
        awards.textContent = "Awards: " + data.Awards;

        var ratings = document.getElementById("ratings");
        ratings.textContent = "Imdb Ratings: " + data.imdbRating;

        var poster = document.getElementById("poster");
        poster.setAttribute("src", data.Poster);
      });
    } else {
      return;
    }
  });
  getWikiDataCORS("Dr. Strange");
  displayWikiData("Dr. Strange");
}

function IronMan() {
  characterImage.src = "assets/images/ironMan.jpg";
  characterName.innerHTML = "Iron Man";
  var apiKey = "c371f4bd";
  var queryURL = "http://www.omdbapi.com/?t=Iron%20Man&apikey=" + apiKey;

  fetch(queryURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);

        var movieTitle = document.getElementById("movie-title");
        movieTitle.textContent = data.Title;

        var actors = document.getElementById("actors");
        actors.textContent = "Actors/Actresses: " + data.Actors;

        var awards = document.getElementById("awards");
        awards.textContent = "Awards: " + data.Awards;

        var ratings = document.getElementById("ratings");
        ratings.textContent = "Imdb Ratings: " + data.imdbRating;

        var poster = document.getElementById("poster");
        poster.setAttribute("src", data.Poster);
      });
    } else {
      return;
    }
  });
  getWikiDataCORS("Iron Man")
  displayWikiData("Iron Man")
}

function BlackWidow() {
  characterImage.src = "assets/images/blackWidow.jpg";
  characterName.innerHTML = "Black Widow";
  var apiKey = "c371f4bd";
  var queryURL = "http://www.omdbapi.com/?t=Black%20Widow&apikey=" + apiKey;

  fetch(queryURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);

        var movieTitle = document.getElementById("movie-title");
        movieTitle.textContent = data.Title;

        var actors = document.getElementById("actors");
        actors.textContent = "Actors/Actresses: " + data.Actors;

        var awards = document.getElementById("awards");
        awards.textContent = "Awards: " + data.Awards;

        var ratings = document.getElementById("ratings");
        ratings.textContent = "Imdb Ratings: " + data.imdbRating;

        var poster = document.getElementById("poster");
        poster.setAttribute("src", data.Poster);
      });
    } else {
      return;
    }
  });
  getWikiDataCORS("Black Widow");
  displayWikiData("Black Widow");
}

function hawkEye() {
  characterImage.src = "assets/images/hawkEye.jpg";
  characterName.innerHTML = "Hawk Eye";
  var apiKey = "c371f4bd";
  var queryURL = "http://www.omdbapi.com/?t=Hawkeye&apikey=" + apiKey;

  fetch(queryURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);

        var movieTitle = document.getElementById("movie-title");
        movieTitle.textContent = data.Title;

        var actors = document.getElementById("actors");
        actors.textContent = "Actors/Actresses: " + data.Actors;

        var awards = document.getElementById("awards");
        awards.textContent = "Awards: " + data.Awards;

        var ratings = document.getElementById("ratings");
        ratings.textContent = "Imdb Ratings: " + data.imdbRating;

        var poster = document.getElementById("poster");
        poster.setAttribute("src", data.Poster);
      });
    } else {
      return;
    }
  });
  getWikiDataCORS("Hawkeye");
  displayWikiData("Hawkeye");
}

function CptAmerica() {
  characterImage.src = "assets/images/captainAmerica.jpg";
  characterName.innerHTML = "Captain America";
  var apiKey = "c371f4bd";
  var queryURL = "http://www.omdbapi.com/?t=Captain%20America&apikey=" + apiKey;

  fetch(queryURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);

        var movieTitle = document.getElementById("movie-title");
        movieTitle.textContent = data.Title;

        var actors = document.getElementById("actors");
        actors.textContent = "Actors/Actresses: " + data.Actors;

        var awards = document.getElementById("awards");
        awards.textContent = "Awards: " + data.Awards;

        var ratings = document.getElementById("ratings");
        ratings.textContent = "Imdb Ratings: " + data.imdbRating;

        var poster = document.getElementById("poster");
        poster.setAttribute("src", data.Poster);
      });
    }
  });
  getWikiDataCORS("Captain America");
  displayWikiData("Captain America");
}

if (finalScore === "011") {
  cptMarvel();
} else if (finalScore === "010") {
  Hulk();
} else if (finalScore === "000") {
  Thor();
} else if (finalScore === "001") {
  DrStrange();
} else if (finalScore === "100") {
  IronMan();
} else if (finalScore === "101") {
  BlackWidow();
} else if (finalScore === "110") {
  hawkEye();
} else if (finalScore === "111") {
  CptAmerica();
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

// this is to get the Wikipedia modal to appear on button click and to close once you hit the close arrow
var wikiModalBtn = document.getElementById("wiki-modal-btn");
var wikiModal = document.getElementById("wiki-modal");
var wikiModalClose = document.getElementById("wiki-close");

wikiModalBtn.addEventListener("click", function () {
  wikiModal.style.display = "block";
});

wikiModalClose.addEventListener("click", function () {
  wikiModal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target.className === "modal-background") {
    wikiModal.style.display = "none";
  }
});

function getWikiDataCORS(searchTerm) {
  return fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&format=json&origin=*`)
    .then(response => response.json())
    .then(data => data.query.search[0].snippet);
}


function displayWikiData(searchTerm) {
  getWikiDataCORS(searchTerm).then(data => {
    characterDesc.innerHTML = data;
  });
}
