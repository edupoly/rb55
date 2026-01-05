import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="m-3">
      <h1 className="text-danger">Hello Edupoly</h1>
      <Counter iv={0} step={1}></Counter>
      {/* <Counter iv={20} step={10}></Counter> */}
    </div>
  );
}

export default App;
