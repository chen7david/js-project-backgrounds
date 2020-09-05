const buttons = document.querySelectorAll('.btn')
const display = document.querySelector('.container')
let selectedColor = 'rgb(179, 182, 17)'

function rand(limit){
    return Math.floor(Math.random() * limit)
}

function generateColor(){
    return `rgb(${rand(255)},${rand(255)},${rand(255)})`
}

function setDisplayColor(){
    if(selectedColor == null) return
    console.log(this)
    display.style.backgroundColor = this.style.backgroundColor
}

function reset(){
    buttons.forEach(btn => {
        btn.style.backgroundColor = generateColor()
        btn.addEventListener('click', setDisplayColor)
    })
}

display.addEventListener('click', reset)


