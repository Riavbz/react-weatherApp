// apiKey stores the environment variable based on the documentation from Vite https://vite.dev/guide/env-and-mode

export async function getWeather(city) {
    // using fetch to grab weather data from openweathermap 2.5 using the syntax provided by the API documentation https://openweathermap.org/current?collection=current_forecast
    const response = await fetch(`http://localhost:5001/weather?city=${city}`);

    if (!response.ok) {
        throw new Error("Failed to fetch weather");
    }
    const data = await response.json();
    return data;
}