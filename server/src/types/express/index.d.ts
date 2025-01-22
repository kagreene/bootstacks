// extend the Express Request object to include a user object to use in auth-routes
declare namespace Express {
  interface Request {
    user?: {
      username: string;
    };
  }
}
