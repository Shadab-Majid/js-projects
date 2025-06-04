const addBtn = document.querySelector('#add')
let content = document.querySelector('h5')

check = 0
addBtn.addEventListener('click', function() {
    if(check == 0) {
        content.textContent = 'Owl has added to the animal list';
        content.style.color = "darkred"
        addBtn.textContent = 'Remove'
        check = 1;
    } 
    else {
        content.textContent = 'Add Animal';
        content.style.color = "darkred"
        addBtn.textContent = 'Add Animal'
        check = 0
    }
})  