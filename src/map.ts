import { animate } from "./main.ts"

const canvas = document.querySelector('canvas')!;
const c = canvas?.getContext('2d');

let ctx = c!
let tileW = 50, tileH = 50
let mapH = 8, mapW = 10

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gameMap = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
]

function loadMap() {
  requestAnimationFrame(drawGame);
  ctx.font = 'bold 10pt sans-serif';
}

function drawGame() {
  if (ctx === null) {
    return;
  }

  for (let y = 0; y < mapH; y++) {
    for(let x = 0; x < mapW; x++) {
      switch(gameMap[((y * mapW) + x)]) {
        case 0:
          ctx.fillStyle = "black"
          break;
        case 1: 
          ctx.fillStyle = "white"
          break;
      }
      ctx.fillRect(x*tileW, y*tileH, tileW, tileH)
    }
  }
}

loadMap()


