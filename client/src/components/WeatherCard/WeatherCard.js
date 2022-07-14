import React from "react";
import "./WeatherCard.css";
import WeatherDetails from "./WeatherDetails/WeatherDetails";
import WeatherForecast from "./WeatherForecast.js/WeatherForecast";

const WeatherCard = ({ weatherObject, relevantForecastObj }) => {
  const { location, current } = weatherObject || {};
  const { name, localtime, country } = location || {};
  const { temp_c, condition, precip_mm, humidity, wind_kph } = current || {};

  const childProps = {
    name,
    localtime,
    country,
    temp_c,
    condition,
    precip_mm,
    humidity,
    wind_kph,
  };
  return (
    <>
      {weatherObject.location ? (
        <div className="weather_card">
          <WeatherDetails {...childProps} />
          <div className="weather_details">
            <WeatherForecast relevantForecastObj={relevantForecastObj} />
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default WeatherCard;
