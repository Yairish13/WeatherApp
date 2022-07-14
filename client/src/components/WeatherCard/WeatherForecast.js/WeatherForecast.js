import React from 'react'
import './WeatherForecast.css'

function WeatherForecast({relevantForecastObj}) {
    return (
        <>
        {relevantForecastObj.map(({ time, temp_c },i) => (
            <div className="weather_detail" key={i}>
              <span className="forecast_hour">{time.slice(-5)}</span>
              <span>{temp_c}°</span>
            </div>
          ))}
          </>
    )
}

export default WeatherForecast
