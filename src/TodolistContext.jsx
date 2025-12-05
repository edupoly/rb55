import { createContext, useContext, useState } from "react";

export const TodoContext = createContext("todoCxt");

export function TodolistProvider({ children }) {
  var [todos, setTodos] = useState(["goto goa", "pay bills", "make videos"]);
  function addTodo(ntodo) {
    setTodos((ctodos) => [...ctodos, ntodo]);
  }
  function deleteTodo(id) {
    setTodos((ctodos) =>
      ctodos.filter((t, i) => {
        return i != id;
      })
    );
  }
  const value = {
    todos,
    addTodo,
    deleteTodo,
  };
  return (
    <>
      <TodoContext value={value}>{children}</TodoContext>
    </>
  );
}
export function useTodolist() {
  return useContext(TodoContext);
}
