
let selectedShape = null;

function locateEle(evt) {
  console.log("mousedown");
  if (undoStack.length == 0) return;
  for (let i = 0; i < undoStack.length; i++) {
    let coord = undoStack[i].coord;
    if (
      undoStack[i].object === "rectangle" &&
      evt.clientX >= coord.startX &&
      evt.clientX <= coord.startX + endx &&
      evt.clientY >= coord.startY &&
      evt.clientY <= coord.startY + endy
    ) {
      selectedShape = undoStack[i];
      console.log(selectedShape.object);
      isDragging = true;
      break;
    } else if (undoStack[i].object === "circle") {
      let rx = Math.pow(evt.clientX - coord.CenterX, 2);
      let ry = Math.pow(evt.clientY - coord.CenterY, 2);
      let radius = Math.sqrt(rx + ry);
      console.log(radius, coord.radius);
      if (radius <= coord.radius) {
        selectedShape = undoStack[i];
        console.log(selectedShape.object);
        isDragging = true;
        break;
      }
    }
  }
  canvas.addEventListener("mousemove", dragingObj);
}
function dragingObj(e) {
  if (isDragging) {
    let coord = selectedShape.coord;
    if (selectedShape.object === "rectangle") {
      coord.startX = e.clientX;
      coord.startY = e.clientY;
      //   context.clearRect(0, 0, canvas.width, canvas.height);
      reDrawRect(selectedShape);
    } else if (selectedShape.object === "circle") {
      coord.CenterX = e.clientX;
      coord.CenterY = e.clientY;
      reDrawCircle(selectedShape);
    }
    redraw();
  }
}
canvas.addEventListener("mouseup", () => {
  canvas.removeEventListener("mousemove", dragingObj);
  isDragging = false;
});
