import * as z from "zod" 

export const interviewReportSchemaZod = z.object({
    matchScore : z.number().describe("A score between 0 and 100 indicating how well the candidate matches the job description") ,
    technicalQuestions : z.array(z.object({
        question : z.string().describe("The technical question can be asked in the interview") , 
        intention : z.string().describe("The intention of the interviewer behind asking the technical question") , 
        answer : z.string().describe("How to answer this question , what points to cover , what approach to take etc.")
    })).describe("The technical questions that can be asked in the interview along with the intention of the interviewer and how to answer them") ,
    behaviouralQuestions : z.array(z.object({
        question : z.string().describe("The behavioural question can be asked in the interview") , 
        intention : z.string().describe("The intention of the interviewer behind asking the behavioural question") ,
        answer : z.string().describe("How to answer this question , what points to cover , what approach to take etc.")
    })).describe("The behavioural questions that can be asked in the interview along with the intention of the interviewer and how to answer them") ,
    skillGaps : z.array(z.object({
        skill : z.string().describe("The skill that the candidate is lacking") , 
        severity : z.enum(["low","medium","high"]).describe("The severity of the skill gap" )
    })).describe("List of skills that the candidate is lacking along with the severity of the skill gap") , 
    preparationPlan : z.array(z.object({
        day : z.number().describe("The day of the preparation plan") ,
        focus : z.string().describe("The main focus of this day in the preparation plan, eg : Data Structures and Algorithms , System Design , Behavioural Questions etc.") ,
        tasks : z.array(z.string()).describe("The tasks to be done on this day in the preparation plan , eg : Read a book , Watch a video , Solve a problem etc.")
    })).describe("The preparation plan for the candidate to prepare for the interview, with day wise focus and tasks to be done")
})
