import { handleIcon } from '../utils/handleIcon';

const WeatherDisplay = ({ weatherData, city }) => {
    if (!weatherData) return null; 
    const { main, weather, wind } = weatherData;

  return (
    <div className='weather-display'><h1>{city} Weather</h1>
    <img src={handleIcon(weather[0].description)} alt="Weather Icon" />
    <p>Temperature: {main.temp} °F</p>
    <p>Feels like {weatherData?.main?.feels_like} degrees farenheit</p>
    <p>Humidity: {main.humidity}%</p>
    <p>Wind: {wind.speed} mph</p>
    </div>
  )
}

export default WeatherDisplay