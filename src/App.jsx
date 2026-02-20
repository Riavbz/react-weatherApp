import { useState, useEffect, useRef} from 'react';
import * as THREE from "three"
import CLOUDS from "vanta/dist/vanta.clouds.min"

import { getWeather } from './services/weatherService';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';


const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("New Jersey");
  const [searchCity, setSearchCity] = useState("");
  const vantaRef = useRef(null)
  function handleSubmit(e) {
    e.preventDefault();
    setCity(searchCity);
  }
  //VANTA EFFECT
  useEffect(() => {
    const effect = CLOUDS({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      skyColor: 0x066d99,
      cloudColor: 0xffffff,
      backgroundColor: 0x4dacd4,
      speed: 0.5,
    })

    return () => {
      if (effect) effect.destroy()
    }
  }, [])


  // useEffect loads on initial render, and because city is in a dependency array the useEffect function will re run if the city value changes
  useEffect(() => {
    getWeather(city)
    .then((data) => setWeatherData(data))
    .catch((err) => console.log(err));
  }, [city])

  return (
  <div 
  ref={vantaRef}
  className="min-h-screen flex flex-col items-center px-4 py-8"
    >
  {/* // className="min-h-screen bg-linear-135 from-canva-lightBlue to-canva-darkBlue flex-col items-center px-4 py-8"> */}
        <div className="w-full max-w-2x1 bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl">
          <SearchBar
            searchCity={searchCity}
            setSearchCity={setSearchCity}
            handleSubmit={handleSubmit}
          />
          <WeatherDisplay weatherData={weatherData} city={city}/>
        </div>
      </div>
  );
}

export default App