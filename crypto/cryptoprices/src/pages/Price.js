import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Price(props) {
  // Our api key from coinapi.io
  const apiKey = "0EAC034C-6828-46C1-AD1E-58F771F87D02";
  // Grabbing the Currency symbol from the URL Params
  const params = useParams();
  const symbol = params.symbol;
  // Using the other two variables to create our URL
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const [coin, setCoin] = useState("null");

  const getCoin = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCoin();
  }, []);

  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return coin && coin.rate ? loaded() : loading();
}

export default Price;
