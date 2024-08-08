import React from "react";
import { LineChart, Line, XAxis, YAxis, 
    CartesianGrid,Tooltip, Legend, ResponsiveContainer } from "recharts";
import { salesData } from "../data/salesData";
import '../styles/styles.css'

const LineChartComponent =  () => {
  return (
    <ResponsiveContainer className="ResponsiveContainer" >
        <LineChart 
            data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#8884d8"
                    activeDot={{r:8}} />

            </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent