import jwt from "jsonwebtoken";
import {JWT_SECRET} from "../config/env.js";

export const authenticateToken = (req, res, next) => {
    let token;

    if (req.headers.authorization?.startsWith('Bearer ')) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.token) {
        token = req.cookies.token;
    }

    if(!token) {
        return res.status(401).json({error: "Token tidak ditemukan"});
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({error: "Token tidak valid atau kedaluwarsa"});
    }
}