const canvas = document.getElementById('gc');
const ctx = canvas.getContext('2d');

canvas.height = innerHeight;
canvas.width = innerWidth;

ctx.lineWidth = 5

function drawPolygons(x,y, radius, inset, num) {
  ctx.beginPath();
  ctx.save()
  ctx.translate(x,y);
  ctx.moveTo(0,0);
  ctx.lineTo(0,0-radius);
  ctx.rotate(Math.PI / 3)
  ctx.lineTo(0,0-radius);
  ctx.restore()
  ctx.endPath()
  ctx.stroke()
}
drawPolygons(canvas.width/2, canvas.height/2, 100, 0.5, 8)
