import "./App.css";
import React from "react";
function App() {
  return (
    <div className="parent">
      <div className="Dashboard"></div>

      <h3> Back</h3>
      <div className="calculator">
        {/* <h3>SIP</h3> */}
        <div className="stepUpCalculaor">
          <h3> Step calculator section</h3>
          <div className="rangeSlider">
            <input type="range" />
            <svg width="100%" height="24">
              <line
                x1="4"
                y1="0"
                x2="440"
                y2="0"
                stroke="#444"
                stroke-width="20"
                stroke-dasharray="1 20"
              />
            </svg>
            <br />
            <input type="range" />
            <svg width="100%" height="24">
              <line
                x1="4"
                y1="0"
                x2="440"
                y2="0"
                stroke="#444"
                stroke-width="20"
                stroke-dasharray="1 20"
              />
            </svg>
            <br />
            <input type="range" />
            <svg width="100%" height="24">
              <line
                x1="4"
                y1="0"
                x2="440"
                y2="0"
                stroke="#444"
                stroke-width="20"
                stroke-dasharray="1 20"
              />
            </svg>
            <br />
            
            <input type="range" />
            <svg width="100%" height="24">
              <line
                x1="4"
                y1="0"
                x2="440"
                y2="0"
                stroke="#444"
                stroke-width="20"
                stroke-dasharray="1 20"
              />
            </svg>
          </div>
        </div>

        <div className="graph">
          <h4>After 5 year's you will have</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
