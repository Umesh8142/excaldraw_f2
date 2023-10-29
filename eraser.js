//mouse down start
function onMouseDownEraser() {
  EraserCol = "black";
  console.log(EraserCol);
  points = [];
  canvas.addEventListener("mousemove", onMouseMoveEraser);
  canvas.addEventListener("mouseup", onMouseUpEraser);
}

// on mouse move erasing
function onMouseMoveEraser(evt) {
  const x = evt.clientX;
  const y = evt.clientY;
  points.push({ x, y });
  erase();
}

function erase() {
  context.strokeStyle = EraserCol;
  context.lineWidth = lineWidth;
  context.globalAlpha = 1;
  for (let i = 1; i < points.length; i++) {
    context.beginPath();
    context.moveTo(points[i - 1].x, points[i - 1].y);
    context.lineTo(points[i].x, points[i].y);
    context.closePath();
    context.stroke();
  }
}

// mouseup end
function onMouseUpEraser() {
  context.strokeStyle = drawingCol;
  undoStack.push({
    object: "freehand",
    coord: points.slice(),
    color: EraserCol,
    lineWidth: lineWidth,
    lineOpacity: 1,
  });
  redoStack.length = 0; // Clear redo stack
  context.closePath();
  canvas.removeEventListener("mousemove", onMouseMoveEraser);
}

// undo & redo

// mouse moving draw
// const colPicker = document.getElementById("colorPicker");
// colPicker.addEventListener("change", () => {
//   EraserCol = colPicker.value;
// });

canvas.addEventListener("mouseleave", () => {
  canvas.removeEventListener("mouseup", onMouseUpEraser);
});
