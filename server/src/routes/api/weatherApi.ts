import express from 'express';
import type { Request, Response } from 'express';
import { getWeatherByCityandDate } from '../../service/weatherService.js';

 const router = express.Router();

//  GET /:zip/:date - Get the weather for a zip code on a specific date
router.get('/:city/:date', async (req: Request, res: Response) => {
  const { city, date } = req.params;
  try {
    const weather = await getWeatherByCityandDate(city, date);
    if (weather.message) {
      res.status(200).json(weather);
    } else {
      res.json(weather);
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});
export { router as weatherRouter };
