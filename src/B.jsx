import React, { useContext } from "react";
import C from "./C";
import myContext from "./MyContext";

function B() {
  var d = useContext(myContext);
  console.log("inside B component", d);
  return (
    <div className="border border-2 p-2 m-3">
      <h1>B:{d.username.toUpperCase()}</h1>
      <img src={d.imgUrl} alt="" />
      <C></C>
    </div>
  );
}

export default B;
