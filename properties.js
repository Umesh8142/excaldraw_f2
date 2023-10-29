const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// canvas dimensions
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// rounded line

context.lineJoin = "round";
context.lineCap = "round";

// default properties
canvas.style.backgroundColor = "black";
context.fillStyle = "black";
let drawingCol = "white";
let lineWidth = 2;
let opacityValue = 1;

// opacity value

const opacity = document.getElementById("opacity");
opacity.addEventListener("change", () => {
  opacityValue = opacity.value;
});
// lineWidth
const lineWidthBtn = document.getElementById("LineWidth");
lineWidthBtn.addEventListener("change", () => {
  lineWidth = lineWidthBtn.value;
  console.log(lineWidth);
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
// color

const colPicker = document.getElementById("colorPicker");
colPicker.addEventListener("change", () => {
  drawingCol = colPicker.value;
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
