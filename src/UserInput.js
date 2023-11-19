import React, { useState } from "react";
import "./App.css";

function UserInput({ onInputChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    onInputChange(inputValue);
  };

  return (
    <div className="search-field">
      <input
        className="input-box"
        type="search"
        placeholder="Please type your input word"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default UserInput;
