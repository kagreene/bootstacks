import express from 'express';
import type { Request, Response } from 'express';
import { getTeamSchedule, getGameDetails } from '../../service/nflService.js'
import { Game } from '../../models/index.js';

const router = express.Router();

// GET /team-schedule/:teamName - Get the schedule of games for a team
router.get('/team-schedule/:teamName', async (req: Request, res: Response) => {
  const teamName = req.params.teamName;
  try {
    // Fetch and save schedule to database, return mapped schedule
    const schedule = await getTeamSchedule(teamName);
    res.json(schedule);
    
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

// GET /game-details/:teamName/:gameID - Get the details of a game for a team
router.get('/game-details/:teamName/:gameID', async (req: Request, res: Response) => {
  const { teamName, gameID } = req.params;
  try {
    // Get game details from database
    const gameDetails = await getGameDetails(teamName, gameID);
    res.json(gameDetails);
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

export { router as nflRouter };
