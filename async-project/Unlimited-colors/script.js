
//generate random color


const randomColor = function() {
    const hex = '0123456789ABCDEF'
    let color = "#"
    for(let i = 0; i < 6; i++) {
        console.log(Math.floor(Math.random() * 16))
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
let intervalId
const startChangingColor = function() {
    if(!intervalId) {
        intervalId = setInterval(changeBgColor, 1000)
    }   
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function() {
console.log('stop')
   clearInterval(intervalId)
   intervalId = null
}


document.querySelector("#start").addEventListener("click", startChangingColor)

document.querySelector("#stop").addEventListener("click", stopChangingColor)
