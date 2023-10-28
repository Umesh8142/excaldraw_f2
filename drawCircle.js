let CenterX;
let CenterY;
let Circle = []; // Store the Circle

// draw Circle
let radius;

// get center of circle
function centerOfCircle(evt) {

  context.clearRect(0, 0, canvas.width, canvas.height);
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

let rx;
let ry;

// fix radius
function changeRadius(evt) {
  context.lineWidth = lineWidth;
  context.strokeStyle = drawingCol;
  context.fillStyle = "white";
  rx = Math.pow(evt.clientX - CenterX, 2);
  ry = Math.pow(evt.clientY - CenterY, 2);
  radius = Math.sqrt(rx + ry);
  context.beginPath();
  context.clearRect(0, 0, canvas.width, canvas.height);
  redraw();
  context.moveTo(evt.clientX, evt.clientY);
  context.arc(CenterX, CenterY, radius, 0, Math.PI * 2);
  context.closePath();
  context.stroke();
}
function draWCircle(evt) {
  canvas.removeEventListener("mousemove", changeRadius);
  context.beginPath();
  rx = Math.pow(CenterX - evt.clientX, 2);
  ry = Math.pow(CenterY - evt.clientY, 2);
  radius = Math.sqrt(rx + ry);
  context.arc(CenterX, CenterY, radius, 0, Math.PI * 2);
  context.closePath();
  context.stroke();  // To draw the outline
  
// add to stack
  undoStack.push({
    object: "circle",
    coord: { CenterX, CenterY, radius },
    color: context.strokeStyle,
    lineWidth: context.lineWidth,
    lineOpacity: opacity.value,
    fill: context.fillStyle,
  });
  // console.log(undoStack);
}
canvas.addEventListener("mouseleave", () => {
  canvas.removeEventListener("mouseup", draWCircle);
});
