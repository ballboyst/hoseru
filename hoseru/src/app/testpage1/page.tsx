import Image from "next/image";
import { WetherForecast } from "../../components/WetherForecastToday"

const page = () => {
    return (
        <div>
            <h1>天気予報アプリhoseru?</h1>
            < WetherForecast />
        </div>
    );
};

export default page;