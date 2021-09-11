let mySelection = document.querySelectorAll('p')

mySelection.forEach(function(paragraph) {
    if (paragraph.textContent.includes('second')) {
        paragraph.style.color = "aqua"
    } 
})