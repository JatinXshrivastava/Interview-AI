import { Router } from "express"; 
import { regiterNewUser , loginUserController , logoutUserController, getMeController} from "../controller/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export const authRouter = Router() 

/**
 * @route POST /api/auth/register 
 * @description Register a new User 
 * @access public 
 */
authRouter.post('/register' , regiterNewUser ) 

/**
 * @route POST /api/auth/login 
 * @description login an existing user  
 * @access public 
 */
authRouter.post('/login' , loginUserController) 

/**
 * @route GET /api/auth/logout 
 * @description logout the current user  
 * @access public 
 */
authRouter.get('/logout' , logoutUserController ) 

/**
 * @route GET /api/auth/get-me 
 * @description fetches the data of the user 
 * @access private
 */
authRouter.get('/get-me' , authMiddleware , getMeController)