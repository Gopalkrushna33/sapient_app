import React from 'react';
import Card from '../Card/Card';
import "./Cards.css";

function Cards({data}) {
  return (
    <div className="cardsContainer">
      {
        data.map(item=>{
          return <Card key={item.flight_number} data={item}/>
        })
      }
    </div>
  );
}

export default Cards;