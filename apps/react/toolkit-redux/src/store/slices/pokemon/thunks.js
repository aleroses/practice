import { startLoadingPokemons } from "./pokeSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());
  };
};
