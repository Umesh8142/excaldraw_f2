const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
// context.fillRect(0, 0, canvas.width, canvas.height);
// context.fillStyle = 'black';
context.fillStyle = "white";
let drawingCol = "black";
let lineWidth = "2";

// opacity changing
const opacity = document.getElementById("opacity");
opacity.addEventListener("change", () => {
  context.globalAlpha = opacity.value;
});


const lineWidthBtn = document.getElementById("LineWidth");
lineWidthBtn.addEventListener("change", () => {
  lineWidth = lineWidthBtn.value;
  console.log(context.lineWidth)
});

context.lineJoin = "round";
context.lineCap = "round";

const undoStack = [];
const redoStack = [];

let points;

// mouse down start
function onMouseDown() {
  points = [];
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mouseup", onMouseUp);
}

// mouseup end
function onMouseUp() {
  undoStack.push({
    object: "freehand",
    coord: points.slice(),
    color: context.strokeStyle,
    lineWidth: context.lineWidth,
    lineOpacity: opacity.value,
  });
  context.closePath();
  redoStack.length = 0; // Clear redo stack
  canvas.removeEventListener("mousemove", onMouseMove);
}


// mouse moving draw

function onMouseMove(evt) {
  const x = evt.clientX;
  const y = evt.clientY;
  points.push({ x, y });
  draw(points)
  // redraw();
}
const colPicker = document.getElementById("colorPicker");
colPicker.addEventListener("change", () => {
  drawingCol = colPicker.value;
});

function draw(points) {
  console.log("umesh");
  context.beginPath();
  context.strokeStyle = drawingCol;
  context.lineWidth = lineWidth;
  context.globalAlpha = opacity.value;
  context.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    context.lineTo(points[i].x, points[i].y);
  }
  context.stroke(); 
}


canvas.addEventListener("mouseleave", () => {
  canvas.removeEventListener("mouseup", onMouseUp);
});

const sw = document.getElementById("sw-1");
sw.addEventListener("click", () => {
  sw.classList.toggle("active");
  lineWidth = "2";
});

const sw1 = document.getElementById("sw-2");
sw1.addEventListener("click", (e) => {
  sw1.classList.toggle("active");
  lineWidth = "5";
});

const sw2 = document.getElementById("sw-3");
sw2.addEventListener("click", (e) => {
  sw2.classList.toggle("active");
  lineWidth = "10";
});

const bgblack = document.getElementById("bg-black");
bgblack.addEventListener("click", () => {
  drawingCol = bgblue.style.backgroundColor;
});
const bgred = document.getElementById("bg-red");
bgred.addEventListener("click", () => {
  drawingCol = bgred.style.backgroundColor;
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


// const grab = document.getElementById("grab");
// grab.addEventListener("click", () => {
//   grab.style.backgroundColor = "#dcdafa";
//   canvas.style.cursor = "grab";
// });
