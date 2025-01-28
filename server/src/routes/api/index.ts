// This file is used to define the API routes for the server

import { Router } from 'express';
import { nflRouter } from './nflApi.js';
import { weatherRouter } from './weatherApi.js';

const router = Router();

router.use('/nfl', nflRouter);
router.use('/weather', weatherRouter);

export default router;
