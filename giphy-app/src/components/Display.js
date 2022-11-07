import React from "react";

function display({ gif }) {
  const loaded = () => {
    return (
      <>
        {/* <h1>{gif.data[0].images.original.url}</h1> */}
        {/* <img src={`${gif.data[0].images.original.url}`} alt="" /> */}

        <div className="gifCards">
          {gif.data.map((gif, i) => (
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
    return;
  };

  return gif ? loaded() : loading();
}

export default display;
