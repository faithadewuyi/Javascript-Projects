let player= {
  name: "Faith",
  chips: 500
}
let cards = []
let sum = 0
let hasBlackJack = false;
let outOfGame = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("cards-el");

let playerEl =document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
  let randomNumber = Math.floor(Math.random () * 13) + 1 
  if (randomNumber > 10){
    return 10
  }
  else if (randomNumber === 1)
  {
    return 11
  }
  else {
    return randomNumber
  }
}
function startGame(){
  outOfGame = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard;

  runGame()
}
function runGame(){
  cardEl.textContent = "Cards: "

  for(let i = 0; i < cards.length; i++)
  {
    cardEl.textContent += cards[i] + " "
  }

  sumEl.textContent = "Sum: " + sum

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
 
}


function newCard(){
  if (outOfGame === true && hasBlackJack === false){
  let card =  getRandomCard()
  sum+= card

  cards.push(card)
  console.log(cards)
  runGame()
  }
}

