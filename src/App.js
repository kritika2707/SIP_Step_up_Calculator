import "./App.css";
import React from "react";
import SliderCalculator from "./Assets/SliderCalculator";
import Graph from "./Assets/Graph";
import SipCalculator from "./Assets/SipCalculator";
function App() {
  return (
    <div className="parent">
      <div className="Dashboard"></div>

      <h3></h3>
      <div className="calculator">
        <SliderCalculator />
      {/* <SipCalculator/> */}
      {/* <Graph /> */}
      </div>
    </div>
  );
}

export default App;
