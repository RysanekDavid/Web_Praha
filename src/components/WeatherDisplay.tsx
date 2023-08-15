import React, { useState, useEffect } from 'react';

interface WeatherDisplayProps {
    city: string;
  }
  
  interface WeatherData {
    main: {
      temp: number;
    };
    
  }

  function WeatherDisplay({ city }: WeatherDisplayProps): JSX.Element {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error('Chyba při načítání počasí:', error));
  }, [city, URL]); // Dependency array obsahuje proměnné, které pokud se změní, vyvolají znovu načtení počasí.

  if (!weatherData) return <div>Načítám počasí...</div>;

  return (
    <div>
      <h3>Počasí v {city}</h3>
      <p>Teplota: {weatherData.main.temp}°C</p>
      {/* Můžete zde přidat další informace o počasí podle toho, co vám API vrátí. */}
    </div>
  );
}

export default WeatherDisplay;
