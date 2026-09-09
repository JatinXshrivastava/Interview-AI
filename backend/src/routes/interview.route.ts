import express from "express" ; 
import { authMiddleware } from "../middlewares/auth.middleware"; 
import { generateInterviewReport } from "../controller/interview.controller";
import { upload } from "../middlewares/file.middleware"

export const interviewRouter = express.Router() ;

/**
 * @route POST /api/interview/ 
 * @description generate a new interview report on the basis of user'self description , resume and job description 
 * @access private  
 */
interviewRouter.post("/", authMiddleware , upload.single("resume") , generateInterviewReport) 