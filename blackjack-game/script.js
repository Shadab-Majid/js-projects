let firstCard = Math.floor((Math.random() * 11) + 2);
let secondCard = Math.floor((Math.random() * 11) + 2)
let cards = [firstCard, secondCard]
let sum = cards[0] + cards[1];
let isAlive = true;
let message = "";
let hasBlackjack = false;
let sumEl = document.querySelector('#sum');
let cardEl = document.querySelector('#cards');

// stroe the message-el paragraph in a variable called messageEl
let messageEl = document.querySelector('#message-el');

// start game function 
function startGame() {
    renderGame();
}

// render function to render the result and sum and cards
function renderGame() {
    cardEl.textContent = 'Cards: ' + cards

    // appending the sum to the sum element in ui
    sumEl.textContent = 'Sum:' + sum;
    if(sum <= 20) {
    message = 'You want to draw a new card'
    } else if(sum === 21) {
        message = "Wohoo! You've got Blackjac!";
        hasBlackjack = true;
    } else {
        message = "You're out of the game"
        isAlive = false;
    }

    // display the message in message-el paragrpah
    messageEl.textContent = message; 
}

// new card function 
function newCard() {
    let newCard = Math.floor((Math.random() *11) + 2)
    cards.push(newCard); 
    console.log(cards);
    sum += newCard;
    console.log(sum);
    renderGame();
}

//CASH OUT
if(hasBlackjack) {
    console.log('Here is your money');
}