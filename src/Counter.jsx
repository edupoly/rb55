import React from "react";
import { connect } from "react-redux";
function Counter(props) {
  console.log("Counter Rendered");
  return (
    <div className="border border-2 border-primary p-2 m-2">
      <h1>Counter:{props.counterR.count}</h1>
      <button
        onClick={() => {
          props.dispatch({ type: "INC" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          props.dispatch({ type: "DEC" });
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default connect((store) => {
  return store;
})(Counter);
