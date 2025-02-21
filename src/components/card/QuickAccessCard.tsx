import React from "react";

type Props = {
  text: string;
};
const QuickAccessCard = (props: Props) => {
  const { text } = props;
  return (
    <div className="bg-[#F1F7FF] rounded h-11 py-2 px-4 flex items-center gap-4 flex-1">
      <div className="bg-[#014DAF] w-7 h-7 rounded-full"></div>
      <div className="flex items-center gap-1.5">
        <p className="text-[#121212] text-sm font-medium">{text}</p>
      </div>
    </div>
  );
};

export default QuickAccessCard;
