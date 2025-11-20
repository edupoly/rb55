import React from "react";

function Child(props) {
  console.log(props);
  var a = 100;
  return (
    <div className="border border-2 border-danger p-2 m-2">
      Child
      <input type="text" id="d3" />
      <button
        onClick={() => {
          props.abc(document.getElementById("d3").value);
        }}
      >
        Call parent
      </button>
    </div>
  );
}

export default Child;
