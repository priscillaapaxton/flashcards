const chai = require('chai');
const assert = chai.assert;

const Turn = require('../src/Turn')
const Card = require('../src/Card')
const Deck = require('../src/Deck')

describe ('Turn', function() {
  let turn;
  let currentCard;
  let card1
  let card2
  let card3
  let deck

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    turn = new Turn('pug', card1)
  })
  
  it('should return the selected answer', function() {
   
    assert.equal(turn.returnGuess(), 'pug')
  })

  it('should return the current card', function() {
    
    assert.equal(turn.returnCard(), card1)
  })

  it('should return a boolean based on userChoice', function() {
    const turn1 = new Turn('sea otter', card1)
    const turn2 = new Turn('pug', card1)

    assert.equal(turn1.evaluateGuess(), true)
    assert.equal(turn2.evaluateGuess(), false)
  })

  it('should return a string based on userChoice', function() {
    const turn1 = new Turn('sea otter', card1)
    const turn2 = new Turn('pug', card1)

    assert.equal(turn1.giveFeedback(), 'correct!')
    assert.equal(turn2.giveFeedback(), 'incorrect!')
  })
});
