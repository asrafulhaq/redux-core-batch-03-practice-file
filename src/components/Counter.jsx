import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount } from "../redux/counter/actions";

const Counter = () => {
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{counter}</h1>
      <hr />
      <button onClick={() => dispatch(decrementCount())}>--</button>
      <button onClick={() => dispatch(incrementCount(79))}>++</button>
      <button>reset</button>
      <button>set</button>
    </>
  );
};

export default Counter;
