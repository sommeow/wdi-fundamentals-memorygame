
var cards = ["queen", "queen", "king", "king"];

//var cardOne = cards[0];
//var cardTwo = cards[2];
var cardThree = cards[1];
var cardFour = cards[3]; 
var cardsInPlay = [];
//cardsInPlay.push(cardOne);
//cardsInPlay.push(cardTwo);
function checkForMatch () {
    if (cardsInPlay.length === 2) {
     if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("It's a match!");
    } else {
        console.log("Sorry, try again.");
        }
    }
}
function flipcard (cardId) {
    cardsInPlay.push(cards[cardId]);
    //console.log("User flipped " + cardOne);
    //console.log("User flipped " + cardTwo);
    console.log("User flipped" + cards[cardId])
}

flipcard(0);
flipcard(2);
checkForMatch();




