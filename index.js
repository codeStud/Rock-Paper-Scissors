// Function for computer's play
function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function userPlay() {
  let flag = 1; // to keep prompting user until they give valid input
  let userChoice;

  while (flag) {
    userChoice = prompt("Enter Your Choice: ");
    // make userChoice all lowercase (to make the selection CASE-INSENSITIVE)
    userChoice = userChoice.toLowerCase();

    // capitalise the string to display winning message as desired
    userChoice = userChoice[0].toUpperCase() + userChoice.slice(1);

    // check for a valid choice
    if (
      userChoice !== "Rock" &&
      userChoice !== "Paper" &&
      userChoice !== "Scissors"
    ) {
      alert("Wrong selection! Try Again😇");
    }
    // otherwise in case of valid input, break out of the while loop
    else {
      flag = 0;
    }
  }

  return userChoice;
}

function playRound(userSelection, computerSelection) {
  // user selects rock
  if (userSelection === "Rock") {
    if (computerSelection === "Scissors") {
      console.log(`You win! ${userSelection} beats ${computerSelection}`);
      return "userWon";
    } else if (computerSelection === "Paper") {
      console.log(`You lose! ${computerSelection} beats ${userSelection}`);
      return "userLost";
    } else {
      console.log(`Tie!! Play Again.`);
      return "tie";
    }
  }
  // user selects paper
  else if (userSelection === "Paper") {
    if (computerSelection === "Rock") {
      console.log(`You win! ${userSelection} beats ${computerSelection}`);
      return "userWon";
    } else if (computerSelection === "Scissors") {
      console.log(`You lose! ${computerSelection} beats ${userSelection}`);
      return "userLost";
    } else {
      console.log(`Tie!! Play Again.`);
      return "tie";
    }
  }
  // user selects scissors
  else {
    if (computerSelection === "Paper") {
      console.log(`You win! ${userSelection} beats ${computerSelection}`);
      return "userWon";
    } else if (computerSelection === "Rock") {
      console.log(`You lose! ${computerSelection} beats ${userSelection}`);
      return "userLost";
    } else {
      console.log(`Tie!! Play Again.`);
      return "tie";
    }
  }
}

// console.log(playRound(userPlay(), computerPlay()));
function game() {
  let userScore = 0,
    computerScore = 0;
  // play a 5 round game
  for (let i = 0; i < 5; i++) {
    const roundResult = playRound(userPlay(), computerPlay());
    if (roundResult === "userWon") {
      // update the userScore
      userScore += 1;
    } else if (roundResult === "userLost") {
      // update the computer score
      computerScore += 1;
    } else {
      // do nothing in case of 'tie'
    }
  }

  // check the final winner
  if (userScore > computerScore) {
    console.log(
      `You won! \nFinal score: You-> ${userScore} \nComputer->${computerScore}`
    );
  } else if (computerScore > userScore) {
    console.log(
      `You lose! \nFinal score: You-> ${userScore} \nComputer->${computerScore}`
    );
  } else {
    console.log(
      `Series Tie! \nFinal score: You-> ${userScore} \nComputer->${computerScore}`
    );
  }

  alert("Game end!🏳❇");
}

game();
