// h1 5 p customElements, content of our choice, and second in a few paragraphs
// any paragraphs with second in them, make them blue

let heading = document.createElement('h1')
heading.textContent = "This is a new heading"
heading.setAttribute('id', 'heading1')
document.querySelector('body').appendChild(heading)

let p1 = document.createElement('p')
p1.textContent = "This was created with JavaScript"
p1.setAttribute('id', 'para1')
document.querySelector('body').appendChild(p1)

let p2 = document.createElement('p')
p2.textContent = "This is the second paragraph"
p2.setAttribute('id', 'para2')
document.querySelector('body').appendChild(p2)

let p3 = document.createElement('p')
p3.textContent = "This was created with JavaScript"
p3.setAttribute('id', 'para3')
document.querySelector('body').appendChild(p3)

let p4 = document.createElement('p')
p4.textContent = "Another paragraph with the word second"
p4.setAttribute('id', 'para4')
document.querySelector('body').appendChild(p4)

let p5 = document.createElement('p')
p5.textContent = "This is the fifth paragraph"
p5.setAttribute('id', 'para5')
document.querySelector('body').appendChild(p5)

let mySelection = document.querySelectorAll('p')

mySelection.forEach(function(paragraph) {
    if (paragraph.textContent.includes('second')) {
        paragraph.style.color = "aqua"
    } 
})