import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const NFL_API_KEY= process.env.NFL_API_KEY;
const NFL_BASE_URL= ;

export const getTeamSchedule = async (team: string) => {
  try {
    const response = await axios.get(
      `${NFL_BASE_URL}/teams/${team}`,
      {
        headers: {
          'x-rapidapi-key': NFL_API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching team schedule', error);
  }
}