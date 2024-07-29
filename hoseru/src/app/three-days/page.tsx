import Image from "next/image";
import { WetherForecastThreeDays } from "../../components/WetherForecastThreeDays";

const page = () => {
    return (
        <div>
            <h1>天気予報アプリhoseru?</h1>
            < WetherForecastThreeDays />
        </div>
    );
};

export default page;