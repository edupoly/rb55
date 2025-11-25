import React, { useReducer } from "react";
function reducer(state, action) {
  console.log(action);
  if (action.type == "ADDTODO") {
    return [...state, action.value];
  }
}
const initialState = ["goto chennai", "play cricket", "watch movie"];
function Todolist() {
  var [todos, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="border border-2 m-3 p-2">
      <h1>Todolist</h1>
      <input type="text" id="d1" />
      <button
        onClick={() => {
          dispatch({
            type: "ADDTODO",
            value: document.getElementById("d1").value,
          });
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((t) => {
          return <li>{t}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
