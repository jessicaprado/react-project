import React from 'react';

//this is a UI component
const Card = ({cardtypes}) => {
  
  const cardTypeList = cardtypes.map(card => {

    return (
    
      <div className="card" key={card.id}>
          <h2>{card.name}</h2>
          <img src={card.img}/>
      </div>
    
    )

  })

  return (cardTypeList);
}

export default Card;
