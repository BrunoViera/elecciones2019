import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';

const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent,
}) => {
  if ((percent * 100).toFixed(0) < 1) {
    return null;
  }
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

export default class CandidatosPie extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={this.props.data}
            labelLine={false}
            label={renderCustomizedLabel}
            dataKey="votes"
            animationEasing="ease-in-out"
          >
            {
              this.props.data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)
            }
          </Pie>
          <Legend
            verticalAlign="middle"
            align="left"
            layout="vertical"
            iconType="circle"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
