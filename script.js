function getComputerChoice () {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Sissors";
    default:
      return "bad logic"
  }
}

function round (computer) {
  let player = prompt("Enter your choice: ").toLowerCase();
  switch (computer) {
    case "Rock":
      switch (player) {
        case "rock":
          console.log("You tie! Rock and Rock.")
          return 0;
        case "paper":
          console.log("You win! Paper beats Rock")
          return 1;
        case "sissors":
          console.log("You Lose! Rock beats Sissors")
          return 2;
        default:
          console.log("bad logic")
      }
    case "Paper":
      switch (player) {
        case "rock":
          console.log("You lose! Paper beats Rock")
          return 2;
        case "paper":
          console.log("You tie! Rock and Rock.")
          return 0;
        case "sissors":
          console.log("You win! Sissors beat Paper")
          return 1;
        default:
          console.log("bad logic")
      }
    case "Sissors":
      switch (player) {
        case "rock":
          console.log("You win! Rock beats Sissors")
          return 1;
        case "paper":
          console.log("You Lose! Sissors beats Paper")
          return 2;
        case "sissors":
          console.log("You tie! Rock and Rock.")
          return 0;
        default:
          console.log("bad logic")
      }
    default:
      return "bad logic"
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let tie = 0;
  for (i = 0; i < 5; i++) {
    switch (round(getComputerChoice())) {
      case 0:
        tie++
        break
      case 1:
        playerScore++
        break;
      case 2:
        computerScore++
        break;
      default: 
        break;
    }
    console.log(`Player: ${playerScore}
                Computer: ${computerScore}
                Ties: ${tie}`)
  }
  console.log(`Player: ${playerScore}
                Computer: ${computerScore}
                Ties: ${tie}`)
  if(playerScore > computerScore) {
    console.log("You Win!!")
  }
  else if (playerScore < computerScore) {
    console.log("You Lose!!")
  }
  else {
    console.log("It's a tie!")
  }
}
game()