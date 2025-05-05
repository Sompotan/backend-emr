import {Router} from "express";
import {authenticateToken} from "../middleware/auth.middleware.js";
import {
    checkInKunjungan,
    createDoctor, createKunjungan, getAllDoctors, getAllKunjunganAdmin,
    getDetailedUnverifiedPatient, getDoctorById, getKunjunganDetailAdmin,
    getUnverifiedPatient, getVerificationStats,
    getVerifiedPatient, getVerifiedPatientById, updateDokterByAdmin,
    verifyPatient
} from "../controllers/admin.controller.js";
import {authorizeRole} from "../middleware/authroizeRole.middleware.js";

const adminRoutes = Router();

adminRoutes.get(
    '/pasien',
    authenticateToken,
    authorizeRole('admin'),
    getVerifiedPatient
)
adminRoutes.get(
    '/pasien/:id',
    authenticateToken,
    authorizeRole('admin'),
    getVerifiedPatientById
)
adminRoutes.get(
    '/pasien-belum-terverifikasi',
    authenticateToken,
    authorizeRole('admin'),
    getUnverifiedPatient
)
adminRoutes.get(
    '/pasien-belum-terverifikasi/:id',
    authenticateToken,
    authorizeRole('admin'),
    getDetailedUnverifiedPatient
)
adminRoutes.patch(
    '/pasien-belum-terverifikasi/:id',
    authenticateToken,
    authorizeRole('admin'),
    verifyPatient
)

adminRoutes.post(
    '/dokter',
    authenticateToken,
    authorizeRole('admin'),
    createDoctor
)
adminRoutes.get(
    '/dokter',
    authenticateToken,
    authorizeRole('admin'),
    getAllDoctors
)
adminRoutes.get(
    '/dokter/:id',
    authenticateToken,
    authorizeRole('admin'),
    getDoctorById
)

adminRoutes.get(
    '/kunjungan',
    authenticateToken,
    authorizeRole('admin'),
    getAllKunjunganAdmin
)

adminRoutes.post(
    '/kunjungan',
    authenticateToken,
    authorizeRole('admin'),
    createKunjungan
)

adminRoutes.get(
    '/kunjungan/:id',
    authenticateToken,
    authorizeRole('admin'),
    getKunjunganDetailAdmin
)

adminRoutes.patch(
    '/kunjungan/:id/check-in',
    authenticateToken,
    authorizeRole('admin'),
    checkInKunjungan
)

adminRoutes.put(
    '/dokter/:id',
    authenticateToken,
    authorizeRole('admin'),
    updateDokterByAdmin
)

adminRoutes.get(
    '/verification-statistics',
    authenticateToken,
    authorizeRole('admin'),
    getVerificationStats
)

export default adminRoutes;