import React from 'react';
import './card.css';
import PropTypes from 'prop-types';

/**
 * Card component that displays an image of the card that was added from the deck
 */

export const Card = ({ suit, value }) => {
  let path = `assets/cards/${value}${suit}.svg`;
  return (
    <div className="card">
      <img className='card' src={path}/>
    </div>
  )
}

Card.propTypes = {
  suit: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default Card;
