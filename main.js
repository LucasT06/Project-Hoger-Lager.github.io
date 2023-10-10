
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


roll.addEventListener('click', function () {
    diceOne = Math.floor((Math.random() * 6) + 1);
    diceTwo = Math.floor((Math.random() * 6) + 1);

    console.log(diceOne + ' ' + diceTwo);

    dice1.src = "./img/dice-" + diceOne + ".png";
    dice2.src = "./img/dice-" + diceTwo + ".png";

    roll.disabled = true;
    higher.disabled = false;
    lower.disabled = false;
});


higher.addEventListener('click', function () {
    dicetre = Math.floor((Math.random() * 6) + 1);
    dicefore = Math.floor((Math.random() * 6) + 1);

    console.log(dicetre + ' ' + dicefore);

    let result2 = dicetre + dicefore;

    dice3.src = "./img/dice-" + dicetre + ".png";
    dice4.src = "./img/dice-" + dicefore + ".png";


        if (diceOne + diceTwo < dicetre + dicefore){
            console.log("win")
        }
        else if (diceOne + diceTwo > dicetre + dicefore){
            console.log("lose")
        }
        else if (diceOne + diceTwo === dicetre + dicefore){
            console.log('draw')
        }

        roll.disabled = false;
        higher.disabled = true;
        lower.disabled = true;

    });
    lower.addEventListener("click", function(){
        dicetre = Math.floor((Math.random() * 6) + 1);
        dicefore = Math.floor((Math.random() * 6) + 1);

        console.log(dicetre + ' ' + dicefore);

        dice3.src = "./img/dice-" + dicetre + ".png";
        dice4.src = "./img/dice-" + dicefore + ".png";

        if (diceOne + diceTwo > dicetre + dicefore){
            console.log("win")
        }
        else if (diceOne + diceTwo < dicetre + dicefore){
            console.log("lose")
        }
        else if (diceOne + diceTwo === dicetre + dicefore){
            console.log('draw')}

        roll.disabled = false;
        higher.disabled = true;
        lower.disabled = true;
    });
    if (diceOne + diceTwo < dicetre + dicefore) {
        console.log("win");
        pointyour++;
        yourpoint.innerHTML = pointyour;
        console.log('jouw points ' + pointyour);
        console.log('computer poins ' + pointcomputer);
    }
    else if (diceOne + diceTwo > dicetre + dicefore) {
        console.log("lose");
        pointcomputer++;
        computerpoint.innerHTML = pointcomputer;
        console.log('jouw points ' + pointyour);
        console.log('computer poins ' + pointcomputer);
    }
    else if (diceOne + diceTwo === dicetre + dicefore) {
        console.log('draw')
        console.log('jouw points ' + pointyour);
        console.log('computer poins ' + pointcomputer);
    }


    roll.disabled = false;
    higher.disabled = true;
    lower.disabled = true;


lower.addEventListener("click", function () {
    dicetre = Math.floor((Math.random() * 6) + 1);
    dicefore = Math.floor((Math.random() * 6) + 1);

    console.log(dicetre + ' ' + dicefore);

    dice3.src = "./img/dice-" + dicetre + ".png";
    dice4.src = "./img/dice-" + dicefore + ".png";

    if (diceOne + diceTwo > dicetre + dicefore) {
        console.log("win")
        pointyour++
        yourpoint.innerHTML = pointyour;
        console.log('jouw points ' + pointyour);
        console.log('computer poins ' + pointcomputer);
    }
    else if (diceOne + diceTwo < dicetre + dicefore) {
        console.log("lose")
        pointcomputer++
        computerpoint.innerHTML = pointcomputer
        console.log('jouw points ' + pointyour);
        console.log('computer poins ' + pointcomputer);
    }
    else if (diceOne + diceTwo === dicetre + dicefore) {
        console.log('draw');
        console.log('jouw points ' + pointyour);
        console.log('computer poins ' + pointcomputer);
    }

    if (pointyour == 10) {
        console.log("Je hebt gewonnen")
        alert("Je hebt gewonnen")
        pointcomputer = 0
        computerpoint.innerHTML = pointcomputer
        pointyour = 0
        yourpoint.innerHTML = pointyour
    }

    if (pointcomputer == 10) {
        console.log("Computer heeft gewonnen")
        alert("Computer heeft gewonnnen")
        pointcomputer = 0
        computerpoint.innerHTML = pointcomputer
        pointyour = 0
        yourpoint.innerHTML = pointyour
    }
    
    roll.disabled = false;
    higher.disabled = true;
    lower.disabled = true;
});


higher.disabled = true;
lower.disabled = true;




const showPopupButton = document.querySelector('.showPopup');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.close');

showPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

