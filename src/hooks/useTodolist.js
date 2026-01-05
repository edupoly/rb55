import React from "react";
export function useTodolist() {
  const [todos, setTodos] = React.useState(["goto goa", "play cricket"]);
  function addTodo(newTodo) {
    console.log(newTodo);
    setTodos((currentTodos) => {
      currentTodos.push(newTodo);
      return [...currentTodos];
    });
  }
  function deleteTodo(ind) {
    setTodos((currentTodos) => {
      currentTodos.splice(ind, 1);
      return [...currentTodos];
    });
  }
  return [todos, addTodo, deleteTodo];
}
