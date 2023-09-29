document.addEventListener("DOMContentLoaded", function () {
    console.log("index.html werkt");

    let elDiceOne = document.getElementById('dice1');
    let elDiceTwo = document.getElementById('dice2');
    let elDicetre = document.getElementById('dice3');
    let elDicefore = document.getElementById('dice4');
    let elHigher = document.getElementById('higher');
    let elLower = document.getElementById('lower');
    let elRoll = document.getElementById('roll');


    elHigher.onclick = function () {
        let dicetre = Math.floor((Math.random() * 6) + 1);
        let dicefore = Math.floor((Math.random() * 6) + 1);

        console.log(dicetre + ' ' + dicefore);

        elDicetre.className = 'dice show-' + dicetre;
        elDicefore.className = 'dice show-' + dicefore;
    };

    elLower.onclick = function () {
        let dicetre = Math.floor((Math.random() * 6) + 1);
        let dicefore = Math.floor((Math.random() * 6) + 1);
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
