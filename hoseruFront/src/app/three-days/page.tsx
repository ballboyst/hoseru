import Image from "next/image";
import { WetherForecastThreeDays } from "../../components/WetherForecastThreeDays";

const page = () => {
    return (
        <div>
            <h4 className="mt-2 text-2xl text-center">３日間の天気</h4>
            < WetherForecastThreeDays />
        </div>
    );
};

export default page;