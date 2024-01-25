import numberOfPlayers from "./cards.js";

const SUITS = ["♥", "♦", "♠", "♣"]
const IDENTIFIERS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

// Cards have a suit, an identifier, and a point value dependant on their IDENTIFIERS and some based upon their colors
// Creating the Deck class
export default class Deck {
    constructor(cards = getDeck()) {
        this.cards = cards;
    }

    get numberOfCards(){
        return this.cards.length;
    }

    shuffle(){
        for(let i = this.numberOfCards - 1; i >0; i--){
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }
}

class Card {
    constructor(suit, identifier, points) {
        this.suit = suit
        this.identifier = identifier
        this.points = points
    }

    // Will be useful for applying point values for threes and html eventually
    getColor() {
        return this.suit === "♥" || this.suit ===  "♦" ? 'red' : 'black';
    }
}


// Generates the Deck of cards for the game. Number of decks are number of players + 1 and decks include basic 52 cards + jokers 
function getDeck() {
    let deck = new Array();
    
    //Create Joker card
    const joker = {
        identifier: "Joker",
        points: "50",
        isWild: "true"
    }

    // Adding all the jokers first thing
    for(let a = 0; a <= numberOfPlayers; a++){
        deck.push(joker);
        deck.push(joker);
    }


    // Iterates through the SUITS, creating a card for each suit/identifier combination
    for(let i =0; i < SUITS.length; i++){
        for(let x = 0; x < IDENTIFIERS.length; x++){
            let card = {Identifier: IDENTIFIERS[x], Suit: SUITS[i]}

            let iden = card.identifier

            // Assigning points based upon IDENTIFIERS and colors
            if (iden == "3" && card.getColor == 'red'){
            card.points = -500
            } else if (iden == "3"){
            card.points = -5
            } else if (iden == "A"){
            card.points = 20
            } else if (iden == "2"){
                // would have combined with Aces with an || statement, but 2s are wild
                card.points = 20
                card.isWild = "true"
            }else if (iden == "4" || iden == "5"|| iden == "6" || iden == "7"|| iden =="8"){
            card.points = 5
            } else {
                card.points = 10
            }
            // The individual card has now been created, but rather than pushing it once, we will use a loop to construct all the decks at once
            for(let z = 0; z <= numberOfPlayers; z++){
                deck.push(card)
            }
        }
    }
}
