// // template strings/literals

// const recipient = "James"

// // Refactor the email string to use template strings
// // const email = "Hey " + recipient + "! How is it going? Cheers Per"
// const email = `Hey ${recipient}! How is it going? Cheers Per`

// console.log(email)

// ---------------------------------------------------------------------------

// const recipient = "James"
// // Create a new variable, sender, and set its value to your name
// const sender = "Ankit"

// // Use your sender variable instead of "Per"
// const email = `Hey ${recipient}! How is it going? Cheers ${sender}`

// console.log(email)

// ---------------------------------------------------------------------------

const recipient = "James"
const sender = "Per Harald Borgen"

// Break the email string into multiple lines
const email = `
Hey ${recipient}!
How is it going? 
Cheers ${sender}
`

console.log(email)