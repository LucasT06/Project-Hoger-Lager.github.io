
    console.log("index.html werkt");

    const dice1 = document.querySelector('.dice1-img')
    const dice2 = document.querySelector('.dice2-img')
    const dice3 = document.querySelector('.dice3-img')
    const dice4 = document.querySelector('.dice4-img')
    const Higher = document.querySelector('.higher');
    const Lower = document.querySelector('.lower');
    const roll = document.querySelector('.roll');
    const test = document.querySelector('.test')


    roll.addEventListener ('click', function(){
        let diceOne = Math.floor((Math.random() * 6) + 1);
        let diceTwo = Math.floor((Math.random() * 6) + 1);
        
        console.log(diceOne + ' ' + diceTwo);

        let result1 = diceOne + diceTwo;

        dice1.src = "./img/dice-" + diceOne + ".png";
        dice2.src = "./img/dice-" + diceTwo + ".png";
        
    });


    Higher.addEventListener('click', function(){
        let dicetre = Math.floor((Math.random() * 6) + 1);
        let dicefore = Math.floor((Math.random() * 6) + 1);

        console.log(dicetre + ' ' + dicefore);

        let result2 = dicetre + dicefore;

        dice3.src = "./img/dice-" + dicetre + ".png";
        dice4.src = "./img/dice-" + dicefore + ".png";

        if (result1 < result2){
            console.log("win")
        }
        

    });

    Lower.addEventListener("click", function(){
        let dicetre = Math.floor((Math.random() * 6) + 1);
        let dicefore = Math.floor((Math.random() * 6) + 1);

        console.log(dicetre + ' ' + dicefore);

        dice3.src = "./img/dice-" + dicetre + ".png";
        dice4.src = "./img/dice-" + dicefore + ".png";
    });

    const showPopupButton = document.querySelector('.showPopup');
    const popup = document.querySelector('.popup');
    const closePopupButton = document.querySelector('.close');

    showPopupButton.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

