import { handleIcon } from '../utils/handleIcon';

const WeatherDisplay = ({ weatherData, city }) => {
    if (!weatherData) return null; 
    const { main, weather, wind } = weatherData;

  return (
    <div className='bg-sky-200/70 rounded-2xl shadow-md p-6'><h1 className="text-3xl font-extrabold tracking-tight mb-4">Weather in {city} </h1>
    <img src={handleIcon(weather[0].description)} alt="Weather Icon" className='w-30 h-30 mx-auto mb-2'/>
    <p className='text-2xl font-semibold mx-auto mb-1'>{weather[0].description.toUpperCase()}</p>
    <p className="text-3xl font-semibold tracking-tight mb-4">Temp: {main.temp} °F</p>
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