import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import sunIcon from "../asset/sun.png";
import cloudyIcon from "../asset/cloudy.png";
import rainIcon from "../asset/raining.png";
import stormIcon from "../asset/storm.png";
import snowIcon from "../asset/snow.png";
import scatterCloud from "../asset/clouds.png";
import brokenCloud from "../asset/clouds (1).png";
import heavyRain from "../asset/heavy-rain.png";
import WeatherInfo from "./weather-info";

const SearchInput = () => {
  const [weatherData, setWeatherData] = useState({
    icon: sunIcon,
    location: "New York",
  });

  const allIcon = {
    "01d": sunIcon,
    "02d": cloudyIcon,
    "03d": scatterCloud,
    "04d": brokenCloud,
    "09d": heavyRain,
    "10d": rainIcon,
    "11d": stormIcon,
    "13d": snowIcon,
  };

  const inputRef = useRef();

  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );

  const handleSearch = async (city) => {
    if (city === "") {
      alert("Please enter a city");
    } else {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

        const response = await axios.get(url);

        console.log(response.data);

        const weatherIcon = allIcon[response.data.weather[0].icon] || sunIcon;

        setWeatherData({
          temperature: Math.floor(response.data.main.temp),
          humidity: response.data.main.humidity,
          windSpeed: response.data.wind.speed,
          location: response.data.name,
          icon: weatherIcon,
        });
      } catch (error) {
        console.log(error);
        alert("City not Found");
      }
    }
  };

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <Space>
        <Search
          ref={inputRef}
          placeholder="Enter a city"
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={() => handleSearch(inputRef.current.input.value)}
        />
      </Space>
      <WeatherInfo weatherData={weatherData} />
    </div>
  );
};

export default SearchInput;
