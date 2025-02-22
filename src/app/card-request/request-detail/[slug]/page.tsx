"use client";
import CustomInput from "@/components/input/CustomInput";
import DownloadFileModal from "@/components/modal/DownloadFileModal";
import SendDispatchModal from "@/components/modal/SendDispatchModal";
import AppWrapper from "@/layout/AppWrapper";
import React, { useState } from "react";

const RequestDetailPage = () => {
  const [openDownloadFile, setOpenDownloadFile] = useState(false);
  const [openSendDispatch, setOpenSendDispatch] = useState(false);

  const handleOnCloseDownload = () => {
    setOpenDownloadFile(false);
  };
  const handleOnCloseDispatch = () => {
    setOpenSendDispatch(false);
  };

  return (
    <AppWrapper>
      <header className="flex justify-between">
        <div className="flex flex-col gap-1.5 pb-3 w-full">
          <h2 className="text-[#121212] font-bold text-lg">Create Profile</h2>
          <p className="text-[#121212] text-xs font-normal">
            Fill in profile details and add card fee.
          </p>
        </div>
      </header>
      <div className="bg-white border border-[#E2E2E2] rounded-xl w-full p-4 mt-6 h-fit pb-7">
        <h3 className="text-[#121212] text-lg font-medium">Profile Details</h3>
        <div className="mt-6 h-full max-w-4xl w-full flex flex-col gap-5">
          <div className="flex items-center gap-40">
            <CustomInput
              label="Branch Name"
              type="text"
              placeholder=""
              className="bg-[#F5F5F7] border border-[#D0D5DD]"
            />
            <CustomInput
              label="Initiator"
              type="text"
              placeholder=""
              className="bg-[#F5F5F7] border border-[#D0D5DD]"
            />
          </div>
          <div className="flex items-center gap-40">
            <CustomInput
              label="Card Type"
              placeholder=""
              className="bg-[#F5F5F7] border border-[#D0D5DD]"
            />
            <CustomInput
              label="Card Charges"
              type="text"
              placeholder="0"
              className="bg-[#F5F5F7] border border-[#D0D5DD]"
            />
          </div>
          <div className="flex items-center gap-40">
            <CustomInput
              label="Quantity"
              type="text"
              className="bg-[#F5F5F7] border border-[#D0D5DD]"
            />
            <CustomInput
              label="Batch"
              type="text"
              className="bg-[#F5F5F7] border border-[#D0D5DD]"
            />
          </div>
          <div className="flex items-center gap-40">
            <div className="flex flex-col gap-2 flex-1">
              <p className="text-[#344054] text-sm font-medium">
                Date Requested
              </p>
              <h3 className="text-[#101828] text-base font-normal">
                11/14/2024 10:27:43
              </h3>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <p className="text-[#344054] text-sm font-medium">Status</p>
              <h3 className="text-[#344054] text-base font-medium border border-[#EAECF0] bg-[#F9FAFB] rounded-2xl px-3 py-1 w-fit">
                Pending
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[#344054] text-sm font-bold">Actions</p>
            <div className="flex items-center gap-11">
              <button
                onClick={() => setOpenDownloadFile(true)}
                className="bg-[#344054] rounded px-3.5 py-2 flex items-center gap-2.5"
              >
                <p className="text-white font-medium text-xs">
                  Download for Production
                </p>
              </button>
              <button className="bg-[#B54708] rounded px-3.5 py-2 flex items-center gap-2.5 bg-opacity-40">
                <p className="text-white font-medium text-xs">
                  Mark as In Progress
                </p>
              </button>
              <button className="bg-[#067647] rounded px-3.5 py-2 flex items-center gap-2.5 bg-opacity-40">
                <p className="text-white font-medium text-xs">Mark as Ready</p>
              </button>
              <button
                onClick={() => setOpenSendDispatch(true)}
                className="bg-[#8020E7] rounded px-3.5 py-2 flex items-center gap-2.5 bg-opacity-40"
              >
                <p className="text-white font-medium text-xs">
                  Send to Dispatch
                </p>
              </button>
              <button className="bg-[#014DAF] rounded px-3.5 py-2 flex items-center gap-2.5 bg-opacity-40">
                <p className="text-white font-medium text-xs">
                  Mark as Acknowledged
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {openDownloadFile && (
        <DownloadFileModal onClose={handleOnCloseDownload} />
      )}
      {openSendDispatch && (
        <SendDispatchModal onClose={handleOnCloseDispatch} />
      )}
    </AppWrapper>
  );
};

export default RequestDetailPage;
