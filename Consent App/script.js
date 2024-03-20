// Setting the modal to dispaly after 1.5 secs
const closeBtnEl = document.getElementById("modal-close-btn")
const modalEl = document.getElementById("modal")

setTimeout(function(){
  modalEl.style.display ="inline"
 
}, 1500)

closeBtnEl.addEventListener("click", function(){
  modalEl.style.display="none"
})
 const consentFormEl = document.getElementById("consent-form")

 consentFormEl.addEventListener('submit', function(e){
  e.preventDefault()
 })