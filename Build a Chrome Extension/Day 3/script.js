// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })


// // 1. Create a variable, listItems, to hold all the HTML for the list items
// // Assign it to an empty string to begin with
// let listItems = ""

// for (let i = 0; i < myLeads.length; i++) {
//     // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
//     // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
//     listItems += "<li>" + myLeads[i] + "</li>"
//     // console.log(listItems)


//     // Let's try a different method!
//     // create element
//     // set text content
//     // append to ul

//     // const li = document.createElement("li")
//     // li.textContent = myLeads[i]
//     // ulEl.append(li)

// }

// // 3. Render the listItems inside the unordered list using ulEl.innerHTML
// ulEl.innerHTML = listItems




let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    // 1. Wrap the code below in a renderLeads() function
    // 2. Call the renderLeads() function
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // Wrap the lead in an anchor tag (<a>) inside the <li>
        // Can you make the link open in a new tab?
        // listItems += "<li> <a target='_blank' href='" + myLeads[i] +"'>" + myLeads[i] + "</li>"
        // Refactor the code below to use a template string
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