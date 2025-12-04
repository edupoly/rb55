import React from "react";
import { useCounter } from "./CounterProvider";

function Counter() {
  var { count, incCount, decCount } = useCounter();
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={incCount}>Inc</button>
      <button onClick={decCount}>Dec</button>
    </div>
  );
}

export default Counter;
