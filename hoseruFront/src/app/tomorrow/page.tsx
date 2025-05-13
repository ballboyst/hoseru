import Image from "next/image";
import { WetherForecastTomorrow } from "../../components/WetherForecastTomorrow"

const page = () => {
    return (
        <div>
            <h4 className="mt-2 text-2xl text-center">翌日の天気</h4>
            < WetherForecastTomorrow />
        </div>
    );
};

export default page;