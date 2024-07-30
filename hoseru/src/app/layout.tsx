"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { WetherForecast } from "../components/WetherForecastToday";
import { WetherForecastThisWeek } from "../components/WetherForecastThisWeek";
import { WetherForecastThreeDays } from "../components/WetherForecastThreeDays";
import Link from "next/link";
import "./globals.css";

export default function layout({children}) {
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
    <html>
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <h2 className="mb-3 text-2xl font-semibold">
            天気予報アプリ　hoseru?
            </h2>
          </div>

          <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div>

          <div>
            {children}
          </div>

          <nav className="mt-5">
            <Link href="/" className="mr-8">
              今日の天気
            </Link>
            <Link href="/three-days" className="mr-8">
              3日間の天気
            </Link>
            <Link href="/weekly">
              週間天気
            </Link>
          </nav>
        </main>
      </body>
    </html>
  );
}
