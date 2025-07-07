import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokeSlice = createSlice({
  name: "poke",
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      console.log(action);
    },
  },
});

export const { startLoadingPokemons, setPokemons } =
  pokeSlice.actions;
