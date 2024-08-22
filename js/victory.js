const button = document.querySelector('.replay');
const buttonIcon = document.querySelector('.replayTriangle');
const expBars = document.querySelectorAll('.expBar');
const totalExp = document.querySelector('.expGain');
const totalJP = document.querySelector('.jpGain');


const shineBars = document.querySelectorAll('.shine');

const characterEXPs = document.querySelectorAll('.characterEXP');
const characterJPs = document.querySelectorAll('.characterJP');

const gain = parseInt(totalExp.dataset.value);
const jpGain = parseInt(totalJP.dataset.value);  
let time1 = gain;
let time2 = gain;
let time3 = jpGain;
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
    });

    characterJPs.forEach(jp => {
        time3 = jpGain * 4;
        let jpNum = parseInt(jp.dataset.value);
        jp.innerHTML = String(jpNum);
        let interval3 = setInterval(() => {
            if (time3 < 0) {
                clearInterval(interval3);
            }
            console.log(time3);
            time3 -= 1;
            jpNum += 1;
            jpString = String(jpNum).substring(0, 1) + ',' + String(jpNum).substring(1, 4);
            // jpString = jpString.subString(0, 1) + ',' + jpString.subString(1, jpString.length);
            jp.innerHTML = jpString;
        }, timeInterval/2);
    });

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
        shineBars.forEach(shine => {
            shine.classList.remove('show');
        });
    }
    else {
        buttonIcon.classList.add('show');
        victoryText.classList.add('show');
        stats.classList.add('show');
        victoryContainer.classList.add('show');

        shineBars.forEach(shine => {
            shine.classList.add('show');
        });
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