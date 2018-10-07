import React from 'react';

const Card = ({color, face}) => {
  return (
    <div className="card" style={ { color } }>{ face } </div>
  )
}

export default Card;