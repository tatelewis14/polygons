const canvas = document.getElementById('gc');
const ctx = canvas.getContext('2d');

canvas.height = innerHeight;
canvas.width = innerWidth;

ctx.lineWidth = 5

function drawPolygons(x,y, radius, inset, num) {
  ctx.save()
  for(let i = 0; i<num; i++) {
    ctx.translate(x,y)
    ctx.beginPath();
    ctx.moveTo(0, radius);
    ctx.rotate((Math.PI)/num)
    ctx.lineTo(0), 0-(radius*inset);
    ctx.rotate((Math.PI)/num)
    ctx.lineTo(0, 0-radius)
  }
    ctx.restore()
}
drawPolygons(canvas.height/2, canvas.width/2, 10, 0.5, 8)
