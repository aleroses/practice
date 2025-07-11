import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";
import { useSelector } from "react-redux";

export const PokeApp = () => {
  const { isLoading, pokemons, page } = useSelector(
    (state) => state.poke
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokeApp</h1>
      <hr />
      <span>
        Loading:{" "}
        {isLoading ? `True :/ ${page}` : `False :) ${page}`}
      </span>

      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
      >
        Next
      </button>
    </>
  );
};
