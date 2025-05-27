function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceImages = document.getElementById("images");

    // Clear previous images
    diceImages.innerHTML = '';

    // Validate input
    if (numOfDice < 1 || isNaN(numOfDice)) {
        alert("Please enter a valid number of dice.");
        return;
    }

    // Generate dice images
    for (let i = 0; i < numOfDice; i++) {
        const diceImage = document.createElement("img");
        const roll = Math.floor(Math.random() * 6) + 1;
        diceImage.src = `images/${roll}.png`;
        diceImage.alt = `Dice showing ${roll}`;
        diceImage.id = `dice`;
        diceImage.classList.add("dice");
        diceImages.appendChild(diceImage);
    }
}
