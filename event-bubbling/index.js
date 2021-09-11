// Child's event fires first then the parent's
/* document.querySelector('#parent').addEventListener('click', function() {
    console.log('Parent element was clicked')
}) */

// Child's click will also fire off the parent's click event
/* document.querySelector('#child').addEventListener('click', function() {
    console.log('Child element was clicked')
}) */

/* document.querySelector('#parent').addEventListener('click', function() {
    console.log('Parent element was clicked')
}) */

// Child's click will not fire off the parent's click event
// due to e.stopPropagation()
/* document.querySelector('#child').addEventListener('click', function(e) {
    e.stopPropagation()
    console.log('Child element was clicked')
}) */

// Parent element event fires first
document.querySelector('#parent').addEventListener('click', function() {
    console.log('Parent element was clicked')
}, true)

// Child element event fires second
document.querySelector('#child').addEventListener('click', function() {
    console.log('Child element was clicked')
})