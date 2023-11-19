import React from "react";
import "./App.css";

function OutputBox({ synonyms }) {
  return (
    <div className="output-box-container">
      <textarea
        className="output-box"
        type="text"
        placeholder="Your text will be generated here:"
        value={synonyms
          .map((synonymArray) => synonymArray[0].toUpperCase())
          .join(", ")}
      ></textarea>
    </div>
  );
}

export default OutputBox;
