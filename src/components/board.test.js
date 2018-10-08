import React from 'react';
import { shallow } from 'enzyme';
import { Board } from './board';
import Card from './card';
import { addCard, shuffleDeck } from '../actions';
import { generateDeck } from '../cards'

describe('<Board />', () => {
  const seedCards = generateDeck();

  it('Renders without crashing', () => {
    shallow(<Board />);
  });

  it('Dispatches addCard from onAddCardClick', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(
      <Board deck={seedCards} dispatch={dispatch} />
    );
    const instance = wrapper.instance();
    instance.onAddCardClick();
    expect(dispatch).toHaveBeenCalledWith(addCard());
  });

  it('Does not dispatch addCard when deck is empty', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(
      <Board deck={[]} dispatch={dispatch} />
    );
    const instance = wrapper.instance();
    instance.onAddCardClick();
    expect(dispatch).not.toHaveBeenCalledWith(addCard());
  });


  it('Dispatches shuffleDeck from onShuffleDeckClick', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(
      <Board dispatch={dispatch}/>
    );
    const instance = wrapper.instance();
    instance.onShuffleDeckClick();
    expect(dispatch).toHaveBeenCalledWith(shuffleDeck());
  });

  it('Renders the cards', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(
      <Board cards={seedCards} dispatch={dispatch} />
    );
    const cards = wrapper.find(Card);
    expect(cards.length).toEqual(seedCards.length);
  });

});