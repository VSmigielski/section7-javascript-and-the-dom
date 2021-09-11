document.querySelector('#myForm').addEventListener('submit', function(e) {
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    if (e.target.elements.email.checked) {
        console.log("The email box was checked")
    } else {
        console.log("The email box was NOT checked")
    }
    console.log(e.target.elements.cities.value)
})

