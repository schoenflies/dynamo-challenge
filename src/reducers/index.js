import { ADD_CARD} from '../actions';
import {newShuffledDeck} from '../cards'

const initialState = {
  cards: [],
  deck: newShuffledDeck()
};

export const appReducer = (state = initialState, action) => {
  // Add code which handles each action here
  if (action.type === ADD_CARD) {
    return Object.assign({}, state, { cards: [...state.cards, state.deck.pop()] })
  } 
  return state;
};