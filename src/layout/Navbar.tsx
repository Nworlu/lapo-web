"use client";
import AvatarIcon from "@/components/icon/AvatarIcon";
import BellIcon from "@/components/icon/BellIcon";
import ChevronRightIcon from "@/components/icon/ChevronRightIcon";
import SearchIcon from "@/components/icon/SearchIcon";
import { NavLinkData } from "@/data/navlink";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const router = useRouter();
  // Capitalize each segment (replace dashes with spaces)
  const firstRoute = `/${pathSegments[0]}`;

  const formatTitle = (segment: string) =>
    segment?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const firstRouteData = NavLinkData.find((item) => item.href === firstRoute);
  const firstRouteName = firstRouteData?.text || formatTitle(pathSegments[0]);
  const FirstRouteIcon = firstRouteData?.Icon;

  return (
    <nav className="border-b border-b-[#DEDEDF] h-fit lg:h-12 py-4 flex flex-col gap-3 lg:flex-row lg:items-center justify-between px-5 lg:py-0 fixed top-0 left-0 w-full lg:relative z-30 bg-white">
      <div className="flex items-center flex-wrap">
        {pathSegments.length > 1 && (
          <button
            onClick={() => router.back()}
            className="px-3 py-1 text-[#475467] rounded-md flex items-center gap-2"
          >
            <div className="rotate-180">
              <ChevronRightIcon />
            </div>
            <p className="text-[10px] font-medium">Back</p>
          </button>
        )}
        {pathSegments.length > 1 && <ChevronRightIcon />}

        <div className="flex items-center gap-3 px-4">
          {FirstRouteIcon && <FirstRouteIcon color="#001735" />}
          <h3 className="text-[10px] text-[#001735] font-medium">
            {firstRouteName}
          </h3>
        </div>

        {/* Breadcrumbs */}
        <ul className="flex items-center space-x-2 text-gray-700">
          {pathSegments.slice(1, 2).map((segment, index) => {
            const href = "/" + pathSegments.slice(0, index + 1).join("/");
            return (
              <li key={href} className="flex items-center">
                {pathSegments.length > 1 && <ChevronRightIcon />}
                {/* {index > 0 && <span className="mx-1">/</span>} */}
                <h3 className="text-[10px] text-[#001735] font-medium">
                  {formatTitle(segment)}
                </h3>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        {pathname === "/dashboard" && (
          <div className="relative w-56 h-8">
            <input
              type="text"
              name=""
              id=""
              className="w-full h-full border border-[#D0D5DD] rounded-full px-8 py-2 text-[#344054] font-normal text-xs"
              placeholder="Search"
            />
            <div className="absolute top-2 left-2">
              <SearchIcon />
            </div>
          </div>
        )}
        <div className="flex items-center gap-4">
          <BellIcon color="#475467" />
          <AvatarIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
