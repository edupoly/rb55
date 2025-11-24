import React from "react";

function Another({ a, ref }) {
  return (
    <div className="border border-5 p-2 m-2">
      <input type="text" ref={ref} value={a} />
    </div>
  );
}

export default Another;
