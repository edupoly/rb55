import React from "react";
export function useCounter(iv, step) {
  var [count, setCount] = React.useState(iv);
  function incCount() {
    setCount(count + step);
  }
  function decCount() {
    setCount(count - step);
  }
  return [count, incCount, decCount];
}
