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
// Redraw all Circle
// function drawCircle(object) {
//   Circle.forEach((object) => {
//     context.strokeStyle = object.color;
//     context.lineWidth = object.lineWidth;
//     context.globalAlpha = object.lineOpacity;
//     points = object.coord;
//     context.arc(points.startX, points.startY, points.endx, points.endy);
//   });
// }



// fix radius
function changeRadius(evt) {
  context.lineWidth = lineWidth;
  context.strokeStyle = drawingCol;
  context.beginPath();
  rx = (evt.clientX - CenterX) ** 2;
  ry = (evt.clientY - CenterY) ** 2;
  radius = Math.sqrt(rx + ry);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.arc(CenterX, CenterY, radius, 0, Math.PI * 2);
  context.stroke();
  redraw();
  // context.moveTo(evt.clientX, evt.clientY);
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
    lineOpacity:opacityValue ,
    fill: context.fillStyle,
  });
  // console.log(undoStack);
}
canvas.addEventListener("mouseleave", () => {
  canvas.removeEventListener("mouseup", draWCircle);
});
