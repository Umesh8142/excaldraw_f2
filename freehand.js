const undoStack = [];
const redoStack = [];

let points;

// mouse down start
function onMouseDown() {
  points = [];
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mouseup", onMouseUp);
}

// mouse moving draw

function onMouseMove(evt) {
  const x = evt.clientX;
  const y = evt.clientY;
  points.push({ x, y });
  draw(points);
  // redraw();
}

function draw(points) {
  // console.log("umesh");
  // context.clearRect(0,0,canvas.width,canvas.height);

  context.strokeStyle = drawingCol;
  context.lineWidth = lineWidth;
  context.globalAlpha = opacityValue;

  for (let i = 1; i < points.length; i++) {
    context.beginPath();
    context.moveTo(points[i - 1].x, points[i - 1].y);
    context.lineTo(points[i].x, points[i].y);
    context.lineJoin = "round";
    context.lineCap = "round";
    context.stroke();
    context.closePath();
  }
}

// mouseup end
function onMouseUp() {
  undoStack.push({
    object: "freehand",
    coord: points.slice(),
    color: drawingCol,
    lineWidth: lineWidth,
    lineOpacity: opacityValue,
  });
  context.closePath();
  redoStack.length = 0; // Clear redo stack
  canvas.removeEventListener("mousemove", onMouseMove);
}

canvas.addEventListener("mouseleave", () => {
  canvas.removeEventListener("mouseup", onMouseUp);
});

// const grab = document.getElementById("grab");
// grab.addEventListener("click", () => {
//   grab.style.backgroundColor = "#dcdafa";
//   canvas.style.cursor = "grab";
// });
