import React from 'react';
import './card.css';

export const Card = ({ suit, value }) => {
  let path = `assets/cards/${value}${suit}.svg`;
  return (
    <div className="card">
      <img class='card' src={path}/>
    </div>
  )
}

export default Card;

//TODO:

//1. display correct card - DONE
//2. add proptypes, defaultprops
//3. make tests pass
//4. style with flexbox to make UI not shitty - DONE
//5. fix empty deck error
//6. comment code