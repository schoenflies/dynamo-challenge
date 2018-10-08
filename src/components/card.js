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
      <img class='card' src={path}/>
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

//TODO:

//1. display correct card - DONE
//2. add proptypes - DONE
//3. make tests pass 
//4. style with flexbox to make UI not shitty - DONE
//5. fix empty deck error - DONE
//6. comment code