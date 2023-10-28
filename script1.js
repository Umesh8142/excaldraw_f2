// menu bar
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

// shapes and freehand
let isDragging = false;
let isPencilActive = false;
let isRectActive = false;
let isEraserActive = false;
let isCircleActive = false;
let isLineActive = false;
const mouse = document.getElementById("mouse");

// shapes ID's
const pencil = document.getElementById("pencil");
const Rect = document.getElementById("drawRect");
const Eraser = document.getElementById("eraser");
const circle = document.getElementById("circle");
const line = document.getElementById("line");
mouse.addEventListener("click", onMouseClick);

// freehand drawing

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
  if (isCircleActive) {
    isCircleActive = !isCircleActive;
    circle.classList.remove("active");
    canvas.removeEventListener("mousedown", centerOfCircle);
  }
  if (isLineActive) {
    isLineActive = !isLineActive;
    line.classList.remove("active");
    canvas.removeEventListener("mousedown", startLine);
  }
  if (isRectActive) {
    isRectActive = !isRectActive;
    Rect.classList.remove("active");
    canvas.removeEventListener("mousedown", drawRectDown);
  }
  if (isEraserActive) {
    isEraserActive = !isEraserActive;
    Eraser.classList.remove("active");
    canvas.removeEventListener("mousedown", onMouseDownEraser);
  }
  if (isDragging) {
    isDragging = !isDragging;
    mouse.classList.remove("active");
    canvas.removeEventListener("mousedown", locateEle);
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
  if (isPencilActive) {
    isPencilActive = !isPencilActive;
    pencil.classList.remove("active");
    canvas.removeEventListener("mousedown", onMouseDown);
  }
  if (isCircleActive) {
    isCircleActive = !isCircleActive;
    circle.classList.remove("active");
    canvas.removeEventListener("mousedown", centerOfCircle);
  }
  if (isLineActive) {
    isLineActive = !isLineActive;
    line.classList.remove("active");
    canvas.removeEventListener("mousedown", startLine);
  }
  if (isEraserActive) {
    isEraserActive = !isEraserActive;
    Eraser.classList.remove("active");
    canvas.removeEventListener("mousedown", onMouseDownEraser);
  }
  if (isDragging) {
    isDragging = !isDragging;
    mouse.classList.remove("active");
    canvas.removeEventListener("mousedown", locateEle);
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
  if (isPencilActive) {
    isPencilActive = !isPencilActive;
    pencil.classList.remove("active");
    canvas.removeEventListener("mousedown", onMouseDown);
  }
  if (isRectActive) {
    isRectActive = !isRectActive;
    Rect.classList.remove("active");
    canvas.removeEventListener("mousedown", drawRectDown);
  }
  if (isCircleActive) {
    isCircleActive = !isCircleActive;
    circle.classList.remove("active");
    canvas.removeEventListener("mousedown", centerOfCircle);
  }
  if (isLineActive) {
    isLineActive = !isLineActive;
    line.classList.remove("active");
    canvas.removeEventListener("mousedown", startLine);
  }
  if (isDragging) {
    isDragging = !isDragging;
    mouse.classList.remove("active");
    canvas.removeEventListener("mousedown", locateEle);
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
  if (isLineActive) {
    isLineActive = !isLineActive;
    line.classList.remove("active");
    canvas.removeEventListener("mousedown", startLine);
  }
  if (isPencilActive) {
    isPencilActive = !isPencilActive;
    pencil.classList.remove("active");
    canvas.removeEventListener("mousedown", onMouseDown);
  }
  if (isEraserActive) {
    isEraserActive = !isEraserActive;
    Eraser.classList.remove("active");
    canvas.removeEventListener("mousedown", onMouseDownEraser);
  }
  if (isRectActive) {
    isRectActive = !isRectActive;
    Rect.classList.remove("active");
    canvas.removeEventListener("mousedown", drawRectDown);
  }
  if (isDragging) {
    isDragging = !isDragging;
    mouse.classList.remove("active");
    canvas.removeEventListener("mousedown", locateEle);
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

// line drawing
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
  if (isCircleActive) {
    isCircleActive = !isCircleActive;
    circle.classList.remove("active");
    canvas.removeEventListener("mousedown", centerOfCircle);
  }
  if (isPencilActive) {
    isPencilActive = !isPencilActive;
    pencil.classList.remove("active");
    canvas.removeEventListener("mousedown", onMouseDown);
  }
  if (isEraserActive) {
    isEraserActive = !isEraserActive;
    Eraser.classList.remove("active");
    canvas.removeEventListener("mousedown", onMouseDownEraser);
  }
  if (isRectActive) {
    isRectActive = !isRectActive;
    Rect.classList.remove("active");
    canvas.removeEventListener("mousedown", drawRectDown);
  }
  if (isDragging) {
    isDragging = !isDragging;
    mouse.classList.remove("active");
    canvas.removeEventListener("mousedown", locateEle);
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

// save as pdf

const save = document.getElementById("save");

save.addEventListener(
  "click",
  () => {
    // canvas.style.backgroundColor = "white";
    // context.fillStyle = "white";
    // context.fillRect(0, 0, canvas.width, canvas.height);
    // redraw();
    // context.fillStyle = "white";
    var imgData = canvas.toDataURL("image/jpeg");
    var pdf = new jsPDF("p", "px");
    var width = pdf.internal.pageSize.width;
    var height = pdf.internal.pageSize.height;
    pdf.addImage(imgData, "JPEG", 0, 0, width, height);
    pdf.save("download.pdf");
  },
  false
);

// translate

function onMouseClick() {
  mouse.classList.toggle("active");
  isDragging = !isDragging;
  if (isDragging) {
    canvas.style.cursor = "auto";
    canvas.addEventListener("mousedown", locateEle);
  } else {
    canvas.removeEventListener("mousedown", locateEle);
  }
  if (isRectActive) {
    isRectActive = !isRectActive;
    Rect.classList.remove("active");
    canvas.removeEventListener("mousedown", drawRectDown);
  }
  if (isPencilActive) {
    isPencilActive = !isPencilActive;
    pencil.classList.remove("active");
    canvas.removeEventListener("mousedown", onMouseDown);
  }
  if (isCircleActive) {
    isCircleActive = !isCircleActive;
    circle.classList.remove("active");
    canvas.removeEventListener("mousedown", centerOfCircle);
  }
  if (isEraserActive) {
    isEraserActive = !isEraserActive;
    Eraser.classList.remove("active");
    canvas.removeEventListener("mousedown", onMouseDownEraser);
  }
  if (isLineActive) {
    isLineActive = !isLineActive;
    line.classList.remove("active");
    canvas.removeEventListener("mousedown", startLine);
  }
}
