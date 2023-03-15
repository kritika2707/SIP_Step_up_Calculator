
import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Calculation(
  { MonthlyInvestment, InvestmentPeriod, RateOfReturn, YearlyIncrement },
  flag
) {
  let PeriodInMonth = InvestmentPeriod * 12;
  RateOfReturn = RateOfReturn / 1200;
  let TotalSIPWithStepUp = 0;
  for (let i = 1; i <= PeriodInMonth; i++) {
    if (i !== 1) {
      if (i % 12 === 1) {
        let incrementedAmount = Math.floor(
          MonthlyInvestment * (YearlyIncrement / 100)
        );
        MonthlyInvestment = MonthlyInvestment + incrementedAmount;
      }
    }
    let CummulationAmount =
      MonthlyInvestment * Math.pow(1 + RateOfReturn, PeriodInMonth - i + 1);
    TotalSIPWithStepUp = TotalSIPWithStepUp + CummulationAmount;
  }
  if (flag === "true") return TotalSIPWithStepUp;
  else return MonthlyInvestment;
}
function Graph({
  MonthlyInvestment,
  InvestmentPeriod,
  RateOfReturn,
  YearlyIncrement,
}) {
  // console.log(MonthlyInvestment);
  var estimatedReturns = Calculation(
    { MonthlyInvestment, InvestmentPeriod, RateOfReturn, YearlyIncrement },
    "true"
  );
  console.log(estimatedReturns);
  var investedAmount = Calculation(
    { MonthlyInvestment, InvestmentPeriod, RateOfReturn, YearlyIncrement },
    "false"
  );
  console.log(investedAmount);
  const data = [
    {
      name: "0",
      bline: estimatedReturns,
      vline: investedAmount,
      value: 0,
    },
    {
      name: "1",
      bline: estimatedReturns,
      vline: investedAmount,
      value: 95000,
    },
    {
      name: "2",
      bline: estimatedReturns,
      vline: investedAmount,
      value: 190000,
    },
    {
      name: "3",
      bline: estimatedReturns,
      vline: investedAmount,
      value: 285000,
    },
    {
      name: "4",
      bline: estimatedReturns,
      vline: investedAmount,
      value: 380000,
    },
    {
      name: "5",
      bline: estimatedReturns,
      vline: investedAmount,
      value: 475000,
    },
  ];

  return (
    <>
      <div className="graphi">
        <div className="textforgraph">
          <span>
            After{" "}
            <span className="AfterYearsOf"> {InvestmentPeriod} year's</span> you
            will have
          </span>
          <h2>
            <CurrencyRupeeIcon />
            {estimatedReturns.toFixed(0)}
          </h2>
          <p>
            That's
            <span className="currencyRupeeInPara">
              <CurrencyRupeeIcon />
              {investedAmount}
            </span>{" "}
            as potential capital gains on your investment of
            <span className="currencyRupeeInPara2">
              <CurrencyRupeeIcon />
              {investedAmount}
            </span>
          </p>
        </div>
        <ResponsiveContainer className="graph-div" width="100%" height="65%">
          <LineChart
            width={450}
            height={450}
            //   min={0}
            //   max={5000000}
            data={data}
            //   margin={{
            //     top: 70,
            //     right: 20,
            //     left: 0,
            //     bottom: 0,
            //   }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="bline"
              stroke="#2B3467"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="vline"
              stroke="#362FD9"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default Graph;
