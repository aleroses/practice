import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { Provider } from "react-redux";
import { store } from "./store/store.js";

import JournalApp from "./JournalApp.jsx";
import "./styles.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
