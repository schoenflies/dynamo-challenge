import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard, shuffleDeck } from '../actions';
import Card from './card';
import './board.css';

/**
 * Board that displays the cards that are added from the deck
 */

export class Board extends Component {

  render() {
    const cards = this.props.cards.map(card =>
      <Card value={card.value} suit={card.suit} key={card.face}/>
    )

    return (
      <div className="board">
        <header className="board-header">
          <button class="waves-effect waves-light btn" onClick={() => this.props.dispatch(addCard())}>Add Card</button>
          <button class="waves-effect waves-light btn" onClick={() => this.props.dispatch(shuffleDeck())}>Shuffle Deck</button>
        </header>
          <div className="card-container">{cards}</div>
      </div>
    );
  }
}

Board.defaultProps = {
  cards: []
};

export const mapStateToProps = state => ({
  cards: state.cards
});

export default connect(mapStateToProps)(Board);