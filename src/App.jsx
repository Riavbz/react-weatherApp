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
    <div className="min-h-screen bg-linear-135 from-canva-lightBlue to-canva-darkBlue flex-col items-center px-4 py-8">
      <div className="w-full max-w-2x1">
      <SearchBar
      searchCity={searchCity}
      setSearchCity={setSearchCity}
      handleSubmit={handleSubmit}
      />
     <WeatherDisplay weatherData={weatherData} city={city}/>
      </div>
    </div>
  )
}

export default App