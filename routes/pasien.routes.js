import {Router} from "express";
import {
    ajukanVerifikasiData, daftarKunjungan,
    getPasienProfile, getRekamMedis, getRekamMedisById, getRiwayatKunjungan,
    getStatusVerifikasi, updateEmailProfile, updateFotoProfilPasien
} from "../controllers/pasien.controller.js";
import {authenticateToken} from "../middleware/auth.middleware.js";
import {authorizeRole} from "../middleware/authroizeRole.middleware.js";
import {sendEmailOTPVerif, verifyEmailCode} from "../controllers/verifikasi.controller.js";
import {getJadwalPraktek} from "../controllers/pasien.controller.js";

const pasienRoutes = Router();

pasienRoutes.post(
    '/ajukan-verifikasi',
    authenticateToken,
    authorizeRole('pasien'),
    ajukanVerifikasiData
)

pasienRoutes.get(
    '/verifikasi-status',
    authenticateToken,
    authorizeRole('pasien'),
    getStatusVerifikasi
)

pasienRoutes.get(
    '/profil',
    authenticateToken,
    authorizeRole('pasien'),
    getPasienProfile
)

pasienRoutes.post(
    '/verifikasi-email',
    authenticateToken,
    authorizeRole('pasien'),
    sendEmailOTPVerif
)

pasienRoutes.post(
    '/verifikasi-kode',
    authenticateToken,
    authorizeRole('pasien'),
    verifyEmailCode
)

pasienRoutes.patch(
    '/profil',
    authenticateToken,
    authorizeRole('pasien'),
    updateEmailProfile
)

pasienRoutes.post(
    '/kunjungan',
    authenticateToken,
    authorizeRole('pasien'),
    daftarKunjungan
)

pasienRoutes.get(
    '/kunjungan',
    authenticateToken,
    authorizeRole('pasien'),
    getRiwayatKunjungan
)

pasienRoutes.get(
    '/dokter/:id/jadwal-praktek',
    authenticateToken,
    authorizeRole('pasien'),
    getJadwalPraktek
)

pasienRoutes.patch(
    '/update-foto-profil',
    authenticateToken,
    authorizeRole('pasien'),
    updateFotoProfilPasien
)

pasienRoutes.get(
    '/rekam-medis',
    authenticateToken,
    authorizeRole('pasien'),
    getRekamMedis
)

pasienRoutes.get(
    '/rekam-medis/:id',
    authenticateToken,
    authorizeRole('pasien'),
    getRekamMedisById
)

export default pasienRoutes;