import React from "react";
import { useCounter } from "./CounterContext";

function Counter() {
  var { count, incCount, decCount } = useCounter();
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={incCount}>Inc</button>
      <button onClick={decCount}>Dec</button>
    </div>
  );
}

export default Counter;
