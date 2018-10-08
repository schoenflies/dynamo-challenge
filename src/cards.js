// import shuffle from 'shuffle-array';

const suits = ['C', 'D', 'H', 'S'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

/**
 * Generator function for a single card
 *
 * @param {string} value - The value of the card
 * @param {string,number} suit - The suite of the card
 */
const card = (value, suit) => ({
  face: value + suit,
  value,
  suit
});

/**
 * Shuffle a deck of cards.  Loop through the array and swap the card with a random one in the same deck.
 *
 * @param {array} cards - A deck of cards
 */

const shuffle = (cards) => {
  for (let i = 0; i < cards.length; i++) {
    let idx = Math.floor(Math.random() * 52);
    [cards[i], cards[idx]] = [cards[idx], cards[i]];
  }
  return cards;
}

/**
 * Generator function for a shuffled deck of cards.
 *
 */

export const generateDeck = () =>
    shuffle(suits.reduce((cards, suit) =>
        [...cards, ...values.map(value => card(value, suit))]
    , []));




