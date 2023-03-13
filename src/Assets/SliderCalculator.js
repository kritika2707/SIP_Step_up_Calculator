import React from "react";



function SliderCalculator() {
  return (
    <div className="stepUpCalculator">
      
      <div className="rangeSlider">
        <div className="slide">
          <div className="text-div">
          <h3>Monthly Savings(Rs.)</h3>
          <input className="value" type="number" min="500" max="1000000" defaultValue="10000"/>
          </div>
          <input type="range" min="1" max="600" />
          <svg width="94%" height="20">
            <line
              x1="4"
              y1="0"
              x2="440"
              y2="0"
              stroke="#444"
              strokeWidth="15"
              strokeDasharray="1 30"
            />
          </svg>
        </div>
        <br />
        <div className="slide">
          <div className="text-div">
          <h3>Yearly Increment (%)</h3>
          <input className="value" type="number" min="5" max="1000" defaultValue="5"/>
          </div>
          <input type="range" />
          <svg width="94%" height="20">
            <line
              x1="4"
              y1="0"
              x2="440"
              y2="0"
              stroke="#444"
              strokeWidth="15"
              strokeDasharray="1 30"
            />
          </svg>
        </div>
        <br />
        <div className="slide">
          <div className="text-div">
          <h3>Investment Period (Years)</h3>
          <input className="value" type="number" min="5" max="100" defaultValue="5"/>
          </div>
          <input type="range" />
          <svg width="94%" height="20">
            <line
              x1="4"
              y1="0"
              x2="440"
              y2="0"
              stroke="#444"
              strokeWidth="15"
              strokeDasharray="1 30"
            />
          </svg>
        </div>
        <br />
        <div className="slide">
        <div className="text-div">
        <h3>Expected Rate of Return</h3>
        <input className="value" type="number" min="6" max="100" defaultValue="7"/>
        </div>
          <input type="range" />
          <svg width="94%" height="20">
            <line
              x1="4"
              y1="0"
              x2="440"
              y2="0"
              stroke="#444"
              strokeWidth="15"
              strokeDasharray="1 30"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SliderCalculator;
