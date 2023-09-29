document.addEventListener("DOMContentLoaded", function () {
    console.log("index.html werkt");
<<<<<<< HEAD
;
    // let person = prompt("Please enter your name",)
    // const jij = document.querySelector('.jij')
    // jij.textContent= person

=======

   

>>>>>>> 57a86b556b4ab2bafc85fc7871363fdda54c2f16
    let elDiceOne = document.getElementById('dice1');
    let elDiceTwo = document.getElementById('dice2');
    let elHigher = document.getElementById('higher');
    let elLower = document.getElementById('lower');
    let elRoll = document.getElementById('roll');

<<<<<<< HEAD
=======
    

>>>>>>> 57a86b556b4ab2bafc85fc7871363fdda54c2f16
    elHigher.onclick = function () {
        // Voeg hier de logica toe voor "Hoger" knop
    };

    elLower.onclick = function () {
        // Voeg hier de logica toe voor "Lager" knop
    };

    elRoll.onclick = function () {
        rollDice();
    };

    function rollDice() {
        let diceOne = Math.floor((Math.random() * 6) + 1);
        let diceTwo = Math.floor((Math.random() * 6) + 1);

        console.log(diceOne + ' ' + diceTwo);

        elDiceOne.className = 'dice show-' + diceOne;
        elDiceTwo.className = 'dice show-' + diceTwo;
    }


    // JavaScript om de pop-up te openen en te sluiten (blijft hetzelfde)
    const showPopupButton = document.getElementById('showPopup');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('closePopup');

    showPopupButton.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});
;
