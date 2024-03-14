const canvas = document.getElementById('gc');
const ctx = canvas.getContext('2d');

canvas.height = innerHeight;
canvas.width = innerWidth;

ctx.lineWidth = 5
ctx.strokeStyle = 'red'

let pressed = false

function drawPolygons(x,y, radius, inset, num) {
  ctx.beginPath();
  ctx.save();
  ctx.translate(x,y);
  ctx.moveTo(0,0);
  for(let i = 0; i<num; i++) {
  ctx.lineTo(0,0-radius);
  ctx.rotate(Math.PI / num);
  ctx.lineTo(0,0-(radius*inset));
  ctx.rotate(Math.PI / num);
  }
  ctx.restore()
  ctx.stroke()
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

