let x1, y1;
let x2, y2;
// let lines = [];

function startLine(evt) {
  x1 = evt.clientX;
  y1 = evt.clientY;
  canvas.addEventListener("mousemove", changeLineDim);
  canvas.addEventListener("mouseup", endLine);
}

// function drawLines() {
//   // context.clearRect(0, 0, canvas.width, canvas.height);
//   if (lines.length == 0) return;
//   lines.forEach((object) => {
//     context.strokeStyle = object.color;
//     context.lineWidth = object.lineWidth;
//     context.globalAlpha = object.lineOpacity;
//     points = object.coord;
//     context.moveTo(points.x1, points.y1);
//     context.lineTo(points.x2, points.y2);
//     console.log("done");
//   });
// }


function changeLineDim(evt) {
  context.beginPath();
  context.clearRect(0, 0, canvas.width, canvas.height);
  redraw();
  context.strokeStyle = drawingCol;
  context.lineWidth = lineWidth;
  context.globalAlpha = opacity.value;
  x2 = evt.clientX;
  y2 = evt.clientY;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  
  
}

function endLine(evt) {
  // context.clearRect(0, 0, canvas.width, canvas.height);
  canvas.removeEventListener("mousemove", changeLineDim);
  x2 = evt.clientX;
  y2 = evt.clientY;
  context.strokeStyle = drawingCol;
  context.lineWidth = lineWidth;
  context.globalAlpha = opacity.value;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();


  undoStack.push({
    object: "line",
    coord: { x1: x1, y1: y1, x2: x2, y2: y2 },
    color: context.strokeStyle,
    lineWidth: context.lineWidth,
    lineOpacity: opacity.value,
  });
  // console.log(lines)
}
canvas.addEventListener("mouseleave", () => {
  canvas.removeEventListener("mouseup", endLine);
});
