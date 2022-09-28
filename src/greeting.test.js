const greeting = require('./greeting')
const expect = require("expect");

class TennisGame {
    score;
    constructor(scoreRepository) {
        this.score = scoreRepository
    }

    getScore() {
        let rightSide
        let leftSide = this.getSideScore(this.score.playerOneScore)
        if(this.score.playerOneScore == this.score.playerTwoScore){
            rightSide = "all"
        }else rightSide = this.getSideScore(this.score.playerTwoScore)

        if(this.score.playerOneScore>0) return `${leftSide}-${rightSide}`
        return `${leftSide}-${rightSide}`;
    }

    wonPoint(player) {
        if(player == "playerOne")
            this.score.playerOneScore ++;
        else this.score.playerTwoScore ++;
    }

    getSideScore(score){
        const map = new Map()

        map.set(0,'Love')
        map.set(1,'15')
        map.set(2,'30')
        map.set(3,'40')
        return map.get(score)
    }
}



class ScoreRepository {
    playerOneScore = 0
    playerTwoScore = 0

    constructor(playerOneScore, playerTwoScore) {
        this.playerOneScore = playerOneScore
        this.playerTwoScore = playerTwoScore
    }

}

test('A new game starts with Love-all', () => {
    const scoreRepository = new ScoreRepository(0,0)
    const game = new TennisGame(scoreRepository);
    expect(game.getScore()).toBe("Love-all");
});

test('When player one scores, score is 15-Love', () => {
    const scoreRepository = new ScoreRepository(0,0)
    const game = new TennisGame(scoreRepository);
    game.wonPoint("playerOne")
    expect(game.getScore()).toBe("15-Love");
});


test('When player two scores on 15-Love, score is 15-all', () => {
    const scoreRepository = new ScoreRepository(1,0)
    const game = new TennisGame(scoreRepository);
    game.wonPoint("playerTwo")
    expect(game.getScore()).toBe("15-all");
});

test('When player one scores on 15-all, score is 30-15', () => {
    const scoreRepository = new ScoreRepository(1,1)
    const game = new TennisGame(scoreRepository);
    game.wonPoint("playerOne")
    expect(game.getScore()).toBe("30-15");
});

test('When player one scores on 30-15, score is 40-15', () => {
    const scoreRepository = new ScoreRepository(2,1)
    const game = new TennisGame(scoreRepository);
    game.wonPoint("playerOne")
    expect(game.getScore()).toBe("40-15");
});
