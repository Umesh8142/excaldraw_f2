const ctx = canvas.getContext("2d");

let isDrawingRect = false;
const drawRect = document.getElementById("drawRect");

drawRect.addEventListener("click", () => {
  drawRect.style.backgroundColor = "#dcdafa";
  const main = document.getElementsByClassName("main")[0];
  main.style.display = "none";
  const canvas = document.getElementById("canvas");
  canvas.style.display = "flex";
  canvas.style.cursor = "crosshair";
  const colorSel = document.getElementsByClassName("color-selector")[0];
  colorSel.style.display = "flex";
});


let startX, startY;
let rectangles = []; // Store the rectangles

function drawRectangles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Redraw all rectangles
  rectangles.forEach((rect) => {
    ctx.strokeRect(rect.startX, rect.startY, rect.widthR, rect.heightR);
  });
}

canvas.addEventListener("mousedown", (e) => {
    isDrawingRect=true;
  var rect = canvas.getBoundingClientRect();
  (scaleX = canvas.width / rect.width), (scaleY = canvas.height / rect.height);
  startX = (e.clientX - rect.left) * scaleX;
  startY = (e.clientY - rect.top) * scaleY;
});
let widthR;
let heightR;
canvas.addEventListener("mousemove", (evt) => {
  if (!isDrawingRect) return;

  var rect = canvas.getBoundingClientRect();
  (scaleX = canvas.width / rect.width), (scaleY = canvas.height / rect.height);
  const x1 = (evt.clientX - rect.left) * scaleX;
  const y1 = (evt.clientY - rect.top) * scaleY;

  widthR = x1 - startX;
  heightR = y1 - startY;

  drawRectangles(); // Redraw previous rectangles
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.strokeRect(startX, startY, widthR, heightR);
});

canvas.addEventListener("mouseup", () => {
  if (isDrawingRect) {
    // Store the drawn rectangle's information
    rectangles.push({ startX, startY, widthR, heightR });
  }
  isDrawingRect = false;
});

canvas.addEventListener("mouseleave", () => {
  isDrawingRect = false;
});
