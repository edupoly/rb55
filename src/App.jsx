import Counter from "./Counter";
import { CounterProvider } from "./CounterProvider";

function App() {
  return (
    <div className="border border-danger border-2 m-2 p-2">
      <h1>APP</h1>
      <CounterProvider>
        <Counter></Counter>
      </CounterProvider>
    </div>
  );
}

export default App;
