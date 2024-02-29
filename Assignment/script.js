// const togglebutton = document.getElementById("toggleMenuBar")
// const menuBar = document.querySelector(".menuBar")
 
 
 
// document.addEventListener('DOMContentLoaded', () => {
//     const categoriesContainer = document.getElementById('categories')
 
   
//     async function fetchCategory(){
//         const res = await fetch('https://fakestoreapi.com/products/categories')
//         const category = await res.json()
//         return category
//     }
 
//     function displayCategories(categories){
//         categories.forEach(category => {
//             const catDiv = document.createElement('div')
//             catDiv.className = 'category'
//             catDiv.innerText = category
//             categoriesContainer.appendChild(catDiv)
//         })
//     }
 
//     fetchCategory().then(displayCategories)
// })
 

// togglebutton.onclick = function(){
//     menuBar.classList.toggle("hidden")
//     displayCategories(categories)
// }


const toggleButton = document.getElementById("toggleMenuBar");
const menuBar = document.querySelector("menuBar");
const categoriesContainer = document.getElementById('categories');

// Function to toggle the display of the categories
function toggleCategoriesDisplay() {
    if (categoriesContainer.style.display === 'block') {
        categoriesContainer.style.display = 'none';
    } else {
        categoriesContainer.style.display = 'block';
    }
}

// Event listener for the toggle button
toggleButton.addEventListener('click', toggleCategoriesDisplay);

document.addEventListener('DOMContentLoaded',  () => {
    // Fetch categories and display them
    async function fetchCategory() {
        const res = await fetch('https://fakestoreapi.com/products/categories');
        const category = await res.json();
        console.log(category)
        return category;
    }

    function displayCategories(categories) {
        categories.forEach(category => {
            const catDiv = document.createElement('div');
            catDiv.className = 'category';
            catDiv.innerText = category;
            categoriesContainer.appendChild(catDiv);
        });
    }

    fetchCategory().then(displayCategories);
});
