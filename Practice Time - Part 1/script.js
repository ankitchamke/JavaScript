// 01 Variable Practice -------------------------------------------------------------------------------------------------

// Create two variables, firstName and lastName
// Concatenate the two variables into a third variable called fullName
// Log fullName to the console

// let firstName = "Ankit"
// let lastName = "Chamke"
// let fullName = firstName + " " + lastName

// console.log(fullName)

// 02 Concatenate two strings in a function --------------------------------------------------------------------------------

// let name = "Linda"
// let greeting = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called
// function func() {
//         console.log(greeting + ", " + name + "!")
//     }
// func()

// 03 Incrementing and decrementing -----------------------------------------------------------------------------------------

let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

// function add3Points() {
//         myPoints += 3
//     }
    
// function remove1Point() {
//         myPoints -= 1
//     }
        
// // Call the functions to that the line below logs out 10
// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()
// console.log(myPoints)
        
// 03 Incrementing and decrementing -----------------------------------------------------------------------------------------

// // Try to predict what each of the lines will log out
// console.log("2" + 2) //22
// console.log(11 + 7) //18
// console.log(6 + "5") //65
// console.log("My points: " + 5 + 9) //My points: 59
// console.log(2 + 2) //4
// console.log("11" + "14") // 1114

// 04 Rendering an error message-----------------------------------------------------------------------------------------------

// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

// let errorEl = document.getElementById("error")

// function render(){
    //     errorEl.textContent = "Something went wrong, please try again"
    // }

// 05 Calculator challenge -------------------------------------------------------------------------------------------------------
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
sumEl = document.getElementById("sum-el")

// Create four functions: add(), subtract(), divide(), multiply()
function add(){
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}
function subtract(){
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}
function divide(){
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}
function multiply(){
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

// ----------------------------------------------------------------------------------------------------------------------------