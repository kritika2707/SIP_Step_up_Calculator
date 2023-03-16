import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  CartesianAxis,
} from "recharts";

function toIndianRupees(sum) {
  return sum
    .toString()
    .replace(/\D/g, "")
    .replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g, "$1,");
}

function Graph({
  MonthlyInvestment,
  InvestmentPeriod,
  RateOfReturn,
  YearlyIncrement,
}) {
  let months = InvestmentPeriod * 12;
  const graph = [
    {
      years: 0,
      sipStepUp: 0,
      totalInvestmentTillDate: 0,
      investment: 0,
    },
  ];
  let sipStepUpGrowth = 0;
  let totalInvestmentTillDate = 0;
  let Investment;
  for (let i = 1; i <= months; i++) {
    i % 12 == 0 &&
      i != 1 &&
      (MonthlyInvestment += MonthlyInvestment * (YearlyIncrement / 100));
    sipStepUpGrowth +=
      MonthlyInvestment * Math.pow(1 + RateOfReturn / 100, months - i + 1);
    totalInvestmentTillDate += MonthlyInvestment;

    if (i % 12 == 0) {
      Investment = Math.round(MonthlyInvestment * i);
      const obj = {
        years: i / 12,
        sipStepUp: Math.round(sipStepUpGrowth),
        totalInvestmentTillDate: Math.round(totalInvestmentTillDate),
        investment: Investment,
      };
      graph.push(obj);
    }
  }
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
            {toIndianRupees(Investment.toFixed(0))}
          </h2>
          <p>
            That's
            <span className="currencyRupeeInPara">
              <CurrencyRupeeIcon />
              {toIndianRupees(
                (Investment - totalInvestmentTillDate).toFixed(0)
              )}
            </span>{" "}
            as potential capital gains on your investment of
            <span className="currencyRupeeInPara2">
              <CurrencyRupeeIcon />
              {toIndianRupees(totalInvestmentTillDate.toFixed(0))}
            </span>
          </p>
        </div>
        <ResponsiveContainer className="graph-div" width="90%" aspect={1.6}>
          <LineChart
            width={550}
            height={550}
            min={0}
            max={5000000}
            data={graph}
          >
            <XAxis dataKey="years" />
            <YAxis dataKey="investment" width={90} />
            <Tooltip />
            <CartesianGrid />
            <Line
              type="monotone"
              dataKey="investment"
              stroke="green"
              dot={false}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="totalInvestmentTillDate"
              stroke="red"
              dot={false}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default Graph;
