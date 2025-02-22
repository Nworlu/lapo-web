"use client";
import SearchSmIcon from "@/components/icon/SearchSmIcon";
import { cardRequestTableData, cardrequestTableHeadData } from "@/data/navlink";
import AppWrapper from "@/layout/AppWrapper";
import Link from "next/link";
import React, { useEffect } from "react";

const CardRequestPage = () => {
  const isColorRight = (status: string) => {
    return status.toLowerCase().includes("ready")
      ? "border-[#ABEFC6] bg-[#ECFDF3] text-[#067647]"
      : status.toLowerCase().includes("in progress")
      ? "border-[#FEDF89] bg-[#FFFAEB] text-[#B54708]"
      : status.toLowerCase().includes("acknowledged")
      ? "border-[#B2DDFF] bg-[#EFF8FF] text-[#175CD3]"
      : "border-[#EAECF0] bg-[#F9FAFB] text-[#344054]";
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Safe to use window
      document.title = "Card Request";
    }
  }, []);
  return (
    <AppWrapper className="pt-24 px-2 lg:p-0 lg:pt-4 pb-14 lg:pb-10">
      <header className="flex justify-between">
        <div className="flex flex-col gap-1.5 border-b-[0.5px] border-b-[#98A2B3] pb-3 w-full">
          <h2 className="text-[#121212] font-bold text-lg">Card Request</h2>
          <p className="text-[#121212] text-xs font-normal">
            View and attend to card requests here.
          </p>
        </div>
      </header>
      <div className="flex items-center justify-between mt-2.5 border-b border-b-[#98A2B3] pb-2.5">
        <div className="w-80 h-10 relative">
          <input
            style={{
              boxShadow: "0px 1px 2px 0px #1018280D",
            }}
            className="bg-white border border-[#D0D5DD] rounded-lg px-8 py-2.5 h-full w-full text-[#808080] font-normal text-xs"
            placeholder="Search by branch"
          />
          <div className="absolute top-2.5 left-2">
            <SearchSmIcon />
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full mt-2.5">
          <thead className="bg-[#F9FAFB] h-9 w-full border border-[#EAECF0]">
            <tr>
              {cardrequestTableHeadData.map((item, index) => (
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
            {cardRequestTableData.map((item, index) => (
              <tr
                key={index}
                className="h-11 bg-white border-b border-l border-r border-b-[#EAECF0]"
              >
                <td className="text-[#475467] text-xs font-normal border-r border-r-[#EAECF0] px-9 md:w-48 md:px-6">
                  {item.branch}
                </td>
                <td className="text-[#475467] text-xs font-normal border-r border-r-[#EAECF0] px-9 md:w-48 text-center">
                  {item.initator}
                </td>
                <td className="text-[#475467] text-xs font-normal border-r border-r-[#EAECF0] px-9 md:w-48 text-center">
                  {item.quantity}
                </td>
                <td className="text-[#475467] text-xs font-normal border-r border-r-[#EAECF0] px-9 md:w-48 text-center">
                  {item.batch}
                </td>
                <td className="text-[#475467] text-xs font-normal border-r border-r-[#EAECF0] px-9 md:w-48 text-center">
                  {item.created}
                </td>
                <td className="text-[#475467] text-xs font-normal border-r border-r-[#EAECF0] px-9 md:w-48 text-center flex items-center justify-center py-3">
                  <p
                    className={`w-fit text-center px-2 py-0.5 border rounded-2xl ${isColorRight(
                      item.status
                    )} `}
                  >
                    {item.status}
                  </p>
                </td>
                <td className="text-[#014DAF] text-xs font-bold border-r border-r-[#EAECF0] px-9 md:w-48 text-center">
                  <Link href={`/card-request/request-detail/${index + 1}`}>
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppWrapper>
  );
};

export default CardRequestPage;
