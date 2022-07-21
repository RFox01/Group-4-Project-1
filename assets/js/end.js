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

// This is a test fetch
fetch("http://www.omdbapi.com/?t=Spider-man&apikey=c371f4bd").then(function (
  response
) {
  response.json().then(function (data) {
    console.log(data.Awards);
    console.log(data.Actors);
    console.log(data.Poster);
    console.log(data.imdbRating);
  });
});

// this will fetch the info we need
function getCharacter() {
  var finalCharacter = "";
  var apiKey = "c371f4bd";
  var queryURL =
    "http://www.omdbapi.com/?t=" + finalCharacter + "&apikey=" + apiKey;

  fetch(queryURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        displayInfo();
      });
    } else {
      return;
    }
  });
}

//need to work on displaying it in the modal
function displayInfo(data) {}

// fetchWikiExtract

function fetchWikiExtract(){
  var wikiEndpoint = 'https://en.wikipedia.org/w/api.php';
  var wikiParams = '?action=query'
  + "&prop=extracts" // an "extract" property type being requested
  + "&exsentences=2" // request the first 2 sentences from the wikipedia page
  + "&elimit=1" // ...
  + "&titles=" + ""// tells the link which specific wikipedia page to retrieve an extract from
  + "&explaintext-1" // tells the API to provide the conent in plain text (instead of html formatting)
  + "&format=json" //JSON format request
  + "&formatversion=2" //Using dot notation for JSON properites
  + "&origin=*"; //omitting this parameter causes a CORS error

  var wikiLink = wikiEndpoint + wikiParams;
  console.log(wikiLink);

  fetch(wikiLink).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        displayInfo();
      });
    } else {
      return;
    }
  });
}

