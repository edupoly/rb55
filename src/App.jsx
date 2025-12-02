import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Counter from "./features/counter/Counter";
import Products from "./features/products/Products";
import Todolist from "./features/todolist/Todolist";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="border border-danger border-2 m-2 p-2">
      <h1>Hello Edupoly</h1>
      {/* <Counter></Counter>
      <Todolist></Todolist>
      <Products></Products> */}
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
