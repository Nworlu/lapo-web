"use client";
import PlusIcon from "@/components/icon/PlusIcon";
import CustomInput from "@/components/input/CustomInput";
import AddFeeModal from "@/components/modal/AddFeeModal";
import {
  branchofficeeData,
  cardSchemeData,
  currencySchemeData,
  feedTableHeadData,
} from "@/data/navlink";
import AppWrapper from "@/layout/AppWrapper";
import React, { useEffect, useState } from "react";

const CreateProfilePagee = () => {
  const [showAddFeeModal, setShowAddFeeModal] = useState(false);

  const handleAddFeeClick = () => {
    setShowAddFeeModal(false);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Safe to use window
      document.title = "Create Profile";
    }
  }, []);
  return (
    <>
      <AppWrapper className="pt-24 px-2 lg:p-0 lg:pt-4 pb-14 lg:pb-10">
        <header className="flex justify-between ">
          <div className="flex flex-col gap-1.5 pb-3 w-full">
            <h2 className="text-[#121212] font-bold text-lg pt-8">
              Create Profile
            </h2>
            <p className="text-[#121212] text-xs font-normal">
              Fill in profile details and add card fee.
            </p>
          </div>
        </header>
        <div className="bg-white border border-[#E2E2E2] rounded-xl w-full p-4 mt-6 h-fit pb-7">
          <h3 className="text-[#121212] text-lg font-medium">
            Profile Details
          </h3>
          <div className="mt-6 h-full max-w-4xl w-full flex flex-col gap-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center lg:gap-32">
              <CustomInput
                label="Card Name*"
                type="text"
                placeholder="Enter card name"
              />
              <CustomInput
                label="Bin Prefix*"
                type="text"
                placeholder="00000000"
              />
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-center lg:gap-32">
              <CustomInput
                label="Card Scheme*"
                placeholder="Verve"
                inputType="select"
                options={cardSchemeData}
              />
              <CustomInput label="Expiration*" type="number" placeholder="0" />
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-center lg:gap-32">
              <CustomInput label="Description" type="text" />
              <CustomInput
                label="Expiration*"
                inputType="select"
                placeholder="0"
                options={currencySchemeData}
              />
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-center lg:gap-32">
              <CustomInput
                label="Branch Blacklist"
                inputType="select"
                options={branchofficeeData}
              />
              <CustomInput
                label="Expiration*"
                inputType="select"
                placeholder="0"
                options={currencySchemeData}
              />
            </div>
          </div>
        </div>
        <div className="border border-[#E2E2E2] bg-white rounded-xl p-4 pb-7 mt-4 h-72">
          <h3 className="text-[#121212] text-lg font-medium">Fees</h3>
          <div className="mt-6 flex flex-col gap-2.5">
            <button
              onClick={() => setShowAddFeeModal(true)}
              //   onClick={() => router.push("/card-profile/create-profile")}
              className="bg-[#014DAF] w-28 rounded h-9 px-3.5 py-2 flex items-center gap-1"
            >
              <PlusIcon />

              <p className="text-white font-medium text-xs">Add Fee</p>
            </button>
            <div className="w-full overflow-x-auto">
              <table className="w-full mt-2.5">
                <thead className="bg-[#F9FAFB] h-9 w-full border border-[#EAECF0]">
                  <tr>
                    {feedTableHeadData.map((item, index) => (
                      <th
                        key={index}
                        className={`text-[#475467] text-xs font-medium border-r border-r-[#EAECF0] px-9 md:w-48 ${
                          index === 0 ? "px-6 text-left" : "text-center"
                        }`}
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr
                    //   key={index}
                    className="h-11 bg-white border-b border-l border-r border-b-[#EAECF0]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                      <td
                        key={index}
                        className="text-[#475467] text-xs font-normal border-r border-r-[#EAECF0] px-9 md:w-48 px-6"
                      >
                        {/* {item.name} */}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button
          //   onClick={() => router.push("/card-profile/create-profile")}
          className="bg-[#014DAF] w-full md:w-80 rounded h-11 mt-9 mb-20"
        >
          <p className="text-white font-bold text-base text-center">
            Create Profile
          </p>
        </button>
      </AppWrapper>
      {showAddFeeModal && <AddFeeModal onClose={handleAddFeeClick} />}
    </>
  );
};

export default CreateProfilePagee;
