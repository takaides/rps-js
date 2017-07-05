// Generate random numbers
function rps(thrown) {
  // console.log(thrown + " is thrown");
  if (thrown == undefined) {
    thrown = (Math.floor(Math.random() * 3) + 1);
  }
  // console.log(thrown + "is thrown");
  if (
    thrown == 1 || thrown == "rock") {
    // console.log( "1");
    return "rock"
  } else if (
    thrown == 2 || thrown == "paper") {
    // console.log("2");
    return "paper"
  } else if (
    thrown == 3 || thrown == "scissors") {
    // console.log("3");
    return "scissors"
  } else {
    console.log("Something terrible has happened!");
  }
}

// determine the winner
function winner(user, comp) {
  if (user === comp) {
    document.getElementById('winner').innerHTML = "It's a tie!";
    document.getElementById('winner').style = "display: block";
    console.log("It's a tie!");
  } else if (user == "rock") {
    if (comp == "paper") {
      document.getElementById('winner').innerHTML = "The computer won!";
      document.getElementById('winner').style = "display: block";
      console.log("The computer won!");
    } else {
      document.getElementById('winner').innerHTML = "Congrats! You won!";
      document.getElementById('winner').style = "display: block";
      console.log("Congrats! You won!");
    }
  } else if (user == "paper") {
    if (comp == "scissors") {
      document.getElementById('winner').innerHTML = "The computer won!";
      document.getElementById('winner').style = "display: block";
      console.log("The computer won!");
    } else {
      document.getElementById('winner').innerHTML = "Congrats! You won!";
      document.getElementById('winner').style = "display: block";
      console.log("Congrats! You won!");
    }
  } else if (user == "scissors") {
    if (comp == "rock") {
      document.getElementById('winner').innerHTML = "The computer won!";
      document.getElementById('winner').style = "display: block";
      console.log("The computer won!");
    } else {
      document.getElementById('winner').innerHTML = "Congrats! You won!";
      document.getElementById('winner').style = "display: block";
      console.log("Congrats! You won!");
    }
  }
}

// This is what you'll end up seeing
console.log("Would you like to play a game?");
console.log("Lets play Rock, Paper, Scissors!");
// Get some user input
let userThrow = prompt("Select Rock (1), Paper (2), or Scissors (3) (please use a number)");
// console.log(userThrow);
userThrow = rps(userThrow);
document.getElementById('userChose').innerHTML = ("You chose " + userThrow);
document.getElementById('userChose').style = "display: block";
console.log("You selected " + userThrow);

let compThrow = rps();
document.getElementById('compChose').innerHTML = "The computer chose " + compThrow;
console.log("The computer chose " + compThrow);
document.getElementById('compChose').style = "display: block";

// Pick a winner
winner(userThrow, compThrow);
