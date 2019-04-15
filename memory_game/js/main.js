
var cards = [
{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
},
{
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
},
{
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
},
{
    rank: "king",
    suit: "diamonds",
    cardImage: "images/kind-of-diamonds.png"
}
];
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
    cardsInPlay.push(cards[cardId].rank);
    console.log("User flipped " + cards[cardId].rank)
    console.log(cards[cardId].suit)
    console.log(cards[cardId].cardImage)
}

flipcard(0);
flipcard(2);
checkForMatch();




