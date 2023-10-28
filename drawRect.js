let startX, startY;
// let rectangles = []; // Store the rectangles

// draw rectangles
function drawRectDown(e) {
  startX = e.clientX;
  startY = e.clientY;
  canvas.addEventListener("mouseup", onMouseUpRect);
  canvas.addEventListener("mousemove", onMouseMoveRect);
}
// Redraw all rectangles
// function drawRectangles() {
//   rectangles.forEach((object) => {
//     context.strokeStyle = object.color;
//     context.lineWidth = object.lineWidth;
//     context.globalAlpha = object.lineOpacity;
//     points = object.coord;
//     context.strokeRect(points.startX, points.startY, points.endx, points.endy);
//   });
// }

let endx;
let endy;

function onMouseMoveRect(evt) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  redraw();
  endx = evt.clientX - startX;
  endy = evt.clientY - startY;
  context.strokeStyle = drawingCol;
  context.lineWidth = lineWidth;
  context.globalAlpha = opacity.value;
  context.strokeRect(startX, startY, endx, endy); 
}
function onMouseUpRect(evt) {
  canvas.removeEventListener("mousemove", onMouseMoveRect);
  endx = evt.clientX - startX;
  endy = evt.clientY - startY;
  context.strokeStyle = drawingCol;
  context.lineWidth = lineWidth;
  context.globalAlpha = opacity.value;
  context.strokeRect(startX, startY, endx, endy);
  // add to stack
  undoStack.push({
    object: "rectangle",
    coord: { startX, startY, endx, endy },
    color: context.strokeStyle,
    lineWidth: context.lineWidth,
    lineOpacity: opacity.value,
  });
  
}
canvas.addEventListener("mouseleave", () => {
  canvas.removeEventListener("mouseup", onMouseUpRect);
});
