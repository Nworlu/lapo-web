"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
const data = [
  { name: "Active", value: 1500, color: "#01A4AF" },
  { name: "Expired", value: 500, color: "#FFBA24" },
  { name: "Inactive", value: 400, color: "#014DAF" },
  { name: "Blocked", value: 350, color: "#8020E7" },
  { name: "Lost", value: 200, color: "#FF4457" },
];
// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const CardStatusDistribution = () => {
  return (
    <div className="border border-[#E2E2E2] bg-white flex flex-col justify-between h-fit rounded-xl py-4">
      <div className="px-4 ">
        <h3 className="text-[#121212] font-medium text-lg">
          Card Status Distribution
        </h3>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={80}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            // labelLine={false}
            // label={<text>ddd</text>}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {/* <Tooltip /> */}
        </PieChart>
      </ResponsiveContainer>
      <div className="border-t border-t-[#E2E2E2] w-full pt-3 flex flex-col">
        <div className="flex items-center gap-6 self-center w-fit flex-wrap px-3">
          <div className="flex items-center gap-1">
            <div className="bg-[#00984C] w-2 h-2 rounded-full" />
            <p className="text-[#808080] font-normal text-xs">Active</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-[#FFBA24] w-2 h-2 rounded-full" />
            <p className="text-[#808080] font-normal text-xs">Expired</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-[#014DAF] w-2 h-2 rounded-full" />
            <p className="text-[#808080] font-normal text-xs">Inactive</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-[#8020E7] w-2 h-2 rounded-full" />
            <p className="text-[#808080] font-normal text-xs">Blocked</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-[#FF4457] w-2 h-2 rounded-full" />
            <p className="text-[#808080] font-normal text-xs">Lost</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStatusDistribution;
