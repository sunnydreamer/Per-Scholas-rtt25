import React from "react";

function Quantity(props) {
  return (
    <div className="quantity">
      {/* <div className="minus">
        <img
          className="minusIcon"
          src="https://cdn-icons-png.flaticon.com/512/3114/3114894.png"
        />
      </div> */}
      <div className="quanNum">{props.quantity}</div>
    </div>
  );
}

export default Quantity;
