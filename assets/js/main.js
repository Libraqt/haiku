// main.js
let divs = document.querySelectorAll(".grid-container div");

function randomNumber (min,max) {
    return Math.random() * (max - min) + min;
}

function randomize() {
    console.log(divs.length,"randomize");
    divs.forEach(function(div) {
let scale= randomNumber(0.5,1.2);
let translateX = randomNumber(-80,80);
let translateY = randomNumber(-50,50);
let rotate = randomNumber(0,360);

if (Math.random() > 0.5) {
    scale = 1;
    translateX = randomNumber(-80,80);
    translateY = randomNumber(-50,50);

    }
    div.computedStyleMap.transform = `scale(${scale})  translate(${translateX}%, ${translateY}%) 
    rotate(${rotate}deg)`;

});
}
document.addEventListener("click", randomize);