const undoButton = document.getElementById("undo");
const undoButton1 = document.getElementById("undo1");
const redoButton = document.getElementById("redo");
const redoButton1 = document.getElementById("redo1");

undoButton.addEventListener("click", undo);
redoButton.addEventListener("click", redo);
undoButton1.addEventListener("click", undo);
redoButton1.addEventListener("click", redo);

function undo() {
  console.log("undo");
  if (undoStack.length > 0) {
    redoStack.push(undoStack.pop());
    redraw();
  }
}

function redo() {
  console.log("redo");
  if (redoStack.length > 0) {
    undoStack.push(redoStack.pop());
    redraw();
  }
}

// redrawing
function redraw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < undoStack.length; i++) {
    if (undoStack[i].object === "freehand") {
      freeHand(undoStack[i]);
    } else if (undoStack[i].object === "rectangle") {
      reDrawRect(undoStack[i]);
    } else if (undoStack[i].object === "line") {
      reDrawLine(undoStack[i]);
    } else if (undoStack[i].object === "circle") {
      reDrawCircle(undoStack[i]);
    }
  }
}
function freeHand(object) {
  context.strokeStyle = object.color;
  context.lineWidth = object.lineWidth;
  context.globalAlpha = object.lineOpacity;
  points = object.coord;
  for (let i = 1; i < points.length; i++) {
    context.beginPath();
    context.moveTo(points[i - 1].x, points[i - 1].y);
    context.lineTo(points[i].x, points[i].y);
    context.stroke();
    context.closePath();
  }
}

function reDrawRect(object) {
  context.strokeStyle = object.color;
  context.lineWidth = object.lineWidth;
  context.globalAlpha = object.lineOpacity;
  points = object.coord;
  context.beginPath();
  context.strokeRect(points.startX, points.startY, points.endx, points.endy);
  context.closePath();
}

function reDrawLine(object) {
  context.strokeStyle = object.color;
  context.lineWidth = object.lineWidth;
  context.globalAlpha = object.lineOpacity;
  points = object.coord;
  context.beginPath();
  context.moveTo(points.x1, points.y1);
  context.lineTo(points.x2, points.y2);
  context.lineJoin = "round";
  context.lineCap = "round";
  context.closePath();
  context.stroke();
}

function reDrawCircle(object) {
  context.strokeStyle = object.color;
  context.lineWidth = object.lineWidth;
  context.globalAlpha = object.lineOpacity;
  points = object.coord;
  context.beginPath();
  context.arc(points.CenterX, points.CenterY, points.radius, 0, Math.PI * 2);
  context.closePath();
  context.stroke();
}
