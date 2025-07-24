import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
    getDatabase,
    ref,
    push,
    onValue
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";


const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-ankit-chamke-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
// Challenge: Create a const called 'referenceInDB' and use the ref function to create a reference called 'leads' in the database
const referenceInDB = ref(database, "leads")


const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

// Challenge: Log out a snapshot of your database when a new value is added to it
onValue(referenceInDB, function (snapshot) {
    // console.log(leads.val())
    const snapshotValues = snapshot.val()
    // Challenge: Create a const called 'leads' which is an array containing the values inside of the snapshotValues object
    const leads = Object.values(snapshot.val())
    // console.log(leads)
    render(leads)
})

deleteBtn.addEventListener("dblclick", function () {
})

inputBtn.addEventListener("click", function () {
    push(referenceInDB, inputEl.value)
    // Challenge: Import the 'push' function and modify the line above to push inputEl.value to the referenceInDB in the database
    inputEl.value = ""
})