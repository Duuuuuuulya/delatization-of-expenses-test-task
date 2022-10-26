import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  ResponsiveContainer, 
  YAxis 
} from 'recharts';

import './GraphsStatistics.css';

export const GraphsStatistics = () => {
  const data = [
    {
      name: 'Jan',
      efts: 2000,
      cp: 2000,
      iw: 1000,
    },
    {
      name: 'Feb',
      efts: 2000,
      cp: 3000,
      iw: 1000,
    },
    {
      name: 'Mar',
      efts: 3000,
      cp: 1000,
      iw: 1000,
    },
    {
      name: 'Apr',
      efts: 4000,
      cp: 1400,
      iw: 1900,
    },
    {
      name: 'May',
      efts: 3500,
      cp: 2400,
      iw: 1800,
    },
    {
      name: 'Jun',
      efts: 4000,
      cp: 2400,
      iw: 2400,
    },
    {
      name: 'Jul',
      efts: 3500,
      cp: 2400,
      iw: 1800,
    },
    {
      name: 'Aug',
      efts: 4000,
      cp: 2400,
      iw: 2400,
    },
    {
      name: 'Sep',
      efts: 2000,
      cp: 3000,
      iw: 1000,
    },
    {
      name: 'Oct',
      efts: 4000,
      cp: 1400,
      iw: 1900,
    },
    {
      name: 'Nov',
      efts: 3500,
      cp: 2400,
      iw: 1800,
    },
    {
      name: 'Dec',
      efts: 2000,
      cp: 3000,
      iw: 1000,
    },
  ]

  return (
    <div className="chart-wrapper">
      <ResponsiveContainer className="bar-chart">
        <BarChart
          data={data}
          barSize={30}
        >
          <YAxis axisLine={false} tickLine={{stroke: 'rgb(221 224 255)', width: '100%'}} tickSize={5000} mirror={true} tick={{ display: 'none'}}  />
          <XAxis tickLine={false} dataKey="name" axisLine={false} />
          <Bar dataKey="efts" stackId="a" fill="#74e3a4" radius={[5, 5, 0, 0]} />
          <Bar dataKey="cp" stackId="a" fill="#abf0c5" radius={[5, 5, 0, 0]} />
          <Bar dataKey="iw" stackId="a" fill="#d4f8e0" radius={[5, 5, 0, 0]}  />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
};
