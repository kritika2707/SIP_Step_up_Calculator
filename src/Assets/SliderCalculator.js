// import React, { useState } from "react";

// function SliderCalculator() {
//   const [val] = useState(0);

//   function handleChange(e) {
//     document.getElementById("rangeValue").innerText =
//       document.getElementById("monthInvest").value;
//   }
//   return (
//     <div className="stepUpCalculaor">
//       <h3> Step calculator section</h3>
//       <div className="rangeSlider">
//         <div className="slide">
//           <h3>Monthly Investment(Rs.)</h3>
//           <p id="rangeValue" className="value">
//             0
//           </p>
//           <input
//             id="monthInvest"
//             type="range"
//             min="0"
//             max="500"
//             value={val}
//             onInput={() => handleChange()}
//           />
//           <svg width="100%" height="24">
//             <line
//               x1="4"
//               y1="0"
//               x2="440"
//               y2="0"
//               stroke="#444"
//               strokeWidth="20"
//               strokeDasharray="1 20"
//             />
//           </svg>
//         </div>
//         <br />
//         <div className="slide">
//           <h3>Investment Period (in years)</h3>
//           <p id="rangeValue" className="value">
//             0
//           </p>
//           <input type="range" />
//           <svg width="100%" height="24">
//             <line
//               x1="4"
//               y1="0"
//               x2="440"
//               y2="0"
//               stroke="#444"
//               strokeWidth="20"
//               strokeDasharray="1 20"
//             />
//           </svg>
//         </div>
//         <br />
//         <div className="slide">
//           <h3>Expected Rate of Return(%p.a)</h3>
//           <p id="rangeValue" className="value">
//             0
//           </p>
//           <input type="range" />
//           <svg width="100%" height="24">
//             <line
//               x1="4"
//               y1="0"
//               x2="440"
//               y2="0"
//               stroke="#444"
//               strokeWidth="20"
//               strokeDasharray="1 20"
//             />
//           </svg>
//         </div>
//         <br />
//         <div className="slide">
//           <input type="range" />
//           <svg width="100%" height="24">
//             <line
//               x1="4"
//               y1="0"
//               x2="440"
//               y2="0"
//               stroke="#444"
//               strokeWidth="20"
//               strokeDasharray="1 20"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SliderCalculator;

// // import React, {useState} from 'react'

// // function Slider(props) {

// //   const midVal = (parseInt(props.mn)+parseInt(props.mx))/2;
// //   const [val, setVal] = useState(midVal);

// //   function handleChange(){

// //     setVal(document.getElementById(props.field).value);
// //     //document.getElementById(props.field).value = val;

// // }
// //   return (
// //     <div className='slider'>
// //     <div className='container-label'>
// //     <h5 className='slider-heading'>{props.title}</h5>
// //     <button type="number" className='display-btn'> {val} </button>
// //     </div>

// //     <input id = {props.field} type="range" min={props.mn} max={props.mx} value={val}
// //           onInput={()=>handleChange()} />
// //     <svg width="100%" height="24">
// //               <line
// //                 x1="4"
// //                 y1="0"
// //                 x2="440"
// //                 y2="0"
// //                 stroke="#444"
// //                 strokeWidth="20"
// //                 strokeDasharray="1 20"
// //               />
// //             </svg>
// //             <br/>

// //     </div>
// //   )
// // }

// // export default Slider

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import VolumeUp from "@mui/icons-material/VolumeUp";

const Input = styled(MuiInput)`
  width: 65px;
`;

export default function SliderCalculator() {
  const [value, setValue] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 1000) {
      setValue(1000);
    }
  };

  const marks = [
    {
      value: 50000,
      label: '50000',
    },
    {
      value: 240000,
      label: '240000',
    },
    {
      value: 430000,
      label: '430000',
    },
    {
      value: 620000,
      label: '620000',
    },
    {
      value: 810000,
      label: '810000',
    },
    {
      value: 1000000,
      label: '1000000',
    },
  ];


  return (
    <Box sx={{ width: 450 }}>
      <Grid container  >

      <Grid item>

      <Typography id="input-slider" gutterBottom>
        Monthly Investment(Rs.)
      </Typography>

      </Grid>
      
      <Grid item  >
          <Input
          className="sld"

          
          
            value={value}
            // size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              // step: 10,
              min: 5000,
              max: 1000000,
              
            }}
          />
        </Grid>
        </Grid>
      <Grid container spacing={1} alignItems="center">
        


        <Grid item xs >
          <Slider 
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            step={1}
            
            marks={marks}
            min= {5000}
              max= {1000000}
            
          />
        </Grid>
        
      </Grid>
    </Box>
  );
}
