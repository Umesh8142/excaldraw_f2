let x1, y1;
let x2, y2;
let lines = [];
function startLine(evt) {
  x1 = evt.clientX;
  y1 = evt.clientY;
  context.strokeStyle = drawingCol;
  context.lineWidth = 2;
  canvas.addEventListener("mousemove", changeLineDim);
  canvas.addEventListener("mouseup", endLine);
}
function drawLines() {
  if (lines.length == 0) return;
  lines.forEach((item) => {
    context.moveTo(item.x1, item.y1);
    context.lineTo(item.x2, item.y2);
    context.stroke();
  });
}
function changeLineDim(evt) {
  context.beginPath();
  context.clearRect(0, 0, canvas.width, canvas.height);
  x2 = evt.clientX;
  y2 = evt.clientY;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  drawLines()
  
}

function endLine(evt) {
  canvas.removeEventListener("mousemove", changeLineDim);
  x2 = evt.clientX;
  y2 = evt.clientY;
  // context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
  lines.push({ x1: x1, y1: y1, x2: x2, y2: y2 });
}
canvas.addEventListener("mouseleave",()=>{
  canvas.removeEventListener("mouseup",endLine)
})
