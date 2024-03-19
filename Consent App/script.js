// Setting the modal to dispaly after 1.5 secs
const closeBtnEl = document.getElementById("modal-close-btn")
const modalEl = document.getElementById("modal")

setTimeout(function(){
  modalEl.style.display ="inline"
  closeBtnEl.style.display="none"
}, 1500)