import React from "react";
import "./Square.css";

function Square({ id, className, state }) {
  return (
    <div
      className={`square-container ${className} ${
        state === "X" ? "x-color" : "o-color"
      }`}
      id={id}
    >
      {state}
    </div>
  );
}

export default Square;
