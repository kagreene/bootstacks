// This file is used to define the API routes for the server

import { Router } from 'express';
import { volunteerRouter } from './services/nflApi.js';
import { workRouter } from './services/weatherApi.js';

const router = Router();

router.use('/volunteers', volunteerRouter);
router.use('/works', workRouter);

export default router;
