import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
    getDatabase,
    ref,
    push,
    onValue
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {
    databaseURL: "https://aside-learn-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

// const app = initializeApp(firebaseConfig)
// const database = getDatabase(app)
// const referenceInDB = ref(database, "birthdays")


// const birthdayInputField = document.getElementById("birthday-input")
// const submitButton = document.getElementById("submit-button")

// submitButton.addEventListener("click", function () {
//     push(referenceInDB, birthdayInputField.value)
//     birthdayInputField.value = ""
// })

// const app = initializeApp(firebaseConfig)
// const database = getDatabase(app)
// const referenceInDB = ref(database, "products")

// const productNameInputField = document.getElementById("product-name-input")
// const productValueInputField = document.getElementById("product-value-input")
// const submitButton = document.getElementById("submit-button")

// onValue(referenceInDB, function(snapshot) {
//     console.log(snapshot.val())
// })

// submitButton.addEventListener("click", function() {
//     productNameInputField.value
//     push(referenceInDB, productNameInputField.value)
//     productNameInputField.value = ""
// })


// Aside: Turn an Object into an Array

const loginCredentials = {
    "rafidhoda": "BestPassword123",
    "shahrukhkhan": "InBigCitiesSmallThingsHappen",
    "jackblack": "ThisIsNotTheGreatestPasswordInTheWorld"
}

console.log(Object.values(loginCredentials))