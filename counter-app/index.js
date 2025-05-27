/**
 * 
 * format
 * initialize the count as 0
 * listen for clicks onthe increament button 
 * increament the count variable when the button is clicked
 * chagne the count-el in the html to reflect the new count
 * 
 * 
 */
let count = 0;
let countE1 = document.getElementById('count-el');
let p_el = document.querySelector('#p-el');
console.log(p_el)
function increment() {
    count += 1;
    countE1.innerHTML = count;
}

function save () { 
    p_el.textContent += ' ' + count + ' ' + '-'
    count = 0;
    countE1.innerHTML = count;
}
