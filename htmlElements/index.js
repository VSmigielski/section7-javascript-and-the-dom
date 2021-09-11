let p1 = document.createElement('p')
p1.textContent = "This was created with JavaScript"
p1.setAttribute('id', 'para1')
document.querySelector('body').appendChild(p1)

let p2 = document.createElement('p')
p2.textContent = "This is the second paragraph"
p2.setAttribute('id', 'para2')
document.querySelector('body').appendChild(p2)

let heading = document.createElement('h1')
heading.textContent = "This is a new heading"
heading.setAttribute('id', 'heading1')
// relatively new method (adds heading before paragraph 1)
// document.querySelector('#para1').before(heading)
// adds heading after paragraph 1
document.querySelector('#para1').after(heading)