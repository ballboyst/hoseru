"use client"; // これを追加

import React from "react";
import "../styles/styles.css";
import { useContext } from "react";
import { locationContext } from "../providers/locationContext";

export const WetherForecastThreeDays = () => {
    const { forecastData } = useContext(locationContext)
    // const latitude = 34.76140; // 東京の緯度
    // const longitude = 137.70141; // 東京の経度
    // const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation,precipitation_probability&timezone=Asia/Tokyo`;

    // const [forecastData, setForecastData] = useState(null);
    // const urlLivedoor = 'https://weather.tsukumijima.net/api/forecast/city/220040';
    // const [forecastDataLivedoor,setForecastDataLivedoor] = useState(null);
    // const [detailText,setDetailText]= useState("天気の概要");

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const responseMeteo = await fetch(url);
    //             const dataMeteo = await responseMeteo.json();
    //             setForecastData(dataMeteo.hourly);
    //             console.log(dataMeteo.hourly);

    //             // const responseLivedoor = await fetch(urlLivedoor);
    //             // const dataLivedoor = await responseLivedoor.json();
    //             // setForecastDataLivedoor(dataLivedoor.forecasts);
    //             // setDetailText(dataLivedoor.description);
    //             // console.log(dataLivedoor.forecasts);
    //             // console.log(dataLivedoor.description);
    //         } catch (error) {
    //             console.error('Error:', error);
    //         }
    //     };

    //     fetchData();
    // }, [url]);

    return (
        <div>
        {/* <p>{detailText.bodyText}</p> */}
        <table border="1">
            <thead>
                <tr>
                    <th>時間</th>
                    <th>気温 (°C)</th>
                    <th>降水量 (mm)</th>
                    <th>降水確率(meteo) (%)</th>
                    {/* <th>降水確率(livedoor) (%)</th> */}
                </tr>
            </thead>
            <tbody>
                {forecastData && forecastData.time.slice(0, 72).map((time, index) => {
                    // 3時間ごとに表示
                    if (index % 6 === 0) {
                        // let livedoorChance = "Loading...";
                        // if (forecastDataLivedoor) {
                        //     const livedoorIndex = Math.floor(index / 6);
                        //     // Livedoorのデータが存在している場合
                        //     if (livedoorIndex < forecastDataLivedoor.length) {
                        //         const forecast = forecastDataLivedoor[livedoorIndex];
                        //         // 時間帯に基づく降水確率を取得
                        //         const hourKey = time.slice(0, 13); // 例: "2023-10-10T00"
                        //         livedoorChance = forecast[`${hourKey}_06`] || 
                        //                          forecast[`${hourKey}_12`] || 
                        //                          forecast[`${hourKey}_18`] || 
                        //                          forecast[`${hourKey}_24`] || 
                        //                          "N/A";
                        //     }
                        // }

                        return (
                            <tr key={index}>
                                <td>{time}</td>
                                <td>{forecastData.temperature_2m[index]}</td>
                                <td>{forecastData.precipitation[index]}</td>
                                <td>{forecastData.precipitation_probability[index]}</td>
                                {/* <td>{livedoorChance}</td> */}
                            </tr>
                        );
                    }
                    return null; // それ以外は表示しない
                })}
            </tbody>
        </table>
        </div>
    );
};