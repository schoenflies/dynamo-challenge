import { ADD_CARD, SHUFFLE_DECK } from '../actions';
import { generateDeck } from '../cards'

const initialState = {
  cards: [],
  deck: generateDeck()
};

export const appReducer = (state = initialState, action) => {
  if (action.type === ADD_CARD) {
  	if(state.deck.length > 0){
      return Object.assign({}, state, { cards: [...state.cards, state.deck.pop()] })
  	}else{
  		window.Materialize.toast('Deck is empty.  Please reshuffle', 2000)
  	}
  } else if (action.type === SHUFFLE_DECK) {
  	return Object.assign({}, state, { cards: [], deck: generateDeck()})
  } else {
    return state;
  }
};