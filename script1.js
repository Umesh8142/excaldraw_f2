// menu v=bar
const bar3 = document.getElementById("left");
bar3.addEventListener("click", appendTools);
function appendTools() {
  const colsel = document.getElementsByClassName("color-selector")[0];
  colsel.style.display = "none";
  bar3.classList.toggle("active");
  const card = document.getElementsByClassName("card")[0];
  card.style.backgroundColor = "white";
  if (card.style.visibility === "visible") {
    card.style.visibility = "hidden";
  } else {
    card.style.visibility = "visible";
  }
}

// help card
const help = document.getElementById("help");
help.addEventListener("click", () => {
  document.body.style.backgroundColor = "lightgray";
  const cardHelp = document.getElementsByClassName("card-help")[0];
  cardHelp.style.visibility = "visible";
});

const closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  const cardHelp = document.getElementsByClassName("card-help")[0];
  cardHelp.style.visibility = "hidden";
});

//free hand drawing

let isPencilActive = false;
const pencil = document.getElementById("pencil");

pencil.addEventListener("click", onPencilClick);
function onPencilClick() {
  pencil.classList.toggle("active");
  isPencilActive = !isPencilActive;
  if (isPencilActive) {
    canvas.style.cursor = "crosshair";
    canvas.addEventListener("mousedown", onMouseDown);
  } else {
    canvas.style.cursor = "auto";
    canvas.removeEventListener("mousedown", onMouseDown);
  }
  const card = document.getElementsByClassName("card")[0];
  const bar3 = document.getElementById("left");
  card.style.visibility = "hidden";
  bar3.style.backgroundColor = "white";
  const main = document.getElementsByClassName("main")[0];
  main.style.display = "none";
  canvas.style.display = "flex";
  const colorSel = document.getElementsByClassName("color-selector")[0];
  colorSel.style.display = "flex";
}

// rectangle
let isRectActive = false;
const Rect = document.getElementById("drawRect");

Rect.addEventListener("click", onRectClick);
function onRectClick() {
  Rect.classList.toggle("active");
  isRectActive = !isRectActive;
  if (isRectActive) {
    canvas.style.cursor = "crosshair";
    canvas.addEventListener("mousedown", drawRectDown);
  } else {
    canvas.style.cursor = "auto";
    canvas.removeEventListener("mousedown", drawRectDown);
  }
  const card = document.getElementsByClassName("card")[0];
  const bar3 = document.getElementById("left");
  card.style.visibility = "hidden";
  bar3.style.backgroundColor = "white";
  const main = document.getElementsByClassName("main")[0];
  main.style.display = "none";
  canvas.style.display = "flex";
  const colorSel = document.getElementsByClassName("color-selector")[0];
  colorSel.style.display = "flex";
}
// erasing
let isEraserActive = false;
const Eraser = document.getElementById("eraser");

Eraser.addEventListener("click", onEraserClick);
function onEraserClick() {
  Eraser.classList.toggle("active");
  isEraserActive = !isEraserActive;
  if (isEraserActive) {
    canvas.style.cursor = "crosshair";
    canvas.addEventListener("mousedown", onMouseDownEraser);
  } else {
    canvas.style.cursor = "auto";
    canvas.removeEventListener("mousedown", onMouseDownEraser);
  }
  const card = document.getElementsByClassName("card")[0];
  const bar3 = document.getElementById("left");
  card.style.visibility = "hidden";
  bar3.style.backgroundColor = "white";
  const main = document.getElementsByClassName("main")[0];
  main.style.display = "none";
  canvas.style.display = "flex";
  const colorSel = document.getElementsByClassName("color-selector")[0];
  colorSel.style.display = "flex";
}

// circle drawnig

let isCircleActive = false;
const circle = document.getElementById("circle");

circle.addEventListener("click", onCircleClick);
function onCircleClick() {
  circle.classList.toggle("active");
  isCircleActive = !isCircleActive;
  if (isCircleActive) {
    canvas.style.cursor = "crosshair";
    canvas.addEventListener("mousedown", centerOfCircle);
  } else {
    canvas.style.cursor = "auto";
    canvas.removeEventListener("mousedown", centerOfCircle);
  }
  const card = document.getElementsByClassName("card")[0];
  const bar3 = document.getElementById("left");
  card.style.visibility = "hidden";
  bar3.style.backgroundColor = "white";
  const main = document.getElementsByClassName("main")[0];
  main.style.display = "none";
  canvas.style.display = "flex";
  const colorSel = document.getElementsByClassName("color-selector")[0];
  colorSel.style.display = "flex";
}

let isLineActive = false;
const line = document.getElementById("line");

line.addEventListener("click", onLineClick);
function onLineClick() {
  line.classList.toggle("active");
  isLineActive = !isLineActive;
  if (isLineActive) {
    canvas.style.cursor = "crosshair";
    canvas.addEventListener("mousedown", startLine);
  } else {
    canvas.style.cursor = "auto";
    canvas.removeEventListener("mousedown", startLine);
  }
  const card = document.getElementsByClassName("card")[0];
  const bar3 = document.getElementById("left");
  card.style.visibility = "hidden";
  bar3.style.backgroundColor = "white";
  const main = document.getElementsByClassName("main")[0];
  main.style.display = "none";
  canvas.style.display = "flex";
  const colorSel = document.getElementsByClassName("color-selector")[0];
  colorSel.style.display = "flex";
}
