import { appReducer } from './index';
import { shuffleDeck, addCard } from '../actions';

describe('appReducer', () => {
  // Set up mock data
  const initialState = {
    cards: [],
    deck: [{ face: '3D', value: 3, suit: 'D' },
      { face: 'JS', value: 'J', suit: 'S' },
      { face: 'AS', value: 'A', suit: 'S' },
      { face: '10D', value: 10, suit: 'D' },
      { face: '9H', value: 9, suit: 'H' }
    ]
  };

  it('Should return the current state on an unknown action', () => {
    let currentState = initialState;
    const state = appReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toBe(currentState);
  });

  it('Should add new cards from the current deck', () => {
    let state = Object.assign(initialState);
    let finalState = {
      cards: [{ "face": "9H", "suit": "H", "value": 9 },
        { "face": "10D", "suit": "D", "value": 10 }
      ],
      deck: [{ face: '3D', value: 3, suit: 'D' },
        { face: 'JS', value: 'J', suit: 'S' },
        { face: 'AS', value: 'A', suit: 'S' }

      ]
    };
    state = appReducer(state, addCard());
    state = appReducer(state, addCard());
    expect(state).toEqual(finalState);
  });

    it('Should shuffle the deck and reset cards shown', () => {
    let state = Object.assign(initialState);
    state = appReducer(state, shuffleDeck());
    expect(state.cards).toEqual([]);
    expect(state.deck.length).toBe(52);
  });
});
