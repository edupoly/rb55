import React, { useCallback, useMemo, useState } from "react";
import Todo from "./Todo";

function Todolist() {
  var [ntd, setNtd] = useState("");
  var [todos, settodos] = useState([
    "book tickets",
    "plan cricket",
    "goto goa",
    "buy chocolate",
  ]);
  var ar = useMemo(() => {
    return [10, 20, 30];
  }, []);
  function addNewTodo() {
    settodos([...todos, ntd]);
    //insert value into state varaible
  }
  // var deleteTodo = function (ind) {
  //   var temp = [...todos];
  //   temp.splice(ind, 1);
  //   settodos([...temp]);
  // };
  var deleteTodo = useCallback(function (ind) {
    settodos((ctodos) => {
      return ctodos.filter((t, i) => i != ind);
    });
  }, []);
  return (
    <div className="border border-success p-2 m-2">
      <h1>Todolist</h1>
      <input
        type="text"
        id="d1"
        onChange={(e) => {
          setNtd(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addNewTodo();
        }}
      >
        Add Todo
      </button>
      <ul className="list-unstyled">
        {todos.map((t, i) => {
          return (
            <Todo key={i} t={t} deleteTodo={deleteTodo} i={i} ar={ar}></Todo>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
