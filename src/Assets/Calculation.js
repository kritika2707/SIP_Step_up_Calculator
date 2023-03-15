// import React from "react";

// function Calculation(props){
//     console.log(props.mi);
//     var mi = props.MonthlyInvestment;
//     var PeriodInMonth = (props.InvestmentPeriod)*12;
//     var RateOfReturn = (props.RateOfReturn)/1200;
//     let TotalSIPWithStepUp;
//     for(var i=1; i<=PeriodInMonth; i++)
//     {        
//     if(i!==1)
//     {
//     if(i%12===1)
//     {
//     var incrementedAmount=Math.floor(mi*(props.YearlyIncrement/100));
//     mi= mi + incrementedAmount;
//     }
//                 }
//     var CummulationAmount =mi*(Math.pow((1+RateOfReturn),(PeriodInMonth-i+1)));        
//     TotalSIPWithStepUp = TotalSIPWithStepUp + CummulationAmount; 
//     return TotalSIPWithStepUp;            
//     }
// }
// export default Calculation;