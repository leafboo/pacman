const canvass = document.querySelector('canvas')!;
const context = canvass?.getContext('2d')!;

canvass.width = window.innerWidth
canvass.height = window.innerHeight



let x = 20;
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

function animate() {
  requestAnimationFrame(animate);
  // Clear the canvas before drawing
  context.clearRect(0, 0, canvass.width, canvass.height);
  // First square
  context.fillStyle = 'red'; // Set fill color to red
  context.fillRect(x, y, 20, 20);

  // Second square
  context.fillStyle = 'blue'; // Set fill color to blue
  context.fillRect(200, 50, 20, 20);

  if (x + boxWidth >= 200) {
    dx = 0;
    x -= 1;
  }
  

  x += dx;
  y += dy;

}

animate();