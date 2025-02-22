"use client";
import PenIcon from "@/components/icon/PenIcon";
import PlusIcon from "@/components/icon/PlusIcon";
import SearchSmIcon from "@/components/icon/SearchSmIcon";
import TrashIcon from "@/components/icon/TrashIcon";
import { cardProfileTableData, cardProfileTableHeadData } from "@/data/navlink";
import AppWrapper from "@/layout/AppWrapper";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CardProfilePage = () => {
  const router = useRouter();
  useEffect(() => {
    document.title = "Card Profile";
  }, []);
  return (
    <AppWrapper>
      <header className="flex justify-between">
        <div className="flex flex-col gap-1.5 border-b-[0.5px] border-b-[#98A2B3] pb-3 w-full">
          <h2 className="text-[#121212] font-bold text-lg">Card Profile</h2>
          <p className="text-[#121212] text-xs font-normal">
            Create, view and edit card profiles here.
          </p>
        </div>
      </header>
      <div className="flex flex-col items-start gap-3 justify-between mt-2.5 border-b border-b-[#98A2B3] pb-2.5">
        <div className="w-full w-80 h-10 relative">
          <input
            style={{
              boxShadow: "0px 1px 2px 0px #1018280D",
            }}
            className="bg-white border border-[#D0D5DD] rounded-lg px-8 py-2.5 h-full w-full text-[#808080] font-normal text-xs"
            placeholder="Search by card name"
          />
          <div className="absolute top-2.5 left-2">
            <SearchSmIcon />
          </div>
        </div>

        <button
          onClick={() => router.push("/card-profile/create-profile")}
          className="bg-[#014DAF] w-fit rounded h-9 px-3.5 py-2 flex items-center gap-2"
        >
          <PlusIcon />
          <p className="text-white font-medium text-xs">Add Profile</p>
        </button>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full mt-2.5">
          <thead className="bg-[#F9FAFB] h-9 w-full border border-[#EAECF0]">
            <tr>
              {cardProfileTableHeadData.map((item, index) => (
                <th
                  key={index}
                  className={`text-[#475467] text-xs font-medium border-r border-r-[#EAECF0] w-48 ${
                    index === 0 ? "px-12 text-left" : "text-center"
                  }`}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cardProfileTableData.map((item, index) => (
              <tr
                key={index}
                className="h-11 bg-white border-b border-l border-r border-b-[#EAECF0]"
              >
                <td className="text-[#475467] text-[10px] lg:text-xs font-normal border-r border-r-[#EAECF0] px-12 lg:w-48 px-6">
                  {item.name}
                </td>
                <td className="text-[#475467] text-[10px] lg:text-xs font-normal border-r border-r-[#EAECF0] px-12 lg:w-48 text-center">
                  {item.currency}
                </td>
                <td className="text-[#475467] text-[10px] lg:text-xs font-normal border-r border-r-[#EAECF0] px-12 lg:w-48 text-center">
                  {item.expiration}
                </td>
                <td className="text-[#475467] text-[10px] lg:text-xs font-normal border-r border-r-[#EAECF0] px-12 lg:w-48 text-center">
                  {item.bin}
                </td>
                <td className="text-[#475467] text-[10px] lg:text-xs font-normal border-r border-r-[#EAECF0] px-12 lg:w-48 text-center">
                  {item.created}
                </td>
                <td className="text-[#475467] text-[10px] lg:text-xs font-normal border-r border-r-[#EAECF0] px-12 lg:w-48 text-center flex items-center justify-center py-3 gap-5">
                  <TrashIcon />
                  <PenIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppWrapper>
  );
};

export default CardProfilePage;
