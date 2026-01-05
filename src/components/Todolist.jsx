import React, { useState } from "react";
import { useTodolist } from "../hooks/useTodolist";

function Todolist() {
  var [allTodos, addTodo, deleteTodo] = useTodolist();
  const [newTodo, setNewTodo] = useState("");
  return (
    <div>
      <h1>Todolist</h1>
      <input
        type="text"
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodo(newTodo);
        }}
      >
        Add Todo
      </button>
      <ul>
        {allTodos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
