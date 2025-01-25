import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherByCity = async (city: string) => {
  try {
    const response = await axios.get(
      `${WEATHER_BASE_URL}?q=${city}&appid=${WEATHER_API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching weather', error);
  }
}
// need to add functions to fetch weather for specific date 
