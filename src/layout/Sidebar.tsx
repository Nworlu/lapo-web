import LinkButton from "@/components/nav/LinkButton";
import { NavLinkData } from "@/data/navlink";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="border-r border-r-[#DEDEDF] h-screen max-w-60 w-full bg-white flex flex-col justify-between ">
      <div className="px-3 mt-8">
        {NavLinkData.slice(0, 1).map((value, index) => (
          <LinkButton active key={index} href={value.href} text={value.text} />
        ))}
        <div className="flex flex-col gap-2 mt-4">
          <h2 className="text-[#7E8B9C] text-[8.5px] font-medium uppercase mx-7">
            MAIN MENU
          </h2>
          <div className="flex flex-col gap-1">
            {NavLinkData.slice(1).map((value, index) => (
              <LinkButton key={index} href={value.href} text={value.text} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-11 pb-8 px-7">
        <button className="w-full h-10 flex items-center gap-3 rounded-lg px-3">
          <p className="text-[#121212] text-xs font-medium">Logout</p>
        </button>

        <div>
          <p className="text-[#7E8B9C] text-[8.5px] font-medium uppercase">
            Powered by
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
