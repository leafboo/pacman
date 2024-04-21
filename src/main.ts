const canvas = document.querySelector('canvas')!;
const c = canvas?.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = 100;
let y = 100;
let radius = 20;
let starting = 0;
let ending = Math.PI * 2;
let isCounterClockwise = false;
let dx = 0
let dy = 0


c?.clearRect(0, 0, window.innerWidth, window.innerHeight);
c?.beginPath();
c?.arc(x, y, radius, starting, ending, isCounterClockwise);
c?.stroke();

function animate() {
  requestAnimationFrame(animate);
  createCircle();

  x += dx
  y += dy
}

animate();












function createCircle() {
  c?.clearRect(0, 0, window.innerWidth, window.innerHeight);
  c?.beginPath();
  c?.arc(x, y, radius, starting, ending, isCounterClockwise);
  c?.fill();
  c?.stroke();
}


document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      dy = -5; // Move up
      dx = 0
      break;
    case 'ArrowDown':
      dy = 5; // Move down
      dx = 0
      break;
    case 'ArrowLeft':
      dx = -5; // Move left
      dy = 0
      break;
    case 'ArrowRight':
      dx = 5; // Move right
      dy = 0
      break;
  }
  console.log(`dx: ${dx} dy: ${dy}`)
});












