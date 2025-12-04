import { createContext, useContext, useState } from "react";

var CounterContext = createContext("counterCxt");

export function CounterProvider({ children }) {
  const [count, setcount] = useState(0);
  function incCount() {
    setcount((cnt) => cnt + 1);
  }
  function decCount() {
    setcount((cnt) => cnt + 1);
  }
  var value = {
    count,
    incCount,
    decCount,
  };
  return <CounterContext value={value}>{children}</CounterContext>;
}
export function useCounter() {
  return useContext(CounterContext);
}
