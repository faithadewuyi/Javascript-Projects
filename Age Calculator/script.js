const btnEl= document.getElementById("btn")
const birthdayEl= document.getElementById("birthday")
function calAge() {
    const dobValue= birthdayEl.value;
    if(dobValue===""){
    alert("Please enter your date of birth")

    }
}


btnEl.addEventListener("click", calAge)


  