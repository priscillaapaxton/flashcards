const Card = require('./Card')
const Deck = require('./Deck')

const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')

class Turn { 
  constructor(userChoice, currentCard) {
    this.userChoice = userChoice
    this.currentCard = currentCard
  }

  returnGuess() {
    return this.userChoice
  }
  returnCard() {
    return this.currentCard
  }
  evaluateGuess(userChoice) {
    console.log(this.userChoice)
    if (this.userChoice === this.currentCard.correctAnswer) {
      return true
    } else {
      return false
    }
  }
  giveFeedback() {
    if (this.userChoice === this.currentCard.correctAnswer) {
      return `correct!`
    } else {
      return `incorrect!`
    }
  }
}

module.exports = Turn;



















