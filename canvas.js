const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const height = 1080;
const width = 1920;

canvas.height = height;
canvas.width = width;

const undoButton = document.getElementById("undo");
const redoButton = document.getElementById("redo");
const undoStack = [];
const redoStack = [];
let isDrawing = false;
let points = [];
//mouse down start
canvas.addEventListener("mousedown", () => {
  isDrawing = true;
  context.beginPath();
  points = [];
});

// mouseup end
canvas.addEventListener("mouseup", () => {
  if (isDrawing) {
    isDrawing = false;
    undoStack.push(points.slice());
    redoStack.length = 0; // Clear redo stack
  }
});

// undo -redo
undoButton.addEventListener("click", undo);
redoButton.addEventListener("click", redo);

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

function draw() {
  context.beginPath();
  context.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    context.lineTo(points[i].x, points[i].y);
  }
  context.stroke();
}

canvas.addEventListener("mousemove", (evt) => {
  if (!isDrawing) return;
  var rect = canvas.getBoundingClientRect();
  (scaleX = canvas.width / rect.width), (scaleY = canvas.height / rect.height);
  const x = (evt.clientX - rect.left) * scaleX;
  const y = (evt.clientY - rect.top) * scaleY;
  points.push({ x, y });
  draw();
});

// redrawing
function redraw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (const points of undoStack) {
    context.beginPath();
    context.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      context.lineTo(points[i].x, points[i].y);
    }
    context.stroke();
  }
}

const sw=document.getElementById("sw-1");
sw.addEventListener("click",()=>{
  sw.style.backgroundColor=" #e7e6fa"
  context.lineWidth='1';
  console.log(context.lineWidth)
})

const sw1=document.getElementById("sw-2");
sw1.addEventListener("click",(e)=>{
  sw1.style.backgroundColor=" #e7e6fa"
  context.lineWidth='5';
  console.log(context.lineWidth)
})

const sw2=document.getElementById("sw-3");
sw2.addEventListener("click",(e)=>{
  sw2.style.backgroundColor=" #e7e6fa"
  context.lineWidth='10';
  console.log(context.lineWidth)
})

const bg=document.getElementById("bg-red");
const bg_color=document.getElementById("bg");
bg.addEventListener("click",()=>{
  bg_color.style.backgroundColor=bg.style.backgroundColor;
  context.strokeStyle=bg.style.backgroundColor;
  console.log(bg.style.backgroundColor)
  console.log(bg_color.style.backgroundColor)
})