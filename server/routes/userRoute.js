import express from "express";
import { register } from "../controllers/userController.js";

const userRouter = express.Router();

// //Route  - "/register"
//Des    - for user registeration
//Access - Public
//Method - POST
//Params - none
//Body   - none
userRouter.post("/register", register)

export default userRouter;