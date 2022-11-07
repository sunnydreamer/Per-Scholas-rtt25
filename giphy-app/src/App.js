import { useState, useEffect } from "react";
import "./App.css";
import Trending from "./components/Trending";
import Search from "./components/Search";
import Display from "./components/Display";
import Random from "./components/Random";

function App() {
  const apiKey = "dDzJNdzVQvB811dLpMCTxG2y78p9lJ2q";
  const [gif, setGif] = useState(null);
  const [trending, setTrending] = useState(null);
  const [random, setRandom] = useState(null);

  const randomGif = async (e) => {
    e.preventDefault();
    try {
      // make fetch request and store response
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/random?apikey=${apiKey}`
      );

      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setRandom(data);
      console.log("random");
      console.log(random.data);
    } catch (e) {
      console.log(e);
    }
  };

  const trendingGif = async () => {
    try {
      // make fetch request and store response
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/trending?apikey=${apiKey}&limit=10`
      );

      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie

      setTrending(data);
      console.log(trending);
    } catch (e) {
      console.log(e);
    }
  };

  const getGif = async (searchTerm) => {
    try {
      // make fetch request and store response
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/search?apikey=${apiKey}&q=${searchTerm}}&limit=20`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setGif(data);
      console.log(gif);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    trendingGif();
    // randomGif();
  }, []);

  return (
    <div className="App">
      <Search search={getGif} />
      <Display gif={gif} />
      <Random random={random} randomGif={randomGif} />
      <Trending trending={trending} />
    </div>
  );
}

export default App;
