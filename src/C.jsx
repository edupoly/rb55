import React from "react";
import myContext from "./MyContext";

function C() {
  return (
    <myContext.Consumer>
      {(data) => {
        console.log("inside C component::", data);
        return (
          <div className="border border-2 p-2 m-3">
            <h1>C:{data.username}</h1>
            <img src={data.imgUrl} alt="" />
          </div>
        );
      }}
    </myContext.Consumer>
  );
}

export default C;
