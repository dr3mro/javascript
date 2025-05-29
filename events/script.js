const box = document.getElementById("box");
box.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "blue";
  event.target.textContent = "Ouch! 🤕";
});

box.addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "aqua";
  event.target.textContent = "click me 🤓";
});

box.addEventListener("mouseenter", (event) => {
  event.target.style.backgroundColor = "red";
  event.target.textContent = "oooh! 🤓";
});
