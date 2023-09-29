
    console.log("index.html werkt");

    const dice1 = document.querySelector('.dice1-img')
    const dice2 = document.querySelector('.dice2-img')
    const dice3 = document.querySelector('.dice3-img')
    const dice4 = document.querySelector('.dice4-img')
    const Higher = document.querySelector('.higher');
    const Lower = document.querySelector('.lower');
    const roll = document.querySelector('.roll');


    


    roll.addEventListener ('click', function(){
        let diceOne = Math.floor((Math.random() * 6) + 1);
        let diceTwo = Math.floor((Math.random() * 6) + 1);
        
        console.log(diceOne + ' ' + diceTwo);

        dice1.src = "./img/dice-" + diceOne + ".png";
        dice2.src = "./img/dice-" + diceTwo + ".png";
        
    });




   Higher.addEventListener('click', function(){
        let dicetre = Math.floor((Math.random() * 6) + 1);
        let dicefore = Math.floor((Math.random() * 6) + 1);

        console.log(dicetre + ' ' + dicefore);

        dice1.src = "./img/dice-" + dicetre + ".png";
        dice2.src = "./img/dice-" + dicefore + ".png";

    });

    Lower.onclick = function () {
        let dicetre = Math.floor((Math.random() * 6) + 1);
        let dicefore = Math.floor((Math.random() * 6) + 1);
    };

    
    
    
    
    
    const showPopupButton = document.querySelector('.showPopup');
    const popup = document.querySelector('.popup');
    const closePopupButton = document.querySelector('.close');

    showPopupButton.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

