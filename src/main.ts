import "./main.css"
const canvas = document.querySelector('canvas')!;
const c = canvas?.getContext('2d')!;
canvas.width = 800;
canvas.height = 800;

// game map variables
let tileW = 40, tileH = 40;
let mapH = 19, mapW = 19;
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
  1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 
  0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0,
  1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1,
  0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
  0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

// pacman variables
let pacmanX = 61;
let pacmanY = 61;
let radius = 15;
let starting = 0;
let ending = Math.PI * 2;
let isCounterClockwise = false;
let dx = 0;
let dy = 0;

// create pacman
function createPacman() {
  c.fillStyle = "yellow";
  c.beginPath();
  c.arc(pacmanX, pacmanY, radius, starting, ending, isCounterClockwise);
  c.fill();
  c.stroke();
}

// game map
function drawMap() {
  for (let i = 0; i < mapH; i++) {
    for (let j = 0; j < mapW; j++) {
      switch (gameMap[i * mapW + j]) {
        case 0:
          c.fillStyle = "black";
          if (isColliding(j * tileW, i * tileH)) {
            console.log('what the fuck')
            dx = 0;
            dy = 0;
          }
          break;
        case 1:
          c.fillStyle = "transparent";
          break;
      }
      c.fillRect(j * tileW, i * tileH, tileW, tileH);

      
      
    }
  }
}



// movements
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      dy = -3; // Move up
      dx = 0;
      break;

    case 'ArrowDown':
      dy = 3; // Move down
      dx = 0;
      break;

    case 'ArrowLeft':
      dx = -3; // Move left
      dy = 0;
      break;

    case 'ArrowRight':
      dx = 3; // Move right
      dy = 0;
      break;
  }
});

function isColliding(wallX: number, wallY: number): boolean {
  if ( pacmanX + radius + dx >= wallX && pacmanX - radius + dx <= wallX + tileW && pacmanY - radius + dy <= wallY + tileH && pacmanY + radius + dy >= wallY) {
    return true;
  }
  return false
}

// run the code
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawMap(); 
  createPacman(); 
  pacmanX += dx; 
  pacmanY += dy;
}

animate(); 