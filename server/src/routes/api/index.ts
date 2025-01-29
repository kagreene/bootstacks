// This file is used to define the API routes for the server

import { Router } from 'express';
import { weatherRouter } from './weatherApi.js';
import { userRouter } from './userAPI.js';


const router = Router();

router.use('/weather', weatherRouter );
router.use('/register', userRouter );

export default router;
