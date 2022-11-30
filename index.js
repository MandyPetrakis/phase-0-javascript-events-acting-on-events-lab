const dodger = document.getElementById("dodger");

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});

function moveDodgerLeft() {
  const currentLeft = dodger.style.left.replace("px", "");
  let left = parseInt(currentLeft, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const currentRight = dodger.style.left.replace("px", "");
  let right = parseInt(currentRight, 10);

  if (right < 360) {
    dodger.style.left = `${right + 1}px`;
  }
}
