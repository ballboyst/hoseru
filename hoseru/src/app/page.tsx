"use client";

import { usePathname } from "next/navigation";
import { WetherForecast } from "../components/WetherForecastToday";
import { WetherForecastThisWeek } from "../components/WetherForecastThisWeek";
import { WetherForecastThreeDays } from "../components/WetherForecastThreeDays";
import Link from "next/link";
import Layout from "./layout";

export default function Home() {

  
  return (
    <>
      <h4 className="text-2xl text-center">今日の天気</h4>
      <WetherForecast />
    </>
      );
}
