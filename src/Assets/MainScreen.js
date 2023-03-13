import React from "react";
import Calculator from "./Calculator";

function MainScreen() {
  return (
    <div className="parent">
      <div className="Dashboard">
      </div>

      <div className="main-screen">
        <h3>←Back</h3>
        <div className="calculator">
         
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
