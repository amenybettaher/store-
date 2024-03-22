import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Paper from '@mui/material/Paper';

// Sample data
const data = [
  { name: 'Day 1', Users: 400 },
  { name: 'Day 2', Users: 300 },
  { name: 'Day 3', Users: 500 },
  { name: 'Day 4', Users: 200 },
  { name: 'Day 5', Users: 300 },
  { name: 'Day 6', Users: 400 },
  { name: 'Day 7', Users: 500 },
];

const DailyUsageChart = () => {
  return (
    <Paper style={{ margin: '20px', padding: '20px' }}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Users" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default DailyUsageChart;
