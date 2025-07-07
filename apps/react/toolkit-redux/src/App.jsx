import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
} from "./store/slices/counter/counterSlice";

export const App = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux Toolkit: {counter}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </>
  );
};
