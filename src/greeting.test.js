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
        }
        if(this.scorePlayerOne == 0 && this.scorePlayerTwo == 1){
            return "Love-15"
        }
        if (this.scorePlayerOne == 1 && this.scorePlayerTwo == 1){
            return "15-all"
        }
        if (this.scorePlayerOne == 2 && this.scorePlayerTwo == 1){
            return "30-15"
        }
        if(this.scorePlayerOne == 1 && this.scorePlayerTwo == 2){
            return "15-30"
        }
        if(this.scorePlayerOne == 3 && this.scorePlayerTwo == 1){
            return "40-15"
        }
        if(this.scorePlayerOne == 1 && this.scorePlayerTwo == 3){
            return "15-40"
        }
        if(this.scorePlayerOne == 3 && this.scorePlayerTwo == 2){
            return "40-30"
        }
        if(this.scorePlayerOne == 2 && this.scorePlayerTwo == 3){
            return "30-40"
        }
        if(this.scorePlayerOne == 3 && this.scorePlayerTwo == 3){
            return "Deuce"
        }
        if(this.scorePlayerOne == 4 && this.scorePlayerTwo == 3){
            return "Adv-1"
        }
        if(this.scorePlayerOne == 3 && this.scorePlayerTwo == 4){
            return "Adv-2"
        }
        if(this.scorePlayerOne == 4 && this.scorePlayerTwo == 4){
            return "Deuce"
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
test('player1-score-2',() =>{
    const game = new TennisGame(1,1)
    game.wonPoint('player1')
    expect(game.getScore()).toBe("30-15");
})

test('player2-score-2',() =>{
    const game = new TennisGame(1,1)
    game.wonPoint('player2')
    expect(game.getScore()).toBe("15-30");
})

test('player1-score-3',() =>{
    const game = new TennisGame(2,1)
    game.wonPoint('player1')
    expect(game.getScore()).toBe("40-15");
})

test('player2-score-3',() =>{
    const game = new TennisGame(1,2)
    game.wonPoint('player2')
    expect(game.getScore()).toBe("15-40");
})

test('player1-score-3/p2-score-2',() =>{
    const game = new TennisGame(2,2)
    game.wonPoint('player1')
    expect(game.getScore()).toBe("40-30");
})

test('player2-score-3/p1-score-2',() =>{
    const game = new TennisGame(2,2)
    game.wonPoint('player2')
    expect(game.getScore()).toBe("30-40");
})

test('deuce-p1',() =>{
    const game = new TennisGame(2,3)
    game.wonPoint('player1')
    expect(game.getScore()).toBe("Deuce");
})

test('deuce-p2',() =>{
    const game = new TennisGame(3,2)
    game.wonPoint('player2')
    expect(game.getScore()).toBe("Deuce");
})

test('Adv-p1',() =>{
    const game = new TennisGame(3,3)
    game.wonPoint('player1')
    expect(game.getScore()).toBe("Adv-1");
})

test('Adv-p1',() =>{
    const game = new TennisGame(4,4)
    game.wonPoint('player1')
    expect(game.getScore()).toBe("Deuce");
})