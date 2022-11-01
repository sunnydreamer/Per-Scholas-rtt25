import React, { useState } from "react";

function Form(props) {
  const [formData, setFormData] = useState("");

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.getCard(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="searchBar">
        <input
          type="text"
          value={formData}
          onChange={handleChange}
          placeholder="Search for Cards"
        />
      </form>
    </div>
  );
}

export default Form;
