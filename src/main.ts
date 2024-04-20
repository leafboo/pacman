const canvas = document.querySelector('canvas')!;

const c = canvas?.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const x = 20
const y = 20
const radius = 10
const starting = 0
const ending = Math.PI * 2
const isCounterClockwise = false

c?.beginPath();
c?.arc(x, y, radius, starting, ending, isCounterClockwise);
c?.stroke()

window.addEventListener('keydown', (event) => {
  movement(event.key)
})

function movement(key : string): void {
  switch(key) {
    case 'ArrowUp' : 
      console.log('ArrowUp');
      break;
    case 'ArrowDown' :
      console.log('ArrowDown');
      break;
    case 'ArrowLeft' :
      console.log('ArrowLeft');
      break;
    case 'ArrowRight' : 
      console.log('ArrowRight');
      break;
  }
}

function animate(): void {

}