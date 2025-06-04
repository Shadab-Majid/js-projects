const post = document.querySelector('img');
const icon = document.querySelector('i')
let click = 0;
post.addEventListener('click', function() {
    click++; 
    if(click == 2) {
        icon.style.color = "red";
        click = 0;
    } else {
        icon.style.color = "#fff";

    }
    console.log(click)
})