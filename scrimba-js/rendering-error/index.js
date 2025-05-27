/**
 * when the  user will click on the t purchase button, render out 'something wen wrong, please try again letter' in the paragraph 
 * that has the id= 'error'.
 */


let btn = document.querySelector('#btn');
const error = document.querySelector('#error');

console.log(btn, error)

function showError () {
    error.innerHTML  = 'Something went wrong, please try again letter'
}