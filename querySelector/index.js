// Older version of js id getting
// let mySelection = document.getElementById('para2')

// Older version of js class getting
// let mySelection = document.getElementByClass('para2')

// New selection using id
// let mySelection = document.querySelector("#para2")
// mySelection.textContent = "This was changed by JavaScript"

let mySelection = document.querySelectorAll(".myClass")
mySelection.forEach(function(para) {
    para.textContent = "JavaScript changed this"
}) 
