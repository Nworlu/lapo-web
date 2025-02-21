import React from "react";

const MonthlyBarChart = () => {
  return (
    <div className="border border-[#E2E2E2] bg-white flex flex-col justify-between h-96 rounded-xl py-4">
      <div className="px-4 ">
        <h3 className="text-[#121212] font-medium text-lg">Monthly Issuance</h3>
      </div>
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
