import { useState } from "react";
import Dropdown from "./Dropdown";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Temperature Converter</h1>
      <h2>Enter the temperature, select units and submit</h2>
      <div className="subContainer">
        <input type="number" placeholder="0.00" />
        <Dropdown colors={["Celsius", "Fahrenheit", "Kelvin"]}>
          From Unit
        </Dropdown>
        <Dropdown colors={["Celsius", "Fahrenheit", "Kelvin"]}>
          To Unit
        </Dropdown>
        <button>Convert</button>
      </div>
    </div>
  );
}

export default App;
