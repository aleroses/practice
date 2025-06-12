import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../stylesheets/TaskForm.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

function TaskForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSending = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false,
    };

    props.onSubmit(newTask);
  };

  return (
    <form
      className="form"
      action=""
      onSubmit={handleSending}
    >
      <textarea
        className="form__textarea"
        type="text"
        name="text"
        id=""
        cols="30"
        rows="1"
        placeholder="Write a new Task..."
        onChange={handleChange}
      ></textarea>
      <button className="button">
        <AiOutlinePlusCircle className="button__icon" />
      </button>
    </form>
  );
}

export { TaskForm };
