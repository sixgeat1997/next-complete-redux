import { useDispatch, useSelector } from "react-redux";
import { incrementCount, decrementCount, resetCount } from "../store/actions";

export default function Home() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1>
          Count: <span>{counter}</span>
        </h1>
        <button onClick={() => dispatch(incrementCount())}>+1</button>
        <button onClick={() => dispatch(decrementCount())}>-1</button>
        <button onClick={() => dispatch(resetCount())}>Reset</button>
      </div>
    </div>
  );
}
