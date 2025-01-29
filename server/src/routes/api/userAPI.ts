import express, { Request, Response }  from "express";
import { User } from "../../models/index.js";

const router = express.Router();

//method to register user
router.get('/', async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
  
  
});




export { router as userRouter }
