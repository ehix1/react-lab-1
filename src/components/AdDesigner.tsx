import { useState } from "react";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState("Chocolate");
  const [darkTheme, setDarkTheme] = useState(true);
  const [fontSize, setFontSize] = useState(44);
  return (
    <section className="AdDesigner">
      <div className={`ad ${darkTheme === true ? "darkTheme" : ""}`}>
        <p>Vote for:</p>
        <p style={{ fontSize: `${fontSize}px` }}>{flavor}</p>
      </div>
      <div>
        <p>What to Support</p>
      </div>

      <div>
        <button
          onClick={() => {
            setFlavor("Chocolate");
          }}
        >
          Chocolate
        </button>
        <button
          onClick={() => {
            setFlavor("Vanilla");
          }}
        >
          Vanilla
        </button>
        <button
          onClick={() => {
            setFlavor("Strawberry");
          }}
        >
          Strawberry
        </button>
      </div>

      <div>
        <p>Color Theme</p>
        <button
          onClick={() => {
            setDarkTheme(false);
          }}
        >
          Light
        </button>
        <button
          onClick={() => {
            setDarkTheme(true);
          }}
        >
          Dark
        </button>
      </div>
      <div>
        <p>Font Size</p>
        <div className="fontSizeContainer">
          <button onClick={() => setFontSize((prev) => prev - 1)}>Down</button>
          <p>{fontSize}</p>
          <button onClick={() => setFontSize((prev) => prev + 1)}>Up</button>
        </div>
      </div>
    </section>
  );
};

export default AdDesigner;
