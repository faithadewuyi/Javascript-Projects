const btnElement= document.getElementById("btn")
const birthdayEl= document.getElementById("birthday");
const resultEl = document.getElementById('result')
function calAge() {
    const dobValue= birthdayEl.value;
    if(dobValue===""){
    alert("Please enter your date of birth")

    }
    else{
        let age = getAge(dobValue);
        resultEl.innerText = `Your age is ${age} ${age>1 ? "years" : "year"} old`;
        
       
    }
}
function getAge(dobValue){
    const currentDate = new Date();
    const birthdayDate = new Date(dobValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear(); 
    // To calculate the month of birth
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month<0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
        age--
    }
   return(age)         
}

btnElement.addEventListener("click", calAge)


  