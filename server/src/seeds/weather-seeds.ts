import { WeatherSeed } from './types';

export const weatherSeeds: WeatherSeed[] = [
  {
    gameId: "401671888",
    weather: "clear sky",
    temp: 42, // °F
    precipitation: 10, // 10% chance
    wind: 8, // km/h
    lastUpdated: "2025-01-26T19:00Z" // 1 hour before game time
  },
  {
    gameId: "401671889",
    weather: "light snow",
    temp: 35, // °F
    precipitation: 60, // 60% chance
    wind: 12, // km/h
    lastUpdated: "2025-01-27T19:00Z" // 1 hour before game time
  }
];

export const seedWeather = async () => {
  try {
    // Assuming Weather model is imported and configured
    // await Weather.bulkCreate(weatherSeeds);
    console.log('\n----- WEATHER SEEDED -----\n');
  } catch (error) {
    console.error('Error seeding weather:', error);
    throw error;
  }
};
