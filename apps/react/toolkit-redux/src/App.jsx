import { useDispatch, useSelector } from "react-redux";
import { increment } from "./store/slices/counter/counterSlice";

export const App = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux Toolkit</h1>
      <div>
        <button onClick={() => dispatch(increment())}>
          Count is {counter}
        </button>
      </div>
    </>
  );
};
