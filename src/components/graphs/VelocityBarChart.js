import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
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
  }
];

const VelocityBarChart = () => {

    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" fill="#EA5246" />
      </BarChart>
    );
}


export default VelocityBarChart