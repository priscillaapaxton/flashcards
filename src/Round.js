const Turn = require('./Turn')

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 1
    this.incorrectGuesses = []
  }
  returnCurrentCard() {
    return this.deck[this.turns];
  }
  takeTurn(userChoice) {
    const turn = new Turn(userChoice, this.returnCurrentCard());
    this.turns ++
    if (!turn.evaluateGuess(userChoice)) {
      this.incorrectGuesses.push(this.deck[this.turns].id)
    };
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    const deckLength = this.deck.length
    const score = this.incorrectGuesses/deckLength
    return score
  }
  endRound() {
    const score = this.incorrectGuesses/deckLength
    console.log(`**Round over!**You answered ${score} of the questions correctly!`)
  }
}
module.exports = Round;