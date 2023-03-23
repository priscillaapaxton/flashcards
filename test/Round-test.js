const chai = require('chai');
const assert = chai.assert;

const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Turn = require('../src/Turn')
const Round = require('../src/Round')
const cardData = require('../src/data')

describe('Round', function() {
  let deck;
  let turn;
  let round;
  let data;
  
  beforeEach(() => {

    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck)
    data = cardData
    turn = new Turn('pug', card1)
  })

  it('should hold the deck', function() {
   
    assert.equal(round.deck, deck)
  })

  it('should store and increase turns', function() {
    const turn1 = new Turn('sea otter', card1)
    assert.equal(round.turns, 1)

    round.takeTurn('sea otter')

    // assert.equal(round.turns, 2)
  })

  it('should return the current card', function() {

    assert.equal(round.returnCurrentCard(), round.deck[0])
  })

  it('should store and update incorrect guesses', function() {

    assert.equal(round.incorrectGuesses, 0)

    // round.takeTurn('array')

    // assert.equal(round.incorrectGuesses.length, 1)
  })

})