import "./App.css";
import Counter from "./features/counter/Counter";
import Todolist from "./features/todolist/Todolist";

function App() {
  return (
    <div className="border border-danger border-2 m-2 p-2">
      <h1>Hello Edupoly</h1>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
