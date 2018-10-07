import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Board extends Component {
  onSubmit(event){
    event.preventDefault();
  }

  render() {
    //TODO: map cards to be displayed
    const cards = this.props.cards.map(card => <li>{card.content}</li>)

    return (
      <div className="Board">
        <header className="Board-header">
          {cards}
        </header>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  cards: state.cards
  
});

export default connect(mapStateToProps)(Board);