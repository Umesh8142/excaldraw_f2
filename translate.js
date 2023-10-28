let selectedShape = null;
let a, b;
function locateEle(evt) {
  if (undoStack.length == 0) {
    alert("draw elements");
    return;
  }
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
      break;
    } else if (undoStack[i].object === "circle") {
      let rx = Math.pow(evt.clientX - coord.CenterX, 2);
      let ry = Math.pow(evt.clientY - coord.CenterY, 2);
      let radius = Math.sqrt(rx + ry);
      //   console.log(radius, coord.radius);
      if (radius <= coord.radius) {
        selectedShape = undoStack[i];
        console.log(selectedShape.object);
        break;
      }
    } 
    // else if (undoStack[i].object === "line") {
    //   const slope = (coord.y2 - coord.y1) / (coord.x2 - coord.x1);
    //   const yIntercept = coord.y1 - slope * coord.x1;
    //   console.log("line");
    //   // Check if the point (i, j) satisfies the equation y = mx + b
    //   let check =
    //     Math.abs(evt.clientY - (slope * evt.clientX + yIntercept)) < 0.001;
    //   if (check) {
    //     selectedShape = undoStack[i];
    //     a = evt.clientX;
    //     b = evt.clientY;
    //     console.log(selectedShape.object);
    //     console.log(undoStack[i]);
    //     break;
    //   }
    // }
    }
  console.log(selectedShape);
  canvas.addEventListener("mousemove", dragingObj);
  canvas.addEventListener("mouseup", dragMouseUp);
}

function dragingObj(e) {
  let coord = selectedShape.coord;
  if (selectedShape.object === "rectangle") {
    coord.startX = e.clientX;
    coord.startY = e.clientY;
    reDrawRect(selectedShape);
  } else if (selectedShape.object === "circle") {
    coord.CenterX = e.clientX;
    coord.CenterY = e.clientY;
    reDrawCircle(selectedShape);
  } 
// else if (selectedShape.object === "line") {
//     console.log(coord);
//     coord.x1 += e.clientX - a;
//     coord.y1 += e.clientY - b;
//     coord.x2 += e.clientX - a;
//     coord.y2 += e.clientY - b;
//     reDrawLine(selectedShape);
//     console.log("moving");
//   }
  redraw();
}
function dragMouseUp() {
  canvas.removeEventListener("mousemove", dragingObj);
}
canvas.addEventListener("mouseleave", () => {
  canvas.removeEventListener("mouseup", dragMouseUp);
});
