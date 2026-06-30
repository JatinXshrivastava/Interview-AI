import { Request, Response } from "express";
import { userModel } from "../models/user.model";
import { userSchemaZod } from "../zod.schema/user.schema";
import bcrypt from "bcrypt" ; 
import dotenv from "dotenv" ; 
import jwt from "jsonwebtoken" ;


dotenv.config() ; 

/**
 * @name registerNewUser 
 * @description registers a new user , and expects username , email and password 
 * @access public 
 */
export async function regiterNewUser(req: Request, res: Response) {
    const { data, success , error} = userSchemaZod.safeParse(req.body)

    if (!success) {
        res.status(400).json({
            message: "incorrect input" ,
            error : error
        })
        return 
    }

    const userExists = await userModel.findOne({
        $or: [{ username: data.username }, { email: data.email }]
    })

    if (userExists) {
        if(userExists.username == data.username ) {
            res.status(409).json({ message: "User with this username already exists" })
            return
        }else {
            res.status(400).json({ message : "User with this email already exists"}) 
            return 
        }
    }

    const hashedPassword = await bcrypt.hash(data.password, 10)

    const user = await userModel.create({
        username : data.username , 
        email : data.email , 
        password : hashedPassword
    })

    const jwtSecretKey = process.env.JWT_SECRET ; 

    if (!jwtSecretKey) {
        res.status(500).json({ message: "Internal server error" })
        return
    }

    const token = jwt.sign(
        { id : user._id , username : user.username } , 
        jwtSecretKey , 
        { expiresIn : "1d" } 
    )

    res.cookie("token" , token) ; 

    res.status(201).json({
        message : "User registered successfully " , 
        user : {
            id : user._id , 
            username : user.username , 
            email : user.email 
        }
    })
}