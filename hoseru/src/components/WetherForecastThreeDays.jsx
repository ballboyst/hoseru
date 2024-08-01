"use client"; // これを追加

import React from "react";
import "../styles/styles.css";
import { useEffect, useState } from "react";

export const WetherForecastThreeDays = () => {
    const latitude = 34.76140; // 東京の緯度
    const longitude = 137.70141; // 東京の経度
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation,precipitation_probability&timezone=Asia/Tokyo`;

    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setForecastData(data.hourly);
                console.log(data.hourly);
            })
            .catch(error => console.error('Error:', error));
    }, [url]);

    return (
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
                {forecastData && forecastData.time.slice(0,72).map((time, index) => {
                    // 3時間ごとに表示
                    if (index % 8 === 0) {
                        return (
                            <tr key={index}>
                                <td>{time}</td>
                                <td>{forecastData.temperature_2m[index]}</td>
                                <td>{forecastData.precipitation[index]}</td>
                                <td>{forecastData.precipitation_probability[index]}</td>
                            </tr>
                        );
                    }
                    return null; // それ以外は表示しない
                })}
            </tbody>
        </table>
    );
};