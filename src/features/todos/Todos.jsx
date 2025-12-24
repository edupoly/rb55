import React, { useState } from "react";
import {
  useAddNewTodoMutation,
  useDeleteTodoMutation,
  useGetTodosByUserNameQuery,
  useLazyGetTodosByUserNameQuery,
} from "../../services/todosApi";
import { useSelector } from "react-redux";

function Todos() {
  var { username } = useSelector((state) => state.userR);
  var { isLoading, data } = useGetTodosByUserNameQuery(username);
  var [addNewTodoFn] = useAddNewTodoMutation();
  var [deleteTodoFn] = useDeleteTodoMutation();
  var [getLatestTodosFn] = useLazyGetTodosByUserNameQuery();
  var [ntd, setNtd] = useState("");
  console.log(data);
  function addNewTodo() {
    addNewTodoFn({
      title: ntd,
      status: "notcompleted",
      username: username,
      remarks: "Em ledu",
    }).then(() => {
      getLatestTodosFn(username);
    });
  }
  return (
    <div>
      <h1>Todos</h1>
      <input type="text" onChange={(e) => setNtd(e.target.value)} />
      <button
        onClick={() => {
          addNewTodo();
        }}
      >
        Addn New Todo
      </button>
      {isLoading && <h4>Loading....</h4>}
      {!isLoading && (
        <ul>
          {data?.map((todo) => {
            return (
              <li>
                {todo.title}
                <button
                  onClick={() => {
                    deleteTodoFn(todo.id).then(() =>
                      getLatestTodosFn(username)
                    );
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Todos;
// fetch("http://localhost:3000/todos", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: ntd,
//     status: "notcompleted",
//   }),
// }).then((res) => console.log(res));
