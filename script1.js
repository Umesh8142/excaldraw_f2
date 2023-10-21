const bar3 = document.getElementById("left");
bar3.addEventListener("click", appendTools);
function appendTools() {
  const card = document.getElementsByClassName("card")[0];
  card.style.backgroundColor = "white";
  if (card.style.visibility === "visible") {
    card.style.visibility = "hidden";
  } else {
    card.style.visibility = "visible";
  }
}

const help = document.getElementById("help");
help.addEventListener("click", () => {
  document.body.style.backgroundColor = "lightgray";
  // document.body.style.zIndex=0;

  const cardHelp = document.getElementsByClassName("card-help")[0];
  cardHelp.style.visibility = "visible";
});

const closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  const cardHelp = document.getElementsByClassName("card-help")[0];
  cardHelp.style.visibility = "hidden";
});







// grabbing


  
