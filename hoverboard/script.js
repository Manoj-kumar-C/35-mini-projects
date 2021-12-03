let container = document.getElementById('container')
let colors = ['darkviolet', 'green', 'aqua', 'red', 'orange']
let BOX = 550

for(let i = 0; i < BOX; i++) {
    let box = document.createElement('div')
    box.classList.add('box')

    box.addEventListener('mouseover', () => setColor(box))

    box.addEventListener('mouseout', () => removeColor(box))

    container.appendChild(box)
}

function setColor(element) {
   let color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}