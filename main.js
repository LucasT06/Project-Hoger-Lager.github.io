
    console.log("index.html werkt");

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

