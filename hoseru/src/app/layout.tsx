"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { WetherForecast } from "../components/WetherForecastToday";
import { WetherForecastTomorrow } from "../components/WetherForecastTomorrow"
import { WetherForecastThisWeek } from "../components/WetherForecastThisWeek";
import { WetherForecastThreeDays } from "../components/WetherForecastThreeDays";
import Link from "next/link";
import "./globals.css";
import { CommonDescription } from "../components/CommonDescription";
import { locationContext } from "../providers/locationContext";
import { useState, useEffect } from "react";

export default function Layout({children}:{children: React.ReactNode}) {
    const hamamatsu_latitude = 34.76140; // 浜松高丘北の緯度
    const hamamatsu_longitude = 137.70141; // 浜松高丘北の経度
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${hamamatsu_latitude}&longitude=${hamamatsu_longitude}&hourly=temperature_2m,precipitation,precipitation_probability&timezone=Asia/Tokyo`;
    const [forecastData, setForecastData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseMeteo = await fetch(url);
                const dataMeteo = await responseMeteo.json();
                setForecastData(dataMeteo.hourly);
                console.log(dataMeteo.hourly);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [url]);


  const pathname = usePathname();
  let WeatherComponent;

  switch (pathname){
    case "/":
      WeatherComponent = WetherForecast;
      break;
    case "/tomorrow":
      WeatherComponent = WetherForecastTomorrow;
      break;
    case "/three-days":
      WeatherComponent = WetherForecastThreeDays;
      break;
    case "/weekly":
      WeatherComponent = WetherForecastThisWeek;
      break;
    default:
      WeatherComponent = WetherForecast;
  };




  return (
    <html>
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <h2 className="mb-1 text-2xl font-semibold">
            天気予報アプリ　hoseru?
            </h2>
          </div>

          <div className="text-left">
          <p className="text-sm text-gray-500">この天気予報アプリは静岡県浜松市中央区高丘エリアを対象にしています。</p>
          </div>
          <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] my-4">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div>

          <p className="text-base">
          < CommonDescription/ >
          </p>

          <div>
            <locationContext.Provider value={{forecastData}}>
            {children}
            </locationContext.Provider>
          </div>

          <nav className="mt-5">
            <Link href="/" className="mr-6">
              今日
            </Link>
            <Link href="/tomorrow" className="mr-6">
              翌日
            </Link>
            <Link href="/three-days" className="mr-6">
              3日間
            </Link>
            <Link href="/weekly">
              週間
            </Link>
          </nav>
        </main>
      </body>
    </html>
  );
}
