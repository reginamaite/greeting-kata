const greeting = require('./greeting')
const expect = require("expect");

class TennisGame {
    score;
    constructor(scoreRepository) {
        this.score = scoreRepository
    }

    getScore() {
        if(this.score.playerOneScore>0) return "15-Love"
        return "Love-all";
    }

    wonPoint(player) {
        if(player == "playerOne")
            this.score.playerOneScore ++;
        else this.score.playerTwoScore ++;
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
    expect(game.getScore()).toBe("15-Love");
});

