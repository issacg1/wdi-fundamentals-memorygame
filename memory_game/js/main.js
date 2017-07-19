var cards = [
 {
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
 },
 {
 	rank: "queen",
 	suit: "diamonds",
 	cardImage: "images/queen-of-diamonds.png",
 },
 {
 	rank: "king",
 	suit: "hearts",
 	cardImage: "images/king-of-hearts.png",
 },
 {
 	rank: "king",
 	suit: "diamonds",
 	cardImage: "images/king-of-diamonds.png",
 },
];

var cardsInPlay = [];

//To save the flipped cards into the holder Array.
var flipCard = function(cardId){
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank)
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch();
}	

//To check that the holder Array contains two cards.
var checkForMatch = function(){
	if(cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
			alert("you found a match")
		}
		else{
			alert("sorry try again!")
		}
	}
}

flipCard(0);
flipCard(2);