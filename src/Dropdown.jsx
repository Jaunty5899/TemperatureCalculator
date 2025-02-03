import "./Dropdown.css";
import { useState } from "react";
import uuid from "uuid-v4";

export default function Dropdown({ colors }) {
  const [toggle, setToggle] = useState(false);
  const [choice, setChoice] = useState("Select Option");
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
            }}
          >
            {e}
          </div>
        ))}
      </div>
    </div>
  );
}
