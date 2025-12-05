import React, { useState } from "react";
import { useTodolist } from "./TodolistContext";

function Todolist() {
  var [ntd, setntd] = useState("");
  var { todos, addTodo, deleteTodo } = useTodolist();
  return (
    <div>
      <h1>Todolist</h1>
      <input
        type="text"
        onChange={(e) => {
          setntd(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodo(ntd);
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo, i) => {
          return (
            <li>
              <b>{todo}</b>
              <button
                onClick={() => {
                  deleteTodo(i);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
