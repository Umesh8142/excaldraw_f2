const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.addEventListener("mousedown", (evt) => {
  context.beginPath(); 
  const x = evt.clientX ;
  const y = evt.clientY;
  context.strokeStyle="red";
  context.moveTo(x, y);
});
canvas.addEventListener("mouseup", (evt) => {
  const x = evt.clientX;
  const y = evt.clientY;
  context.lineTo(x,y);
  context.stroke();
  context.closePath();
});


pencil.addEventListener("click", () => {
  // isDrawingRect = false;
  const card = document.getElementsByClassName("card")[0];
  const bar3 = document.getElementById("left");
  card.style.visibility = "hidden";
  bar3.style.backgroundColor = "white";
  pencil.style.backgroundColor = "#dcdafa";
  const main = document.getElementsByClassName("main")[0];
  main.style.display = "none";
  const canvas = document.getElementById("canvas");
  canvas.style.display = "flex";
  canvas.style.cursor = "crosshair";
  const colorSel = document.getElementsByClassName("color-selector")[0];
  colorSel.style.display = "flex";
});