import React from "react";
import MenuCard from "./MenuCard";

function cart(props) {
  return (
    <div className="cart">
      <div className="plateName"> Create Your Own</div>
      <div className="info">
        <div className="totalPrice infoItem">
          {" "}
          ${props.totalPrice.toFixed(2)}
        </div>
        <div className="totalCal infoItem">{props.totalCal} cal</div>
      </div>
      <div className="btns">
        <div className="btn cancel">Cancel</div>
        <div className="btn buy">I'm done</div>
      </div>
      <div className="cartContent">
        {props.cart.map((item) => {
          return (
            <div onClick={() => props.deleteFromCart(item)}>
              <MenuCard
                name={item.name}
                picture={item.picture}
                cal={item.cal}
                price={item.price}
                showQuantity={item.showQuantity}
                quantity={item.quantity}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default cart;
