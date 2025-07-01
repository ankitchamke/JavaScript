// Objects & functions --------------------------------------------------------------------------------------------

// Create a person object that contains three keys: name, age, and country.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

// let person = {
//     name: "name",
//     age: 0,
//     country: "country"
// }

// function logData(){
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }

// logData()


// if else --------------------------------------------------------------------------------------------------------

// let age = 66

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

// if (age < 6) {
//     console.log("free")
// } else if (age < 18) {
//     console.log("child discount")
// } else if (age < 27) {
//     console.log("student discount")    
// } else if (age < 67) {
//     console.log("full price")
// } else {
//     console.log("senior citizen discount")
// }


// Loops and arrays -----------------------------------------------------------------------------------------------

// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

// /* Use a for loop to log the following to the console:

// The 5 largest countries in the world:
// - China
// - India
// - United States
// - Indinesia
// - Pakistan
// */


// for (let i = 0; i < largeCountries.length; i++) {
//      console.log("- " + largeCountries[i])

// }


// push, pop, unshift, shift challenge ----------------------------------------------------------------------------

// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// // You need to help me fixup the largeCountries array so that 
// // China and Pakistan are added back into their respective places

// // Use push() & pop() and their counterparts unshift() & shift()
// // Google how to use unshift() and shift()

// largeCountries.shift()
// largeCountries.unshift("China")
// largeCountries.pop()
// largeCountries.push("Pakistan")

// console.log(largeCountries)


// Logical Operators ----------------------------------------------------------------------------------------------

// let dayOfMonth = 13
// let weekday = "Friday"

// // If it is Friday the 13th, log out this spooky face: 😱
// // Use the logical "AND operator" -> &&

// if (dayOfMonth === 13 && weekday === "Friday") {
//     console.log("😱")
// } else {
//     console.log("nothing")
// }


// ROCK PAPER SCISSOR ---------------------------------------------------------------------------------------------

// let hands = ["rock", "paper", "scissor"]

// // Create a function that returns a random item from the array

// function random() {
//    let i = Math.floor(Math.random() * hands.length)
//    console.log(hands[i])
// }

// random()


// EmojiFighter ---------------------------------------------------------------------------------------------------

// let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]

// let stageEl = document.getElementById("stage")
// let fightButton = document.getElementById("fightButton")

// fightButton.addEventListener("click", function () {
//     // Challenge:
//     // When the user clicks on the "Pick Fighters" button, pick two random 
//     // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

//     let i = Math.floor(Math.random() * fighters.length)
//     let j = Math.floor(Math.random() * fighters.length)
//     stageEl.textContent = (fighters[i] + " vs " + fighters[j])

// })


// Fruit Sorting --------------------------------------------------------------------------------------------------

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function shelf() {
    for (let i = 0; i < fruit.length; i++) {
        basket = fruit[i];
        if (basket === "🍎") {
            appleShelf.textContent += "🍎"
        } else {
            orangeShelf.textContent += "🍊"
        }
    }
}

shelf()

// ----------------------------------------------------------------------------------------------