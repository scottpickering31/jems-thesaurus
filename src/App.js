import React, { useState, useEffect } from "react";
import "./App.css";
import { ThesaurusApi } from "./ThesaurusApi";
import UserInput from "./UserInput";
import OutputBox from "./OutputBox";

function App() {
  const [synonyms, setSynonyms] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // You can make the API call here if needed.
  }, []);

  const handleInputChange = (inputValue) => {
    setInput(inputValue);
    ThesaurusApi(inputValue, setSynonyms);
  };

  return (
    <>
      <div className="titles">
        <h2>Jem's</h2>
        <h1>Thesaurus</h1>
      </div>
      <div className="input-box-container">
        <UserInput onInputChange={handleInputChange} />
      </div>
      <OutputBox synonyms={synonyms} />
    </>
  );
}

export default App;
