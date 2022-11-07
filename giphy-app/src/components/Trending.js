import React from "react";

function trending({ trending }) {
  const loaded = () => {
    return (
      <>
        {/* <h1>{gif.data[0].images.original.url}</h1> */}
        {/* <img src={`${gif.data[0].images.original.url}`} alt="" /> */}
        <h1>🌸🌸🌸 Trending 🌸🌸🌸</h1>
        <div className="gifCards">
          {trending.data.map((gif, i) => (
            <div key={i} className="cardContainer">
              {gif.images.original.url ? (
                <img
                  src={`${gif.images.original.url}`}
                  alt=""
                  className="img"
                />
              ) : (
                "not showing"
              )}
            </div>
          ))}
        </div>
      </>
    );
  };
  const loading = () => {
    return <h1>No gif to Display</h1>;
  };

  return trending ? loaded() : loading();
}

export default trending;
