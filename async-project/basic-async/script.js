const anyName = function() {
    console.log('Shadab')
}
const istimeout = setTimeout(anyName,2000)
document.querySelector('#stop').addEventListener('click', function() {
    clearInterval(istimeout)
})

setInterval(function() {
    console.log('Majid')
},2000)