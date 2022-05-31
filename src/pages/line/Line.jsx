import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './line.scss';
import {
  LineChart,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Linechart = () => {
  const data = [
    {
      name: '2005',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '2006',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '2007',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '2008',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '2009',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '2010',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '2011',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className='line'>
      <Sidebar />
      <div className='container'>
        <Navbar />
        <div className='title'>Inflation Rate</div>
        <ResponsiveContainer
          width='100%'
          aspect={3 / 1}
          className='lineContainer'
        >
          <LineChart
            width={750}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='pv' stroke='#8884d8' />
            <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Linechart;
