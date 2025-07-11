import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter/counterSlice";
import { pokeSlice } from "./slices/pokemon/pokeSlice";
import { todosApi } from "./apis/todosApi";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    poke: pokeSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
