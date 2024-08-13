const menuImage = document.getElementById('titleImage');
let num = 9;

menuImage.src = "img/bg6.jpg";

imagesArray = ["img/bg1.jpg", "img/bg2.jpg", "img/bg3.jpg", "img/bg4.jpg", "img/bg5.jpg", "img/bg6.jpg", "img/bg7.jpg", "img/bg8.jpg", "img/bg9.jpg", "img/bg10.jpg"];

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