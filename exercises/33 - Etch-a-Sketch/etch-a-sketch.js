// select canvas and button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 10; //a true constant, hence all UPPERCASE_WITH_UNDERSCORE
const LINE_WIDTH = 20;
const COLOR_FLUCTUATION = 4;

// setup canvas to draw
// Make variables width and height from the same properties on our canvas
const { width, height } = canvas;

// create random starting position

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = LINE_WIDTH;

let hue = 0;
updateStrokeStyle();
ctx.beginPath(); // starts the drawin
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function incrementHue() {
  hue += COLOR_FLUCTUATION;
  updateStrokeStyle(hue);
}

function updateStrokeStyle(hueValue) {
  ctx.strokeStyle = `hsl(${hue},100%, 50%)`;
}

//write draw function
function draw({ key }) {
  incrementHue();
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move our values based on user input
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

//write a keyhandler
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

//create clear/shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function () {
      canvas.classList.remove('shake');
    },
    { once: true },
  );
  ctx.clear();
}
shakeButton.addEventListener('click', clearCanvas);

//listen for arrow keys
window.addEventListener('keydown', handleKey);
