import React, { useEffect, useState } from 'react';
import "./App.css"
import Weather from "./weather.js";

function App() {

  const APIK = "6bda5669c15eca2cb90002886efbf88c";

  const [weathers, setWeather] = useState({
    coord: {},
    main: {},
    weather: [{}]
  });

  const [city, setCity] = useState("");
  const [query, setQuery] = useState("Delhi");

  useEffect(() => {
    fetchWeather();
  }, [query]);

  const fetchWeather = async () => {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${APIK}`);
      const weather = await response.json();
      setWeather(weather);
      console.log(weather);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const inputSearch = (e) => {
    setCity(e.target.value);
  };

  const searchWeather = (e) => {
    e.preventDefault();
    setQuery(city);
    setCity("");
  };
  return (
    <div className="App">
      <form className="form-Search" onSubmit={searchWeather}>
        <input type="text" className="search-bar" value={city} onChange={inputSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>

      <Weather minTemp={weathers.main.temp_min} maxTemp={weathers.main.temp_max} feelsLike={weathers.main.feels_like} name={weathers.name} img={`http://openweathermap.org/img/wn/${weathers.weather[0].icon}@2x.png`} lon={weathers.coord.lon} lat={weathers.coord.lat} temp={weathers.main.temp} />

    </div>
  );
}

export default App;
