import React from "react";
import Card from "./Card";

function CardsDisplay(props) {
  const loaded = () => {
    return (
      <div className="cards">
        {props.cards.map((card, i) => (
          <div key={i} class="cardContainer">
            {card.img ? <Card card={card} /> : ""}
          </div>
        ))}
      </div>
    );
  };

  const loading = () => {
    return (
      <div className="cards">
        <h1>No card to display</h1>
      </div>
    );
  };

  return props.cards && props.cards.length > 0 ? loaded() : loading();
}

export default CardsDisplay;
