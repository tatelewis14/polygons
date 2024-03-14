const canvas = document.getElementById('gc');
const ctx = canvas.getContext('2d');

canvas.height = innerHeight;
canvas.width = innerWidth;

ctx.lineWidth = 5

let pressed = false

function drawPolygons(x,y, radius, inset, num) {
  ctx.beginPath();
  ctx.save();
  ctx.translate(x,y);
  for(let i = 0; i<num; i++) {
  ctx.moveTo(0,0);
  ctx.lineTo(0,0-radius);
  ctx.rotate(Math.PI / num);
  ctx.lineTo(0,0-(radius*inset));
  ctx.rotate(Math.PI / num);
  }
  ctx.restore()
  ctx.stroke()
}

window.addEventListener('mousemove', e=>{
  if(pressed) drawPolygons(e.x, e.y, 100, 0.5, 8)
})
window.addEventListener('mousedown', e=>{
pressed = true
})
window.addEventListener('mouseup', e=>{
pressed = false
})

