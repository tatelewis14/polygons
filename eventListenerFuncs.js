export function handleMouseDown(e,pressed) {
    pressed = true;
}  
export function handleMouseUp(e,pressed) {
    pressed = false;
}
export function handleMouseMove(e, ctx, pressed, rotating, angle) {
    if(pressed) {
        ctx.save()
        ctx.translate(e.x, e.y)
        if(rotating) {
            ctx.rotate(angle)
            angle += 0.05 
        }
        drawPolygons(0, 0, 70, 0.5, 20)
        ctx.restore()
      }
}
export function handleMouseLeave(e,pressed) {
    pressed = false;
}
export function handleMouseEnter(e,pressed) {
    if(pressed) {
        drawPolygons(e.x, e.y, 50, 0.5, 15)
    }
}
export function clearCanvas(ctx, canvas) {
    ctx.clearRect(0,0, canvas.width, canvas.height)
}