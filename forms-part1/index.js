// Event is firing on each keystroke
/* document.querySelector('#myInput').addEventListener('input', function(e) {
    // logs the input value from the user
    console.log(e.target.value)
}) */

document.querySelector('#myForm').addEventListener('submit', function(e) {
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
})