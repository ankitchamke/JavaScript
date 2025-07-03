// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

let myLeads = []
const inputEl = document.getElementById("input-el")


// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button
// function clicked() {
//     console.log("onclick")
// }
// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    console.log("Button clicked!")
    myLeads.push("www.awesomelead.com")
    console.log(myLeads)
})

// Push the value "www.awesomelead.com" to myArray when the input button is clicked


