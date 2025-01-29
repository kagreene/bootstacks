import React from 'react'
import './styles.css'
interface WeatherCardProps {
    weather: string;
    temp: number;
    precipitation: number;
    wind: number;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({weather, temp, precipitation, wind}) => {
  
    return (
    <div className="WeatherCard">
      <h1>Weather</h1> 
    <div>{weather}</div>   
    <div>{temp}°F</div>
    <div>{precipitation}%</div>
    <div>{wind}km/h</div>  

    </div>
  )
}