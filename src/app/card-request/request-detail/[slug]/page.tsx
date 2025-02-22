"use client";
import CheckBrokenIcon from "@/components/icon/CheckBrokenIcon";
import CubeIcon from "@/components/icon/CubeIcon";
import FileIcon from "@/components/icon/FileIcon";
import LoaderIcon from "@/components/icon/LoaderIcon";
import SendPackageIcon from "@/components/icon/SendPackageIcon";
import CustomInput from "@/components/input/CustomInput";
import DownloadFileModal from "@/components/modal/DownloadFileModal";
import SendDispatchModal from "@/components/modal/SendDispatchModal";
import AppWrapper from "@/layout/AppWrapper";
import React, { useEffect, useState } from "react";

const RequestDetailPage = ({ params }: { params: { slug: string } }) => {
  const [openDownloadFile, setOpenDownloadFile] = useState(false);
  const [openSendDispatch, setOpenSendDispatch] = useState(false);

  console.log(params, "hhjhjnjj");

  const handleOnCloseDownload = () => {
    setOpenDownloadFile(false);
  };
  const handleOnCloseDispatch = () => {
    setOpenSendDispatch(false);
  };

  useEffect(() => {
    document.title = "Request Details";
  }, []);

  return (
    <AppWrapper>
      <header className="flex justify-between pt-8">
        <div className="flex flex-col gap-1.5 pb-3 w-full">
          <h2 className="text-[#121212] font-bold text-lg">Request Details</h2>
          <p className="text-[#121212] text-xs font-normal">
            Perform predetermined actions on card requests here.
          </p>
        </div>
      </header>
      <div className="bg-white border border-[#E2E2E2] rounded-xl w-full p-4 mt-6 h-fit pb-7">
        <h3 className="text-[#121212] text-lg font-medium">
          Card Request Details
        </h3>
        <div className="mt-6 h-full max-w-4xl w-full flex flex-col gap-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center lg:gap-32">
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
          <div className="flex flex-col gap-4 md:flex-row md:items-center lg:gap-32">
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
          <div className="flex flex-col gap-4 md:flex-row md:items-center lg:gap-32">
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
          <div className="flex flex-col gap-4 md:flex-row md:items-center lg:gap-32">
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
            <div className="flex fleex-col gap-4 md:flex-row flex-wrap items-center md:gap-7">
              <button
                onClick={() => setOpenDownloadFile(true)}
                className="bg-[#344054] rounded px-3.5 py-2 flex items-center gap-2.5"
              >
                <FileIcon />
                <p className="text-white font-medium text-[10px]">
                  Download for Production
                </p>
              </button>
              <button className="bg-[#B54708] rounded px-3.5 py-2 flex items-center gap-2.5 bg-opacity-40">
                <LoaderIcon />
                <p className="text-white font-medium text-[10px]">
                  Mark as In Progress
                </p>
              </button>
              <button className="bg-[#067647] rounded px-3.5 py-2 flex items-center gap-2.5 bg-opacity-40">
                <CubeIcon />
                <p className="text-white font-medium text-[10px]">
                  Mark as Ready
                </p>
              </button>
              <button
                onClick={() => setOpenSendDispatch(true)}
                className="bg-[#8020E7] rounded px-3.5 py-2 flex items-center gap-2.5 bg-opacity-40"
              >
                <SendPackageIcon />
                <p className="text-white font-medium text-[10px]">
                  Send to Dispatch
                </p>
              </button>
              <button className="bg-[#014DAF] rounded px-3.5 py-2 flex items-center gap-2.5 bg-opacity-40">
                <CheckBrokenIcon />
                <p className="text-white font-medium text-[10px]">
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
