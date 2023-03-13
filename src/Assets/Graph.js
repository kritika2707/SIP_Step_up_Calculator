import React from "react";
// import GraphComponent from '../components/graphComponent';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function Graph(){
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
 return (
  <div className="graph">
    {/* <GraphComponent> */}
      <div className="textforgraph"><span Style="color:grey;margin-left:10px;margin-top:10px">After <span  Style="color:black;font-weight:bold">5 year's</span> you will have</span>
      <h2 Style="color:#2C74B3;margin-left:-10px;font-weight:bold;margin-top:0"><CurrencyRupeeIcon/>8,56,981</h2>
      <p Style="color:grey;margin-left:12px;margin-top:-19px">That's<span Style="color:#FF6E31;margin-left:-15px;font-weight:bold"><CurrencyRupeeIcon/>1,24,369</span> as potential capital gains on your investment of<span Style="color:#03C988;margin-left:-15px;font-weight:bold"><CurrencyRupeeIcon/>7,32,612</span></p>
      </div>
    {/* </GraphComponent> */}
    <ResponsiveContainer className="graph-div" width="100%" height="60%">
        <LineChart
          width={450}
          height={300}
          data={data}
          margin={{
            top: 35,
            right:20,
            left: 0,
            bottom: 5,
          }}
        >
        
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
  </div>
 )   
}

export default Graph;