const util = require('./util')
const Card = require('./Card')
const Deck = require('./Deck')
const Turn = require('./Turn')
const Round = require('./Round')
const data = require('./data')

class Game {
  constructor() {
    this.currentRound = null
  }
    
  start() {
    const cards = data.prototypeData.map((c) => new Card(c.id, c.question, c.answers, c.correctAnswer))
    const deck = new Deck(cards)
    this.currentRound = new Round(deck)
    this.printMessage(deck)
    this.printQuestion(this.currentRound)
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;