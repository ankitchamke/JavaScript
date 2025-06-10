// -------------------------------------------------------------------------------------------------------------------------

// // Increment on clicks
// // CHALLENGE 8,9,17

// // intialize the count as 0
// // listen for clicks on the increment button
// // increment the count variable when the button is clicked (log it out)
// // change the count-el in the HTML to reflect the new count // camelCase
// // console.log(countEl)

// // Change this to use the plus equal technique you've learned
// let countEl = document.getElementById("count-el")
// count = 0
// function increment(){
//     count += 1
//     countEl.innerText = count
//     console.log(count)
// }

// -------------------------------------------------------------------------------------------------------------------------

// // The Document Object Model
// // Create the save button
// // CHALLENGE 10
// // 1. Create a function, save(), which logs out the count when it's called
// function save(){
//     console.log(count)
// }

// -------------------------------------------------------------------------------------------------------------------------

// // // CHALLENGE 15
// // Grab the welcome-el paragraph and store it in a variable called welcomeEl
// let welcomeEl = document.getElementById("welcome-el")
// // Create two variables (name & greeting) that contains your name
// let name = "Ankit"
// // and the greeting we want to render on the page
// let greeting = "Welcome "
// // Render the welcome message using welcomeEl.innerText
// welcomeEl.innerText = greeting + name

// -------------------------------------------------------------------------------------------------------------------------

// CHALLENGE 16
// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

// welcomeEl.innerText = greeting + name + "👋"
// welcomeEl.innerText = welcomeEl.innerText + "👋"
// welcomeEl.innerText += "👋"

// -------------------------------------------------------------------------------------------------------------------------

// // CHALLENGE 18
// creating save feature
// debugging online
// // 1. Grab the save-el paragrah and store it in a variable called saveEl
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count += 1
//     countEl.innerText = count
// }

// function save() {
//     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
//     let counter = count + " - "
//     // 3. Render the variable in the saveEl using innerText
//     // saveEl.innerText += counter
//     // innerText alternative mdn ( to fix space problem)
//     saveEl.textContent += counter
    
//     // NB: Make sure to not delete the existing content of the paragraph
//     console.log(count)
// }

// -------------------------------------------------------------------------------------------------------------------------

// Set the count to 0
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
//     // count = 0
//     // countEl.textContent = count
//     countEl.textContent = 0
//     count = 0
// }

// -------------------------------------------------------------------------------------------------------------------------

// Personalize and Download Your App