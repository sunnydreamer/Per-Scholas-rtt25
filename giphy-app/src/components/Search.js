import React from "react";
import { useState, useEffect } from "react";

function Search(props) {
  const [formData, setFormData] = useState({
    searchTerm: "",
  });

  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to moviesearch prop, which is apps getMovie function
    props.search(formData.searchTerm);
  };

  return (
    <>
      <h1>🔥🔥🔥GET YOUR FAV GIPHY🔥🔥🔥</h1>
      <form onSubmit={handleSubmit} className="searchForm">
        <input
          type="text"
          name="searchTerm"
          onChange={handleChange}
          value={formData.searchTerm}
        />
        {/* <input type="submit" value="submit" /> */}
      </form>
    </>
  );
}

export default Search;
