
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
    cardImage: "images/king-of-diamonds.png"
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
        alert("It's a match!");
    } else {
        alert("Sorry, try again.");
        }
    }
}
function flipcard () {
    var cardId = this.getAttribute('data-id')
    cardsInPlay.push(cards[cardId].rank);
    console.log("User flipped " + cards[cardId].rank)
    console.log(cards[cardId].suit)
    console.log(cards[cardId].cardImage)
    this.setAttribute("src", cards[cardId].cardImage);
    checkForMatch();
}
function createBoard () {
    for (var i =0; i < cards.length; i++){
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipcard);
        document.getElementById('game-board').appendChild(cardElement);
    }
}

createBoard();



