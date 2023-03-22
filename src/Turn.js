const Card = require('./Card')

class Turn { 
  constructor(userChoice, currentCard) {
    this.currentCard = new Card()
    this.userChoice = userChoice
    this.currentCard = currentCard
  }

  returnGuess() {
    return this.userChoice
  }
  returnCard() {
    return this.currentCard
  }
  evaluateGuess() {
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



















