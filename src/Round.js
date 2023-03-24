const Turn = require('./Turn')

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 1
    this.incorrectGuesses = []
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }
  takeTurn(userChoice) {
    const turn = new Turn(userChoice, this.returnCurrentCard());
    this.turns ++
    if (!turn.evaluateGuess(userChoice)) {
      this.incorrectGuesses.push(this.deck.cards[this.turns].id)
    };
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    const deckLength = this.deck.countCards()
    const incorrectGuesses = this.incorrectGuesses.length
    const score = incorrectGuesses / deckLength
    return score
  }
  endRound() {
    const score = this.calculatePercentCorrect()
    console.log(`**Round over!**You answered ${score * 100}% of the questions correctly!`)
  }
}
module.exports = Round;