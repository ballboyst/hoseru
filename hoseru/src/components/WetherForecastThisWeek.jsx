import React from "react"
import "../styles/styles.css"

export const WetherForecastThisWeek = () => {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>情報元</th>
                    <th>今日</th>
                    <th>明日</th>
                    <th>明後日</th>
                    <th>明々後日</th>
                    <th>4日後</th>
                    <th>5日後</th>
                    <th>6日後</th>
                    <th>7日後</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Yahoo天気</td>
                    <th>
                        <p>晴れ</p>
                        <p>0%</p>
                    </th>
                    <th>
                        <p>晴れ</p>
                        <p>0%</p>
                    </th>
                    <th>
                        <p>晴れ</p>
                        <p>10%</p>
                    </th>
                    <th>曇り50%</th>
                    <th>雨80%</th>
                    <th>雨80%</th>
                    <th>晴れ20%</th>
                    <th>晴れ20%</th>
                </tr>
                <tr>
                    <td>Open-Metro</td>
                    <th>晴れ0%</th>
                    <th>晴れ10%</th>
                    <th>晴れ20%</th>
                    <th>曇り50%</th>
                    <th>雨100%</th>
                    <th>雨90%</th>
                    <th>曇り20%</th>
                    <th>曇り20%</th>
                </tr>
                <tr>
                    <td>Free Wether</td>
                    <th>晴れ0%</th>
                    <th>晴れ0%</th>
                    <th>晴れ10%</th>
                    <th>雨60%</th>
                    <th>雨80%</th>
                    <th>雨80%</th>
                    <th>雨20%</th>
                    <th>雨20%</th>
                </tr>
            </tbody>
        </table>
    );
};