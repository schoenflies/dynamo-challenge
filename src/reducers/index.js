import { ADD_CARD, SHUFFLE_DECK } from '../actions';
import { generateDeck } from '../cards'

const initialState = {
  cards: [],
  deck: generateDeck()
};

export const appReducer = (state = initialState, action) => {
  if (action.type === ADD_CARD) {
    return Object.assign({}, state, { cards: [...state.cards, state.deck.pop()] })
  } else if (action.type === SHUFFLE_DECK) {
    return Object.assign({}, state, { cards: [], deck: generateDeck() })
  } else {
    return state;
  }
};