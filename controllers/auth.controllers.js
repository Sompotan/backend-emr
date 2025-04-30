import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import {JWT_SECRET, JWT_EXPIRES_IN, NODE_ENV} from "../config/env.js";



const prisma = new PrismaClient();

export const register = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        return res.status(400).json({error: "Email dan Password Wajib diisi."});
    }

    try {

        const existingUser = await prisma.user.findUnique({ where: {email}})
        if(existingUser) {
            return res.status(409).json({error: "Email sudah terdaftar"});
        }

        // hash password
        const hashed = await bcrypt.hash(password, 10)

        // simpan user baru
        const user = await prisma.user.create({
            data: {
                email,
                passwordHash: hashed,
                role: "pasien",
                isVerified: 'belum'
            }
        });

        const token = jwt.sign(
            {
                userId: user.id,
                role: user.role
            },
            JWT_SECRET,
            { expiresIn: JWT_EXPIRES_IN }
        );

        return res.status(201).json({
            message: "Akun berhasil dibuat. Anda sudah login.",
            token,
            userId: user.id,
        })

    } catch (e) {
        console.error(e);
        return res.status(500).json({error: "Terjadi Kesalahan saat mendaftarkan akun"});
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        return res.status(400).json({error: "Email dan Password Wajib diisi."});
    }

    try {

        const user = await prisma.user.findUnique({
            where: {email},
            select: {
                id: true,
                email: true,
                passwordHash: true,
                role: true,
                isVerified: true
            }
        })

        if(!user) {
            return res.status(401).json({error: "Email tidak ditemukan"});
        }

        const isValid = await bcrypt.compare(password, user.passwordHash);
        if(!isValid) {
            return res.status(401).json({error: "Password Salah."});
        }

        const token = jwt.sign(
            {
                userId: user.id,
                role: user.role
            },
            JWT_SECRET,
            { expiresIn: JWT_EXPIRES_IN }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({
            message: "Login berhasil",
            token,
            userId: user.id,
            role: user.role,
            isVerified: user.isVerified
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Terjadi Kesalahan saat login" })
    }
}

export const oauthSync = async (req, res) => {
    const {email, supabaseId, password} = req.body;

    if(!email || !supabaseId) {
        return res.status(400).json({error: "Email dan Supabase ID wajib disediakan"});
    }

    try {
        let user = await prisma.user.findUnique({ where: {email}})

        if(!user) {
            user = await prisma.user.create({
                data: {
                    email,
                    role: "pasien",
                    isVerified: false
                }
            })
        }

        const token = jwt.sign(
            {
                userId: user.id,
                role: user.role
            },
            JWT_SECRET,
            { expiresIn: JWT_EXPIRES_IN }
        );

        return res.status(200).json({
            message: "Login OAuth berhasil disinkronisasikan",
            userId: user.id,
            role: user.role,
            token
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Terjadi Kesalahan saat sinkronisasi OAuth"});
    }
}

export const logout = async (req, res) => {
    console.log('[LOGOUT] Cookie token:', req.cookies.token);

    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({error: "Token tidak ditemukan"});
    }


    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
    })



    return res.status(200).json({
        message: "Logout berhasil"
    })
}