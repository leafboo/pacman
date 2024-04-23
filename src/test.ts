const canvass = document.querySelector('canvas')!;
const context = canvass?.getContext('2d')!;

canvass.width = window.innerWidth
canvass.height = window.innerHeight



let x = 400;
let y = 50;
let dx = 0;
let dy = 0;

const boxWidth = 20;
const boxHeight = 20;


// First square
context.fillStyle = 'red'; // Set fill color to red
context.fillRect(x, y, 20, 20);

// Second square
context.fillStyle = 'blue'; // Set fill color to blue
context.fillRect(50, 50, 20, 20);

// Third square
context.fillStyle = 'blue'; // Set fill color to blue
context.fillRect(30, 100, 20, 20);



// movements
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      dy = -5; // Move up
      dx = 0;
      break;

    case 'ArrowDown':
      dy = 5; // Move down
      dx = 0;
      break;

    case 'ArrowLeft':
      dx = -5; // Move left
      dy = 0;
      break;

    case 'ArrowRight':
      dx = 5; // Move right
      dy = 0;
      break;
  }
});

function animate() {
  requestAnimationFrame(animate);
  // Clear the canvas before drawing
  context.clearRect(0, 0, canvass.width, canvass.height);
  // First square
  context.fillStyle = 'red'; // Set fill color to red
  context.fillRect(x, y, 20, 20);

  // Second square
  context.fillStyle = 'blue'; // Set fill color to blue
  context.fillRect(900, 50, 20, 20);

  // Third square
  context.fillStyle = 'blue'; // Set fill color to blue
  context.fillRect(100, 50, 20, 20);

  const box1Left = 900
  const box1Right = 920
  const box2Right = 100

  if (x + boxWidth >= box1Left && x <= box1Left + boxWidth && y + 1 < 50 + boxWidth) {
    dx = 0;
    x -= 2;
  }
  if (x + boxWidth >= box2Right && x <= box2Right + boxWidth && y + 1 < 50 + boxWidth) {
    dx = 0;
    x += 2;
  }
  

  x += dx;
  y += dy;

}

animate();