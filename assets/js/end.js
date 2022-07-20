// retrieve data from finalScore
var finalScore = localStorage.getItem("finalScore");
var stringValue = '';

//examples
function CaptainAmerica() {
    this.img = "https://bulma.io/images/placeholders/1280x960.png";
    stringValue = '011';
}

function Thor() {
    this.img = "https://bulma.io/images/placeholders/1280x960.png";
    stringValue = '010';
}

function finalChoice3() {
    this.img = "https://bulma.io/images/placeholders/1280x960.png";
    stringValue = '000';
}

function finalChoice4() {
    this.img = "https://bulma.io/images/placeholders/1280x960.png";
    stringValue = '001';
}

function finalChoice5() {
    this.img = "https://bulma.io/images/placeholders/1280x960.png";
    stringValue = '100';
}

function finalChoice6() {
    this.img = "https://bulma.io/images/placeholders/1280x960.png";
    stringValue = '101';
}

function finalChoice7() {
    this.img = "https://bulma.io/images/placeholders/1280x960.png";
    stringValue = '110';
}

function finalChoice8() {
    this.img = "https://bulma.io/images/placeholders/1280x960.png";
    stringValue = '111';
}

if (finalScore === '011') {
    CaptainAmerica();
} else if (finalScore === '010') {
    Thor();
} else if (finalScore === '000') {
    finalChoice3();
} else if (finalScore === '001') {
    finalChoice4();
} else if (finalScore === '100') {
    finalChoice5();
} else if (finalScore === '101') {
    finalChoice6();
} else if (finalScore === '110') {
    finalChoice7();
} else if (finalScore === '111') {
    finalChoice8();
};