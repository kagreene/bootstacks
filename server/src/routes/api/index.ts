import { Router } from 'express';
import { volunteerRouter } from './nflApi.js';
import { workRouter } from './weatherApi.js';

const router = Router();

router.use('/volunteers', volunteerRouter);
router.use('/works', workRouter);

export default router;
