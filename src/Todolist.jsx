import React, { useState } from "react";
import Todo from "./Todo";

function Todolist() {
  var [todos, settodos] = useState(["book tickets", "plan cricket"]);
  function addNewTodo() {
    //get the value from textbox
    var ntodo = document.getElementById("d1").value;
    settodos((ct) => {
      ct.push(ntodo);
      return [...ct];
    });
    //insert value into state varaible
  }
  return (
    <div className="border border-success p-2 m-2">
      <h1>Todolist</h1>
      <input type="text" id="d1" />
      <button
        onClick={() => {
          addNewTodo();
        }}
      >
        Add Todo
      </button>
      <ul className="list-unstyled">
        {todos.map((t) => {
          return <Todo t={t}></Todo>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
