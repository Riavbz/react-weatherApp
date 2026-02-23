import { handleIcon } from '../utils/handleIcon';
import DateFunc from "./DateFunc"
import therm from '../images/therm.svg';
import humidityImg from '../images/humidityImg.svg';
import windImg from '../images/windImg.svg';
import high_low from '../images/high_low.svg';
import temp_feels from '../images/temp_feels.svg';


const WeatherDisplay = ({ weatherData, city }) => {
    if (!weatherData) return null; 
    const { main, weather, wind } = weatherData;

  return (
    <div className='bg-sky-200/70 rounded-2xl shadow-md p-4 sm:p-6'>
      <h1 className="text-3xl font-extrabold tracking-tight text-center mb-1">Weather in {city} </h1>
      <div className='text-center mb-4'>
        <DateFunc />
      </div>

      {/* Weather Icon & Condition */}
      <div className='flex flex-col items-center mb-4'>
        <img src={handleIcon(weather[0].description)} alt="Weather Icon" className='w-30 h-30 mx-auto mb-2'/>
        <p className='text-lg font-semibold tracking-wide'>{weather[0].description.toUpperCase()}</p>
      </div>

      {/* Temp Section */}
      <div className='flex items-center justify-center gap-3 mb-6'>
        <img src={therm} alt="Temp Icon" className='w-13 h-13'/>
        <p className="text-4xl font-bold content-center tracking-tight">
          Temp: {main.temp}°F
        </p>
      </div>

      {/* Weather Details */}
      <div className="grid grid-cols-2 gap-6 text-sm text-gray-700">

        <div className='flex items-center gap-2'>
          <img src={temp_feels} alt="Feels Like Icon" className='w-10 h-10'/>
          <p className='text-base font-semibold'>Feels like {weatherData?.main?.feels_like}°F</p>
        </div>

      <div className='flex items-center gap-2'>
        <img src={humidityImg} alt="Humidity Icon" className='w-10 h-10'/>
        <p className='text-base font-semibold'>Humidity: {main.humidity}%</p>
      </div>

      <div className='flex items-center gap-2'>
        <img src={windImg} alt="Wind Icon" className='w-10 h-10'/>
        <p className='text-base font-semibold'>Wind: {wind.speed} mph</p>
      </div>

      <div className='flex items-center gap-2'>
        <img src={high_low} alt="HighnLow Icon" className='w-10 h-10'/>
        <p className='text-base font-semibold'>High/Low: {main.temp_max}°F / {main.temp_min}°F</p>
      </div>
      </div>
    </div>
  )
}

export default WeatherDisplay