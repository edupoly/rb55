import React, { createContext, useContext, useState } from "react";

var CounterContext = createContext("counterCtxt");

export function CounterProvider({ children, values }) {
  var [count, setCount] = useState(0);
  function incCount() {
    setCount((cnt) => cnt + 1);
  }
  function decCount() {
    setCount((cnt) => cnt - 1);
  }
  var value = {
    count,
    incCount,
    decCount,
  };
  return (
    <>
      <CounterContext value={value}>{children}</CounterContext>
    </>
  );
}
export function useCounter() {
  return useContext(CounterContext);
}
