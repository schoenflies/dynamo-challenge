import { ADD_CARD, SHUFFLE_DECK } from '../actions';
import { newShuffledDeck } from '../cards'

const initialState = {
  cards: [],
  deck: newShuffledDeck()
};

export const appReducer = (state = initialState, action) => {
  // Add code which handles each action here
  if (action.type === ADD_CARD) {
    return Object.assign({}, state, { cards: [...state.cards, state.deck.pop()] })
  } else if (action.type === SHUFFLE_DECK) {
  	return Object.assign({}, state, { cards: [], deck: newShuffledDeck()})
  } else {
    return state;
  }
};