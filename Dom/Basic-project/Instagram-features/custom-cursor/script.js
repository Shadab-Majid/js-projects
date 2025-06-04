const maindiv = document.querySelector('#main')
const cursor = document.querySelector('.cursor')

maindiv.addEventListener('mousemove', function(dets) {
    cursor.style.left = dets.x+"px";
    cursor.style.top = dets.y + "px";
})