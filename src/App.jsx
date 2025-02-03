import Dropdown from "./Dropdown";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h2>Temperature Converter</h2>
      <h4>Enter the temperature, select units and submit</h4>
      <div className="subContainer">
        <input type="number" placeholder="0.00" step={0.01} />
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
