"use client";

import React from "react"
import "../styles/styles.css"
import { useEffect, useState} from "react";
import {hamamatsu_location} from "./Location";
import { useContext } from "react";
import { wetherForecast } from "./Location"



// export const WetherForecast = () => {
//     const latitude = 34.76140; // 東京の緯度
//     const longitude = 137.70141; // 東京の経度
//     const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation,precipitation_probability&timezone=Asia/Tokyo`;

export const WetherForecast = () => {
    <hamamatsu_location/>
    const [forecastData, setForecastData] = useState(null);
    const urlLivedoor = 'https://weather.tsukumijima.net/api/forecast/city/220040';
    const [forecastDataLivedoor,setForecastDataLivedoor] = useState(null);
    const [detailText,setDetailText]= useState("天気の概要");
    const url=useContext(WetherForecast);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseMeteo = await fetch(url);
                const dataMeteo = await responseMeteo.json();
                setForecastData(dataMeteo.hourly);
                console.log(dataMeteo.hourly);

                // const responseLivedoor = await fetch(urlLivedoor);
                // const dataLivedoor = await responseLivedoor.json();
                // setForecastDataLivedoor(dataLivedoor.forecasts);
                // setDetailText(dataLivedoor.description);
                // console.log(dataLivedoor.forecasts);
                // console.log(dataLivedoor.description);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [url]);

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