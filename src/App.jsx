import Dropdown from "./Dropdown";
import { useState } from "react";
import "./App.css";

function App() {
  const [temperature, setTemperature] = useState(0);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  return (
    <div className="container">
      <h2>Temperature Converter</h2>
      <h4>Enter the temperature, select units and submit</h4>
      <div className="subContainer">
        <input
          type="number"
          value={temperature}
          step={0.01}
          onChange={(e) => setTemperature(e.target.value)}
        />
        <Dropdown
          colors={["Celsius", "Fahrenheit", "Kelvin"]}
          setLimits={setFrom}
        >
          From Unit
        </Dropdown>
        <Dropdown
          colors={["Celsius", "Fahrenheit", "Kelvin"]}
          setLimits={setTo}
        >
          To Unit
        </Dropdown>
        <button
          disabled={from && to ? false : true}
          onClick={() => console.log("working")}
        >
          Convert
        </button>
      </div>
      <span className="result">Working</span>
    </div>
  );
}

export default App;
