import User from '../models/User';

export const seedUsers = async () => {
  await User.bulkCreate([
    {
      username: 'login1',
      email: 'login1@example.com',
      password: 'password1'
    },
    {
      username: 'login2',
      email: 'login2@example.com',
      password: 'password2'
    }
  ], { individualHooks: true });
};
