// Types for NFL Teams, Games, and Weather seed data

export interface TeamSeed {
  id: string;
  location: string;
  name: string;
  displayName: string;
  abbreviation: string;
  venue: {
    fullName: string;
    address: {
      city: string;
      state: string;
      zipCode: string;
    }
  }
}

export interface GameSeed {
  id: string;
  date: string;
  name: string;
  shortName: string;
  season: {
    year: number;
    type: string;
    week: {
      number: number;
      text: string;
    }
  }
  homeTeamId: string;
  awayTeamId: string;
}

export interface WeatherSeed {
  gameId: string;
  weather: string;
  temp: number;
  precipitation: number;
  wind: number;
  lastUpdated: string;
}
