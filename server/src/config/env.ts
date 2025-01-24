// This file is used to validate and type environment variables

import dotenv from 'dotenv';
import { z } from 'zod'; // For runtime validation

// Load environment variables
dotenv.config();

// Define environment variable schema
const envSchema = z.object({
  // Database (Required for all team members)
  DB_NAME: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_HOST: z.string().default('localhost'),
  DB_PORT: z.string().default('5432'),
  
  // Render deployment (Only needed by team lead)
  DATABASE_URL: z.string().optional(),

  // API Keys (Can be shared or individual)
  NFL_API_KEY: z.string().optional(),      // For NFL game data
  WEATHER_API_KEY: z.string().optional(),  // For weather forecasts

  // Auth (Required for user login feature)
  JWT_SECRET_KEY: z.string(),

  // Environment
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  PORT: z.string().transform(Number).default('3001'),
});

// Validate and export environment variables
const env = envSchema.parse(process.env);

export default env;

