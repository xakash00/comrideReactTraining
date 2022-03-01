import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as counterAction from "../redux/action/count";
const Count = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  const handleInc = () => {
    dispatch(counterAction.increment());
  };

  const handleDec = () => {
        dispatch(counterAction.decrement());
  };

  return (
    <div className="mt-5">
      <h1>{count}</h1>
      <button onClick={handleInc}>increment</button>
      <button onClick={handleDec}>decrement</button>
    </div>
  );
};

export default Count;
