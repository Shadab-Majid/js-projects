// create four functions: add(), sub(). devide(), multiply()
// call the correct function when the user clicks on the one of the buttons 
//perform the given caculation in the paragraph with id=sum-el


let first_num = document.querySelector('#first-input');
let sec_num = document.querySelector('#second-input');
let sum_el = document.querySelector('.sum_el');
let btns = document.querySelector('button')

// function for adding 
function add() {
    if(first_num.value || sec_num.value) {
        if(isNaN(first_num.value) || isNaN(sec_num.value)) {
            alert('please enter a valid number');
        }
        else {
            let result = parseFloat(first_num.value) + parseFloat(sec_num.value);
            console.log(result);
            sum_el.textContent += result;
            
        }
    }
    else {
        alert('please enter the number');
    }
}

//function for subtracting
function sub() {
    console.log('sub clicked')
    if(first_num.value || sec_num.value) {
        if(isNaN(first_num.value) || isNaN(sec_num.value)) {
            alert('please enter a valid number');
        }
        else {
            let result = parseFloat(first_num.value) - parseFloat(sec_num.value);
            console.log(result);
            sum_el.textContent += result;
            
        }
    }
    else {
        alert('please enter the number');
    }
}

//function for devide
function devide() {
    console.log('devide clicked')
    if(first_num.value || sec_num.value) {
        if(isNaN(first_num.value) || isNaN(sec_num.value)) {
            alert('please enter a valid number');
        }
        else {
            let result = parseFloat(first_num.value) / parseFloat(sec_num.value);
            console.log(result);
            sum_el.textContent += result;
            
        }
    }
    else {
        alert('please enter the number');
    }

}

// function for multiply
function multiply() {
    console.log('multiply clicked')
    if(first_num.value || sec_num.value) {
        if(isNaN(first_num.value) || isNaN(sec_num.value)) {
            alert('please enter a valid number');
        }
        else {
            let result = parseFloat(first_num.value) * parseFloat(sec_num.value);
            if(sum_el) {
                
            }
            console.log(result);
            sum_el.textContent += result;
            
        }
    }
    else {
        alert('please enter the number');
    }
}

