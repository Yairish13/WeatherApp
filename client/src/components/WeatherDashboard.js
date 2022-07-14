import React from "react";
import "./WeatherDashboard.css";
import WeatherCard from "./WeatherCard/WeatherCard";
import SearchingCard from "./SearchingCard/SearchingCard";
import WrongPopup from "./common/WrongPopup/WrongPopup";
import useWeatherHook from "../hooks/useWeatherHook";

const WeatherDashboard = () => {
  const {
    togglePopup,
    setCity,
    weatherObject,
    relevantForecastObj,
    isPopupOpen,
  } = useWeatherHook();

  return (
    <>
      {isPopupOpen && <WrongPopup togglePopup={togglePopup} />}
      <div className="dashboard">
        <div className="left">
          <SearchingCard setCity={setCity} weatherObject={weatherObject} />
        </div>
        <div className="right">
          {weatherObject && (
            <WeatherCard
              weatherObject={weatherObject}
              relevantForecastObj={relevantForecastObj}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default WeatherDashboard;
