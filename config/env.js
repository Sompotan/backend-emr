import { config } from "dotenv";

// Hanya load dotenv jika bukan production (Render akan inject env secara otomatis)
if (process.env.NODE_ENV !== "production") {
    config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });
}

export const {
    PORT,
    NODE_ENV,
    DATABASE_URL,
    DIRECT_URL,
    JWT_SECRET,
    JWT_EXPIRES_IN,
    EMAIL_PASSWORD,
    EMAIL,
} = process.env;
