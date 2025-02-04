import React, { useEffect, useState } from 'react';
import { getWeatherDetails } from '../api/nflApi';

interface GameDetailsProps {
  city: string;
  date: string;
}

const GameDetails: React.FC<GameDetailsProps> = ({ city, date }) => {
  const [weatherDetails, setWeatherDetails] = useState<any>(null);

  useEffect(() => {
    const fetchWeatherDetails = async () => {
      const details = await getWeatherDetails(city, date);
      setWeatherDetails(details);
    };

    fetchWeatherDetails();
  }, [city,date]);

  return (
    <div>
      <h2>Game Details</h2>
      {weatherDetails ? (
        typeof weatherDetails === 'string' ? (
          <p>{weatherDetails}</p>
        ) : (
          <div>
            <p>Temperature: {weatherDetails[0].tempF}°F</p>
            <p>Condition: {weatherDetails[0].iconDescription}</p>
            <p>Wind: {weatherDetails[0].windSpeed} mph</p>
            <p>Humidity: {weatherDetails[0].humidity}%</p>
          </div>
        )
      ) : (
        <p>Loading weather details...</p>
      )}
    </div>
  );
};

export default GameDetails;