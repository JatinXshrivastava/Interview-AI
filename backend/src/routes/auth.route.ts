import { Router } from "express"; 
import { regiterNewUser } from "../controller/auth.controller";


/**
 * @route POST /api/auth/register 
 * @description Register a new User 
 * @access public 
 */
export const authRouter = Router() 

authRouter.post('/register' , regiterNewUser ) 

