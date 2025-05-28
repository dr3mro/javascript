function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const hours12 = (hours % 12 || 12).toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours12}:${minutes}:${seconds} ${ampm}`;
  document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);
