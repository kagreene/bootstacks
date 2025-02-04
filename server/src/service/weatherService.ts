import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';
const GEOCODING_API_URL = 'http://api.openweathermap.org/geo/1.0/direct?q=';

// Check if the desired date is within 5 days of the current date
const isDateWithinNext5Days = (date: string) => {
  const currentDate = new Date();
  const targetDate = new Date(date);
  const diffTime = targetDate.getTime() - currentDate.getTime();
  const diffDays = diffTime / (1000 * 3600 * 24);
  return diffDays >= 0 && diffDays <= 5;
};

//need to check if desired date is within 5 days of current date before fetching weather
 // use geocoder API to get lat and long for city from zip code
const getLatLongByCity = async (city: string) => {
  console.log('Fetching latitude and longitude for city:', city);
  console.log('Using API key:', WEATHER_API_KEY);
  try {
    console.log('Fetching latitude and longitude for zip:', city);
    console.log('Using API key:', WEATHER_API_KEY);
    const response = await axios.get(
      `${GEOCODING_API_URL}${city}&appid=${WEATHER_API_KEY}`
    );
    
    if (!response.data) {
      throw new Error (`City ${city} not found`);
    }
    //destructure location data to get lat and long
    const lat = response.data[0].lat;
    const lon = response.data[0].lon;
    return { lat, lon };
    // const lat = response.data.lat;
    // const lon = response.data.lon;
    return { lat, lon };
  } catch (error) {
    console.error('Error fetching latitude and longitude data', error);
    throw new Error ('Failed to fetch latitude and longitude')
  }
};


//fetch weather forecast by lat and long
// extract weather for desired date
export const getWeatherByCityandDate = async (city: string,date: string) => {
  if (!isDateWithinNext5Days(date)) {
    return { message: 'No weather data available for the specified date' };
  }
  try {
    //get lat and long
    const { lat, lon } = await getLatLongByCity(city);
    const response = await axios.get(
      `${WEATHER_BASE_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );
    if (!response.data) {
      throw new Error(`Weather data not found for city ${city} on date ${date}`);
    }
    const targetDate = new Date(date).toISOString().split('T')[0];
    //extract weather for desired date
    const weatherData = response.data.list.filter((day: any) => day.dt_txt.startsWith(targetDate));
    if (weatherData.length === 0){
      throw new Error(`No weather data found for ${date}`);
    }
    const mappedWeatherData = weatherData.map((day: any) => ({
      data: day.dt_txt,
      tempF: day.main.temp,
      iconDescription: day.weather[0].description,
      icon: day.weather[0].icon,
      windSpeed: day.wind.speed,
      humidity: day.main.humidity
    }));
    return mappedWeatherData;
  } catch (error) {
    console.error('Error fetching weather data', error);
    throw new Error('Failed to fetch weather data');
  }
};
