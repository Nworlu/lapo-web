"use client";
import CloseIcon from "@/components/icon/CloseIcon";
import ListIcon from "@/components/icon/ListIcon";
import LogoutIcon from "@/components/icon/LogoutIcon";
import LinkButton from "@/components/nav/LinkButton";
import { NavLinkData } from "@/data/navlink";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleClickNavOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsMenuActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickNavOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickNavOutside);
    };
  }, []);
  const handleLinkClick = () => {
    setIsMenuActive(false); // Close sidebar when a link is clicked
  };
  return (
    <>
      <button
        onClick={() => setIsMenuActive(!isMenuActive)}
        className="absolute top-4 left-2 z-50"
      >
        <ListIcon color="#121212" />
      </button>
      <aside
        ref={navRef}
        className={`border-r border-r-[#DEDEDF] h-screen max-w-60 lg:relative lg:translate-x-0 w-full bg-white flex flex-col justify-between overflow-y-auto absolute top-0 left-0 z-50 ${
          isMenuActive ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="px-3 mt-7">
          <div className="flex items-center justify-between">
            <Image src={"/image/logo.png"} width={140} height={45} alt="Logo" />

            <button
              className="block lg:hidden"
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="mt-8">
            {NavLinkData.slice(0, 1).map((value, index) => (
              <LinkButton
                active={pathname.includes(value.href)}
                key={index}
                href={value.href}
                text={value.text}
                Icon={value.Icon}
                onClick={handleLinkClick}
              />
            ))}
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <h2 className="text-[#7E8B9C] text-[8.5px] font-medium uppercase mx-7">
              MAIN MENU
            </h2>
            <div className="flex flex-col gap-1">
              {NavLinkData.slice(1).map((value, index) => (
                <LinkButton
                  active={pathname.includes(value.href)}
                  key={index}
                  href={value.href}
                  text={value.text}
                  Icon={value.Icon}
                  onClick={handleLinkClick}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-11 pb-8 px-7">
          <button
            onClick={handleLinkClick}
            className="w-full h-10 flex items-center gap-3 rounded-lg"
          >
            <LogoutIcon color="#121212" />
            <p className="text-[#121212] text-xs font-medium">Logout</p>
          </button>

          <div>
            <p className="text-[#7E8B9C] text-[8.5px] font-medium uppercase">
              Powered by
            </p>
            <Image
              src={"/image/powered-image.png"}
              alt="Powered By"
              width={93}
              height={41}
              className="object-cover"
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
