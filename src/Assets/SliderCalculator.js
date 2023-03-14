import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";


  const MonthlyInvestmentArray = [
    {
      value: 500,
      label: "500",
    },
    {
      value: 24000,
      label: "24000",
    },
    {
      value: 43000,
      label: "43000",
    },
    {
      value: 62000,
      label: "62000",
    },
    {
      value: 81000,
      label: "81000",
    },
    {
      value: 100000,
      label: "100000",
    },
  ];

  const InvestmentPeriodArray = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 7,
      label: "7",
    },
    {
      value: 10,
      label: "10",
    },
    {
      value: 13,
      label: "13",
    },
    {
      value: 15,
      label: "15",
    },
    {
      value: 18,
      label: "18",
    },
    {
      value: 21,
      label: "21",
    },
    {
      value: 24,
      label: "24",
    },
    {
      value: 27,
      label: "27",
    },
    {
      value: 30,
      label: "30",
    },
  ];

  const ExpectedRateOfReturnArray = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 3.9,
      label: "3.9",
    },
    {
      value: 6.8,
      label: "6.8",
    },
    {
      value: 9.7,
      label: "9.7",
    },
    {
      value: 12.6,
      label: "12.6",
    },
    {
      value: 15.5,
      label: "15.5",
    },
    {
      value: 18.4,
      label: "18.4",
    },
    {
      value: 21.3,
      label: "21.3",
    },
    {
      value: 24.2,
      label: "24.2",
    },
    {
      value: 27.1,
      label: "27.1",
    },
    {
      value: 30,
      label: "30",
    },
  ];

  const YearlyIncrementArray = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 5,
      label: "5",
    },
    {
      value: 6,
      label: "6",
    },
    {
      value: 7,
      label: "7",
    },
    {
      value: 8,
      label: "8",
    },
    {
      value: 9,
      label: "9",
    },
    {
      value: 10,
      label: "10",
    },
    {
      value: 11,
      label: "11",
    },
    {
      value: 12,
      label: "12",
    },
  ];

  const LabelArray = [
    MonthlyInvestmentArray,
    InvestmentPeriodArray,
    ExpectedRateOfReturnArray,
    YearlyIncrementArray,
  ];
  const TitleArray = [
    "Monthly Investment (Rs.)",
    "Investment Period (years)",
    "Expected Rate of Return (% p.a)",
    "Yearly Increment (%)",
  ];

  function valuetext(value) {
    return `${value}`;
  }
  
  const Input2 = styled(MuiInput)`
    width: 80px;
  `;

  
function SliderCalculator({index, mn, mx, value, setValue,steps}){

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };
    return (

      <div className='slider-area'>
          <Box sx={{ width: 455 }}>
      
        
              <Grid className="demo2" container>
              
                  <Grid item>
                      <Typography gutterBottom>
                      {TitleArray[index]}
                      </Typography>
                  </Grid>
  
                  <Grid item>
                  
                  <Input2  className="inputField"
                          value={value}
                          size="small"
                          onChange={handleInputChange}
                          inputProps={{
                              step: 1,
                              min: mn,
                              max: mx,
                          }}
                          />
                      
                  </Grid>

                  
              </Grid>
  
              <Grid container>
  
                  <Grid item xs>
                      <Slider
  
                      aria-label="Custom marks"
                      defaultValue={mn}
                      getAriaValueText={valuetext}
                      min={mn}
                      max={mx}
                      marks={LabelArray[index]}
                      step = {steps}
                      
                      value={typeof value === 'number' ? value : 0}
                      onChange={handleSliderChange}
                      aria-labelledby="input-slider"
                      />
                  </Grid>
              
              </Grid>
  
  
          </Box>
      </div>
  
      
     
    )
  }  
  
  export default SliderCalculator;
