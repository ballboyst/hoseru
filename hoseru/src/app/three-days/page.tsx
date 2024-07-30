import Image from "next/image";
import { WetherForecastThreeDays } from "../../components/WetherForecastThreeDays";

const page = () => {
    return (
        <div>
            <h1>３日間の天気</h1>
            < WetherForecastThreeDays />
        </div>
    );
};

export default page;