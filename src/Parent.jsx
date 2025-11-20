import React from "react";
import Child from "./Child";

function Parent() {
  function abc(r) {
    alert("hi" + r);
  }
  return (
    <div className="border border-2 border-danger p-2 m-2">
      Parent
      <Child x={100} abc={abc}>
        {"Chaitra"}
      </Child>
    </div>
  );
}

export default Parent;
