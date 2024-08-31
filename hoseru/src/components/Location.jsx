import react from "React";
import { createContext } from "react";
import { useState } from "React";

export const hamamatsu_location = () => {
    const hamamatsu_latitude = 34.76140; // 浜松高丘北の緯度
    const hamamatsu_longitude = 137.70141; // 浜松高丘北の経度
    const [url,setUrl] = useState("");
    setUrl(`https://api.open-meteo.com/v1/forecast?latitude=${hamamatsu_latitude}&longitude=${hamamatsu_longitude}&hourly=temperature_2m,precipitation,precipitation_probability&timezone=Asia/Tokyo`);
    < createContext.Provider value={{url}}></createContext.Provider>
};
