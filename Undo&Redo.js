const undoButton = document.getElementById("undo");
const undoButton1 = document.getElementById("undo1");
const redoButton = document.getElementById("redo");
const redoButton1 = document.getElementById("redo1");

undoButton.addEventListener("click", undo);
redoButton.addEventListener("click", redo);
undoButton1.addEventListener("click", undo);
redoButton1.addEventListener("click", redo);

function undo() {
  if (undoStack.length > 0) {
    redoStack.push(undoStack.pop());
    redraw();
  }
}

function redo() {
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
    } 
    else if (undoStack[i].object === "rectangle") {
      reDrawRect(undoStack[i]);
    }else if(undoStack[i].object === "line"){
      reDrawLine(undoStack[i]);
    }

  }
}
function freeHand(object) {
  context.beginPath();
  context.strokeStyle = object.color;
  context.lineWidth = object.lineWidth;
  context.globalAlpha = object.lineOpacity;
  points = object.coord;
  context.moveTo(points[0].x, points[0].y);
  for (let i = 0; i < points.length; i++) {
    context.lineTo(points[i].x, points[i].y);
  }
  context.stroke();
}
function reDrawRect(object) {
  context.strokeStyle = object.color;
  context.lineWidth = object.lineWidth;
  context.globalAlpha = object.lineOpacity;
  points = object.coord;
  context.strokeRect(points.startX, points.startY, points.endx, points.endy);
}

function reDrawLine(object) {
  context.strokeStyle = object.color;
  context.lineWidth = object.lineWidth;
  context.globalAlpha = object.lineOpacity;
  points = object.coord;
  context.beginPath()
  context.moveTo(points.x1,points.y1);
  context.lineTo(points.x2, points.y2);
  context.stroke()
}