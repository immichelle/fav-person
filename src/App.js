import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  const [style, setStyle] = useState({ color: "#00f" });
  const [imgDisplay, setImgDisplay] = useState(false);

  const favPersons = ["michelle", "huong", "le huong"];
  const handleChange = e => {
    setName(e.target.value);
  };

  const handleBlur = () => {};
  const handleKeyUp = () => {
    const tempName = name.toLowerCase()
    for (person of favPersons) {
      if (tempName === person) {
        setStyle({ ...style, color: "#008000" });
        setResult("right!");
        setImgDisplay(true);
        return;
      } else {
        setStyle({ ...style, color: "#f00" });
        setResult("");
        setImgDisplay(false);
      }
    }
  };

  return (
    <div className="App">
      <form>
        <label>Your favorite person</label>
        <input
          style={style}
          value={name}
          onChange={e => handleChange(e)}
          onKeyUp={handleKeyUp}
          // onChange={e => setName(e.target.value)}
          onBlur={handleBlur}
        />
      </form>
      <div>Result: {result}</div>
      <img
        className={imgDisplay ? "show" : "hide"}
        src="https://i.imgur.com/hXiPsql.png"
      />
    </div>
  );
}
