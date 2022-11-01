import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>CryptoPrices</div>
      </Link>

      {/* ---------------------second link----------------- */}

      <Link to="/currencies">
        <div>Current-cies</div>
      </Link>
    </div>
  );
}

export default Nav;
