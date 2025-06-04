const bulb = document.querySelector('#bulb')
const onBtn = document.querySelector('.btn');
console.log(onBtn)
onBtn.addEventListener('click', function() {
    bulb.style.backgroundColor = 'yellow';
})