import express from 'express';
import type { Request, Response } from 'express';
import { getWeatherByZipandDate } from '../../service/weatherService.js';

 const router = express.Router();

//  GET /weather/:zip/:date - Get the weather for a zip code on a specific date
router.get('/weather/:zip/:date', async (req: Request, res: Response) => {
  const { zip, date } = req.params;
  try {
    const weather = await getWeatherByZipandDate(zip as string, date as string);
    res.json(weather);
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});
export { router as weatherRouter };
