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
        <div className="calc_text">
        <h3>SIP Step-Up Calculator</h3>
        <p className="desc-text">It tells you how much wealth you can create by increasing monthly investment</p>
        </div>
        <SliderCalculator />
        <Graph />
      </div>
      </div>
    </div>
  );
}

export default App;
