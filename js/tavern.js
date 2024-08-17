const options = document.querySelectorAll('.optionContainer');

const hoverAudio = new Audio('sfx/menuHover.wav');
const menuSelect = new Audio('sfx/menuSelect.wav');

options.forEach(option => {
    option.addEventListener("mouseenter", (event) => {
        hoverAudio.play();
    })
});
