import express from "express";
import { login, register } from "../controllers/userController.js";

const userRouter = express.Router();

// //Route  - "/api/user/register"
//Des    - for user registeration
//Access - Public
//Method - POST
//Params - none
//Body   - none
userRouter.post("/register", register)

// //Route  - "/api/user/login"
//Des    - for user registeration
//Access - Public
//Method - POST
//Params - none
//Body   - none
userRouter.post("/login", login)
export default userRouter;