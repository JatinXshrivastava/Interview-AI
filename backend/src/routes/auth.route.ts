import { Router } from "express"; 
import { regiterNewUser , loginUserController } from "../controller/auth.controller";


/**
 * @route POST /api/auth/register 
 * @description Register a new User 
 * @access public 
 */
export const authRouter = Router() 

authRouter.post('/register' , regiterNewUser ) 
authRouter.post('/login' , loginUserController) 
