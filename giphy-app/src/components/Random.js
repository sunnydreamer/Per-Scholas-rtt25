import React from "react";

function Random({ random, randomGif }) {
  const loaded = () => {
    return (
      <>
        <h1>😊😊😊 Random 😊😊😊</h1>
        <form onSubmit={randomGif}>
          <input
            type="submit"
            className="randomBtn"
            value="Click to Show Random Pic"
          />
        </form>
        {/* <h2>{random.data.images.original.url}</h2> */}
        <img
          src={`${random.data.images.original.url}`}
          alt=""
          className="randomImg"
        />
      </>
    );
  };
  const loading = () => {
    return (
      <form onSubmit={randomGif}>
        <input
          type="submit"
          value="Click to Show Random Pic"
          className="randomBtn"
        />
      </form>
    );
  };

  return random ? loaded() : loading();
}

export default Random;
