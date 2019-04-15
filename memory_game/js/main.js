
var cards = ["queen", "queen", "king", "king"];

var cardOne = cards[0];
var cardTwo = cards[2];
var cardThree = cards[1];
var cardFour = cards[3]; 
var cardsInPlay = [];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
if (cardsInPlay.length === 2) {
    if (cards[0] === cards[1]) {
    alert("It's a match!");
} else {
    alert("Sorry, try again.");
    }
};



