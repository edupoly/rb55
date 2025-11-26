import React, { useState } from "react";
import { connect } from "react-redux";
function Todolist(props) {
  console.log(props);
  var [newtodo, setnewtodo] = useState("");
  return (
    <div className="border border-2 border-primary p-2 m-2">
      <h1>Todolist</h1>
      <input
        type="text"
        onChange={(e) => {
          setnewtodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.dispatch({ type: "ADDTODO", payload: newtodo });
        }}
      >
        Add Todo
      </button>
      <ul>
        {props.todolistR.todos?.map((todo, i) => {
          return <li key={i}>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default connect((store) => {
  return store;
})(Todolist);
