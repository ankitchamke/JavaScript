// const welcomeEl = document.getElementById("welcome-el")

// // Give the function a parameter, greeting, that replaces "Welcome back"
// function greetUser(greeting) {
//     welcomeEl.textContent = greeting + ", Per Harald Borgen 👋"    
// }

// greetUser("Hi")



// Functions with multiple parameters -------------------------------------------------------------

// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(greeting, name, emoji) {
//     // Rewrite the expression using template literals
//     welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
// }

// greetUser("Howdy", "James", "🗿")



// Create a function, add(), that adds two numbers together and returns the sum -------------------

// function add(a,b) {
//     return(a+b)
// }

// console.log( add(3,4)    ) // should log 7
// console.log( add(9, 102) ) // should log 111


// Aside: Arguments vs Parameters -----------------------------------------------------------------

// What are greeting and name?
// parameters
// What are "Howdy" and "James"?
// arguments
// What are num1 and num2?
// parameters
// What are 3 and 4?
// arguments


// //.                parameters
// function greetUser(greeting, name) { 
//     welcomeEl.textContent = `${greeting}, ${name} 👋`
// }

// //.        arguments
// let hi = "Howdy"
// greetUser(hi, "James")


// function add(num1, num2) {
//     return num1 + num2
// }

// add(3, 4)



// Create a function, getFirst(arr), that returns the first item in the array ---------------------

function getFirst(arr) {
    return arr[0]
}

// Call it with an array as an argument to verify that it works

console.log(getFirst([69,106,56]))