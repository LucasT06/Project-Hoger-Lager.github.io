
    console.log("index.html werkt");

<<<<<<< Updated upstream
    let diceOne = document.querySelector('dice1');
    let DiceTwo = document.querySelector('dice2');
    let dicetre = document.querySelector('dice3');
    let Dicefore = document.querySelector('dice4');
    let Higher = document.querySelector('.higher');
    let Lower = document.querySelector('.lower');
    let roll = document.querySelector('.roll');


    


    roll.addEventListener ('click', function(){
        let diceOne = Math.floor((Math.random() * 6) + 1);
        let diceTwo = Math.floor((Math.random() * 6) + 1);
        

        console.log(diceOne + ' ' + diceTwo);
        
        
    });




   Higher.addEventListener('click', function(){
        let dicetre = Math.floor((Math.random() * 6) + 1);
        let dicefore = Math.floor((Math.random() * 6) + 1);
        

        console.log(dicetre + ' ' + dicefore);


    });
=======
    let DiceOne = document.getElementById('dice1');
    let DiceTwo = document.getElementById('dice2');
    let Dicetre = document.getElementById('dice3');
    let Dicefore = document.getElementById('dice4');
    let Higher = document.getElementById('higher');
    let Lower = document.getElementById('lower');
    let Roll = document.getElementById('roll');


    
    Roll.onclick = function () {
        rollDice();
    };

    function rollDice() {
        let diceOne = Math.floor((Math.random() * 6) + 1);
        let diceTwo = Math.floor((Math.random() * 6) + 1);

        console.log(diceOne + ' ' + diceTwo);

        DiceOne.className = 'dice show-' + diceOne;
        DiceTwo.className = 'dice show-' + diceTwo;
    }

    Higher.onclick = function () {
        let dicetre = Math.floor((Math.random() * 6) + 1);
        let dicefore = Math.floor((Math.random() * 6) + 1);

        console.log(dicetre + ' ' + dicefore);

        Dicetre.className = 'dice show-' + dicetre;
        Dicefore.className = 'dice show-' + dicefore;

        if (diceOne + diceTwo > dicetre + divefore){
            result = console.log("win")
        }
        else if (diceone + diceTwo < dicetre + divefore){
            result = console.log("lose")
        }
    };

    elLower.onclick = function () {
        let dicetre = Math.floor((Math.random() * 6) + 1);
        let dicefore = Math.floor((Math.random() * 6) + 1);
    };
>>>>>>> Stashed changes

    // JavaScript om de pop-up te openen en te sluiten (blijft hetzelfde)
    const showPopupButton = document.querySelector('#showPopup');
    const popup = document.activeElement('popup');
    const closePopupButton = document.activeElement('closePopup');

    showPopupButton.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

