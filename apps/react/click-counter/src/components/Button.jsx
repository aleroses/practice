import React from "react";
import ReactDOM from "react-dom/client";
import "../stylesheets/Button.css";

function Button({
  text,
  isClickButton,
  handleClick,
}) {
  return (
    <button
      className={
        isClickButton
          ? "button__click"
          : "button__restart"
      }
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export { Button };
