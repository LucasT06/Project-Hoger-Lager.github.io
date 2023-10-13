console.log("index.html werkt");

const dice1 = document.querySelector('.dice1-img')
const dice2 = document.querySelector('.dice2-img')
const dice3 = document.querySelector('.dice3-img')
const dice4 = document.querySelector('.dice4-img')
const higher = document.querySelector('.higher')
const lower = document.querySelector('.lower')
const roll = document.querySelector('.roll')
const yourpoint = document.querySelector('.yourpoint')
const computerpoint = document.querySelector('.computerpoint')
const winlose = document.querySelector('.winlose')

let diceOne
let diceTwo
let dicetre
let dicefore

let pointyour = 0;
let pointcomputer = 0;


// klik om voor de computer te rollen.
roll.addEventListener('click', function () {
    //random getal.
    diceOne = Math.floor((Math.random() * 6) + 1);
    diceTwo = Math.floor((Math.random() * 6) + 1);

    console.log(diceOne + ' ' + diceTwo);

    // de dice img laten zien op de scherm.
    dice1.src = "./img/dice-" + diceOne + ".png";
    dice2.src = "./img/dice-" + diceTwo + ".png";

    //de buttons aan zetten die je moet kliken en uit zetten die gebruikt is.
    roll.disabled = true;
    higher.disabled = false;
    lower.disabled = false;
});


// rollen voor jouw.
higher.addEventListener('click', function () {
    // random getal.
    dicetre = Math.floor((Math.random() * 6) + 1);
    dicefore = Math.floor((Math.random() * 6) + 1);

    console.log(dicetre + ' ' + dicefore);

    // de dice img laten zien.
    dice3.src = "./img/dice-" + dicetre + ".png";
    dice4.src = "./img/dice-" + dicefore + ".png";

    // als jij wint.
    if (diceOne + diceTwo < dicetre + dicefore) {
        console.log("win");
        // jouw punten op tellen voor jouw.
        pointyour++;
        yourpoint.innerHTML = pointyour;

        console.log('jouw points ' + pointyour);
        console.log('computer poins ' + pointcomputer);
    }

    // als de computer wint.
    else if (diceOne + diceTwo > dicetre + dicefore) {
        console.log("lose");
        // punten op tellen van computer.
        pointcomputer++;
        computerpoint.innerHTML = pointcomputer;

        console.log('jouw points ' + pointyour);
        console.log('computer poins ' + pointcomputer);
    }

    // als het gelijk spel is.
    else if (diceOne + diceTwo === dicetre + dicefore) {
        console.log('draw')
        console.log('jouw points ' + pointyour);
        console.log('computer poins ' + pointcomputer);
    }
    // als jij 10 punten heb gehaald.
    if (pointyour == 10) {
        console.log("Je hebt gewonnen")
        // laten zien dat jij heb gewonnen.
        alert("Je hebt gewonnen")
        // reset punten naar 0.
        pointcomputer = 0
        computerpoint.innerHTML = pointcomputer
        pointyour = 0
        yourpoint.innerHTML = pointyour
    }

    // als de computer 10 punten heeft.
    if (pointcomputer == 10) {
        console.log("Computer heeft gewonnen");
        // laten zien dat de computer heeft gewonnen.
        alert("Computer heeft gewonnnen");
        // reseten punten naar 0.
        pointcomputer = 0
        computerpoint.innerHTML = pointcomputer
        pointyour = 0
        yourpoint.innerHTML = pointyour
    }

    // de buttons aan zetten die je moet gebruiken en uit zetten die je niet nodig heb.
    roll.disabled = false;
    higher.disabled = true;
    lower.disabled = true;

});

// rollen voor jouw.
lower.addEventListener("click", function () {
    // random getal.
    dicetre = Math.floor((Math.random() * 6) + 1);
    dicefore = Math.floor((Math.random() * 6) + 1);

    console.log(dicetre + ' ' + dicefore);

    // de dice img laten zien.
    dice3.src = "./img/dice-" + dicetre + ".png";
    dice4.src = "./img/dice-" + dicefore + ".png";

    // als jij wint.
    if (diceOne + diceTwo > dicetre + dicefore) {
        console.log("win")
        // jouw punten op tellen voor jouw.
        pointyour++
        yourpoint.innerHTML = pointyour;

        console.log('jouw points ' + pointyour);
        console.log('computer poins ' + pointcomputer);
    }

    // als computer wint.
    else if (diceOne + diceTwo < dicetre + dicefore) {
        console.log("lose")
        // punten op tellen van computer.
        pointcomputer++
        computerpoint.innerHTML = pointcomputer
        console.log('jouw points ' + pointyour);
        console.log('computer poins ' + pointcomputer);
    }

    // als het gelijk spel is.
    else if (diceOne + diceTwo === dicetre + dicefore) {
        console.log('draw');
        console.log('jouw points ' + pointyour);
        console.log('computer poins ' + pointcomputer);
    }

    // als jij 10 punten heb gehaald.
    if (pointyour == 10) {
        console.log("Je hebt gewonnen")
        // laten zien dat jij heb gewonnen.
        alert("Je hebt gewonnen")
        // reseten punten naar 0.
        pointcomputer = 0
        computerpoint.innerHTML = pointcomputer
        pointyour = 0
        yourpoint.innerHTML = pointyour
    }

    // als de computer 10 punten heb gehaald.
    if (pointcomputer == 10) {
        console.log("Computer heeft gewonnen");
        // laten zien dat computer heeft gewonnen.
        alert("Computer heeft gewonnnen");
        // reseten punten naar 0.
        pointcomputer = 0
        computerpoint.innerHTML = pointcomputer
        pointyour = 0
        yourpoint.innerHTML = pointyour
    }

    // de buttons aan zetten die je nodig heb en uit zetten die je niet nodig heb.
    roll.disabled = false;
    higher.disabled = true;
    lower.disabled = true;
});

// de buttons aan zetten die je nodig heb
higher.disabled = true;
lower.disabled = true;




const showPopupButton = document.querySelector('.showPopup');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.close');

// de informatie popup laten zien
showPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
});
// de informatie popup weg kliken
closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});