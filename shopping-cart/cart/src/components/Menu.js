import React from "react";
import MenuCard from "./MenuCard";
import allBases from "../models/bases";

function menu(props) {
  return (
    <div className="menu">
      <div className="categoryName">Bases</div>
      <div className="category">
        {allBases.map((item) => {
          return (
            <div onClick={() => props.addToCart(item)}>
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

export default menu;
