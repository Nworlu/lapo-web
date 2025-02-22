import React from "react";
import CustomInput from "../input/CustomInput";
import CustomRadio from "../input/CustomRadio";
import {
  accountPadData,
  currencyData,
  feeFreqData,
  feeImpactData,
} from "@/data/navlink";

const AddFeeModal = () => {
  return (
    <div
      style={{
        backdropFilter: "blur(5px)",
      }}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center"
    >
      <div
        style={{
          boxShadow: "0px 8px 8px -4px #10182808",

          // boxShadow:"0px 20px 24px -4px #10182814",
        }}
        className="max-w-lg bg-white rounded-xl w-full h-fit pt-4"
      >
        <header className="flex justify-between px-6 w-full border-b border-b-[#EAECF0] pb-3">
          <div className="flex items-center gap-4 w-full">
            <div className="border border-[#EAECF0] bg-white w-14 h-12 rounded-xl"></div>
            <div className="flex flex-col gap-1 pb-3 w-full">
              <h2 className="text-[#121212] font-bold text-lg">Add Fee</h2>
              <p className="text-[#121212] text-xs font-normal">
                Fill in fee details.
              </p>
            </div>
          </div>
        </header>
        <div className="px-6 pt-5 flex flex-col gap-4">
          <CustomInput
            label="Fee Name*"
            type="text"
            placeholder="Maintenance"
          />
          <CustomInput label="Value" type="number" placeholder="0" />
          <CustomInput label="Account" type="text" placeholder="0" />
          <div className="flex flex-col gap-3">
            <p className="text-[#344054] text-sm font-medium">Currency</p>
            <div className="flex items-center gap-5">
              {currencyData.map((item, index) => (
                <CustomRadio key={index} name={item} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#344054] text-sm font-medium">Fee Frequency</p>
            <div className="flex items-center gap-5">
              {feeFreqData.map((item, index) => (
                <CustomRadio key={index} name={item} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#344054] text-sm font-medium">Fee Impact</p>
            <div className="flex items-center gap-5">
              {feeImpactData.map((item, index) => (
                <CustomRadio key={index} name={item} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#344054] text-sm font-medium">Account Pad</p>
            <div className="flex items-center gap-5">
              {accountPadData.map((item, index) => (
                <CustomRadio key={index} name={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-t-[#EAECF0] mt-6">
          <button
            //   onClick={() => setShowAddFeeModal(true)}
            //   onClick={() => router.push("/card-profile/create-profile")}
            className="bg-[#014DAF] w-full rounded h-11"
          >
            <p className="text-white font-bold text-base text-center">
              Add Fee
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFeeModal;
