import React from "react";
import { useCounter } from "../hooks/useCounter";

function Counter(props) {
  var [cnt, inc, dec] = useCounter(props.iv, props.step);
  return (
    <div className="m-3 border p-3">
      <h1>Counter:{cnt}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  );
}

export default Counter;
