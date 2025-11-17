import React from "react";

function Course(props) {
  console.log(props);

  return (
    <div
      className="d-flex flex-column border border-1 border-secondary p-2 text-center m-2 rounded shadow"
      style={{ width: "300px", height: "200px" }}
    >
      <h4>{props.children}</h4>
      <b>Price:{props.price}</b>
      <b>Trainer:{props.trainer}</b>
      <p>{props.description}</p>
    </div>
  );
}

export default Course;
