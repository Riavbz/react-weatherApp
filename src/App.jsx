import { useState, useEffect, useRef} from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import { getWeather } from './services/weatherService';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';


const App = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("New Jersey");
  const [searchCity, setSearchCity] = useState("");
  const vantaRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchCity.trim()) {
      return
    }
    setCity(searchCity);
  }

  // useEffect loads on initial render, and because city is in a dependency array the useEffect function will re run if the city value changes
  useEffect(() => {
    setLoading(true)
    setError(null)

    getWeather(city)
    .then((data) => setWeatherData(data))
    .catch((err) => { console.log(err)
      setError("City not found")
    })
    .finally(() => setLoading(false))
  }, [city])

  return (
    <AnimatedBackground>
  <div className="min-h-screen flex flex-col items-center px-4 py-8">
  {/* // className="min-h-screen bg-linear-135 from-canva-lightBlue to-canva-darkBlue flex-col items-center px-4 py-8"> */}
        <div className="w-full max-w-2xl bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl">
          <SearchBar
            searchCity={searchCity}
            setSearchCity={setSearchCity}
            handleSubmit={handleSubmit}
          />
          {loading && (
            <p className='text-white text-center mt-4 animate-pulse'>
              Loading weather...
            </p>
          )}
          {error && (
            <p className='text-red-500 text-xl font-semibold text-center mt-4'>
              {error}
            </p>
          )}
          <WeatherDisplay 
          weatherData={weatherData} city={city}/>
        </div>
      </div>
      </AnimatedBackground>
  );
}

export default App