import React from "react";
function Counter() {
  var [c, setC] = React.useState(0);

  function inc() {
    setC(c + 1);
  }
  return (
    <div className="border border-success p-2 m-2">
      <h1>Counter:{c}</h1>
      <button
        onClick={() => {
          inc();
        }}
      >
        Inc
      </button>
      <button>Dec</button>
    </div>
  );
}

export default Counter;
