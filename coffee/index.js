function rollDice() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
    const diceImage1 = "/dice" + randomNumber1 + ".png";
    const diceImage2 = "/dice" + randomNumber2 + ".png";
  
    document.getElementById("dice1").setAttribute("src", diceImage1);
    document.getElementById("dice2").setAttribute("src", diceImage2);
  
    const title = document.querySelector("h1");
  
    if (randomNumber1 > randomNumber2) {
      title.textContent = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      title.textContent = "Player 2 Wins! 🚩";
    } else {
      title.textContent = "Draw!";
    }
  }
  