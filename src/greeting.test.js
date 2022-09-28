const greeting = require('./greeting')
const expect = require("expect");

class TennisGame {
    score;
    constructor(scoreRepository) {
        this.score = scoreRepository
    }

    getScore() {
        let rightSide
        if(this.scoresAreTied()){
            if(this.score.playerOneScore >=3) return "Deuce"
            rightSide = "all"
        }else rightSide = this.getSideScore(this.score.playerTwoScore)
        if(this.bothHaveMoreThan3Points()){
            return this.getWhoIsWinning();
        }
        return `${this.getSideScore(this.score.playerOneScore)}-${rightSide}`;
    }

    getWhoIsWinning() {
        if (this.playerTwoIsUpByTwoPoints()) return "Game player2"
        else if (this.playerTwoIsUpByAPoint()) return "Adv-2"
        else if (this.playerOneIsUpByTwoPoints()) return "Game player1"
        else return "Adv-1"
    }

    playerOneIsUpByTwoPoints() {
        return this.score.playerOneScore > this.score.playerTwoScore + 1;
    }

    playerTwoIsUpByAPoint() {
        return this.score.playerTwoScore > this.score.playerOneScore;
    }

    playerTwoIsUpByTwoPoints() {
        return this.score.playerTwoScore > this.score.playerOneScore + 1;
    }

    bothHaveMoreThan3Points() {
        return this.score.playerOneScore >= 3 && this.score.playerTwoScore >= 3;
    }

    scoresAreTied = () =>this.score.playerOneScore == this.score.playerTwoScore;


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

test('When player two scores on 40-15, score is 40-30', () => {
    const scoreRepository = new ScoreRepository(3,1)
    const game = new TennisGame(scoreRepository);
    game.wonPoint("playerTwo")
    expect(game.getScore()).toBe("40-30");
});

test('When player two scores on 40-30, score is Deuce', () => {
    const scoreRepository = new ScoreRepository(3,2)
    const game = new TennisGame(scoreRepository);
    game.wonPoint("playerTwo")
    expect(game.getScore()).toBe("Deuce");
});

test('When player two scores on Deuce, score is Adv-2', () => {
    const scoreRepository = new ScoreRepository(3,3)
    const game = new TennisGame(scoreRepository);
    game.wonPoint("playerTwo")
    expect(game.getScore()).toBe("Adv-2");
});

test('When player two scores on Avg-2, score is Game player2', () => {
    const scoreRepository = new ScoreRepository(3,4)
    const game = new TennisGame(scoreRepository);
    game.wonPoint("playerTwo")
    expect(game.getScore()).toBe("Game player2");
});

test('When player One scores on Avg-2, score is Deuce', () => {
    const scoreRepository = new ScoreRepository(3,4)
    const game = new TennisGame(scoreRepository);
    game.wonPoint("playerOne")
    expect(game.getScore()).toBe("Deuce");
});

test('When player One scores on Deuce, score is Adv-1', () => {
    const scoreRepository = new ScoreRepository(3,3)
    const game = new TennisGame(scoreRepository);
    game.wonPoint("playerOne")
    expect(game.getScore()).toBe("Adv-1");
});

test('When player one scores on Avg-1, score is Game player1', () => {
    const scoreRepository = new ScoreRepository(4,3)
    const game = new TennisGame(scoreRepository);
    game.wonPoint("playerOne")
    expect(game.getScore()).toBe("Game player1");
});
