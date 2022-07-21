// retrieve data from finalScore
var finalScore = localStorage.getItem("finalScore");
var stringValue = "";

//examples
function CaptainAmerica() {
  this.img = "https://bulma.io/images/placeholders/1280x960.png";
  stringValue = "011";
}

function Thor() {
  this.img = "https://bulma.io/images/placeholders/1280x960.png";
  stringValue = "010";
}

function finalChoice3() {
  this.img = "https://bulma.io/images/placeholders/1280x960.png";
  stringValue = "000";
}

function finalChoice4() {
  this.img = "https://bulma.io/images/placeholders/1280x960.png";
  stringValue = "001";
}

function finalChoice5() {
  this.img = "https://bulma.io/images/placeholders/1280x960.png";
  stringValue = "100";
}

function finalChoice6() {
  this.img = "https://bulma.io/images/placeholders/1280x960.png";
  stringValue = "101";
}

function finalChoice7() {
  this.img = "https://bulma.io/images/placeholders/1280x960.png";
  stringValue = "110";
}

function finalChoice8() {
  this.img = "https://bulma.io/images/placeholders/1280x960.png";
  stringValue = "111";
}

if (finalScore === "011") {
  CaptainAmerica();
} else if (finalScore === "010") {
  Thor();
} else if (finalScore === "000") {
  finalChoice3();
} else if (finalScore === "001") {
  finalChoice4();
} else if (finalScore === "100") {
  finalChoice5();
} else if (finalScore === "101") {
  finalChoice6();
} else if (finalScore === "110") {
  finalChoice7();
} else if (finalScore === "111") {
  finalChoice8();
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

// This is a test fetch
fetch("http://www.omdbapi.com/?t=Spider-man&apikey=c371f4bd").then(function (
  response
) {
  response.json().then(function (data) {
    console.log(data.Awards);
    console.log(data.Actors);
    console.log(data.Poster);
    console.log(data.imdbRating);
    console.log(data);
  });
});

// this will fetch the info we need
function getCharacter() {
  var finalCharacter = "";
  var apiKey = "c371f4bd";
  var queryURL =
    "http://www.omdbapi.com/?t=" + "Spider-Man" + "&apikey=" + apiKey;

  fetch(queryURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);

        var movieTitle = document.getElementById("movie-title");
        movieTitle.textContent = data.Title;

        var actors = document.getElementById("actors");
        actors.textContent = data.Actors;

        var awards = document.getElementById("awards");
        awards.textContent = data.Awards;

        var ratings = document.getElementById("ratings");
        ratings.textContent = data.imdbRating;

        var poster = document.getElementById("poster");
        poster.textContent = data.poster;
        // display all data in modal here
      });
    } else {
      return;
    }
  });
}
getCharacter();
