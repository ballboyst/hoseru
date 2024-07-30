import Image from "next/image";
import { WetherForecastThisWeek } from "../../components/WetherForecastThisWeek";

const page = () => {
    return (
        <div>
            <h1>天気予報アプリhoseru?</h1>
            < WetherForecastThisWeek />
        </div>
    );
};

export default page;