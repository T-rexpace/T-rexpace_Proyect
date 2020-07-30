import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 4000
  },
  {
    name: 'Page B', uv: 3000
  },
  {
    name: 'Page C', uv: 2000
  },
  {
    name: 'Page D', uv: 2780
  },
  {
    name: 'Page E', uv: 1890
  },
  {
    name: 'Page F', uv: 2390
  },
  {
    name: 'Page G', uv: 3490
  },
];

const OrbitalPeriodLineChart = () => {
  return (
    <LineChart width={500} height={400} data={data}>
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}


export default OrbitalPeriodLineChart