import React from "react";
function Counter() {
  var [c, setC] = React.useState(0);

  function inc() {
    setC((cv) => {
      return cv + 1;
    });
  }
  function dec() {
    setC((cv) => {
      return cv - 1;
    });
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
      <button
        onClick={() => {
          dec();
        }}
      >
        Dec
      </button>
    </div>
  );
}

export default Counter;
