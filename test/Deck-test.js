const chai = require('chai');
const assert = chai.assert;

const data = require('../src/data')
const Card = require('../src/Card')
const Deck = require('../src/Deck')

const cards = [new Card(69, "What is?", ["this", "that"], "that")]

describe ('Deck', function() {

  it('should return the number of cards in deck', function() {
    const deck1 = new Deck(cards)
    assert.equal(deck1.countCards(), 1)
  })
})