const chai = require('chai');
const assert = chai.assert;

const data = require('../src/data')
const Card = require('../src/Card')
const Deck = require('../src/Deck')

describe ('Deck', function() {

  function getTestCards() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    return [card1, card2, card3]
  }
  
  it('should return the number of cards in deck', function() {
    const cards = getTestCards();
    const deck1 = new Deck(cards)
    assert.equal(deck1.countCards(), 3)
  })
})