import React from "react"
import "../styles/styles.css"

export const WetherForecastThreeDays = () => {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>情報元</th>
                    <th>当日午前</th>
                    <th>当日午後</th>
                    <th>当日夜</th>
                    <th>翌日午前</th>
                    <th>翌日午後</th>
                    <th>翌日夜</th>
                    <th>明後日午前</th>
                    <th>明後日午後</th>
                    <th>明後日夜</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Yahoo天気</td>
                    <th>0%</th>
                    <th>0%</th>
                    <th>10%</th>
                    <th>0%</th>
                    <th>30%</th>
                    <th>80%</th>
                    <th>100%</th>
                    <th>100%</th>
                    <th>100%</th>
                </tr>
                <tr>
                    <td>Open-Metro</td>
                    <th>20%</th>
                    <th>20%</th>
                    <th>20%</th>
                    <th>0%</th>
                    <th>30%</th>
                    <th>50%</th>
                    <th>100%</th>
                    <th>80%</th>
                    <th>100%</th>
                </tr>
                <tr>
                    <td>Free Wether</td>
                    <th>0%</th>
                    <th>0%</th>
                    <th>10%</th>
                    <th>0%</th>
                    <th>30%</th>
                    <th>80%</th>
                    <th>100%</th>
                    <th>50%</th>
                    <th>100%</th>
                </tr>
            </tbody>
        </table>
    );
};