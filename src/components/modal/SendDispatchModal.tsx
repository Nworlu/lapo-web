import React from "react";
import CheckCircleIcon from "../icon/CheckCircleIcon";

type Props = {
  onClose: () => void;
};

const SendDispatchModal = (props: Props) => {
  const { onClose } = props;
  return (
    <div
      style={{
        backdropFilter: "blur(5px)",
      }}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50"
    >
      <div
        style={{
          boxShadow: "0px 8px 8px -4px #10182808",
        }}
        className="max-w-md bg-white rounded-xl w-full h-fit p-6 flex flex-col gap-4"
      >
        <div className="border border-[#EAECF0] bg-white w-14 h-12 rounded-xl flex items-center justify-center">
          <CheckCircleIcon />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-[#101828] text-lg font-medium">Successful</h4>
          <p className="text-[#475467] text-sm font-normal">
            Card batch successfully sent to dispatch.
          </p>
        </div>
        <button
          onClick={onClose}
          style={{
            boxShadow: "0px 1px 2px 0px #1018280D",
          }}
          className="bg-[#014DAF] w-28 h-10 rounded teext-center text-sm text-white font-medium mt-7"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SendDispatchModal;
