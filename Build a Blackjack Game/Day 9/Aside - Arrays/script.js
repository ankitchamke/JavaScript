// Array - ordered list of items - coposite / complex data type

// Arrays with multiple data types---------------------------------------------------------------
// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)

// let myself = ["Ankit Chamke",19, true]
// console.log(myself)

// Aside: Array.push() and .pop()-----------------------------------------------------------------

// let cards = [1, 2]
// cards.push(3)
// console.log(cards)

// CHALLENGE 

// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage)
console.log(messages)
messages.pop()
console.log(messages)