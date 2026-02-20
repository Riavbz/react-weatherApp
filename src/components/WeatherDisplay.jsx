import { handleIcon } from '../utils/handleIcon';

const WeatherDisplay = ({ weatherData, city }) => {
    if (!weatherData) return null; 
    const { main, weather, wind } = weatherData;

  return (
    <div className='bg-white rounded-2xl shadow-md p-6'><h1 className="text-2xl font-semibold mb-4"> {city} Weather</h1>
    <img src={handleIcon(weather[0].description)} alt="Weather Icon" />
    <p className="text-4xl font-bold mb-4">Temp: {main.temp} °F</p>
    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
      <div>
        <p className='font-medium'>Feels like {weatherData?.main?.feels_like} °F</p>
      </div>
      <div>
        <p className='font-medium'>Humidity: {main.humidity}%</p>
      </div>
      <div>
        <p className='font-medium'>Wind: {wind.speed} mph</p>
      </div>
      <div>
        <p className='font-medium'>High/Low: {main.temp_max} °F / {main.temp_min} °F</p>
      </div>
    </div>
    </div>
  )
}

export default WeatherDisplay