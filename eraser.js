let EraserCol = "";

//mouse down start
function onMouseDownEraser() {
  EraserCol = "white";
  points = [];
  canvas.addEventListener("mousemove", onMouseMoveEraser);
  canvas.addEventListener("mouseup", onMouseUpEraser);
}

// mouseup end
function onMouseUpEraser() {
  undoStack.push({
    object: "freehand",
    coord: points.slice(),
    color: EraserCol,
    lineWidth: context.lineWidth,
    lineOpacity:1
  });
  redoStack.length = 0; // Clear redo stack
  EraserCol=drawingCol;
  canvas.removeEventListener("mousemove", onMouseMoveEraser);
}

// undo & redo

// mouse moving draw
// const colPicker = document.getElementById("colorPicker");
// colPicker.addEventListener("change", () => {
//   EraserCol = colPicker.value;
// });

function draw() {
  context.beginPath();
  context.strokeStyle = EraserCol;
  context.lineWidth = lineWidth;
  context.globalAlpha=1;
  context.moveTo(points[0].x, points[0].y);
  context.globalAlpha = 1;
  for (let i = 1; i < points.length; i++) {
    context.lineTo(points[i].x, points[i].y);
  }
  context.stroke();
}

function onMouseMoveEraser(evt) {
  const x = evt.clientX;
  const y = evt.clientY;
  points.push({ x, y });
  draw();
}
canvas.addEventListener("mouseleave", () => {
  canvas.removeEventListener("mouseup", onMouseUpEraser);
});
