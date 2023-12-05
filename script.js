const container = document.querySelector('.box');

function random(color) {
   return Math.floor(Math.random() * (color + 1));
}

function bgColor(event) {
   const randomBgColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
   event.target.style.backgroundColor = randomBgColor;
}

container.addEventListener('click', bgColor)