"use client";
import AnalyticsCard from "@/components/card/AnalyticsCard";
import QuickAccessCard from "@/components/card/QuickAccessCard";
import RecentRequestTableCard from "@/components/card/RecentRequestTableCard";
import CardStatusDistribution from "@/components/chart/CardStatusDistribution";
import MonthlyBarChart from "@/components/chart/MonthlyBarChart";
import WeekIncomeChart from "@/components/chart/WeekIncomeChart";
import CalenderIcon from "@/components/icon/CalenderIcon";
import { analyticsCardData, quickAccessData } from "@/data/navlink";
import AppWrapper from "@/layout/AppWrapper";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Safe to use window
      document.title = "Dashboard";
    }
  }, []);
  return (
    <AppWrapper className="pt-24 px-2 lg:p-0 lg:pt-4 pb-14 lg:pb-10">
      <header className="flex flex-col md:flex-row justify-between gap-7">
        <div className="flex flex-col gap-1.5 ">
          <h2 className="text-[#121212] font-bold text-lg">
            Hi Nazeer, what would you like to do today?
          </h2>
          <p className="text-[#121212] text-xs font-medium">
            Last login: <span className="font-normal">26/11/2024 14:39:58</span>
          </p>
        </div>
        <div className="border border-[#D0D5DD] rounded py-2 h-8 px-3.5 flex items-center w-fit">
          <div className="mr-2 flex items-center gap-1">
            <CalenderIcon />
            <p className="text-[#121212] font-medium text-xs">Today</p>
          </div>
          <div className="border-l border-l-[#D0D5DD] pl-2">
            <p className="text-[#121212] font-normal text-xs">11 Nov 2024</p>
          </div>
        </div>
      </header>
      <section className="border border-[#E2E2E2] bg-white rounded-xl h-fit flex flex-col gap-2.5 p-4 mt-3.5">
        <h3 className="text-base font-medium text-[#121212] ">
          Your Quick Access
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex items-center gap-4">
          {quickAccessData.map((value, index) => (
            <QuickAccessCard Icon={value.Icon} key={index} text={value.text} />
          ))}
        </div>
      </section>
      <div className="mt-3.5">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold">Analytics</h3>
          <div className="flex-1 bg-[#D0D5DD] h-[1px]" />
        </div>
        <div className="mt-3.5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex items-center gap-2">
            {analyticsCardData.map((value, index) => (
              <AnalyticsCard {...value} key={index} />
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-2 mt-2">
            <div className="grid grid-cols-1 flex-1 flex flex-col gap-2">
              <MonthlyBarChart />
              <WeekIncomeChart />
            </div>
            <div className="grid grid-cols-1 flex-1 flex flex-col gap-2">
              <RecentRequestTableCard />
              <CardStatusDistribution />
            </div>
          </div>
        </div>
      </div>
    </AppWrapper>
  );
}
