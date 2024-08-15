import Image from "next/image";
import { WetherForecastThisWeek } from "../../components/WetherForecastThisWeek";

const page = () => {
    return (
        <div>
        <h4 className="mt-2 text-2xl text-center">週間天気</h4>
            < WetherForecastThisWeek />
        </div>
    );
};

export default page;