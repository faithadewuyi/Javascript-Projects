let myLeads = [];
const inputEl = document.getElementById("input-el");

const inputBtnEl= document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")

inputBtnEl.addEventListerner("click", function()
{
myLeads.push(inputEl.value)
inputEl.value = ""
renderLeads()

})

function renderLeads()
{
let listItems = ""
for ( let i = 0; i < myLeads.length; i++)
{

 listItems += 
 `<li>
 <a target='_blank' href='${ myLeads[i]}'>
 </a>
 </li>`
}

ulEl.innerHTML = listItems
}


localStorage.setItem ("name", "Faith")

console.log

let btnEl= document.getElementById("btn")

document.addEventListener("clicks", function(){


})

