import "./Dropdown.css";
import { useState } from "react";
import uuid from "uuid-v4";

export default function Dropdown({ colors, setLimits, children }) {
  const [toggle, setToggle] = useState(false);
  const [choice, setChoice] = useState(children);
  return (
    <div className="dropDownContainer">
      <div className="dropDownButton" onClick={() => setToggle(true)}>
        {choice}
        <span className="dropDownDirection">{toggle ? "▲" : "▼"}</span>
      </div>
      <div className={`dropDownList ${toggle && "active"}`}>
        {colors.map((e) => (
          <div
            key={uuid()}
            className={`dropDownOption ${e == choice && "activeMarker"}`}
            onClick={() => {
              setChoice(e);
              setToggle(false);
              setLimits(e);
            }}
          >
            {e}
          </div>
        ))}
      </div>
    </div>
  );
}
