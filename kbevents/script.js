const box = document.getElementById("box");
const speed = 20;
let x = 0;
let y = 0;
document.addEventListener("keydown", (event) => {
  box.style.backgroundColor = "tomato";
  if (event.key.startsWith("Arrow")) {
    event.preventDefault();
    switch (event.key) {
      case "ArrowUp":
        y = parseInt(y) - speed;
        break;
      case "ArrowDown":
        y = parseInt(y) + speed;
        break;
      case "ArrowLeft":
        x = parseInt(x) - speed;
        break;
      case "ArrowRight":
        x = parseInt(x) + speed;
        break;
    }
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
    console.log(x, y);
    return;
  }

  const textElement = document.createElement("p");
  textElement.textContent = event.key;
  box.removeChild(box.firstChild);
  box.appendChild(textElement);
});

document.addEventListener("keyup", (event) => {
  box.style.backgroundColor = "aqua";
});
