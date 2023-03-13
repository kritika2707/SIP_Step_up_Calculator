import React from "react";
// import GraphComponent from '../components/graphComponent';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import Calculation from "./Calculation";

function Graph(){
  const data = [
    {
      name: '0',
      value: 0,
    },
    {
      name: '1',
      value: 95000,
    },
    {
      name: '2',
      value: 190000,
    },
    {
      name: '3',
      value: 285000,
    },
    {
      name: '4',
      value: 380000,
    },
    {
      name: '5',
    },
  ];
  
 return (
  <div className="graph">
      <div className="textforgraph"><span Style="color:grey;margin-left:10px;margin-top:10px">After <span  Style="color:black;font-weight:bold">5 year's</span> you will have</span>
      <h2 Style="color:#2C74B3;margin-left:-10px;font-weight:bold;margin-top:0"><CurrencyRupeeIcon/>8,56,981</h2>
      <p Style="color:grey;margin-left:12px;margin-top:-19px">That's<span Style="color:#FF6E31;margin-left:-15px;font-weight:bold"><CurrencyRupeeIcon/>1,24,369</span> as potential capital gains on your investment of<span Style="color:#03C988;margin-left:-15px;font-weight:bold"><CurrencyRupeeIcon/>7,32,612</span></p>
      </div>
    <ResponsiveContainer className="graph-div" width="100%" height="65%">
        <LineChart
          width={450}
          height={450}
          data={data}
          margin={{
            top: 70,
            right:20,
            left: 0,
            bottom: 0,
          }}
        >
        
          <XAxis dataKey="name" />
          <YAxis dataKey="value"/>
          <Tooltip />
          <Line type="monotone" stroke="#2B3467" />
          <Line type="monotone" stroke="#362FD9" />
        </LineChart>
      </ResponsiveContainer>
  </div>
 )   
}

export default Graph;
