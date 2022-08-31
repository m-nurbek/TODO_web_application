// toggle the vertical nav menu
function toggleNavMenu() {
    let x = document.getElementById("vertical-menu")

    if (x.style.display === "flex") {
        x.style.display = "none"
    } else {
        x.style.display = "flex"
    }
}


// adding new item to the todo list
function addNewItem() {
    // get the value of the user input
    let todotask = document.getElementById("input-field").value

    // if the input is empty => do nothing
    if (todotask === "") {
        return
    }

    // add a div element with text that was in the input field
    let txt = document.createElement("div")
    let txtnode = document.createTextNode(todotask)
    txt.appendChild(txtnode)
    txt.setAttribute('class','list-txt')

    // add the X icon as a button to the end of the added item
    let cross = document.createElement("button")
    let crosstxt = document.createTextNode("\u00D7")
    cross.appendChild(crosstxt)
    cross.setAttribute('class','cross')

    // unite the div and the button under one resulting div tag
    let newtag = document.createElement("div")
    newtag.appendChild(txt)
    newtag.appendChild(cross)
    newtag.setAttribute('class','listdiv')

    // adding close functionality to the button element
    cross.onclick = function() {
        let div = this.parentElement
        div.style.display = "none"
    }

    // append the resulting div tag to the div#tasklist container in the HTML
    const target = document.getElementById("task-list")
    target.appendChild(newtag)

    // empty the input field after the adding item to the list
    document.getElementById("input-field").value = ''
}

// Add item on clicking the button
document.getElementById("addtask-event").onclick = addNewItem
// Add item on pressing the enter key
let input = document.getElementById("input-field")
if (input !== null) {
    input.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            addNewItem()
        }
    })
}

