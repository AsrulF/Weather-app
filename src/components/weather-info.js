import React from "react";
import sunIcon from "../asset/sun.png"
import humidity from "../asset/humidity.png";
import wind from "../asset/wind.png";

const WeatherInfo = ({ weatherData }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-[300px]">
      <img src={weatherData.icon} alt="weather-icon" className="w-32" />
      <p className="font-bold text-4xl">{weatherData.temperature}&deg;</p>
      <p className="font-bold text-4xl">{weatherData.location}</p>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-center gap-3">
          <img alt="weather-icon" src={humidity} className="w-10" />
          <div>
            <p>{weatherData.humidity} %</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <img alt="weather-icon" src={wind} className="w-10" />
          <div>
            <p>{weatherData.windSpeed} Km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
