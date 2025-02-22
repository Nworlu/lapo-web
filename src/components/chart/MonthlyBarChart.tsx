"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "May", Personalized: 10, Instant: 40 },
  { name: "Jun", Personalized: 15, Instant: 60 },
  { name: "Jul", Personalized: 8, Instant: 20 },
  { name: "Aug", Personalized: 6, Instant: 30 },
  { name: "Sep", Personalized: 10, Instant: 40 },
  { name: "Oct", Personalized: 15, Instant: 60 },
  { name: "Nov", Personalized: 5, Instant: 50 },
];

const MonthlyBarChart = () => {
  return (
    <div className="border border-[#E2E2E2] bg-white flex flex-col justify-between h-96 rounded-xl py-4">
      <div className="px-4 ">
        <h3 className="text-[#121212] font-medium text-lg">Monthly Issuance</h3>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend />  */}
          <Bar dataKey="Personalized" stackId="a" fill="#002D72" />
          <Bar dataKey="Instant" stackId="a" fill="#A5C9FF" />
        </BarChart>
      </ResponsiveContainer>
      <div className="border-t border-t-[#E2E2E2] w-full pt-3 flex flex-col">
        <div className="flex items-center gap-6 self-center w-fit">
          <div className="flex items-center gap-1">
            <div className="bg-[#014DAF] w-2 h-2 rounded-full" />
            <p className="text-[#808080] font-normal text-xs">Personalized</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-[#CCE2FF] w-2 h-2 rounded-full" />
            <p className="text-[#808080] font-normal text-xs">Instant</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyBarChart;
