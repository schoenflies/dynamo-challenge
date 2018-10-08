import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard, shuffleDeck } from '../actions';
import Card from './card';
import './board.css';

/**
 * Board container that displays the cards that are added from the deck
 */

export class Board extends Component {
  constructor(props){
    super(props);
    this.state = {hideButton: false};
  }

  onAddCardClick = () => {
    if(this.props.deck.length > 0) {
      this.props.dispatch(addCard());
    }else{
      //disable Add Card button if deck is empty
      this.setState({hideButton: true});
    }
  }

  onShuffleDeckClick = () => {
    this.props.dispatch(shuffleDeck());
    this.setState({hideButton: false});
  }

  render() {
    const cards = this.props.cards.map(card =>
      <Card value={card.value} suit={card.suit} key={card.face}/>
    )

    return (
      <div className="board">
        <header className="board-header">
          <button className="waves-effect waves-light btn" onClick={this.onAddCardClick} disabled={this.state.hideButton}>Draw Card</button>
          <button className="waves-effect waves-light btn" onClick={this.onShuffleDeckClick}>Shuffle Deck</button>
        </header>
          <div className="card-container">{cards}</div>
      </div>
    );
  }
}

//Set default props to make testing unconnected components easier 
Board.defaultProps = {
  cards: []
};

const mapStateToProps = state => ({
  cards: state.cards,
  deck: state.deck
});

export default connect(mapStateToProps)(Board);