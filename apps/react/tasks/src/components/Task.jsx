import React from "react";
import ReactDOM from "react-dom/client";
import "../stylesheets/Task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({
  id,
  text,
  completed,
  completeTask,
  deleteTask,
}) {
  return (
    <div
      className={
        completed
          ? "task-container completed"
          : "task-container"
      }
    >
      <p
        className="task-text"
        onClick={() => completeTask(id)}
      >
        {text}
      </p>
      <AiOutlineCloseCircle
        className="task-icon"
        onClick={() => deleteTask(id)}
      />
    </div>
  );
}

export { Task };
