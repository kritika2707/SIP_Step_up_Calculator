import React from "react";

function SliderCalculator(){
    return(
        
        <div className="stepUpCalculaor">
          <h3> Step calculator section</h3>
          <div className="rangeSlider">
            <h3>Monthly Investment(Rs.)</h3>
            <input type="range" min="1" max="600" />
            <svg width="100%" height="24">
              <line
                x1="4"
                y1="0"
                x2="440"
                y2="0"
                stroke="#444"
                strokeWidth="20"
                strokeDasharray="1 20"
              />
            </svg>
            <br />
            <h3>Investment Period (in years)</h3>
            <input type="range" />
            <svg width="100%" height="24">
              <line
                x1="4"
                y1="0"
                x2="440"
                y2="0"
                stroke="#444"
                strokeWidth="20"
                strokeDasharray="1 20"
              />
            </svg>
            <br />
            <h3>Expected Rate of Return(%p.a)</h3>
            <input type="range" />
            <svg width="100%" height="24">
              <line
                x1="4"
                y1="0"
                x2="440"
                y2="0"
                stroke="#444"
                strokeWidth="20"
                strokeDasharray="1 20"
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
                strokeWidth="20"
                strokeDasharray="1 20"
              />
            </svg>
          </div>
        </div>

        
        
    )
}

export default SliderCalculator;