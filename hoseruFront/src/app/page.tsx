"use client";

import { WetherForecast } from "../components/WetherForecastToday";


export default function Home() {

  
  return (
    <>
      <h4 className="mt-2 text-2xl text-center">今日の天気</h4>
      <WetherForecast />
    </>
      );
}
