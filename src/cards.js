import shuffle from 'shuffle-array';

const suits = ['C', 'D', 'H', 'S'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

/**
 * Generator function for a single card
 *
 * @param {string} value - The value of the card
 * @param {string,number} suit - The suite of the card
 */
export const card = (value, suit) => ({
  face: value + suit,
  value,
  suit
});

/**
 * Function for shuffling a deck of cards using the Fisher-Yates algorithm
 *
 */
export const generateDeck = () =>
    shuffle(suits.reduce((cards, suit) =>
        [...cards, ...values.map(value => card(value, suit))]
    , []));