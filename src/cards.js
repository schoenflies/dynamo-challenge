import shuffle from 'shuffle-array';

const suits = ['C', 'D', 'H', 'S'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

export const card = (value, suit) => ({
  face: value + suit,
  value,
  suit
});

export const generateDeck = () =>
    shuffle(suits.reduce((cards, suit) =>
        [...cards, ...values.map(value => card(value, suit))]
    , []));