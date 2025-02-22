import React from "react";

type Props = {
  name: string;
  active?: boolean;
};
const CustomRadio = (props: Props) => {
  const { name, active } = props;
  return (
    <div className="flex items-center gap-1 md:gap-2.5">
      <button
        className={`w-6 h-6 rounded-full ${
          active ? "border-8 border-[#014DAF]" : "border border-[#0000008F]"
        } bg-[#F6F6F6]`}
      />
      <p className="text-[#121212] text-xs md:text-base font-normal">{name}</p>
    </div>
  );
};

export default CustomRadio;
