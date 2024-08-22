const menuImage = document.getElementById('titleImage');
let num = 9;

menuImage.src = "img/bg6.webp";

imagesArray = ["img/bg1.webp", "img/bg2.webp", "img/bg3.webp", "img/bg4.webp", "img/bg5.webp", "img/bg6.webp", "img/bg7.webp", "img/bg8.webp", "img/bg9.webp", "img/bg10.webp"];

document.addEventListener(`DOMContentLoaded`, imageSwap);

setInterval(imageSwap, 3000);

function imageSwap() {
    if (num === 10) {
        num = 0;
    }
    setTimeout(() => {
        menuImage.style.opacity = "0.7";
    }, 2500);
    menuImage.src = imagesArray[num];
    num++;
    menuImage.style.opacity = "1";
}

// const options = document.querySelector('.options');
const options = document.querySelectorAll('.menuOptions');
const hoverAudio = new Audio('sfx/menuHover.wav');
const menuSelect = new Audio('sfx/menuSelect.wav');

options.forEach(option => {
    option.addEventListener("mouseenter", (event) => {
        hoverAudio.play();
    })
});

// console.log(options);