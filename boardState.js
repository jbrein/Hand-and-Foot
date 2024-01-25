import round from "./gameSetUp.js"

class BoardState {
    constructor(hand, foot, calculationField, books, pointThreshold, roundPoints){
        this.hand = hand
        this.food = foot
        this.calculationField = calculationField
        this.books = books
        this.pointThreshold = pointThreshold
        this.roundPoints = roundPoints
    }
}

function getStartingBoard(){
    let hand = []
    let foot = []
    let calculationField = []
    let books = []
    let pointThreshold

    if(round = 1){
        pointThreshold = 60
    } else if (round = 2){
        pointThreshold = 90
    } else if (round = 3){
        pointThreshold = 120
    } else {
        pointThreshold = 150;
    }

    roundPoints = 0
}
