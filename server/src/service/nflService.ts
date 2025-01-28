import dotenv from 'dotenv';
import axios from 'axios';
import { Game } from '../models/Game.js'
dotenv.config();

const NFL_API_KEY = process.env.NFL_API_KEY;
const NFL_BASE_URL = 'nfl-api-data.p.rapidapi.com';

// Interface for team mapping response
interface TeamMapping {
  id: string;
  name: string;
  abbreviation: string;
}

//get list of all teams with names and ids 
export const fetchTeamMapping = async (): Promise<TeamMapping[]> => {
    try {
      const response = await axios.get(`${NFL_BASE_URL}/nfl-team-listing/v1/data`, {
        headers: {
          'X-RapidAPI-Host': 'nfl-api-data.p.rapidapi.com',
          'X-RapidAPI-Key': NFL_API_KEY,
        },
      });
  
      const teams = response.data.map((team: any) => ({
        id: team.id,
        name: team.displayName,
        abbreviation: team.abbreviation,
      }));
  
      return teams; // Array of { id, name, abbreviation }
    } catch (error) {
      console.error('Error fetching team mapping:', error);
      throw new Error('Failed to fetch team mapping.');
    }
};
  
// Get team ID by team name
export const getTeamID = async (teamName: string): Promise<string> => {
    try {
      const teams = await fetchTeamMapping();
  
      const team = teams.find(
        (t) => t.name.toLowerCase() === teamName.toLowerCase()
      );
  
      if (!team) {
        throw new Error(`Team "${teamName}" not found.`);
      }
  
      return team.id;
    } catch (error) {
        console.error('Error fetching team ID:', error);
        throw new Error('Failed to fetch team ID.');
    }
};

//fetch team schedule by team name
export const getTeamSchedule = async (teamName: string) => {
    //get teamID
    const teamID = await getTeamID(teamName);
    if (!teamID) {
        throw new Error(`Team ${teamName} not found`);
    }

    try {
        const response = await axios.get(
            `${NFL_BASE_URL}/nfl-team-schedule?id=${teamID}`,
            {
                headers: {
                    'x-rapidapi-host': NFL_BASE_URL,
                    'x-rapidapi-key': NFL_API_KEY,
                },
            }
        );

        // map response to get schedule of games
        const data = await response.data();
        const events = data.events;

        const mappedSchedule = await events.map(async (event: any) => {
            //Access first competition in competitions array 
            const competition = event.competitions[0];
            
            // get away team and home team
            const homeTeam = competition.competitors.find((team: any) => team.homeAway === 'home');
            const awayTeam = competition.competitors.find((team: any) => team.homeAway === 'away');

            // Create game with updated schema matching our database structure
            const gameDetails = {
                id: event.id,
                date: new Date(event.date),
                name: event.name,
                shortName: event.shortName || `${awayTeam.team.abbreviation} @ ${homeTeam.team.abbreviation}`,
                seasonYear: event.season.year,
                seasonType: event.season.type,
                weekNumber: event.week.number,
                weekText: event.week.text,
                homeTeamId: homeTeam.team.id,
                awayTeamId: awayTeam.team.id
            };

            // Create or update game in database using upsert to avoid duplicates
            await Game.upsert(gameDetails);
            return gameDetails;
        });

        //return full schedule
        return Promise.all(mappedSchedule);
    } catch (error) {
        console.error('Error fetching team schedule', error);
        throw new Error('Failed to fetch team schedule.');
    }
};

//get game details by teamName and gameId
export const getGameDetails = async (teamName: string, gameId: string) => {
    try {
        // Find game by primary key in database
        const game = await Game.findByPk(gameId);
        
        if (!game) {
            throw new Error(`Game ${gameId} not found.`);
        }

        return game;
    } catch (error) {
        console.error('Error fetching game details', error);
        throw new Error('Failed to fetch game details.');
    }
};
