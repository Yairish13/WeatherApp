import {getWeather} from "../api/requests";

export const weatherFunction = async (city,setWeatherObject,setRelevantForecastObj,setIsPopupOpen) => {
  const data = await getWeather(city); 
  if(!data.location){
    setIsPopupOpen(true)
    return;
  }
  const {localtime} = data.location;  
  relevantForecast(data.forecast,setRelevantForecastObj,localtime);
  setWeatherObject(data);
};

export const relevantForecast = (forecast,setRelevantForecastObj,localtime) => {
  try {
    const now = new Date(localtime);
    const nowHour = now.getHours();
    const allDayCast = forecast.forecastday[0].hour;
    if (nowHour >= 18) {
      setRelevantForecastObj(allDayCast.slice(-5));
    } else {
      setRelevantForecastObj(allDayCast.slice(nowHour, nowHour+5));
    }
  } catch (error) {
    console.log(error);
  }
};


