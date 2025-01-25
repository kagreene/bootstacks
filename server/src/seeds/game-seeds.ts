import { GameSeed } from './types';

export const gameSeeds: GameSeed[] = [
  {
    id: "401671888",
    date: "2025-01-26T20:00Z",
    name: "Washington Commanders at Philadelphia Eagles",
    shortName: "WSH @ PHI",
    season: {
      year: 2024,
      type: "Postseason",
      week: {
        number: 3,
        text: "Conference Championship"
      }
    },
    homeTeamId: "21", // Eagles
    awayTeamId: "28"  // Commanders
  },
  {
    id: "401671889",
    date: "2025-01-27T20:00Z",
    name: "Dallas Cowboys at New York Giants",
    shortName: "DAL @ NYG",
    season: {
      year: 2024,
      type: "Postseason",
      week: {
        number: 3,
        text: "Conference Championship"
      }
    },
    homeTeamId: "19", // Giants
    awayTeamId: "6"   // Cowboys
  }
];

export const seedGames = async () => {
  try {
    // Assuming Game model is imported and configured
    // await Game.bulkCreate(gameSeeds);
    console.log('\n----- GAMES SEEDED -----\n');
  } catch (error) {
    console.error('Error seeding games:', error);
    throw error;
  }
};
