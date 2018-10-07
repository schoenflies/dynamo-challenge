import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addCard, shuffleDeck} from '../actions'
import Card from './card'

export class Board extends Component {

  render() {
    const cards = this.props.cards.map(card => <Card face={card.face} color={card.color}/>)

    return (
      <div className="Board">
        <header className="Board-header">
        {cards}
        <button onClick={() => this.props.dispatch(addCard())}>Add Card</button>
        <button onClick={() => this.props.dispatch(shuffleDeck())}>Shuffle Deck</button>
        </header>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  cards: state.cards
});

export default connect(mapStateToProps)(Board);