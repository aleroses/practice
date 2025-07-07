import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter/counterSlice";
import { pokeSlice } from "./slices/pokemon/pokeSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    poke: pokeSlice.reducer,
  },
});
