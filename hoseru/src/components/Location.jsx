import react from "React";
import { createContext } from "React";
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

// 豊橋の位置情報
// const toyohashi_location = () => {
//     const toyohashi_latitude = 34.43111;
//     const toyohashi_longitude = 137.24025;
// };