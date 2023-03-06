import "./App.css";
import React from "react";
import SliderCalculator from "./Assets/SliderCalculator";
import Graph from "./Assets/Graph";
function App() {
  return (
    <div className="parent">
      <div className="Dashboard"></div>

      <h3>←Back</h3>
      <div className="calculator">
        <SliderCalculator />
        <Graph />
      </div>
    </div>
  );
}

export default App;
