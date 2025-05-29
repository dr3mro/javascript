const h1 = document.createElement("h1");
h1.textContent = "I like to code!";
h1.style.color = "blue";
h1.style.textAlign = "center";
h1.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";
//document.body.prepend(h1);

const box1 = document.getElementById("box1");
box1.appendChild(h1);

const box2 = document.getElementById("box2");
document.body.insertBefore(h1, box2);
