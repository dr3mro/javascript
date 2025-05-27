let age = Number(window.prompt("What is your Age?"));
const msg = document.getElementById("msg");
if(age >= 18){
    msg.textContent = "You are an adult!";
}
else {
    msg.textContent = "You are a child!";
}