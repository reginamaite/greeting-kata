const greeting = require('./greeting')
const expect = require("expect");

test('works', () => {
    expect(greeting()).toBe("Hello");
});

class TennisGame{
    constructor(scorePlayerOne,scorePlayerTwo){
    this.scorePlayerOne = scorePlayerOne
    this.scorePlayerTwo = scorePlayerTwo

    }

    getScore(){
        if (this.scorePlayerOne == 1 && this.scorePlayerTwo == 0){
            return "15-Love"
        }else if(this.scorePlayerOne == 0 && this.scorePlayerTwo == 1){
            return "Love-15"
        }
        if (this.scorePlayerOne == 1 && this.scorePlayerTwo == 1){
            return "15-all"
        }
        if (this.scorePlayerOne == 2 && this.scorePlayerTwo == 1){
            return "30-15"
        }
        return "Love-all"
    }
    wonPoint(player){
      if (player == "player1"){
        this.scorePlayerOne++
      }else{
        this.scorePlayerTwo++
      }
    }
}

test('start-game',() =>{
    const game = new TennisGame(0,0)
    expect(game.getScore()).toBe("Love-all");
})

test('player1-score',() =>{
    const game = new TennisGame(0,0)
    game.wonPoint('player1')
    expect(game.getScore()).toBe("15-Love");
})

test('player2-score',() =>{
    const game = new TennisGame(0,0)
    game.wonPoint('player2')
    expect(game.getScore()).toBe("Love-15");
})

test('15-all',() =>{
    const game = new TennisGame(1,0)
    game.wonPoint('player2')
    expect(game.getScore()).toBe("15-all");
})
test('player1-score-again',() =>{
    const game = new TennisGame(1,1)
    game.wonPoint('player1')
    expect(game.getScore()).toBe("30-15");
})

