
    console.log("index.html werkt");

const dice1 = document.querySelector('.dice1-img')
const dice2 = document.querySelector('.dice2-img')
const dice3 = document.querySelector('.dice3-img')
const dice4 = document.querySelector('.dice4-img')
const Higher = document.querySelector('.higher');
const Lower = document.querySelector('.lower');
const roll = document.querySelector('.roll');
const test = document.querySelector('.test')

if (lower.style.display === "block") {
    lower.style.display = "none";
  }

roll.addEventListener ('click', function(){
    const diceOne = Math.floor((Math.random() * 6) + 1);
    const diceTwo = Math.floor((Math.random() * 6) + 1);
    
    console.log(diceOne + ' ' + diceTwo);
    
    if (roll.style.display === "none") {
        roll.style.display = "block";
      } else {
        roll.style.display = "none";
      }

   
   

    dice1.src = "./img/dice-" + diceOne + ".png";
    dice2.src = "./img/dice-" + diceTwo + ".png";
    
});


Higher.addEventListener('click', function(){
    const dicetre = Math.floor((Math.random() * 6) + 1);
    const dicefore = Math.floor((Math.random() * 6) + 1);

    console.log(dicetre + ' ' + dicefore);

    roll.style.display = "block"

    dice3.src = "./img/dice-" + dicetre + ".png";
    dice4.src = "./img/dice-" + dicefore + ".png";

    if (diceOne + diceTwo < dicetre +  dicefore){
        console.log("win")
    }
    else if (diceOne + diceTwo > dicetre +  dicefore){
        console.log("win")
    }

});

Lower.addEventListener("click", function(){
    const dicetre = Math.floor((Math.random() * 6) + 1);
    const dicefore = Math.floor((Math.random() * 6) + 1);

    console.log(dicetre + ' ' + dicefore);
    
    roll.style.display = "block"
      
   

    showPopupButton.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    dice3.src = "./img/dice-" + dicetre + ".png";
    dice4.src = "./img/dice-" + dicefore + ".png";
});

const showPopupButton = document.querySelector('.showPopup');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.close');

showPopupButton.addEventListener('click', function(){
    popup.style.display = 'block';
});

closePopupButton.addEventListener('click', function(){
    popup.style.display = 'none';
});

