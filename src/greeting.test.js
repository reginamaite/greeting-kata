const greeting = require('./greeting')
const expect = require("expect");

test('works', () => {
    expect(greeting()).toBe("Hello");
});

class TennisGame{
    scorePlayerOne = 0
    scorePlayerTwo = 0
    constructor(){

    }
    getScore(){
        if (this.scorePlayerOne == 1 && this.scorePlayerTwo == 0){
            return "15-Love"
        }
        return "Love-all"
    }
    wonPoint(player){
      if (player == "player1"){
        this.scorePlayerOne++
      }
      else{
        this.scorePlayerTwo++
      }
    }
}

test('start-game',() =>{
    const game = new TennisGame()
    expect(game.getScore()).toBe("Love-all");
})

test('player1-score',() =>{
    const game = new TennisGame()
    game.wonPoint('player1')
    expect(game.getScore()).toBe("15-Love");
})

test('player1-score',() =>{
    const game = new TennisGame()
    game.wonPoint('player1')
    expect(game.getScore()).toBe("15-Love");
})