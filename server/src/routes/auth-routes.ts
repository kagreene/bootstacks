// This file is used to define the authentication routes for the server

import { Router, type Request, type Response } from 'express';
import { User } from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

export const login = async (req: Request, res: Response) => {

  const { username, password } = req.body;
  console.log(username + " " + password);
  const user = await User.findOne({
    where: { username },
  });
  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const secretKey = process.env.JWT_SECRET_KEY || '';

  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  return res.json({ token });
};

export const signup = async (req: Request, res: Response) => {
  console.log(req.body);
  const { username, password, email } = req.body;
  console.log(username + " " + password);
  try{
  const user = await User.create({
    username: username,
    password: password,
    email: email
  });
    console.log(user);
} catch (err) {
    console.log('error from signup: ',err);
    return res.status(401).json({ message: 'Signup failed' });
  }

  const secretKey = process.env.JWT_SECRET_KEY || '';

  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  return res.json({ token });
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);
router.post('/signup', signup);

export default router;
