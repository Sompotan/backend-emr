import {Router} from "express";
import {authenticateToken} from "../middleware/auth.middleware.js";
import {
    checkInKunjungan,
    createDoctor,
    createKunjungan,
    createPatient,
    getAllDoctors,
    getAllKunjunganAdmin, getDashboardOverview,
    getDetailedUnverifiedPatient,
    getDoctorById,
    getKunjunganDetailAdmin, getListOrderObat, getRekamMedisDetailByPasien, getResepObatDetail,
    getRiwayatRekamMedisByPasien, getStatistikDokter,
    getSummaryAntrian,
    getUnverifiedPatient,
    getVerificationStats,
    getVerifiedPatient,
    getVerifiedPatientById,
    updateDokterByAdmin, updateStatusOrderObat,
    verifyPatient
} from "../controllers/admin.controller.js";
import {authorizeRole} from "../middleware/authroizeRole.middleware.js";
import {updateResepObat} from "../controllers/dokter.controller.js";

const adminRoutes = Router();

adminRoutes.get(
    '/dokter/statistik',
    authenticateToken,
    authorizeRole('admin'),
    getStatistikDokter
)

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

adminRoutes.get(
    "/antrian-stats",
    authenticateToken,
    authorizeRole('admin'),
    getSummaryAntrian
)

adminRoutes.post(
    '/pasien',
    authenticateToken,
    authorizeRole('admin'),
    createPatient
)

adminRoutes.get(
    '/pasien/:id/rekam-medis',
    authenticateToken,
    authorizeRole('admin'),
    getRiwayatRekamMedisByPasien
)

adminRoutes.get(
    '/rekam-medis/:rekamMedisId',
    authenticateToken,
    authorizeRole('admin'),
    getRekamMedisDetailByPasien
)

adminRoutes.get(
    '/resep-obat',
    authenticateToken,
    authorizeRole('admin'),
    getListOrderObat
)

adminRoutes.patch(
    '/resep-obat/:id/status',
    authenticateToken,
    authorizeRole('admin'),
    updateStatusOrderObat
)

adminRoutes.get(
    '/resep-obat/:id',
    authenticateToken,
    authorizeRole('admin'),
    getResepObatDetail
)

adminRoutes.get(
    '/dashboard',
    authenticateToken,
    authorizeRole('admin'),
    getDashboardOverview
)

export default adminRoutes;