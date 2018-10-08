import { ADD_CARD, addCard, SHUFFLE_DECK, shuffleDeck } from './index';

describe('addCard', () => {
  it('Should return the action', () => {
    const action = addCard();
    expect(action.type).toEqual(ADD_CARD);
  });
});

describe('shuffleDeck', () => {
  it('Should return the action', () => {
    const action = shuffleDeck();
    expect(action.type).toEqual(SHUFFLE_DECK);
  });
});