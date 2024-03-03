// Script for Home Score Buttons
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0;

function updateScores() {
  document.getElementById('home-score').textContent = homeScore;
  document.getElementById('guest-score').textContent = guestScore;
  highLightLeader();
}

function plus_one(){
 homeScore++
 
 updateScores();

}
function plus_two(){
  homeScore += 2
  
  updateScores();
 
 }
 function plus_three(){
  homeScore += 3
  
  updateScores();
 
 }
// Script for Guest Score Buttons
 let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0;
function gplus_one(){
 guestScore++
 
 updateScores();

}
function gplus_two(){
  guestScore += 2
  
  updateScores();
 
 }
 function gplus_three(){
  guestScore += 3
  
  updateScores();
 
 }

//  Function to highlight the leader

 function highLightLeader(){
  document.getElementById("home-score").classList.remove('leader');
  document.getElementById("guest-score").classList.remove('leader');

  if (homeScore > guestScore){
    document.getElementById('home-score').classList.add('leader');
  } else if (guestScore > homeScore) {
    document.getElementById('guest-score').classList.add('leader');
  }
 }
updateScores();
 


 