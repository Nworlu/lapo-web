import AnalyticsCard from "@/components/card/AnalyticsCard";
import QuickAccessCard from "@/components/card/QuickAccessCard";
import RecentRequestTableCard from "@/components/card/RecentRequestTableCard";
import CardStatusDistribution from "@/components/chart/CardStatusDistribution";
import MonthlyBarChart from "@/components/chart/MonthlyBarChart";
import WeekIncomeChart from "@/components/chart/WeekIncomeChart";
import { analyticsCardData, quickAccessData } from "@/data/navlink";
import AppWrapper from "@/layout/AppWrapper";

export default function Home() {
  return (
    <AppWrapper className="pb-6">
      <header className="flex justify-between">
        <div className="flex flex-col gap-1.5 ">
          <h2 className="text-[#121212] font-bold text-lg">
            Hi Nazeer, what would you like to do today?
          </h2>
          <p className="text-[#121212] text-xs font-medium">
            Last login: <span className="font-normal">26/11/2024 14:39:58</span>
          </p>
        </div>
        <div className="border border-[#D0D5DD] rounded py-2 h-8 px-3.5 flex items-center">
          <div className="mr-2">
            <p className="text-[#121212] font-medium text-xs">Today</p>
          </div>
          <div className="border-l border-l-[#D0D5DD] pl-2">
            <p className="text-[#121212] font-normal text-xs">11 Nov 2024</p>
          </div>
        </div>
      </header>
      <section className="border border-[#E2E2E2] bg-white rounded-xl h-28 flex flex-col gap-2.5 p-4 mt-3.5">
        <h3 className="text-base font-medium text-[#121212] ">
          Your Quick Access
        </h3>
        <div className="flex items-center gap-4">
          {quickAccessData.map((value, index) => (
            <QuickAccessCard key={index} text={value.text} />
          ))}
        </div>
      </section>
      <div className="mt-3.5">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold">Analytics</h3>
          <div className="flex-1 bg-[#D0D5DD] h-[1px]" />
        </div>
        <div className="mt-3.5">
          <div className="flex items-center gap-2">
            {analyticsCardData.map((value, index) => (
              <AnalyticsCard {...value} key={index} />
            ))}
          </div>
          <div className="flex gap-2 mt-2">
            <div className="flex-1 flex flex-col gap-2">
              <MonthlyBarChart />
              <WeekIncomeChart />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <RecentRequestTableCard />
              <CardStatusDistribution />
            </div>
          </div>
        </div>
      </div>
    </AppWrapper>
  );
}
