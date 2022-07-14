import React from "react";
import './WeatherDetails.css'

const WeatherDetails = ({
  temp_c,
  condition,
  precip_mm,
  humidity,
  wind_kph,
  name,
  localtime,
  country,
}) => {
  return (
    <>
      <div className="weather_card_header">
        <span className="city_name">{name}</span>
        <span className="city_country">{country}</span>
        <span className="city_time">{localtime}</span>
      </div>
      <div className="current_temp">
        <span className="city_temp">{temp_c}°</span>
        <span className="city_condition">{condition && condition.text}</span>
      </div>
      <div className="weather_details">
        <div className="weather_detail">
          <span className="detail_header">Precipitation</span>
          <span className="detail_info">{precip_mm} mm</span>
        </div>
        <div className="weather_detail">
          <span className="detail_header">Humidity</span>
          <span className="detail_info">{humidity}%</span>
        </div>
        <div className="weather_detail">
          <span className="detail_header">Wind</span>
          <span className="detail_info">{wind_kph} km/h</span>
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
