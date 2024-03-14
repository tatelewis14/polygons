const canvas = document.getElementById('gc');
const ctx = canvas.getContext('2d');

canvas.height = innerHeight;
canvas.width = innerWidth;

ctx.lineWidth = 5
ctx.strokeStyle = 'black';
ctx.fillStyle = 'red';
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 10;
ctx.shadowColor='black';


let pressed = false;
let hue = 0

function drawPolygons(x,y, radius, inset, num) {
  ctx.beginPath();
  ctx.fillStyle = `hsl(${hue}, 100%, 50%)`
  hue += 0.01
  ctx.save();
  ctx.translate(x,y);
  ctx.moveTo(0,0-radius);
  for(let i = 0; i<num; i++) {
  ctx.lineTo(0,0-radius);
  ctx.rotate(Math.PI / num);
  ctx.lineTo(0,0-(radius*inset));
  ctx.rotate(Math.PI / num);
  }
  ctx.closePath()
  ctx.restore()
  ctx.stroke()
  ctx.fill()
}

window.addEventListener('mousemove', e=>{
  if(pressed) drawPolygons(e.x, e.y, 100, 0.8, 6)
})
window.addEventListener('mousedown', e=>{
pressed = true
})
window.addEventListener('mouseup', e=>{
pressed = false
})

