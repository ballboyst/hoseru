import { useEffect } from "react";
import { useState } from "react";

export const CommonDescription = () => {
  const urlLivedoor = 'https://weather.tsukumijima.net/api/forecast/city/220040';

  interface Description{
    bodyText:string;
  }

  const [forecastDataLivedoor,setForecastDataLivedoor] = useState(null);
  const [detailText,setDetailText]= useState<Description>({ bodyText:"天気の概要"});

  useEffect(() => {
      const fetchData = async () => {
          try {
              const responseLivedoor = await fetch(urlLivedoor);
              const dataLivedoor = await responseLivedoor.json();
              setForecastDataLivedoor(dataLivedoor.forecasts);
              setDetailText({bodyText: dataLivedoor.description.bodyText || ""});
          } catch (error) {
              console.error('Error:', error);
          }
      };

      fetchData();
  }, [urlLivedoor]);

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: detailText.bodyText ? detailText.bodyText.replace(/\n+/g, '<br />') : "" }}></p>
    </div>
  );
};