"use client";

import React from "react"
import "../styles/styles.css"
import { useContext } from "react";
import { locationContext } from "../providers/locationContext";


export const WetherForecast = () => {
    const {forecastData} = useContext(locationContext);
//     <hamamatsu_location/>
//     const [forecastData, setForecastData] = useState(null);
//     const urlLivedoor = 'https://weather.tsukumijima.net/api/forecast/city/220040';
//     const [forecastDataLivedoor,setForecastDataLivedoor] = useState(null);
//     const [detailText,setDetailText]= useState("天気の概要");
//     const url=useContext(WetherForecast);
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const responseMeteo = await fetch(url);
//                 const dataMeteo = await responseMeteo.json();
//                 setForecastData(dataMeteo.hourly);
//                 console.log(dataMeteo.hourly);

//                 // const responseLivedoor = await fetch(urlLivedoor);
//                 // const dataLivedoor = await responseLivedoor.json();
//                 // setForecastDataLivedoor(dataLivedoor.forecasts);
//                 // setDetailText(dataLivedoor.description);
//                 // console.log(dataLivedoor.forecasts);
//                 // console.log(dataLivedoor.description);
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };

//         fetchData();
//     }, [url]);

    return (
        <div>
            {/* <p>{detailText.bodyText}</p> */}
        <table border="1">
            <thead>
                <tr>
                    <th>時間</th>
                    <th>気温 (°C)</th>
                    <th>降水量 (mm)</th>
                    <th>降水確率 (%)</th>
                </tr>
            </thead>
            <tbody>
                {forecastData && forecastData.time.slice(5,24).map((time, index) => (
                    <tr key={index}>
                        <td>{time}</td>
                        <td>{forecastData.temperature_2m[index]}</td>
                        <td>{forecastData.precipitation[index]}</td>
                        <td>{forecastData.precipitation_probability[index]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};