import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard, shuffleDeck } from '../actions'
import Card from './card'

export class Board extends Component {

  render() {
    const cards = this.props.cards.map(card =>
      <li className="list-wrapper">
        <Card face={card.face} color={card.color}/>
      </li>
    )

    return (
      <div className="board">
        <header className="board-header">
        <ul className="lists">
        {cards}
        </ul>
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