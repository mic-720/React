import { useState } from "react";
import "./App.css";
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0);
  let obj = {
    username: "satyam",
    age: 22
  }
  let obj1 = {
    username: "hello",
    age: 19
  }

  return (
    <>
      <h1 className="bg-green-400 text-black rounded text-center">Hello world!</h1>
      <Card username="satyam"/>
      <Card />
    </>
  );
}

export default App;
