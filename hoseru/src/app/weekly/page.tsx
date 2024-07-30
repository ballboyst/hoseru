import Image from "next/image";
import { WetherForecastThisWeek } from "../../components/WetherForecastThisWeek";

const page = () => {
    return (
        <div>
            <h1>今週の天気</h1>
            < WetherForecastThisWeek />
        </div>
    );
};

export default page;