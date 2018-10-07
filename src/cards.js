import shuffle from 'shuffle-array';

const suits = ['♣', '♦', '♥', '♠'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const colors = { '♣': 'black', '♦': 'red', '♥': 'red', '♠': 'black' };

export const card = (value, suit) => ({
  face: value + suit,
  value,
  suit,
  color: colors[suit]
});

export const newShuffledDeck = () =>
    shuffle(suits.reduce((cards, suit) =>
        [...cards, ...values.map(value => card(value, suit))]
    , []));