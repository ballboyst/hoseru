import React from "react"
import "../styles/styles.css"

export const WetherForecast = () => {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>情報元</th>
                    <th>６時</th>
                    <th>９時</th>
                    <th>12時</th>
                    <th>15時</th>
                    <th>18時</th>
                    <th>21時</th>
                    <th>当日天気</th>
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
                    <th>晴れ</th>
                </tr>
                <tr>
                    <td>Open-Metro</td>
                    <th>20%</th>
                    <th>20%</th>
                    <th>20%</th>
                    <th>0%</th>
                    <th>30%</th>
                    <th>50%</th>
                    <th>曇</th>
                </tr>
                <tr>
                    <td>Free Wether</td>
                    <th>0%</th>
                    <th>0%</th>
                    <th>10%</th>
                    <th>0%</th>
                    <th>30%</th>
                    <th>80%</th>
                    <th>晴れ</th>
                </tr>
            </tbody>
        </table>
    );
};