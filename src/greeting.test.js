const greeting = require('./greeting')
const expect = require("expect");

class TennisGame {
    playerOneScore=0;

    getScore() {
        if(this.playerOneScore>0) return "15-Love"
        return "Love-all";
    }

    wonPoint(player) {
        this.playerOneScore ++;
    }
}

test('A new game starts with Love-all', () => {
    const game = new TennisGame();
    expect(game.getScore()).toBe("Love-all");
});

test('When player one scores, score is 15-Love', () => {
    const game = new TennisGame();
    game.wonPoint("playerOne")
    expect(game.getScore()).toBe("15-Love");
});


