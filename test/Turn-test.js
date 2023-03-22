const chai = require('chai');
const assert = chai.assert;

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe ('Turn', function() {
  
  it('should return the selected answer', function() {
    const currentCard = new Card()
    const turn = new Turn('object', currentCard)
    assert.equal(turn.returnGuess(), 'object')
  })

  it('should return the current card', function() {
    const currentCard = new Card()
    const turn = new Turn('object', currentCard)
    assert.equal(turn.returnCard(), currentCard)
  })

  it('should return a boolean based on userChoice', function() {
    const currentCard = new Card()
    const turn1 = new Turn('object', currentCard)
    const turn2 = new Turn('array', currentCard)

    assert.equal(turn1.evaluateGuess(), true)
    assert.equal(turn2.evaluateGuess(), false)
  })

  it('should return a string based on userChoice', function() {
    const currentCard = new Card()
    const turn1 = new Turn('object', currentCard)
    const turn2 = new Turn('array', currentCard)

    assert.equal(turn1.giveFeedback(), 'correct!')
    assert.equal(turn2.giveFeedback(), 'incorrect!')
  })
});
