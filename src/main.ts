import "./main.css"

const canvas = document.querySelector('canvas')!;
const c = canvas?.getContext('2d')!;
canvas.width = 800;
canvas.height = 800;

let x = 100;
let y = 100;
let radius = 20;
let starting = 0;
let ending = Math.PI * 2;
let isCounterClockwise = false;
let dx = 0
let dy = 0

c.fillStyle="yellow"

c?.beginPath();
c?.arc(x, y, radius, starting, ending, isCounterClockwise);
c.fill()
c?.stroke();

export function animate() {
  requestAnimationFrame(animate);
  requestAnimationFrame(drawGame);

  createCircle();


  x += dx
  y += dy
}

animate()











// map
let tileW = 30, tileH = 30
let mapH = 19, mapW = 19
const gameMap = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0,
  0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
  1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1,
  0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0,
  1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, ///middle
  0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0,
  1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1,
  0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
  0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,








  



]

function drawGame() {
  if (c === null) {
    return;
  }

  for (let y = 0; y < mapH; y++) {
    for(let x = 0; x < mapW; x++) {
      switch(gameMap[((y * mapW) + x)]) {
        case 0:
          c.fillStyle = "black"
          break;
        case 1: 
          c.fillStyle = "transparent"
          break;
      }
      c.fillRect(x*tileW, y*tileH, tileW, tileH)
    }
  }
}




// pacman
function createCircle() {
  c?.clearRect(0, 0, window.innerWidth, window.innerHeight);
  c?.beginPath();
  c.fillStyle = "yellow"
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












