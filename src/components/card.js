import React from 'react';

const Card = (props) => {
  const color = props.color;
  return (
    <div style={ { color } }>{ props.face } </div>
  )
}

export default Card;