import { ADD_CARD} from '../actions';

const initialState = {
  cards: [{ id: 1, content: 'item1' }, { id: 2, content: 'item2' }]
};

export const appReducer = (state = initialState, action) => {
  // Add code which handles each action here
  if (action.type === ADD_CARD) {
    return Object.assign({}, state, { cards: [...state.cards, action.card] })
  } 
  return state;
};