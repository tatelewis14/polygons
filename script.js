const canvas = document.getElementById("gc");
const ctx = canvas.getContext("2d");

const colorChanger = document.getElementById("color1");
const rotateValue = document.getElementById("rotate1");
const sideValue = document.getElementById("sides1");
const insetValue = document.getElementById("inset1");
const radiusValue = document.getElementById("radius1");

canvas.height = innerHeight;
canvas.width = innerWidth * 0.75;

ctx.lineWidth = 1;
ctx.strokeStyle = "black";
ctx.fillStyle = colorChanger.value;
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 5;
ctx.shadowColor = "black";

let pressed = false;
let angle = 0;
let rotating = false;

function drawPolygons(x, y, radius, inset, num) {
  ctx.beginPath();
  ctx.save();
  ctx.translate(x, y);
  ctx.moveTo(0, 0 - radius);
  for (let i = 0; i < num; i++) {
    ctx.lineTo(0, 0 - radius);
    ctx.rotate(Math.PI / num);
    ctx.lineTo(0, 0 - radius * inset);
    ctx.rotate(Math.PI / num);
  }
  ctx.closePath();
  ctx.restore();
  ctx.stroke();
  ctx.fill();
}
let shapes = [{ x: 0, y: 0, radius: 60, inset: 0.5, sides: 3 }];

canvas.addEventListener("mousemove", (e) => {
  shapes.forEach((shape) => {
    if (pressed) {
      ctx.save();
      ctx.translate(e.clientX, e.clientY);
      if (rotating) {
        ctx.rotate(angle);
        angle += 0.05;
      }
      drawPolygons(shape.x, shape.y, shape.radius, shape.inset, shape.sides);
      ctx.restore();
    }
  });
});
window.addEventListener("mousedown", (e) => {
  pressed = true;
});
canvas.addEventListener("mouseleave", (e) => {
  pressed = false;
});
canvas.addEventListener("mouseenter", (e) => {
  if (pressed) {
    shapes.forEach((shape) => {
      drawPolygons(shape.x, shape.y, shape.radius, shape.inset, shape.sides);
    });
  }
});
window.addEventListener("mouseup", (e) => {
  pressed = false;
});
window.addEventListener("keydown", (e) => {
  if (e.keyCode === 32) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});
window.addEventListener("click", (e) => {
  if(e.clientX > canvas.width || e.clientX < 0 || e.clientY>canvas.height || e.clientY< 0) return
  shapes.forEach((shape) => {
    ctx.save();
    ctx.translate(e.clientX, e.clientY);
    drawPolygons(shape.x, shape.y, shape.radius, shape.inset, shape.sides);
    ctx.restore();
  });
});
colorChanger.addEventListener("change", (e) => {
  ctx.fillStyle = colorChanger.value;
  console.log("color: ", ctx.fillStyle);
});
rotateValue.addEventListener("change", (e) => {
  rotating = !rotating;
  console.log("rotate: ", rotate);
});
sideValue.addEventListener("change", (e) => {
  console.log(`sides: ${e.target.value}`);
  shapes[0].sides = e.target.value;
});
insetValue.addEventListener("change", (e) => {
  shapes[0].inset = e.target.value;
});
radiusValue.addEventListener("change", (e) => {
  shapes[0].radius = e.target.value;
});
