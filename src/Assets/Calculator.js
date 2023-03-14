

import React, {useState} from 'react'
import SliderType from './SliderType';
import Graph from './Graph'

function Calculator() {
  const [MonthlyInvestment, setMonthlyInvestment] = useState(620000);
  function changeMonthlyInvestment(val){
    setMonthlyInvestment(val);
  }
  const [InvestmentPeriod, setInvestmentPeriod] = useState(15);
  function changeInvestmentPeriod(val){
    setInvestmentPeriod(val);
  }
  const [RateOfReturn, setRateOfReturn] = useState(15);
  function changeRateOfReturn(val){
    setRateOfReturn(val);
  }
  const [YearlyIncrement, setYearlyIncrement] = useState(60);
  function changeYearlyIncrement(val){
    setYearlyIncrement(val);
  }
  return (
    <>
    <div className='calculator'>

      <h2 className='heading'> SIP Step Up Calculator</h2>

     
      <h5 className='info'>It tells you how much wealth you can create by
      making monthly investment</h5>
      <div className='container'>
        <SliderType MonthlyInvestment={MonthlyInvestment} changeMonthlyInvestment={changeMonthlyInvestment} InvestmentPeriod={InvestmentPeriod} changeInvestmentPeriod={changeInvestmentPeriod}
          RateOfReturn={RateOfReturn} changeRateOfReturn={changeRateOfReturn} YearlyIncrement={YearlyIncrement} changeYearlyIncrement={changeYearlyIncrement}
        />
      </div>
        <Graph MonthlyInvestment={MonthlyInvestment} InvestmentPeriod={InvestmentPeriod} RateOfReturn={RateOfReturn} YearlyIncrement={YearlyIncrement} />
        
      
    </div>
    
    </>
  )
}

export default Calculator;