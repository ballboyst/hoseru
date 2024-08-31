import react from "React";
import { createContext } from "react";
import { useState } from "React";
import { WetherForecast } from "./WetherForecastToday";

export const hamamatsu_location = () => {
    const hamamatsu_latitude = 34.76140; // 浜松高丘北の緯度
    const hamamatsu_longitude = 137.70141; // 浜松高丘北の経度
    const [url,setUrl] = useState("");
    setUrl(`https://api.open-meteo.com/v1/forecast?latitude=${hamamatsu_latitude}&longitude=${hamamatsu_longitude}&hourly=temperature_2m,precipitation,precipitation_probability&timezone=Asia/Tokyo`);
    const wetherContext = createContext();
    < wetherContext.Provider value={{url}}>
        <WetherForecast/>
    </wetherContext.Provider>
};
