import { PrismaClient } from "@prisma/client";
import generateOTP from "../utils/generateOTP.js";
import {sendEmailKode} from "../utils/email.js";

const prisma = new PrismaClient();

export const sendEmailOTPVerif = async (req, res) => {
    const { target } = req.body;

    if (!target) {
        return res.status(400).json({error: "Email baru wajib diisi"})
    }

    try {

        const kode = generateOTP();

        await prisma.verifikasiKode.deleteMany({
            where: {
                expiresAt: { lt: new Date() }
            }
        })

        await prisma.verifikasiKode.create({
            data: {
                tipe: "email",
                target,
                kode,
                expiresAt: new Date(Date.now() + 5 * 60 *1000)
            }
        });

        console.log(`[DEBUG] Kode OTP Email untuk ${target}: ${kode}`); //sementara pake ini dulu supaya nggk banyak traffic di email

        // await sendEmailKode(target, kode)

        return res.status(200).json({
            message: "Kode verifikasi telah dikirim ke email",
        })

    } catch (error) {
        console.error("[ERROR sendEmailOTPVerif]", error);
        res.status(500).json({error: "Gagal mengirim kode verifikasi email"})
    }
}

export const verifyEmailCode = async (req, res) => {
    const { target, kode } = req.body;

    if(!target || !kode) {
        return res.status(400).json({ error: "Target dan Kode wajib diisi" })
    }

    try {
        const record = await prisma.verifikasiKode.findFirst({
            where: {
                target,
                kode,
                expiresAt: {
                    gte: new Date()
                }
            },
            orderBy: {
                createdAt: "desc"
            }
        });

        if(!record) {
            return res.status(400).json({
                error: "Kode tidak valid atau sudah kedaluwarsa"
            })
        }

        return res.status(200).json({
            message: "Kode Verifikasi Valid"
        })

    } catch (error) {
        console.error("[ERROR verifyEmailCode]", error);
        res.status(500).json({
            error: "Terjadi kesalahan saat verifikasi kode"
        })
    }
}