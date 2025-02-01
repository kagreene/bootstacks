import type { UserSignup } from '../interfaces/UserSignup';
//import Auth from '../utils/auth';
const signup = async (userInfo: UserSignup) => {
  try {
    const response = await fetch('/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //Authorization: `Bearer ${Auth.getToken()}`,
      },
      body: JSON.stringify(userInfo),
    });
    console.log(response);
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Signup Failed');
    }

    return data;
  } catch (err) {
    console.log('Error from user signup: ', err);
    return Promise.reject('Could not signup');
  }
};

export { signup };