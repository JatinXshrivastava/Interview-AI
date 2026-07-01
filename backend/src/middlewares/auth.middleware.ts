import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
import { tokenBlackListModel } from "../models/tokenBlakclist.model";

declare global {
    namespace Express {
        interface Request {
            username?: string;
            userId?: string;
        }
    }
}
dotenv.config();

interface TokenPayload extends JwtPayload {
    username?: string;
    userId?: string;
}

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = (req as any).cookies.token;
    if (!token) {
        res.status(401).json({
            message: "token not provided"
        })
        return
    }

    const isTokenBlacklisted = await tokenBlackListModel.findOne({token}) ; 

    if(isTokenBlacklisted) {
        res.status(401).json({
            message : "token expired"
        })
        return 
    }

    const jwtSecretKey = process.env.JWT_SECRET;

    if (!jwtSecretKey) {
        res.status(500).json({ message: "Internal server error" })
        return
    }

    try {
        const decoded = jwt.verify(token, jwtSecretKey) as TokenPayload;

        req.username = decoded.username;
        req.userId = decoded.userId;

        next();
    } catch (err) {
        return res.status(401).json({
            message: "Invalid or expired token",
        });
    }
    next();
}