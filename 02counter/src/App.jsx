import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter((count) => {return count + 1});
    setCounter((count) => count + 1);
  };

  const removeValue = () => {
    setCounter((c) => c - 1);
  };
  const printHello = () => {
    console.log("hello world");
  };
  return (
    <>
      <h1>welcome to the world of coding : Counter {counter}</h1>
      <button onClick={addValue}>add value</button>
      <br />
      <button
        onClick={() => {
          setCounter((c) => c - 1);
        }}
      >
        remove value
      </button>
    </>
  );
}

export default App;
