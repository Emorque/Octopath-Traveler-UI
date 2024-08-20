const options = document.querySelectorAll('.optionContainer');

const hoverAudio = new Audio('sfx/menuHover.wav');
const menuSelect = new Audio('sfx/menuSelect.wav');
const tavernAudio = new Audio('sfx/tavernSelect.wav');
const cancelAudio = new Audio('sfx/cancel.wav');

options.forEach(option => {
    option.addEventListener("mouseenter", (event) => {
        hoverAudio.play();
    })
});

const button = document.querySelector('.menu');
const sides = document.querySelectorAll('.side');
const bg = document.querySelector('#bgImage');

button.addEventListener('click', (event) => {
    button.style.display = "none";
    bg.style.filter = 'blur(1px)';
    sides.forEach(side => {
        side.classList.add('show');
        side.classList.remove('hidden');
    })
    tavernAudio.play();
})


const travelButton = document.querySelector('.travel');
travelButton.addEventListener('click', (event) => {
    sides.forEach(side => {
        side.classList.add('hidden');
        side.classList.remove('show');
    })
    bg.style.filter = 'blur(0px)';
    button.style.display = "block";
    cancelAudio.play();
})