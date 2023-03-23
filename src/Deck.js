const data = require('../src/data')
const Card = require('../src/Card')

const cards = data.prototypeData.map((c) => new Card(c.id, c.question, c.answers, c.correctAnswer))

class Deck {
  constructor(cards) {
    this.cards = cards;
  }
  countCards() {
    return this.cards.length
  }
}

module.exports = Deck;


