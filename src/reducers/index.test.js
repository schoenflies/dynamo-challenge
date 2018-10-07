import { appReducer } from './index';
import { shuffleDeck, addCard } from '../actions';
import { generateDeck } from '../cards'

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

  // it('Should set the initial state when nothing is passed in', () => {
  //   const state = appReducer(undefined, { type: '__UNKNOWN' });
  //   expect(state).toEqual(initialState);
  // });

  it('Should return the current state on an unknown action', () => {
    let currentState = initialState;
    const state = appReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toBe(currentState);
  });

  it('Should add new cards', () => {
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
});