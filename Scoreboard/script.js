// Script for Home Score Buttons
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0;
function plus_one(){
 homeScore++
 
   homeScoreEl.textContent = homeScore

}
function plus_two(){
  homeScore += 2
  
    homeScoreEl.textContent = homeScore
 
 }
 function plus_three(){
  homeScore += 3
  
    homeScoreEl.textContent = homeScore
 
 }
// Script for Guest Score Buttons
 let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0;
function gplus_one(){
 guestScore++
 
   guestScoreEl.textContent = guestScore

}
function gplus_two(){
  guestScore += 2
  
    guestScoreEl.textContent = guestScore
 
 }
 function gplus_three(){
  guestScore += 3
  
    guestScoreEl.textContent = guestScore
 
 }