import { useEffect, useState } from "react";
import "./App.css";
import CardsDisplay from "./components/CardsDisplay";
import Form from "./components/Form";

function App() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "985759565emsh56984fadde9cf2cp113d75jsnf1d31f81b3fa",
      "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    getCard("Emerald Explorer");
  }, []);

  const [cards, setCards] = useState([]);

  const getCard = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${searchTerm}`,
        options
      );
      const data = await response.json();
      setCards(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <img
          src="https://logos-world.net/wp-content/uploads/2021/02/Hearthstone-Heroes-of-Warcraft-Logo-2013-2016.png"
          alt=""
          className="logo"
        />

        <Form getCard={getCard} />

        <img
          className="nav"
          src="https://d2vkoy1na2a6o6.cloudfront.net/images/nav/newNav/wood_middle_repeat-b357e74839b5f16173c2f35d36ce22cae24d5b552e2eb1dd1fd7d3091eeccca8eb8ab5c0a2c42e9476357ac2c744e8e22ddc08c5d27be8c670fb9630065a9c01.png"
          alt=""
        />
      </div>

      <CardsDisplay cards={cards} />
    </div>
  );
}

export default App;

// bladed lady
// felsaber
// Nethrandamus
// razorboar
// Ysera
