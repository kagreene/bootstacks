import express from 'express';
import type { Request, Response } from 'express';
import { getTeamSchedule, getGameDetails } from '../../service/nflService.js'

const router = express.Router();

// GET /team-schedule/:teamName - Get the schedule of games for a team
router.get('/team-schedule/:teamName', async (req: Request, res: Response) => {
  const teamName = req.params.teamName;
  try {
    const schedule = await getTeamSchedule(teamName);
    res.json(schedule);
    
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

// GET /volunteers/:id - Get a volunteer by ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const volunteer = await Volunteer.findByPk(id);
    if(volunteer) {
      res.json(volunteer);
    } else {
      res.status(404).json({
        message: 'Volunteer not found'
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

// POST /volunteers - Create a new volunteer
router.post('/', async (req: Request, res: Response) => {
  const { volunteerName } = req.body;
  try {
    const newVolunteer = await Volunteer.create({
      volunteerName
    });
    res.status(201).json(newVolunteer);
  } catch (error: any) {
    res.status(400).json({
      message: error.message
    });
  }
});



export { router as nflRouter };
