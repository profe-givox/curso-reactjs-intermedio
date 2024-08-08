import React from "react";
import { BarChart, Bar, XAxis, YAxis,
            CartesianAxis, Tooltip, Legend, ResponsiveContainer,
            CartesianGrid
                                                            } from "recharts";
import {salesData}  from '../data/salesData';
import '../styles/styles.css'

const BarChartComponent = () => {
  return (
    <ResponsiveContainer  className="ResponsiveContainer">
        <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#82ca9d" />
        </BarChart>
    </ResponsiveContainer>
  );
;}

export default BarChartComponent;