let CenterX;
let CenterY;
let rx;
let ry;
let radius;
// let Circle = []; // Store the Circle

// get center of circle
function centerOfCircle(evt) {
  CenterX = evt.clientX;
  CenterY = evt.clientY;
  canvas.addEventListener("mousemove", changeRadius);
  canvas.addEventListener("mouseup", draWCircle);
}

// fix radius
function changeRadius(evt) {
  context.lineWidth = lineWidth;
  context.strokeStyle = drawingCol;
  rx = (evt.clientX - CenterX) ** 2;
  ry = (evt.clientY - CenterY) ** 2;
  radius = Math.sqrt(rx + ry);

  context.beginPath();
  redraw();
  context.moveTo(evt.clientX, evt.clientY);
  context.arc(CenterX, CenterY, radius, 0, Math.PI * 2);
  context.stroke();
  context.closePath();
}
function draWCircle(evt) {
  canvas.removeEventListener("mousemove", changeRadius);
  context.beginPath();
  rx = Math.pow(CenterX - evt.clientX, 2);
  ry = Math.pow(CenterY - evt.clientY, 2);
  radius = Math.sqrt(rx + ry);
  context.arc(CenterX, CenterY, radius, 0, Math.PI * 2);
  context.closePath();
  context.stroke(); // To draw the outline

  // add to stack
  undoStack.push({
    object: "circle",
    coord: { CenterX, CenterY, radius },
    color: drawingCol,
    lineWidth: lineWidth,
    lineOpacity: opacityValue,
    fill: context.fillStyle,
  });
}
canvas.addEventListener("mouseleave", () => {
  canvas.removeEventListener("mouseup", draWCircle);
});
