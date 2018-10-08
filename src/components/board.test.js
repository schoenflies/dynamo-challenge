import React from 'react';
import { shallow } from 'enzyme';
import { Board } from './board';

import Card from './card';
import {addCard, shuffleDeck} from '../actions';

describe('<Board />', () => {
  it('Renders without crashing', () => {
    shallow(<Board />);
  });

  //TODO: test it dispatches correctly

  // it('Dispatches addCard from addCard', () => {
  //   const dispatch = jest.fn();
  //   const wrapper = shallow(
  //     <Board dispatch={dispatch}/>
  //   );
  //   const instance = wrapper.instance();
  //   console.log(instance)
  //   instance.addCard();
  //   expect(dispatch).toHaveBeenCalledWith(addCard());
  // });

    // it('Dispatches shuffleDeck from shuffleDeck', () => {
  //   const dispatch = jest.fn();
  //   const wrapper = shallow(
  //     <Board dispatch={dispatch}/>
  //   );
  //   const instance = wrapper.instance();
  //   instance.shuffleDeck();
  //   expect(dispatch).toHaveBeenCalledWith(shuffleDeck());
  // });

  // it('Renders the cards', () => {
  //   const dispatch = jest.fn();
  //   const wrapper = shallow(
  //     <Board cards={seedCards} dispatch={dispatch} />
  //   );
  //   const lists = wrapper.find(Card);
  //   expect(cards.length).toEqual(seedCards.length);
  //   const firstCard = cards.first();
  //   expect(firstCard.prop('face')).toEqual(seedLists[0].face);
  // });

});