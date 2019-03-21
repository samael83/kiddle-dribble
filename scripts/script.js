// Variables
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const paletteHeight = document.querySelector('.color-palette-grid').clientHeight;
const colorBtn = document.querySelectorAll('.color-palette-grid-cell');

let drawing = false;
let lastX = 0;
let lastY = 0;

// Canvas settings
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - paletteHeight;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;
ctx.strokeStyle = '#BADA55';

// Events

colorBtn.forEach( color => color.addEventListener('click', setStrokeStyle));
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
})
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => drawing = false);

// Functions

function setStrokeStyle() {
    ctx.strokeStyle = this.dataset.color;
    console.log(ctx.strokeStyle);
}

function draw(e) {
    if (!drawing) return;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];
}



