const greeting = require('./greeting')
const expect = require("expect");

class TennisGame {

    getScore() {
        return "Love-all";
    }
}

test('A new game starts with Love-all', () => {
    const game = new TennisGame();
    expect(game.getScore()).toBe("Love-all");
});




