import React from "react";
import "./App.css";

function OutputBox({ synonyms }) {
  return (
    <div className="output-box-container">
      <input
        className="output-box"
        type="text"
        value={synonyms.map((synonymArray) => synonymArray[0]).join(", ")}
      ></input>
    </div>
  );
}

export default OutputBox;
