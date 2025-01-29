import { User } from '../models/index.js';

export const seedUsers = async () => {
  await User.bulkCreate(
    [
      { 
        username: 'Justin Rakenstraw', 
        email: 'jrakenstra@test.com', 
        password: 'justin1234' 
      },
      {
        username: 'Kristen Greene',
        email: 'kgreene@test.com',
        password: 'kristen1234',
      },
      {
        username: 'Steve Ha',
        email: 'sha@test.com',
        password: 'steve1234',
      },
    ],
    { individualHooks: true }
  );
};