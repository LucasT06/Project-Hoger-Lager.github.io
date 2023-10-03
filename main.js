
console.log("index.html werkt");

const dice1 = document.querySelector('.dice1-img')
const dice2 = document.querySelector('.dice2-img')
const dice3 = document.querySelector('.dice3-img')
const dice4 = document.querySelector('.dice4-img')
const higherBtn = document.querySelector('.higher').disabled = true;
const lowerBtn = document.querySelector('.lower').disabled = true;
const roll = document.querySelector('.roll').disabled = false;
const test = document.querySelector('.test')

let diceOne;
let diceTwo;
let dicetre;
let dicefore;

// muisklik hoger knop
higherBtn.addEventListener('click', function () {

    // random getal 
    dicetre = Math.floor((Math.random() * 6) + 1);
    dicefore = Math.floor((Math.random() * 6) + 1);

    console.log(dicetre + ' ' + dicefore);

    // plaatsjes veranderen voor dobelsteen
    dice3.src = "./img/dice-" + dicetre + ".png";
    dice4.src = "./img/dice-" + dicefore + ".png";

    if (diceOne + diceTwo < dicetre + dicefore) {
        console.log("win")
    }
    else if (diceOne + diceTwo > dicetre + dicefore) {
        console.log("lose")
    } 
});

lowerBtn.addEventListener("click", function () {
    dicetre = Math.floor((Math.random() * 6) + 1);
    dicefore = Math.floor((Math.random() * 6) + 1);

    console.log(dicetre + ' ' + dicefore);

    dice3.src = "./img/dice-" + dicetre + ".png";
    dice4.src = "./img/dice-" + dicefore + ".png";

    if (diceOne + diceTwo > dicetre + dicefore) {
        console.log("win")
    }
    else if (diceOne + diceTwo < dicetre + dicefore) {
        console.log("lose")
    }
});

roll.addEventListener('click', function () {
    diceOne = Math.floor((Math.random() * 6) + 1);
    diceTwo = Math.floor((Math.random() * 6) + 1);

    console.log(diceOne + ' ' + diceTwo);



    dice1.src = "./img/dice-" + diceOne + ".png";
    dice2.src = "./img/dice-" + diceTwo + ".png";


});

const showPopupButton = document.querySelector('.showPopup');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.close');

showPopupButton.addEventListener('click', function () {
    popup.style.display = 'block';
});

closePopupButton.addEventListener('click', function () {
    popup.style.display = 'none';
});

