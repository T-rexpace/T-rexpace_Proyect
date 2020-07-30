import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip
} from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#D4508F', '#D1066A', '#870E48', '#604D7A', '#402C5C'];


const PerihelioPieChart = () => {
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx={150}
        cy={150}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {
          data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
        <Tooltip />
      </Pie>
    </PieChart>
  );
}

export default PerihelioPieChart