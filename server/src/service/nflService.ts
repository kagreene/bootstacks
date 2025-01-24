import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const NFL_API_KEY = process.env.NFL_API_KEY;
const NFL_BASE_URL = 'nfl-api-data.p.rapidapi.com';

//get list of all teams with names and ids 
export const fetchTeamMapping = async () => {
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
        (t: { name: string }) => t.name.toLowerCase() === teamName.toLowerCase()
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

        const mappedSchedule = await events.map((event: any) =>{
            //want to show user upcoming games. need to return gameID, date, venue, city
            // need to show user the team they are playing against, date, and venue
            //Access first competition in competitions array 
            const competition = event.competitions[0];
            
            // get away team and home team
            const homeTeam = competition.competitors.find((team: any) => team.homeAway === 'home');
            const awayTeam = competition.competitors.find((team: any) => team.homeAway === 'away');

            //Determine opposing team 
            const opposingTeam = homeTeam.id === teamID ? awayTeam : homeTeam;
            return {
                gameID: event.id,
                date: event.date,
                venue: competition.venue.fullName,
                city: competition.venue.address.city,
                opposingTeam: opposingTeam.displayName,
                zipCode: competition.venue.address.zipCode,
            };
        });

         //return full schedule
         return mappedSchedule;
    } catch (error) {
        console.error('Error fetching team schedule', error);
        throw new Error('Failed to fetch team schedule.');
    }
};
//get game details by teamName
export const getGameDetails = async (teamName: string, gameID: string) => {
    try {
        const schedule = await getTeamSchedule(teamName);
        const game = schedule.find((game: any) => game.gameID === gameID);
        if (!game) {
            throw new Error(`Game ${gameID} not found.`);
        }
        return {
            gameID: game.gameID,
            date: game.date,
            venue:game.venue,
            city: game.city,
            opposingTeam: game.opposingTeam,
            zipCode: game.zipCode,
        }
    } catch (error) {
        console.error('Error fetching game details', error);
        throw new Error('Failed to fetch game details.');
    }
};