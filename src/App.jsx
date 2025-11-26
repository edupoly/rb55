import "./App.css";
import Counter from "./Counter";
import Todolist from "./Todolist";

function App() {
  return (
    <div className="border border-2 border-dark p-2 m-2">
      <h1 className="text-danger">Hello Edupoly</h1>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
