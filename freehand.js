const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let drawingCol = "black";
const opacity = document.getElementById("opacity");

const undoButton = document.getElementById("undo");
const undoButton1 = document.getElementById("undo1");
const redoButton = document.getElementById("redo");
const redoButton1 = document.getElementById("redo1");
const undoStack = [];
const redoStack = [];

let points;

//mouse down start
function onMouseDown() {
  points = [];
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mouseup", onMouseUp);
}

// mouseup end

function onMouseUp() {
  undoStack.push({
    coord: points.slice(),
    color: context.strokeStyle,
    lineWidth: context.lineWidth,
    lineOpacity: opacity.value,
  });
  redoStack.length = 0; // Clear redo stack
  canvas.removeEventListener("mousemove", onMouseMove);
}

// undo & redo
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

// mouse moving draw
const colPicker = document.getElementById("colorPicker");
colPicker.addEventListener("change", () => {
  drawingCol = colPicker.value;
});

function draw() {
  context.beginPath();
  context.strokeStyle = drawingCol;
  context.moveTo(points[0].x, points[0].y);
  context.globalAlpha = opacity.value;
  for (let i = 1; i < points.length; i++) {
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineTo(points[i].x, points[i].y);
  }
  context.stroke();
}

function onMouseMove(evt) {
  const x = evt.clientX;
  const y = evt.clientY;
  points.push({ x, y });
  draw();
}

// redrawing
function redraw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < undoStack.length; i++) {
    context.beginPath();
    context.globalAlpha = undoStack[i].lineOpacity;
    points = undoStack[i].coord;
    context.strokeStyle = undoStack[i].color;
    context.lineWidth = undoStack[i].lineWidth;
    context.moveTo(points[0].x, points[0].y);
    for (let i = 0; i < points.length; i++) {
      context.lineTo(points[i].x, points[i].y);
    }
    context.stroke();
  }
}

const sw = document.getElementById("sw-1");
sw.addEventListener("click", () => {
  sw.style.backgroundColor = " #e7e6fa";
  context.lineWidth = "1";
});

const sw1 = document.getElementById("sw-2");
sw1.addEventListener("click", (e) => {
  sw1.style.backgroundColor = " #e7e6fa";
  context.lineWidth = "5";
});

const sw2 = document.getElementById("sw-3");
sw2.addEventListener("click", (e) => {
  sw2.style.backgroundColor = " #e7e6fa";
  context.lineWidth = "10";
});

const bgred = document.getElementById("bg-red");
bgred.addEventListener("click", () => {
  drawingCol =(bgred.style.backgroundColor);
});

const bgGreen = document.getElementById("bg-green");
bgGreen.addEventListener("click", () => {
  drawingCol = bgGreen.style.backgroundColor;
});

const bgorange = document.getElementById("bg-orange");
bgorange.addEventListener("click", () => {
  drawingCol = bgorange.style.backgroundColor;
});
const bgblue = document.getElementById("bg-blue");
bgblue.addEventListener("click", () => {
  drawingCol = bgblue.style.backgroundColor;
});
const bgblack = document.getElementById("bg-black");
bgblack.addEventListener("click", () => {
  drawingCol = bgblue.style.backgroundColor;
});

// const grab = document.getElementById("grab");
// grab.addEventListener("click", () => {
//   grab.style.backgroundColor = "#dcdafa";
//   canvas.style.cursor = "grab";
// });
