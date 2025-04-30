import "../config/env.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    const now = new Date();
    const offset = 8 * 60 * 60 * 1000;
    const todayWITA = new Date(now.getTime() + offset);
    todayWITA.setUTCHours(0,0,0,0)

    console.log('[CRON] Auto-cancel kunjungan sebelum: ', todayWITA.toISOString());

    const result = await prisma.kunjungan.updateMany({
        where: {
            tanggal_kunjungan: {
                lt: todayWITA
            },
            checkInAt: null,
            status: "Menunggu"
        },
        data: {
            status: "Batal"
        }
    });

    console.log(`[CRON] ${result.count} kunjungan dibatalkan karena tidak check-in.`)
    process.exit(0);
};

main().catch((err) => {
    console.error('[CRON] Error: ', err);
    process.exit(1);
})