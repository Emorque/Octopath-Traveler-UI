const button = document.querySelector('.replay');
const buttonIcon = document.querySelector('.replayTriangle');
const expBars = document.querySelectorAll('.expBar');
const totalExp = document.querySelector('.expGain');

const characterEXPs = document.querySelectorAll('.characterEXP');

const gain = parseInt(totalExp.dataset.value);
let time1 = gain;
let time2 = gain;
const timeInterval = 100;


button.addEventListener('click', (event) => {
    showVictory();
    expBars.forEach(exp => {
        time1 = gain * 2;
        let num = parseInt(exp.dataset.value);
        exp.style.background = "linear-gradient(90deg, var(--OTorange) 0%, var(--OTorange)" + num + "%, var(--OTtransparent)"+ num + "%, var(--OTtransparent))";
        let interval = setInterval(() => {
            if (time1 < 0) {
                clearInterval(interval);
            }
            // console.log(gain);
            time1 -= 1;
            num += 0.5;
            exp.style.background = "linear-gradient(90deg, var(--OTorange) 0%, var(--OTorange)" + num + "%, var(--OTtransparent)"+ num + "%, var(--OTtransparent))";
        }, timeInterval);
    });

    characterEXPs.forEach(character => {
        time2 = gain * 4;
        // console.log(time2);
        let expNum = parseInt(character.dataset.value);
        character.innerHTML = String(expNum);
        let interval2 = setInterval(() => {
            if (time2 < 0) {
                clearInterval(interval2);
            }
            console.log(time2);
            time2 -= 1;
            expNum += 1;
            character.innerHTML = String(expNum);
        }, timeInterval/2);
    })

    setTimeout(function() {showItems();}, timeInterval * gain/1.5);
})

const stats = document.querySelector('.leftSide');
const victoryText = document.querySelector('.victoryText');
const items = document.querySelector('.itemsContainer');
const victoryContainer = document.querySelector('.victoryContainer');


function showVictory() {
    if (victoryText.classList[1] === 'show'){
        button.style.display = 'none';
        setTimeout(() => {
            button.style.display = 'block';
        }, 3000);
        buttonIcon.classList.remove('show');
        victoryText.classList.remove('show');
        stats.classList.remove('show');
        victoryContainer.classList.remove('show');
    }
    else {
        buttonIcon.classList.add('show');
        victoryText.classList.add('show');
        stats.classList.add('show');
        victoryContainer.classList.add('show');
    }
}

function showItems() {
    if (items.classList[1] === 'show'){
        items.classList.remove('show');
    }    
    else {
        items.classList.add('show');
    }
}