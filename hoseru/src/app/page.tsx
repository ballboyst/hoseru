"use client";

import { usePathname } from "next/navigation";
import { WetherForecast } from "../components/WetherForecastToday";
import { WetherForecastThisWeek } from "../components/WetherForecastThisWeek";
import { WetherForecastThreeDays } from "../components/WetherForecastThreeDays";
import Link from "next/link";
import Layout from "./layout";

export default function Home() {
  const pathname = usePathname();
  let WeatherComponent;

  switch (pathname){
    case "/":
      WeatherComponent = WetherForecast;
      break;
    case "/three-days":
      WeatherComponent = WetherForecastThreeDays;
      break;
    case "/weekly":
      WeatherComponent = WetherForecastThisWeek;
      break;
    default:
      WeatherComponent = WetherForecast;
  }

  return (
    <Layout>
      <h2 className="mb-3 text-2xl font-semibold">
        <WetherForecast />
      </h2>
    </Layout>
  );
}
