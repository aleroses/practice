import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./store/store.js";

import { App } from "./App.jsx";
import { PokeApp } from "./PokeApp.jsx";
import { TodoApp } from "./TodoApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <PokeApp />
      <TodoApp />
    </Provider>
  </StrictMode>
);
