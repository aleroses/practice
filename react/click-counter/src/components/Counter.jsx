import React from "react";
import ReactDOM from "react-dom/client";
import "../stylesheets/Counter.css";

function Counter({numClicks}) {
  return <div className="counter">{numClicks}</div>;
}

export { Counter };
