
// const ctx = canvas.getContext("2d");
const zoomInButton = document.getElementById("zoom-in");
const zoomOutButton = document.getElementById("zoom-out");

let scale = 1;

zoomInButton.addEventListener("click", () => {
  scale += 0.1;
  updateCanvasScale();
});

zoomOutButton.addEventListener("click", () => {
  if (scale > 0.1) {
    scale -= 0.1;
    updateCanvasScale();
  }
  console.log("umesh")
});

function updateCanvasScale() {
  ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset the transformation matrix
  ctx.scale(scale, scale);

  // Clear the canvas and draw something (e.g., a rectangle)
  ctx.fillStyle = "blue";
  ctx.fillRect(50, 50, 100, 100);
}
