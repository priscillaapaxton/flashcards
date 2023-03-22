class Card {
  constructor(id, question, answers, correctAnswer) {
    this.id = 1 || id
    this.question = 'What allows you to define a set of related information using key-value pairs?' || question
    this.answers = ['object', 'array', 'function'] || answers
    this.correctAnswer = 'object' || correctAnswer 
  }
}

module.exports = Card;