import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: ["goto goa", "pay fee", "complete ravi project"],
};
export const todolistSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export const { addTodo } = todolistSlice.actions;
var todoReducer = todolistSlice.reducer;
export default todoReducer;
