import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTheme, useMediaQuery} from '@mui/material';

interface WeatherData {
  main: {
    temp: number;
    temp_min: number;
  };
  weather: [{
    description: string;
    icon: string;
  }];
}

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const CITY = 'Prague'; 

const WeatherWidget: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`)
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error("Error fetching weather data", error);
      });
  }, []);

  if (!weatherData) return <div>Loading...</div>;

  return (
    <div style={{display: 'flex', alignItems: 'center', paddingRight: 20 , paddingBottom: 2, fontSize: isSmallScreen ? 16 : 18}}>
      <b><span>{Math.round(weatherData.main.temp)}°C </span></b>


      <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Weather Icon" style={{width: isSmallScreen ? 50 : 60, height: isSmallScreen ? 50 : 60}}/>
    </div>
  );
}

export default WeatherWidget;
