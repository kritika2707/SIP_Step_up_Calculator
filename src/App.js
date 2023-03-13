import "./App.css";
import React from "react";
import SliderCalculator from "./Assets/SliderCalculator";
import Graph from "./Assets/Graph";
function App() {
  
  return (
    <div className="parent">
      <div className="Dashboard"></div>
      <div className="main-screen">
      <h3>←Back</h3>
      <div className="calculator">
        <h3>SIP Step-Up Calculator</h3>
        <SliderCalculator />
        <Graph />
      </div>
      </div>
    </div>
  );
}

export default App;
