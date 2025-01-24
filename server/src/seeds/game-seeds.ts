import { Game } from '../models';

export const seedGames = async () => {
  await Game.bulkCreate([
    {
      date: new Date('2025-01-12T21:30Z'),
      homeTeam: 'Philadelphia Eagles',
      awayTeam: 'Green Bay Packers',
      venue: 'Lincoln Financial Field',
      weather: 'Clear skies, 45°F',
      homeScore: 22,
      awayScore: 10
    },
    {
      date: new Date('2025-01-19T20:00Z'),
      homeTeam: 'Philadelphia Eagles',
      awayTeam: 'Los Angeles Rams',
      venue: 'Lincoln Financial Field',
      weather: 'Partly cloudy, 50°F',
      homeScore: 28,
      awayScore: 22
    }
  ]);
};
