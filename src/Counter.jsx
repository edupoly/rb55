import React, { useReducer } from "react";
import { reducer } from "./CounterReducer";

function Counter() {
  var [count, dispatch] = useReducer(reducer, 0);
  return (
    <div className="border border-2 m-3 p-2">
      <h1>Counter:{count}</h1>
      <button
        onClick={() => {
          dispatch("inc");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("dec");
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
