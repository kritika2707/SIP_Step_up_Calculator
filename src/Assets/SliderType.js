import React from 'react';
// import SliderArea from './SliderArea';
import SliderCalculator from './SliderCalculator';

function SliderType(props) {
  return (
    <div class="input">
      <SliderCalculator index={0} mn={500} mx={100000} value={props.MonthlyInvestment} setValue={props.changeMonthlyInvestment}/>
      <SliderCalculator index={1} mn={1} mx={30} value={props.InvestmentPeriod} setValue={props.changeInvestmentPeriod}/>
      <SliderCalculator index={2} mn={1} mx={30} value={props.RateOfReturn} setValue={props.changeRateOfReturn}/>
      <SliderCalculator index={3} mn={1} mx={12} value={props.YearlyIncrement} setValue={props.changeYearlyIncrement}/>
    </div>
  )
}

export default SliderType;