let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// 1. Grab the SAVE TAB button and store it in a tabBtn variable
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// const tabs = [
//     { url: "https://www.linkedin.com/in/ankitchamke/" }
// ]

// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
tabBtn.addEventListener("click", function () {


    // // Grab the URL of the current tab!
    // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //     // since only one tab should be active and in the current window at once
    //     // the return variable should only have one entry
    //     let activeTab = tabs[0]
    //     let activeTabId = activeTab.id // or do whatever you need
    // })

    // Save the url instead of logging it out
    // console.log(tabs[0].url)
    // console.log(tabs[0].url)


    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { })

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // console.log(tabs)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)

    })

})


// Refactor the function so that it takes a parameter, leads, that it uses
// instead of the global myLeads variable. Remember to update all invocations 
// of the function as well.

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

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})