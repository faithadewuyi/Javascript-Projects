let firstCard = 10;
let secondCard = 7;

let sum = firstCard + secondCard;

let hasBlackJack = false;

let outOfGame = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
function startGame(){
  sumEl.textContent = "Sum:" + sum
  if ( sum <= 20){
    message= "Do you want to draw a new card? 🙂"

  }
  
  else if(sum === 21)
  {
    message = "You've got Blackjack! 🥳"
    hasBlackJack = true
  } 
  else{
    message = "You're out of the game! 😭"
  
    outOfGame = false
  }

  messageEl.textContent = message
  console.log(message)
}


