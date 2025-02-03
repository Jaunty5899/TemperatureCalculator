import Dropdown from "./Dropdown";
import { useState } from "react";
import "./App.css";

function App() {
  const [convertedTemperature, setConvertedTemperature] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  function convertTemperature() {
    setConvertedTemperature(() => {
      if (from === "Celsius" && to === "Fahrenheit") {
        return ((temperature * 9) / 5 + 32).toFixed(2);
      } else if (from === "Celsius" && to === "Kelvin") {
        return temperature + 273.15;
      } else if (from === "Fahrenheit" && to === "Celsius") {
        return (((temperature - 32) * 5) / 9).toFixed(2);
      } else if (from === "Fahrenheit" && to === "Kelvin") {
        return (((temperature - 32) * 5) / 9 + 273.15).toFixed(2);
      } else if (from === "Kelvin" && to === "Celsius") {
        return (temperature - 273.15).toFixed(2);
      } else if (from === "Kelvin" && to === "Fahrenheit") {
        return (((temperature - 273.15) * 9) / 5 + 32).toFixed(2);
      } else {
        return temperature;
      }
    });
  }

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
          onClick={() => convertTemperature()}
        >
          Convert
        </button>
      </div>
      <span className={`result ${convertedTemperature != 0 && "show"}`}>
        {temperature}º{from} is {convertedTemperature}º{to}
      </span>
    </div>
  );
}

export default App;
