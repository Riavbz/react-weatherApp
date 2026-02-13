import { useState, useEffect } from 'react';
import { getWeather } from './services/weatherService';
import { handleIcon } from './utils/handleIcon';

const Apgp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("New York");
  const [searchCity, setSearchCity] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setCity(searchCity);
  }


  // useEffect loads on initial render, and because city is in a dependency array the useEffect function will re run if the city value changes
  useEffect(() => {
    getWeather(city)
    .then((data) => setWeatherData(data))
    .catch((err) => console.log(err));
  }, [city]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchCity">Enter your city</label>
        <input type="text" name="searchCity" id="searchCity" placeholder="New York" value={searchCity} onChange={(e) => setSearchCity(e.target.value)} />
        <button type="submit">Search for Weather</button>
      </form>
      <h1>{city} Weather</h1>
      <img src={handleIcon(weatherData?.weather[0].description)} alt="weather-icon" />
      <p>{weatherData?.main?.temp} degrees farenheit</p>
    </div>
  )
}

export default App