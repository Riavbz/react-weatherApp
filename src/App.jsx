import { useState, useEffect } from 'react';
import { getWeather } from './services/weatherService';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("New Jersey");
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
      <SearchBar
      searchCity={searchCity}
      setSearchCity={setSearchCity}
      handleSubmit={handleSubmit}
      />
     <WeatherDisplay weatherData={weatherData} city={city}/>
    </div>
  )
}

export default App