import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheets/App.css";
import Logo from "./images/freecodecamp-logo.png";
/* import { TaskForm } from "./components/TaskForm"; */
import { TasksList } from "./components/TasksList";

function App() {
  return (
    <>
      <figure className="figure">
        <img
          className="figure__img"
          src={Logo}
          alt="Logo"
        />
      </figure>
      <main className="section">
        <h1 className="section__title">My Tasks</h1>
        {/* <TaskForm /> */}
        <TasksList />
      </main>
    </>
  );
}

export { App };
