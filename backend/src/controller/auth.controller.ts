import { Request, Response } from "express";
import { userModel } from "../models/user.model";
import { tokenBlackListModel } from "../models/tokenBlakclist.model";
import { userSchemaZod, loginSchemaZod } from "../zod.schema/user.schema";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";


dotenv.config();

/**
 * @name registerNewUser 
 * @description registers a new user , and expects username , email and password 
 * @access public 
 */
export async function regiterNewUser(req: Request, res: Response) {
    const { data, success, error } = userSchemaZod.safeParse(req.body)

    if (!success) {
        res.status(400).json({
            message: "incorrect input",
            error: error
        })
        return
    }

    const userExists = await userModel.findOne({
        $or: [{ username: data.username }, { email: data.email }]
    })

    if (userExists) {
        if (userExists.username == data.username) {
            res.status(409).json({ message: "User with this username already exists" })
            return
        } else {
            res.status(400).json({ message: "User with this email already exists" })
            return
        }
    }

    const hashedPassword = await bcrypt.hash(data.password, 10)

    const user = await userModel.create({
        username: data.username,
        email: data.email,
        password: hashedPassword
    })

    const jwtSecretKey = process.env.JWT_SECRET;

    if (!jwtSecretKey) {
        res.status(500).json({ message: "Internal server error" })
        return
    }

    const token = jwt.sign(
        { id: user._id, username: user.username },
        jwtSecretKey,
        { expiresIn: "1d" }
    )

    res.cookie("token", token);

    res.status(201).json({
        message: "User registered successfully ",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })
}

/**
 * @name loginUserController 
 * @description login a current user and expects username and password 
 * @access public 
 */
export async function loginUserController(req: Request, res: Response) {
    const { data, success, error } = loginSchemaZod.safeParse(req.body)

    if (!success) {
        res.status(400).json({
            message: "incorrect input",
            error: error
        })
        return
    }

    const userExists = await userModel.findOne({ username: data.username });

    if (!userExists) {
        res.status(400).json({
            message: "No user found with this username"
        })
        return
    }
    if (!userExists.password) {
        res.status(400).json({
            message: "Enter the password"
        })
        return
    }
    const isPasswordValid = await bcrypt.compare(data.password, userExists.password);

    if (!isPasswordValid) {
        res.status(400).json({
            message: "Invalid password"
        })
        return
    }

    const jwtSecretKey = process.env.JWT_SECRET;

    if (!jwtSecretKey) {
        res.status(500).json({ message: "Internal server error" })
        return
    }

    const token = jwt.sign(
        { id: userExists._id, username: userExists.username },
        jwtSecretKey,
        { expiresIn: "1d" }
    )

    res.cookie("token", token);

    res.status(200).json({
        message: "User logged in successfully",
        user: {
            id: userExists._id,
            username: userExists.username,
            email: userExists.email
        }
    })
}

/**
 * @name loginUserController 
 * @description login a current user and expects username and password 
 * @access public 
 */
export async function logoutUserController(req: Request, res: Response) {
    const token = (req as any).cookies.token;
    if (!token) {
        res.status(401).json({
            message: "please login before logging out"
        })
        return
    }
    await tokenBlackListModel.create({ token })
    res.clearCookie("token")
    res.status(200).json({
        messsage: "logout successfull"
    })
}