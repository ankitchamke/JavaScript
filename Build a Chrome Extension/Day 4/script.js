let myLeads = []


// // 1. Turn the myLeads string into an array
// myLeads = JSON.parse(myLeads)
// // 2. Push a new value to the array
// myLeads.push("www.xyz.com")
// // 3. Turn the array into a string again
// myLeads = JSON.stringify(myLeads)
// // 4. Console.log the string using typeof to verify that it's a string
// console.log(typeof myLeads)



const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// 1. Save a key-value pair in localStorage
// localStorage.setItem("myLead", "www.xyz.com")
// 2. Refresh the page. Get the value and log it to the console
// console.log(localStorage.getItem("myLead"))
// let lead = localStorage.getItem("myLead")
// console.log(lead)
// 3. Clear localStorage
// localStorage.clear()

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings



// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
localStorage.clear()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// Log out the variable
// console.log(leadsFromLocalStorage)



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // Save the myLeads array to localStorage 
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    // PS: remember JSON.stringify()
    // myLeads = JSON.parse(myLeads)
    
    renderLeads()
    
    // To verify that it works:
    console.log( localStorage.getItem("myLeads") )
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}