import * as z from "zod" 

export const userSchemaZod = z.object({
    username : z.string().min(3).max(50) ,
    email : z.email() , 
    password : z.string().min(6).max(50) 
})

export const loginSchemaZod = z.object({
    username : z.string().min(3).max(50) ,
    password : z.string().min(6).max(50) 
})