import { useState } from "react";
import { useGetTodoQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  const { data: todos = [], isLoading } =
    useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    if (todoId === 1) return;

    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>TodoApp</h1>
      <h4>isLoading</h4>

      <pre>{JSON.stringify(todos)}</pre>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>
              {todo.completed ? "DONE" : "Pending"}
            </strong>
            {todo.title}
          </li>
        ))}
      </ul> */}

      <button onClick={prevTodo}>Previous Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
    </>
  );
};
