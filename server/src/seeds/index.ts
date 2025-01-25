import { seedTeams } from './team-seeds.js';
import { seedGames } from './game-seeds.js';
import { seedWeather } from './weather-seeds.js';
import sequelize from '../config/connection.js';

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedTeams();
    console.log('\n----- TEAMS SEEDED -----\n');
    
    await seedGames();
    console.log('\n----- GAMES SEEDED -----\n');
    
    await seedWeather();
    console.log('\n----- WEATHER SEEDED -----\n');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
