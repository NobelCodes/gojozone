import React from 'react';
import { useParams } from 'react-router-dom';

function Buy({ cardData }) {
  const { id } = useParams();
  const cardIndex = parseInt(id, 10); // Convert id to a number
  const card = cardData[cardIndex];

  if (isNaN(cardIndex) || cardIndex < 0 || cardIndex >= cardData.length) {
    return <p>Card not found.</p>; // Handle cases where card data does not exist
  }

  return (
    <div className="container my-4">
      <h2>Details for Card {cardIndex}</h2>
      <div className="card">
        <img
          src={card.imageSrc}
          className="card-img-top"
          alt="Card Image"
        />
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text price">{card.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Buy;
