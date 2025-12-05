import "./App.css";
import Todolist from "./Todolist";
import { TodolistProvider } from "./TodolistContext";

function App() {
  return (
    <div>
      <h1 className="text-danger">Hello Edupoly</h1>
      <TodolistProvider>
        <Todolist></Todolist>
      </TodolistProvider>
    </div>
  );
}

export default App;
