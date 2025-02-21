// import {
//   recentRequestTableBodyData,
//   recentRequestTableData,
// } from "@/data/navlink";
import React from "react";

const WeekIncomeChart = () => {
  //   const isColorRight = (status: string) => {
  //     return status.toLowerCase().includes("ready")
  //       ? "border-[#ABEFC6] bg-[#ECFDF3] text-[#067647]"
  //       : status.toLowerCase().includes("in progress")
  //       ? "border-[#FEDF89] bg-[#FFFAEB] text-[#B54708]"
  //       : status.toLowerCase().includes("acknowledged")
  //       ? "border-[#B2DDFF] bg-[#EFF8FF] text-[#175CD3]"
  //       : "border-[#EAECF0] bg-[#F9FAFB] text-[#344054]";
  //   };
  return (
    <div className="border border-[#E2E2E2] bg-white flex flex-col h-80 rounded-xl p-4 gap-5">
      <div>
        <h3 className="text-[#121212] font-medium text-lg">
          This Week’s Income
        </h3>
      </div>
      {/* <table>
        <thead className="border border-[#E2E2E2] bg-[#F1F7FF] h-10">
          <tr>
            {recentRequestTableData.map((value, index) => (
              <th key={index} className="text-[#0000008F] text-xs font-medium">
                {value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {recentRequestTableBodyData.map((value, index) => (
            <tr key={index} className="border-b border-b-[#EAECF0] h-12">
              <td className="text-[#475467] text-xs font-normal text-center">
                {value.branch}
              </td>
              <td className="text-[#475467] text-xs font-normal text-center">
                {value.type}
              </td>
              <td className="text-[#475467] text-xs font-normal text-center">
                {value.quantity}
              </td>
              <td
                className={`text-[#475467] text-xs font-normal flex justify-center py-3.5 items-center`}
              >
                <p
                  className={`w-fit text-center px-2 py-0.5 border rounded-2xl ${isColorRight(
                    value.status
                  )} `}
                >
                  {value.status}
                </p>
              </td>
              <td className="text-[#014DAF] text-xs font-bold text-center">
                <button>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default WeekIncomeChart;
