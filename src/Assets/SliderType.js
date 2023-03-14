import React from 'react';
import SliderCalculator from './SliderCalculator';

function SliderType(props) {
  return (
    <div className="input">
      <SliderCalculator index={0} mn={50000} mx={1000000} value={props.MonthlyInvestment} setValue={props.changeMonthlyInvestment}/>
      <SliderCalculator index={1} mn={1} mx={30} value={props.InvestmentPeriod} setValue={props.changeInvestmentPeriod}/>
      <SliderCalculator index={2} mn={1} mx={30} value={props.RateOfReturn} setValue={props.changeRateOfReturn}/>
      <SliderCalculator index={3} mn={1} mx={120} value={props.YearlyIncrement} setValue={props.changeYearlyIncrement}/>
    </div>
  )
}

export default SliderType;