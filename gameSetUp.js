import Deck from "./deck.js";
import getStartingBoard from ".boardState.js"
import player1 from "./players.js";
import player2 from "./players.js";
import player3 from "./players.js";
import player4 from "./players.js";



//We have a pool of fake players
const playerPool = new Array();
playerPool.push(player1);
playerPool.push(player2);
playerPool.push(player3);
playerPool.push(player4);

let numberOfPlayers = playerPool.length;

let round = 0;

startGame()
function startGame(){

    // Round increments, pointThresholds are calculated
    round += 1;

    /*
    // Player boardStates are generated
    for(let contender = 0; contender < playerPool.length; contender++){
        playerPool[contender].getStartingBoard()
    }
*/
    // Deck is generated based upon numberOfPlayers
    const deck = new Deck();
    deck.shuffle();

    // Deal cards to players to populate hands and feet, will iterate through until the first player has 11 cards, then stops.
    for(let a = 0; a < numberOfPlayers; a++){
        let currentDealee = playerPool[a];
        if(currentDealee.hand.length < 11){
            let cardToDealFoot = deck.pop();
            currentDealee.foot.push(cardToDealFoot);
            deck.pop();
            let cardToDealHand = deck.pop();
            currentDealee.hand.push(cardToDealHand);
            deck.pop();
        }
    }


}