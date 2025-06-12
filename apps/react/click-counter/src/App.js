import React, { useState } from "react";
import "./stylesheets/App.css";
import Logo from "./images/freecodecamp-logo.png";
import { Counter } from "./components/Counter.jsx";
import { Button } from "./components/Button";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const addClick = () => {
    setNumClicks(numClicks + 1);
  };

  const restartClick = () => {
    setNumClicks(0);
  };

  return (
    <>
      <figure className="figure">
        <img
          className="figure__logo"
          src={Logo}
          alt="Logo"
        />
      </figure>
      <div className="container">
        <Counter numClicks={numClicks} />
        <Button
          text="Click"
          isClickButton={true}
          handleClick={addClick}
        />
        <Button
          text="Restart"
          isClickButton={false}
          handleClick={restartClick}
        />
      </div>
    </>
  );
}

export { App };
