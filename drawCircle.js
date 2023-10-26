let CenterX;
let CenterY;
let Circle = []; // Store the Circle

// draw Circle
let radius;
lineWidth = 5;
const strokeColor = "blue";
const fillColor = "white";

context.lineWidth = lineWidth;
context.strokeStyle = strokeColor;
context.fillStyle = fillColor;

// get center of circle
function centerOfCircle(evt) {
  CenterX = evt.clientX;
  CenterY = evt.clientY;
  context.beginPath();
  canvas.addEventListener("mousemove", changeRadius);
  canvas.addEventListener("mouseup", draWCircle);
}
// Redraw all Circle
function drawCircle(object) {
  Circle.forEach((object) => {
    context.strokeStyle = object.color;
    context.lineWidth = object.lineWidth;
    context.globalAlpha = object.lineOpacity;
    points = object.coord;
    context.arc(points.startX, points.startY, points.endx, points.endy);
  });
}

let rx;
let ry;

// fix radius
function changeRadius(evt) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  rx = Math.pow(evt.clientX - CenterX, 2);
  ry = Math.pow(evt.clientY - CenterY, 2);
  radius = Math.sqrt(rx + ry);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.arc(CenterX, CenterY, radius, 0, Math.PI * 2);
  context.stroke();
  context.fill();
}
function draWCircle(evt) {
  rx = Math.pow(CenterX - evt.clientX, 2);
  ry = Math.pow(CenterY - evt.clientY, 2);
  radius = Math.sqrt(rx + ry);
  setTimeout(() => {
    console.log(radius);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.arc(CenterX, CenterY, radius, 0, Math.PI * 2);
    context.stroke(); // To draw the outline
    context.fill();
    context.closePath();
  },1000);
  // To fill the circle
  canvas.removeEventListener("mousemove", changeRadius);

  // Circle.push({
  //   object: "Circle",
  //   coord: { startX, startY, rx, ry },
  //   color: context.strokeStyle,
  //   lineWidth: context.lineWidth,
  //   lineOpacity: opacity.value,
  // });

  // undoStack.push({
  //   object: "Circle",
  //   coord: { startX, startY, endx, ry },
  //   color: context.strokeStyle,
  //   lineWidth: context.lineWidth,
  //   lineOpacity: opacity.value,
  // });
}
canvas.addEventListener("mouseleave", () => {
  canvas.removeEventListener("mouseup", draWCircle);
});
