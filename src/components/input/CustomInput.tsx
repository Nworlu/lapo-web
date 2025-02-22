import React from "react";

type OptionProps = {
  label: string;
  value: string;
};

type Props = {
  label: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  inputType?: "select" | "input";
  options?: OptionProps[];
  className?: string;
};

const CustomInput = (props: Props) => {
  const { label, type, placeholder, inputType, options, className } = props;
  return (
    <div className="flex flex-col gap-1.5 flex-1">
      <label htmlFor="" className="text-[#344054] text-sm font-medium">
        {label}
      </label>
      {inputType === "select" ? (
        <select
          name=""
          id=""
          className="border border-[#D0D5DD] bg-[#FFFFFF] rounded-lg h-11 flex-1 py-2.5 px-3.5 outline-none text-[#667085] font-normal text-base w-full"
        >
          {options?.map((option, index) => (
            <option
              className="text-[#667085] font-normal text-base"
              key={index}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          className={`border border-[#D0D5DD] rounded-lg h-11 flex-1 py-2.5 px-3.5 outline-none text-[#667085] font-normal text-base ${className}`}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default CustomInput;
