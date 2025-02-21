import React from "react";

type Props = {
  title: string;
  amount: string;
  isPending: boolean;
  percent: string;
  period: string;
  text: string;
};

const AnalyticsCard = (props: Props) => {
  const { amount, isPending, percent, period, text, title } = props;
  return (
    <div className="border border-[#E2E2E2] rounded-xl h-28 bg-white flex-1 p-3 flex flex-col justify-between">
      <div>
        <h4 className="text-[#0000008F] font-medium text-sm">{title}</h4>
      </div>
      <div className="flex items-center justify-between">
        <h5 className="text-[#121212] text-2xl font-bold">{amount}</h5>
        {isPending ? (
          <div className="flex items-center gap-1">
            <p className="text-[#E78020] text-xs font-normal">{text}</p>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="bg-[#EFFAF6]  rounded flex items-center gap-1 px-1.5 py-1 ">
              <p className="text-[#29A174] font-medium text-xs">{percent}</p>
            </div>
            <p className="text-[#0000008F] font-normal text-xs">{period}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsCard;
