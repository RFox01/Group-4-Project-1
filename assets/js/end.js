var characterImage = document.getElementById("characterImage");
var characterName = document.getElementById("character");
var characterDesc = document.getElementById("description");

// retrieve data from finalScore
var finalScore = localStorage.getItem("finalScore");
var stringValue = "";

//final choice display options
function CptMarvel() {
  characterImage.src = "assets/images/captainMarvel.jpg";
  characterName.innerHTML = "Captain Marvel";
  characterDesc.innerHTML =
    "Superhuman strength, stamina, durability, and agility. Captain Marvel can also fly at great speeds, well beyond the sound barrier. Captain Marvel also has something called a “Seventh Sense” where she can sense danger. This has also been known to give her pre-cognitive hallucinations of incoming threats.";
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
        poster.setAttribute("src", data.poster);
      });
    } else {
      return;
    }
  });
}

function Hulk() {
  characterImage.src = "assets/images/hulk.jpg";
  characterName.innerHTML = "Hulk";
  characterDesc.innerHTML =
    "The Hulk possesses the potential for seemingly limitless physical strength which is influenced by his emotional state, particularly his anger.His durability, regeneration, and endurance also increase in proportion to his temper, and is also resistant to injury or damage.";
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
        poster.setAttribute("src", data.poster);
      });
    } else {
      return;
    }
  });
}

function Thor() {
  characterImage.src = "assets/images/thor.jpg";
  characterName.innerHTML = "Thor";
  characterDesc.innerHTML =
    "Like all Asgardians, Thor is incredibly long-lived and relies upon periodic consumption of the Golden Apples of Idunn to sustain his extended lifespan, which to date has lasted many millennia. Thor is physically the strongest of the Asgardians and is capable of incredible feats of strength, such as lifting the almost Earth-sized Midgard Serpent. ";
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
        poster.setAttribute("src", data.poster);
      });
    } else {
      return;
    }
  });
}

function DrStrange() {
  characterImage.src = "assets/images/drStrange.jpg";
  characterName.innerHTML = "Dr. Strange";
  characterDesc.innerHTML =
    "Doctor Strange is a practicing sorcerer who draws his powers from mystical entities such as Agamotto, Cyttorak, Ikonn, Oshtur, Raggadorr, and Watoomb, who lend their energies for spells. Strange also wields mystical artifacts including the Cloak of Levitation which enables him to fly";
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
        poster.textContent = data.poster;

        var poster = document.getElementById("poster");
        poster.setAttribute("src", data.poster);
      });
    } else {
      return;
    }
  });
}

function IronMan() {
  characterImage.src = "assets/images/ironMan.jpg";
  characterName.innerHTML = "Iron Man";
  characterDesc.innerHTML =
    "Iron Man possesses powered armor that gives him superhuman strength and durability, flight, and an array of weapons.The weapons systems of the suit have changed over the years, but Iron Man's standard offensive weapons have always been the repulsor rays that are fired from the palms of his gauntlets.";
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
        poster.setAttribute("src", data.poster);
      });
    } else {
      return;
    }
  });
}

function BlackWidow() {
  characterImage.src = "assets/images/blackWidow.jpg";
  characterName.innerHTML = "Black Widow";
  characterDesc.innerHTML =
    "Black Widow has been enhanced by biotechnology that makes her body resistant to aging and disease and she heals faster than the average human.Black Widow is a world-class athlete, gymnast, acrobat, and aerialist, capable of numerous complex maneuvers and feats. She can coordinate her body with balance, flexibility, and dexterity easily, and is an accomplished ballerina.";
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
        poster.setAttribute("src", data.poster);
      });
    } else {
      return;
    }
  });
}

function HawkEye() {
  characterImage.src = "assets/images/hawkEye.jpg";
  characterName.innerHTML = "Hawk Eye";
  characterDesc.innerHTML =
    "While Clint Barton has no superhuman powers, he is at the very peak of human conditioning. He is an exceptional fencer, acrobat and marksman, having been trained from childhood in the circus and by the criminals Trick Shot and Swordsman, this includes considerable strength";
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
        poster.setAttribute("src", data.poster);
      });
    } else {
      return;
    }
  });
}

function CptAmerica() {
  characterImage.src = "assets/images/captainAmerica.jpg";
  characterName.innerHTML = "Captain America";
  characterDesc.innerHTML =
    "Rogers' battle experience and military training make him an expert tactician and field commander, with his teammates frequently deferring to his orders in battle. The Avengers, X-Men, Fantastic Four, and other heroes choose Rogers as their leader during the Secret Wars.";
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

        var imageUrl =
          "img.omdbapi.com/?i=" + data.imdbID + "&apikey=" + apiKey;

        fetch(imageUrl).then(function (response) {
          if (response.ok) {
            response.json().then(function (data) {
              var poster = document.getElementById("poster");
              poster.setAttribute("src", data);
            });
          } else {
            return;
          }
        });
      });
    }
  });
}

if (finalScore === "011") {
  CptMarvel();
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
  HawkEye();
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
