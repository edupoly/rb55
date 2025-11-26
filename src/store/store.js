import { combineReducers, createStore } from "redux";
import counterReducer from "./counter.reducer";
import todoReducer from "./todolist.reducer";

var store = createStore(
  combineReducers({ counterR: counterReducer, todolistR: todoReducer })
);
export default store;
