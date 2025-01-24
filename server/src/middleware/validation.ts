// This file is used to define the validation middleware for the server

import { type Request, type Response, type NextFunction } from 'express';

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  // TODO: Implement validation middleware
  next();
};