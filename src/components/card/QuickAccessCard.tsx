import React from "react";
import ChevronRightIcon from "../icon/ChevronRightIcon";

type Props = {
  width?: string;
  height?: string;
  color: string;
};

type CardProps = {
  text: string;
  Icon: (props: Props) => React.JSX.Element;
};
const QuickAccessCard = (props: CardProps) => {
  const { text, Icon } = props;
  return (
    <div className="bg-[#F1F7FF] rounded h-11 py-2 px-4 flex items-center gap-4 flex-1">
      <div className="bg-[#014DAF] w-7 h-7 rounded-full flex justify-center items-center">
        <Icon color="white" />
      </div>
      <div className="flex items-center gap-1.5">
        <p className="text-[#121212] text-sm lg:text-[10px] xl:text-sm font-medium">
          {text}
        </p>
        <ChevronRightIcon />
      </div>
    </div>
  );
};

export default QuickAccessCard;
