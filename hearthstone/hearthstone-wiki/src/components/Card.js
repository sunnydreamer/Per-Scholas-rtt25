import React from "react";

function Card(props) {
  return (
    <div className="cardContainer">
      <div className="card">
        <img src={`${props.card.img}`} alt="" className="cardImg" />
        <div className="cardDesc">
          <span className="cardName">{props.card.name}</span>
          <br />
          <br />
          <div className="flavor"> "{props.card.flavor}"</div>
          <br />
          <span className="cardDescTitle"> • Card ID:</span> {props.card.cardId}{" "}
          <br />
          <span className="cardDescTitle"> • Type:</span> {props.card.type}
          <br />
          <span className="cardDescTitle"> • Race:</span> {props.card.race}
          <br />
          <span className="cardDescTitle"> • Rarity:</span> {props.card.rarity}
          <br />
          <span className="cardDescTitle"> • Player Class: </span>
          {props.card.playerClass}
          <br />
          <span className="cardDescTitle"> • Artist: </span>
          {props.card.artist}
          <br />
          <span className="cardDescTitle"> • Card Set: </span>
          {props.card.cardSet} <br />
          <span className="cardDescTitle"> • Collectible: </span>
          {props.card.collectible ? "Yes" : "No"}
          <br />
        </div>
      </div>
    </div>
  );
}

export default Card;
