import nodemailer from "nodemailer";

import {EMAIL, EMAIL_PASSWORD} from "../config/env.js";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL,
        pass: EMAIL_PASSWORD
    }
});

export const sendEmailKode = async (to, kode) => {
    const mailOptions = {
        from: EMAIL,
        to,
        subject: "Kode Verifikasi Email",
        text: `Kode verifikasi kamu adalah: ${kode}`
    };

    await transporter.sendMail(mailOptions)
}