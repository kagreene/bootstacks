// This file is used to define the routes for the server

import { Router } from 'express';
import apiRoutes from './api/index.js';
import authRoutes from './auth-routes.js';
import { authenticateToken } from '../middleware/auth.js';
const router = Router();

router.use('/api', authenticateToken, apiRoutes);
// Use authenticateToken and authRoutes to login a user  
router.use('/auth', authRoutes);

export default router;
