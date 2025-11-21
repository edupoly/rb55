import React, { useState } from "react";
import Todo from "./Todo";

function Todolist() {
  var [todos, settodos] = useState([
    "book tickets",
    "plan cricket",
    "goto goa",
    "buy chocolate",
  ]);
  function addNewTodo() {
    //get the value from textbox
    var ntodo = document.getElementById("d1").value;
    settodos((ctodos) => {
      ctodos.push(ntodo);
      return [...ctodos];
    });
    //insert value into state varaible
  }
  function deleteTodo(ind) {
    settodos((ctodos) => ctodos.filter((t, i) => i != ind));
    // settodos((ctodos) => {
    //   ctodos.splice(ind, 1);
    //   return [...ctodos];
    // });
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
        {todos.map((t, i) => {
          return <Todo t={t} deleteTodo={deleteTodo} i={i}></Todo>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
