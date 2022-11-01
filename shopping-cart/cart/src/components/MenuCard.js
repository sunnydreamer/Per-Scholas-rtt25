import React from "react";
import Quantity from "./Quantity";

function MenuCard(props) {
  return (
    <div>
      <div className="card">
        <div className="cardName">{props.name}</div>
        <div className="picture">
          <img src={props.picture} alt="" />
        </div>
        <div className="cardCal">{props.cal} cal</div>
        <div className="cardPrice">${props.price}</div>
        {props.showQuantity ? <Quantity quantity={props.quantity} /> : ""}
      </div>
    </div>
  );
}

export default MenuCard;
